# AURON Forum — CI/CD Architecture & Operations Guide

This document outlines the Continuous Integration and Continuous Deployment (CI/CD) architecture for the **AURON Technical Forum** web application.

---

## 1. Architecture Overview

The AURON deployment pipeline uses a decoupled, production-safe model combining **GitHub Actions** and **Vercel**:

```
Developer / Antigravity AI
        │
        ├── Push / Pull Request ─────────┐
        ▼                                 ▼
┌───────────────────────┐       ┌───────────────────────┐
│     GitHub Actions    │       │        Vercel         │
│      (AURON CI)       │       │     (Deployments)     │
├───────────────────────┤       ├───────────────────────┤
│ • Dependency caching  │       │ • Preview Deployment  │
│ • Reproducible npm ci │       │   (on Pull Requests)  │
│ • ESLint check        │       │ • Production Deploy   │
│ • TypeScript check    │       │   (on pushes to main) │
│ • Static page build   │       │ • Edge CDN Hosting    │
└───────────────────────┘       └───────────────────────┘
```

- **GitHub Actions (CI)**: Validates code quality, linting standards, TypeScript type integrity, and production build artifact generation on every commit and pull request.
- **Vercel (CD)**: Automatically deploys production builds to [https://auron-iota.vercel.app/](https://auron-iota.vercel.app/) and provides preview environments for pull requests.

---

## 2. CI Workflow Details (`.github/workflows/ci.yml`)

### Triggers
- **Push events**:
  - `main` (production branch)
  - `dev*` (development branches)
  - `feature/**` (feature branches)
  - `fix/**` (bugfix branches)
- **Pull Request events**:
  - Targets targeting `main`

### Concurrency
```yaml
concurrency:
  group: auron-ci-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
Superseded runs on active branches or PR updates are automatically cancelled to save CI minutes and avoid redundant work.

### Quality Checks Executed
1. **Clean Checkout**: Checks out the repository using `actions/checkout@v4`.
2. **Node.js Environment**: Sets up Node.js 22 LTS with `actions/setup-node@v4` and configures caching for `npm`.
3. **Reproducible Dependency Installation**: Runs `npm ci` using `package-lock.json` to guarantee identical dependency trees.
4. **Code Linting**: Executes `npm run lint` (`eslint`) enforcing Next.js Core Web Vitals and TypeScript lint rules.
5. **Type Verification & Static Build**: Executes `npm run build` (`next build`), which executes full TypeScript type checking and generates static output into `out/`.

---

## 3. Continuous Deployment (Vercel)

### Production Deployment
- **Trigger**: Direct push or merged pull request to the `main` branch.
- **Production URL**: [https://auron-iota.vercel.app/](https://auron-iota.vercel.app/)
- **Build Output**: Static HTML export (`output: "export"` configured in `next.config.ts`).

### Preview Deployments
- When a pull request is created against `main`, Vercel automatically generates a unique Preview URL (e.g., `https://auron-git-<branch>-auronsbjitmr-technical.vercel.app`).
- Allows testing changes in an isolated production-equivalent environment prior to merging.

---

## 4. Environment Variables & Secrets

- **Build-time Secrets**: None required. All core features (including EmailJS configurations) provide sensible in-code fallbacks.
- **Optional Runtime Secrets**:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
  - `NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_REGISTRATION_TEMPLATE_ID`
- **Security Principles**:
  - Secrets are **never** committed to version control.
  - No secret values are printed in GitHub Actions or Vercel build logs.
  - To override defaults, configure them securely in the **Vercel Dashboard** under **Project Settings > Environment Variables**.

---

## 5. Branch Protection & Deployment Gating

To enforce that code must pass CI checks before being merged into `main`:

1. Navigate to the GitHub repository: `https://github.com/auronsbjitmr-technical/auron/settings/branches`.
2. Click **Add rule** (or edit rule for `main`).
3. Enable **Require status checks to pass before merging**.
4. Search for and select the status check: **`Code Quality & Build Checks`** (from `AURON CI`).
5. (Recommended) Enable **Require branches to be up to date before merging**.
6. Save changes.

*Note: With direct GitHub-Vercel integration, direct pushes to `main` trigger both CI and Vercel concurrently. Using pull requests with branch protection guarantees that code is validated by CI before reaching production.*

---

## 6. Monitoring & Logs

### Viewing GitHub Actions Logs
1. Open the GitHub repository: `https://github.com/auronsbjitmr-technical/auron/actions`.
2. Select the **AURON CI** workflow from the left sidebar.
3. Click on the relevant workflow run to inspect step-by-step logs for `npm ci`, `npm run lint`, and `npm run build`.

### Viewing Vercel Deployment Logs
1. Navigate to the [Vercel Dashboard](https://vercel.com/dashboard).
2. Open the **auron** project.
3. Click the **Deployments** tab.
4. Click on any active or completed deployment to view build logs, function logs, and deployment details.

---

## 7. Troubleshooting Failed Builds

| Issue | Cause | Resolution |
| :--- | :--- | :--- |
| **Lint Check Failure** | ESLint rule violation or unescaped character. | Run `npm run lint` locally and fix the reported lines. |
| **Type Check Failure** | TypeScript type mismatch in TS/TSX files. | Run `npm run build` locally to see the exact TypeScript compiler error and file line number. |
| **Dependency Failure (`npm ci`)** | Mismatch between `package.json` and `package-lock.json`. | Run `npm install` locally to update `package-lock.json`, test locally, and commit the updated lockfile. |

---

## 8. Rollback Procedure

If an issue is detected in production:

### Instant Rollback (via Vercel Dashboard — Recommended)
1. Go to the **Vercel Project Dashboard** > **Deployments**.
2. Locate the last known good deployment.
3. Click the **three dots (`...`)** menu on the right of that deployment.
4. Select **Instant Rollback** (or **Promote to Production**).
5. Vercel immediately redirects production domain traffic to the chosen build without triggering a rebuild.

### Git Rollback (via Repository)
1. In your local repository:
   ```bash
   git revert HEAD
   git push origin main
   ```
2. GitHub Actions CI will validate the reversion, and Vercel will build and deploy the reverted state to production.
