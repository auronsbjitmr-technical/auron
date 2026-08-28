"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function scrollToHash(lenis: Lenis) {
  const hash = window.location.hash;
  if (!hash) return;
  const target = document.getElementById(hash.slice(1));
  if (target) {
    setTimeout(() => {
      lenis.scrollTo(target, { offset: -90, duration: 1.2 });
    }, 100);
  }
}

export default function GlobalScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
    }

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const win = window as unknown as { lenisInstance: Lenis | null };
    win.lenisInstance = lenis;

    if (hash) {
      scrollToHash(lenis);
    }

    lenis.on("scroll", ScrollTrigger.update);

    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);

    const elements = gsap.utils.toArray(".reveal-element");
    const tweens: gsap.core.Tween[] = [];

    elements.forEach((el: unknown) => {
      const element = el as HTMLElement;
      const rect = element.getBoundingClientRect();
      const isAboveFold = rect.top < window.innerHeight * 0.85;

      if (isAboveFold) {
        // Above-the-fold elements stay immediately visible to protect LCP & FCP
        gsap.set(element, { y: 0, opacity: 1 });
      } else {
        // Below-the-fold elements animate into view on scroll
        gsap.set(element, { y: 20, opacity: 0 });

        const t = gsap.to(
          element,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
        tweens.push(t);
      }
    });

    // Parallax scrolling decorations
    const glows = gsap.utils.toArray(".gold-glow");
    glows.forEach((glow: unknown) => {
      const glowEl = glow as HTMLElement;
      const t = gsap.to(glowEl, {
        yPercent: -20,
        scrollTrigger: {
          trigger: glowEl,
          scrub: true,
        },
      });
      tweens.push(t);
    });

    return () => {
      lenis.destroy();
      win.lenisInstance = null;
      tweens.forEach((t) => {
        if (t.scrollTrigger) t.scrollTrigger.kill();
        t.kill();
      });
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      const lenis = (window as unknown as { lenisInstance: Lenis | null }).lenisInstance;
      if (lenis) {
        scrollToHash(lenis);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}
