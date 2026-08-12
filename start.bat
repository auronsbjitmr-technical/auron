@echo off
setlocal EnableExtensions EnableDelayedExpansion
title AURON FORUM - Next.js Development Environment
cls

rem Enable ANSI coloring natively in Windows Terminal
reg add HKCU\Console /v VirtualTerminalLevel /t REG_DWORD /d 1 /f >nul 2>&1

rem Dynamically capture the ESC character
for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem & echo off"') do set "ESC=%%b"
if "!ESC!"=="" set "ESC= "

rem Colors
set "Cyan=!ESC![36m"
set "White=!ESC![37m"
set "Green=!ESC![32m"
set "Yellow=!ESC![33m"
set "Red=!ESC![31m"
set "Reset=!ESC![0m"
set "Bold=!ESC![1m"
set "Dim=!ESC![2m"

if not defined PORT set "PORT=3000"

echo !Cyan!============================================================!Reset!
echo !Bold!!Cyan!      _   _   _ ___   ___  _  _ !Reset!
echo !Bold!!Cyan!     /_\ ^| ^| ^| ^| _ \ / _ \^| ^\^| ^|!Reset!
echo !Bold!!Cyan!    / _ \^| ^|_^| ^|   /^| (_) ^| .` ^|!Reset!
echo !Bold!!Cyan!   /_/ \_\\___/^|_^|_^\ \___/^|_^|^\_!Reset!
echo.
echo !Bold!!White!                 AURON FORUM!Reset!
echo !Dim!!White!         SBJITMR TECHNICAL COMMUNITY!Reset!
echo !Cyan!============================================================!Reset!
echo.
echo !Bold!!White!SYSTEM STATUS:!Reset!
echo   SYSTEM      : !Cyan!AURON LOCAL ENVIRONMENT!Reset!
echo   FRAMEWORK   : !Cyan!NEXT.JS 16 (APP ROUTER)!Reset!
echo   MODE        : !Cyan!DEVELOPMENT!Reset!
echo   PORT        : !Cyan!%PORT%!Reset!
echo !Cyan!============================================================!Reset!
echo.
echo !Bold!!White!SYSTEM BOOT SEQUENCE:!Reset!

rem Check Node.js
<nul set /p "=[...] Checking Node.js environment..."
node -v >nul 2>&1
if !errorlevel! neq 0 (
    echo !ESC![1G[!Red!FAIL!Reset!] Node.js was not detected on your system.
    echo.
    echo !Yellow![SUGGESTION] Please install Node.js from https://nodejs.org/!Reset!
    echo            and ensure it is added to your system PATH.
    echo.
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('node -v') do set "NODE_VER=%%v"
echo !ESC![1G[!Green! OK !Reset!] Node.js detected: !Bold!!White!%NODE_VER%!Reset!

rem Check npm
<nul set /p "=[...] Checking npm package manager..."
call npm -v >nul 2>&1
if !errorlevel! neq 0 (
    echo !ESC![1G[!Red!FAIL!Reset!] npm was not detected on your system.
    echo.
    echo !Yellow![SUGGESTION] npm is usually bundled with Node.js. Please reinstall!Reset!
    echo            Node.js or fix your system environment variables.
    echo.
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('call npm -v') do set "NPM_VER=%%v"
echo !ESC![1G[!Green! OK !Reset!] npm detected:     !Bold!!White!v%NPM_VER%!Reset!

rem Verify Dependencies
<nul set /p "=[...] Verifying project dependencies..."
if not exist "node_modules\" (
    echo !ESC![1G[!Yellow!WARN!Reset!] node_modules folder is missing.
    echo [BOOT] Installing dependencies via npm...
    echo.
    call npm install
    if !errorlevel! neq 0 (
        echo.
        echo [!Red!FAIL!Reset!] npm install failed. Please check your network connection.
        pause
        exit /b 1
    )
    echo.
    echo [!Green! OK !Reset!] Dependencies installed successfully.
) else (
    echo !ESC![1G[!Green! OK !Reset!] node_modules directory exists.
)

echo.
echo [BOOT] Preparing development server...
<nul set /p "=[--------------------]   0%%"
for /L %%x in (1,1,150000) do rem
<nul set /p "=!ESC![1G[#####---------------]  25%%"
for /L %%x in (1,1,150000) do rem
<nul set /p "=!ESC![1G[##########----------]  50%%"
for /L %%x in (1,1,150000) do rem
<nul set /p "=!ESC![1G[###############-----]  75%%"
for /L %%x in (1,1,150000) do rem
<nul set /p "=!ESC![1G[####################] 100%%"
echo.
echo.

echo !Cyan!============================================================!Reset!
echo !Bold!!Green!                    AURON SYSTEM ONLINE!Reset!
echo !Cyan!============================================================!Reset!
echo.
echo   Local:   !Bold!!White!http://localhost:%PORT%!Reset!
echo            !Dim!Ctrl + Click to open!Reset!
echo.
echo   Opening AURON in your default browser...
echo.
echo !Cyan!============================================================!Reset!
echo.

rem Launch the silent background readiness checker that auto-opens the browser
start /b cmd /c "for /L %%i in (1,1,60) do ( curl -s -I http://localhost:%PORT% >nul 2>&1 && ( start http://localhost:%PORT% & exit ) || ( ping -n 2 127.0.0.1 >nul ) )"

rem Start Next.js development server
npm run dev
if !errorlevel! neq 0 (
    echo.
    echo [!Red!FAIL!Reset!] AURON development server failed to start or exited with an error.
    pause
    exit /b !errorlevel!
)
