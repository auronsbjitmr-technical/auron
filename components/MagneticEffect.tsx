"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function MagneticEffect() {
  useEffect(() => {
    const isMobileOrTouch =
      window.innerWidth <= 1024 ||
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;
    if (isMobileOrTouch) return;

    const magneticElements = document.querySelectorAll(".magnetic-element");
    const magneticCleanups: (() => void)[] = [];

    magneticElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const onMove = (e: MouseEvent) => {
        const rect = htmlEl.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(htmlEl, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: "power2.out" });
      };

      const onLeave = () => {
        gsap.to(htmlEl, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      };

      htmlEl.addEventListener("mousemove", onMove);
      htmlEl.addEventListener("mouseleave", onLeave);

      magneticCleanups.push(() => {
        htmlEl.removeEventListener("mousemove", onMove);
        htmlEl.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      magneticCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
