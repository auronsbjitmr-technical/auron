/* eslint-disable */
"use client";


import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface EventItem {
  id: string;
  name: string;
}

interface CertificatesClientProps {
  events: EventItem[];
}

interface Participant {
  name: string;
  usn: string;
  certificate: string;
}

interface CertificateConfig {
  fontFamily?: string;
  fontSize?: number;
  textColor?: string;
  fontWeight?: string;
  textX?: number;
  textY?: number;
  textAlign?: string;
  textBaseline?: string;
  maxWidth?: number;
  shadow?: boolean;
}

interface EventData {
  eventName: string;
  certificateConfig?: CertificateConfig;
  participants: Participant[];
}

// Particle class for background canvas
class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;

  constructor(x: number, y: number, dX: number, dY: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.directionX = dX;
    this.directionY = dY;
    this.size = size;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(canvas: HTMLCanvasElement, mouse: { x: number | null; y: number | null; radius: number }) {
    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius;
        this.x -= (dx / distance) * force * 15;
        this.y -= (dy / distance) * force * 15;
      }
    }

    this.x += this.directionX;
    this.y += this.directionY;
  }
}

export default function CertificatesClient({ events }: CertificatesClientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [usn, setUsn] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [loading, setLoading] = useState(false);

  // Filter events to exclude Cyber Hunt from the frontend list
  const visibleEvents = events.filter((e) => e.id !== "cyber-hunt");

  // Custom Dropdown States
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    studentName: string;
    eventName: string;
    certificateType: string;
    dataUrl: string;
    naturalWidth: number;
    naturalHeight: number;
  } | null>(null);

  // Background Particles (Optimized for desktop only to eliminate mobile CPU throttling)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    const resizeCanvas = () => {
      if (window.innerWidth <= 768) {
        stopAnimation();
        return;
      }
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const heroSection = document.getElementById("certificates-portal");
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
      heroSection.addEventListener("mouseleave", handleMouseLeave);
    }

    const initParticles = () => {
      particlesArray = [];
      const divisor = 12000;
      const minP = 30;
      const maxP = 100;
      const n = Math.min(Math.max(Math.floor((canvas.width * canvas.height) / divisor), minP), maxP);
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const color = isLight ? "rgba(13, 71, 161, 0.16)" : "rgba(59, 156, 255, 0.22)";

      for (let i = 0; i < n; i++) {
        const size = Math.random() * 2 + 1.2;
        particlesArray.push(
          new Particle(
            Math.random() * (canvas.width - size * 2) + size,
            Math.random() * (canvas.height - size * 2) + size,
            Math.random() * 0.4 - 0.2,
            Math.random() * 0.4 - 0.2,
            size,
            color
          )
        );
      }
    };

    const connectParticles = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 130) {
            const op = 1 - distance / 130;
            ctx.strokeStyle = isLight
              ? `rgba(13, 71, 161, ${op * 0.08})`
              : `rgba(59, 156, 255, ${op * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    let frameId: number | null = null;
    let frameCount = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => {
        p.update(canvas, mouse);
        p.draw(ctx);
      });
      frameCount++;
      if (frameCount % 2 === 0) connectParticles();
      frameId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      });
    }, { threshold: 0.05 });

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    intersectionObserver.observe(canvas);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.attributeName === "data-theme") initParticles();
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      stopAnimation();
      intersectionObserver.disconnect();
      observer.disconnect();
      if (heroSection) {
        heroSection.removeEventListener("mousemove", handleMouseMove);
        heroSection.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Magnetic Snapping Effect for Buttons
  useEffect(() => {
    if (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches) return;
    const magneticElements = document.querySelectorAll(".magnetic-element");
    const cleanups: (() => void)[] = [];

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

      cleanups.push(() => {
        htmlEl.removeEventListener("mousemove", onMove);
        htmlEl.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [successData, errorMsg, loading]);

  // Card Hover Tilting (Desktop only - eliminates synchronous layout reflows on mobile touch)
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -((y - rect.height / 2) / rect.height) * 8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleCardMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
    }
  };

  // Click-away listener to close custom dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Keyboard navigation item scrolling adjustment
  useEffect(() => {
    if (isOpen && focusedIndex !== null) {
      const activeEl = document.getElementById(`event-item-${visibleEvents[focusedIndex].id}`);
      const listEl = document.getElementById("cert-event-list");
      if (activeEl && listEl) {
        const listRect = listEl.getBoundingClientRect();
        const elRect = activeEl.getBoundingClientRect();
        
        if (elRect.bottom > listRect.bottom) {
          listEl.scrollTop += (elRect.bottom - listRect.bottom) + 4;
        } else if (elRect.top < listRect.top) {
          listEl.scrollTop -= (listRect.top - elRect.top) + 4;
        }
      }
    }
  }, [focusedIndex, isOpen, visibleEvents]);

  const handleSelect = (eventId: string) => {
    setSelectedEvent(eventId);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          const currentIdx = visibleEvents.findIndex(event => event.id === selectedEvent);
          setFocusedIndex(currentIdx >= 0 ? currentIdx : 0);
        } else if (focusedIndex !== null && focusedIndex >= 0 && focusedIndex < visibleEvents.length) {
          handleSelect(visibleEvents[focusedIndex].id);
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          const currentIdx = visibleEvents.findIndex(event => event.id === selectedEvent);
          setFocusedIndex(currentIdx >= 0 ? currentIdx : 0);
        } else {
          setFocusedIndex((prev) => {
            const nextIdx = prev === null ? 0 : prev + 1;
            return nextIdx >= visibleEvents.length ? 0 : nextIdx;
          });
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          const currentIdx = visibleEvents.findIndex(event => event.id === selectedEvent);
          setFocusedIndex(currentIdx >= 0 ? currentIdx : visibleEvents.length - 1);
        } else {
          setFocusedIndex((prev) => {
            const nextIdx = prev === null ? visibleEvents.length - 1 : prev - 1;
            return nextIdx < 0 ? visibleEvents.length - 1 : nextIdx;
          });
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // Certificate Form Submission & Rendering Logic
  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessData(null);

    // STEP 1
    console.log("Generate button clicked");

    // STEP 2
    console.log(`Selected Event: ${selectedEvent}`);

    // STEP 3
    console.log(`USN: ${usn}`);

    if (!selectedEvent || !usn.trim()) {
      setErrorMsg("Please select an event and enter your USN.");
      return;
    }

    setLoading(true);

    // STEP 4
    const dataJsonUrl = `/certificates/${selectedEvent}/data.json`;
    console.log(`Loading /public/certificates/${selectedEvent}/data.json`);
    let data: EventData;
    try {
      const res = await fetch(dataJsonUrl);
      if (!res.ok) {
        throw new Error(`HTTP status: ${res.status}`);
      }
      data = await res.json();
    } catch (err: any) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.error("Failure occurred while: Loading JSON", err);
      setErrorMsg(`Certificate data unavailable. Details: ${errMsg}`);
      setLoading(false);
      return;
    }

    // STEP 5
    const targetUSN = usn.trim().toUpperCase();
    const participant = data.participants.find(
      (p) => p.usn.toUpperCase() === targetUSN
    );

    if (!participant) {
      console.log("Participant Not Found");
      console.warn(`Failure occurred while: Finding USN. Target USN "${usn.trim()}" not found in participants list.`);
      setErrorMsg("No certificate found for this USN.");
      setLoading(false);
      return;
    }
    console.log(`Participant Found: ${participant.name}`);

    // STEP 6
    const certType = participant.certificate;
    const imageUrl = `/certificates/${selectedEvent}/${certType}.png`;
    const mockPublicPath = `/public/certificates/${selectedEvent}/${certType}.png`;
    console.log(`Template Path: ${mockPublicPath}`);

    // STEP 7
    console.log(`Attempting to load template image: ${imageUrl}`);
    const img = new window.Image();
    const candidateUrls = [
      imageUrl,
      `/certificates/${selectedEvent}/${certType}-certificate.png`,
      `/certificates/${selectedEvent}/Particiaption certificate.png`,
      `/certificates/${selectedEvent}/participation certificate.png`,
      `/certificates/${selectedEvent}/certificate.png`,
    ];

    let imageLoaded = false;
    for (const url of candidateUrls) {
      try {
        await new Promise<void>((resolve, reject) => {
          img.onload = () => {
            console.log(`Image successfully loaded from: ${url}`);
            resolve();
          };
          img.onerror = (errEvent) => {
            reject(new Error(`Failed to load image resource at path: ${url}`));
          };
          img.src = url;
        });
        imageLoaded = true;
        break;
      } catch {
        // try next candidate
      }
    }

    if (!imageLoaded) {
      console.error("Failure occurred while: Loading certificate template");
      setErrorMsg(`Certificate template missing. Details: Failed to load image resource at path: ${imageUrl}`);
      setLoading(false);
      return;
    }

    // STEP 8
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    try {
      canvas = document.createElement("canvas");
      console.log("Canvas Created");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Could not acquire 2D canvas context.");
      }
      ctx = context;
    } catch (err: any) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.error("Failure occurred while: Canvas Creation", err);
      setErrorMsg(`Failed to initialize drawing canvas. Details: ${errMsg}`);
      setLoading(false);
      return;
    }

    // Loading Config
    let renderConfig: CertificateConfig = {};
    const typeSpecificConfigUrl = `/certificates/${selectedEvent}/${certType}-render-config.json`;
    const genericConfigUrl = `/certificates/${selectedEvent}/render-config.json`;

    try {
      console.log(`Attempting to load type-specific config: ${typeSpecificConfigUrl}`);
      const configRes = await fetch(typeSpecificConfigUrl);
      if (configRes.ok) {
        renderConfig = await configRes.json();
        console.log(`Successfully loaded type-specific config: ${typeSpecificConfigUrl}`);
      } else {
        console.warn(`Type-specific config not found (HTTP ${configRes.status}). Falling back to generic config.`);
        const genericRes = await fetch(genericConfigUrl);
        if (genericRes.ok) {
          renderConfig = await genericRes.json();
          console.log(`Successfully loaded generic config: ${genericConfigUrl}`);
        } else {
          throw new Error(`Failed to load both type-specific and generic configs. Generic HTTP status: ${genericRes.status}`);
        }
      }
    } catch (err) {
      console.warn("Warning occurred while loading rendering configurations. Proceeding with defaults.", err);
    }

    // Font setup
    const fontFamily = renderConfig.fontFamily || "Cinzel";
    const fontSize = renderConfig.fontSize !== undefined ? renderConfig.fontSize : 72;
    const textColor = renderConfig.textColor || "#0d47a1";
    const fontWeight = renderConfig.fontWeight || "bold";
    const textAlign = (renderConfig.textAlign || "center") as CanvasTextAlign;
    const textBaseline = (renderConfig.textBaseline || "middle") as CanvasTextBaseline;

    let fontLoaded = false;
    if (fontFamily && fontFamily !== "sans-serif" && fontFamily !== "serif" && fontFamily !== "monospace" && fontFamily !== "Cinzel") {
      try {
        const isLoaded = document.fonts.check(`12px "${fontFamily}"`);
        if (isLoaded) {
          fontLoaded = true;
        }
      } catch (e) {
        console.warn("Error checking font availability, attempting load:", e);
      }

      if (!fontLoaded) {
        // Try loading .ttf extension
        try {
          const fontUrlTtf = `/certificates/${selectedEvent}/${fontFamily}.ttf`;
          const fontTtf = new FontFace(fontFamily, `url(${fontUrlTtf})`);
          console.log(`Attempting to load TTF font from: ${fontUrlTtf}`);
          const loadedFont = await fontTtf.load();
          document.fonts.add(loadedFont);
          await document.fonts.ready;
          fontLoaded = true;
          console.log(`Successfully loaded TTF font: ${fontFamily}`);
        } catch (errTtf) {
          console.warn("Failed to load TTF, trying OTF format...", errTtf);
          
          // Try loading .otf extension
          try {
            const fontUrlOtf = `/certificates/${selectedEvent}/${fontFamily}.otf`;
            const fontOtf = new FontFace(fontFamily, `url(${fontUrlOtf})`);
            console.log(`Attempting to load OTF font from: ${fontUrlOtf}`);
            const loadedFont = await fontOtf.load();
            document.fonts.add(loadedFont);
            await document.fonts.ready;
            fontLoaded = true;
            console.log(`Successfully loaded OTF font: ${fontFamily}`);
          } catch (errOtf) {
            console.error("Failure occurred while: Loading font", { errTtf, errOtf });
            // Do not break execution, fallback font is allowed under instructions if load fails
          }
        }
      }
    }

    // STEP 9
    try {
      // Draw background template image
      ctx.drawImage(img, 0, 0);

      // Implement automatic font scaling
      let finalFontSize = fontSize;
      const maxTextWidth = renderConfig.maxWidth !== undefined ? renderConfig.maxWidth : canvas.width * 0.7;

      ctx.font = `${fontWeight} ${finalFontSize}px ${fontFamily}`;
      let textWidth = ctx.measureText(participant.name).width;

      // Adjust font size dynamically so that the name fits on a single line
      while (textWidth > maxTextWidth && finalFontSize > 24) {
        finalFontSize -= 2;
        ctx.font = `${fontWeight} ${finalFontSize}px ${fontFamily}`;
        textWidth = ctx.measureText(participant.name).width;
      }

      ctx.fillStyle = textColor;
      ctx.textAlign = textAlign;
      ctx.textBaseline = textBaseline;

      const textX = renderConfig.textX !== undefined ? renderConfig.textX : canvas.width / 2;
      const textY = renderConfig.textY !== undefined ? renderConfig.textY : canvas.height * 0.52;

      console.log(`Drawing Name: ${participant.name} at font size ${finalFontSize}px`);
      ctx.fillText(participant.name, textX, textY);
    } catch (err: any) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.error("Failure occurred while: Rendering Canvas", err);
      setErrorMsg(`Failed to render certificate content. Details: ${errMsg}`);
      setLoading(false);
      return;
    }

    // STEP 10
    try {
      const dataUrl = canvas.toDataURL("image/png");
      if (!dataUrl) {
        throw new Error("Canvas data export resulted in empty string.");
      }

      setSuccessData({
        studentName: participant.name,
        eventName: data.eventName,
        certificateType: certType,
        dataUrl,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      });
      console.log("Certificate preview displayed successfully");
    } catch (err: any) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.error("Failure occurred while: Exporting PNG", err);
      setErrorMsg(`Failed to export certificate image format. Details: ${errMsg}`);
    } finally {
      setLoading(false);
    }
  };

  const downloadPNG = () => {
    if (!successData) return;
    try {
      const link = document.createElement("a");
      link.download = `${successData.studentName.replace(/\s+/g, "_")}_${successData.eventName.replace(/\s+/g, "_")}_Certificate.png`;
      link.href = successData.dataUrl;
      link.click();
    } catch (err) {
      console.error("Failure occurred while: Exporting PNG", err);
      setErrorMsg("Failed to download PNG certificate.");
    }
  };

  const downloadPDF = async () => {
    if (!successData) return;
    setLoading(true);
    try {
      // Dynamic import to prevent next.js build failures (jsPDF requires window)
      const { jsPDF } = await import("jspdf");

      const width = successData.naturalWidth;
      const height = successData.naturalHeight;

      const pdf = new jsPDF({
        orientation: width > height ? "landscape" : "portrait",
        unit: "px",
        format: [width, height],
      });

      pdf.addImage(successData.dataUrl, "PNG", 0, 0, width, height);
      pdf.save(
        `${successData.studentName.replace(/\s+/g, "_")}_${successData.eventName.replace(/\s+/g, "_")}_Certificate.pdf`
      );
    } catch (error) {
      console.error("Failure occurred while: Exporting PDF", error);
      setErrorMsg("Failed to export certificate PDF document.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero" id="certificates-portal" style={{ minHeight: "100vh", height: "auto", paddingBottom: "100px" }}>
      <div className="hero-grid-overlay" />
      <div className="hero-beam beam-1" />
      <div className="hero-beam beam-2" />
      <canvas ref={canvasRef} id="hero-canvas" />

      {/* Ambient backgrounds */}
      <div className="gold-glow top-right" />
      <div className="gold-glow bottom-left" style={{ bottom: "-200px" }} />



      <div className="container hero-content" style={{ maxWidth: "800px" }}>
        
        {/* Title and Descriptions */}
        <div className="reveal-element">
          <span className="hero-subtitle">Certificate Portal</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 8vw, 3.5rem)", marginBottom: "15px" }}>
            Generate <span className="text-gold-gradient">Certificate</span>
          </h1>
          <p className="hero-desc" style={{ fontSize: "clamp(0.95rem, 3vw, 1.1rem)", marginBottom: "40px", maxWidth: "600px" }}>
            Download your official AURON Technical Forum event certificates instantly.<br />
            Select your event, enter your USN, and securely generate your verified certificate.
          </p>
        </div>

        {/* Certificate Card */}
        <div
          ref={cardRef}
          className="glass-card tilt-card reveal-element delay-100"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "clamp(20px, 6vw, 40px)",
            textAlign: "left",
            zIndex: 10,
          }}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        >
          <div className="spotlight" />
          <div className="card-border-glow" />

          {/* Form */}
          <form onSubmit={handleGenerate} className="contact-form" style={{ gap: "25px" }}>
            
            {/* Event Dropdown */}
            <div className="form-group custom-dropdown-container" ref={dropdownRef}>
              <div
                id="cert-event"
                role="combobox"
                aria-expanded={isOpen}
                aria-controls="cert-event-list"
                aria-haspopup="listbox"
                tabIndex={0}
                className={`form-input custom-dropdown-trigger ${selectedEvent ? 'has-value' : ''} ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
              >
                <span className="selected-value-text">
                  {visibleEvents.find(e => e.id === selectedEvent)?.name || ""}
                </span>
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              <label htmlFor="cert-event" className="form-label">
                Select Event
              </label>
              <div className="form-line" />

              {/* Floating Menu Option List */}
              {isOpen && (
                <ul
                  id="cert-event-list"
                  role="listbox"
                  aria-label="Events list"
                  className="custom-dropdown-menu"
                >
                  {visibleEvents.map((event, index) => {
                    const isSelected = selectedEvent === event.id;
                    const isFocused = focusedIndex === index;
                    return (
                      <li
                        key={event.id}
                        id={`event-item-${event.id}`}
                        role="option"
                        aria-selected={isSelected}
                        className={`custom-dropdown-item ${isSelected ? 'selected' : ''} ${isFocused ? 'focused' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(event.id);
                        }}
                        onMouseEnter={() => setFocusedIndex(index)}
                      >
                        {event.name}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* USN Number */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="form-group">
                <input
                  type="text"
                  id="cert-usn"
                  className="form-input"
                  placeholder="CM24075"
                  required
                  value={usn}
                  onChange={(e) => setUsn(e.target.value)}
                />
                <label htmlFor="cert-usn" className="form-label">
                  USN Number
                </label>
                <div className="form-line" />
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  marginTop: "6px",
                  marginLeft: "4px",
                  textAlign: "left",
                  letterSpacing: "0.5px",
                }}
              >
                Format: CM24075
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`cta-button submit-btn ${loading ? "loading" : ""}`}
              disabled={loading}
              style={{ width: "100%", marginTop: "10px" }}
            >
              <div className="spinner" />
              <span>{loading ? "Generating..." : "Generate Certificate"}</span>
            </button>
          </form>

          {/* Error Message Layout */}
          {errorMsg && (
            <div className="form-status error" style={{ display: "block", marginTop: "20px" }}>
              {errorMsg}
            </div>
          )}
        </div>

        {/* Success Preview Card */}
        {successData && (
          <div
            className="glass-card"
            style={{
              maxWidth: "680px",
              margin: "40px auto 0",
              padding: "clamp(16px, 5vw, 30px)",
              textAlign: "center",
              zIndex: 10,
              animation: "fadeInUp 0.6s ease forwards",
            }}
          >
            <div className="spotlight" />
            <div className="card-border-glow" />

            <h3 className="section-title" style={{ fontSize: "clamp(1.2rem, 4vw, 1.4rem)", marginBottom: "10px" }}>
              Certificate Found!
            </h3>
            <p className="hero-desc" style={{ fontSize: "clamp(0.85rem, 3vw, 0.95rem)", marginBottom: "25px" }}>
              Verified certificate for <strong>{successData.studentName}</strong> ({usn.toUpperCase()}) in the event <strong>{successData.eventName}</strong> ({successData.certificateType.toUpperCase()}).
            </p>

            {/* Image Preview */}
            <img
              src={successData.dataUrl}
              alt="Certificate Preview"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: `${successData.naturalWidth} / ${successData.naturalHeight}`,
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-md)",
                marginBottom: "25px",
                display: "block",
              }}
            />

            {/* Action buttons */}
            <div className="hero-ctas" style={{ gap: "15px", flexWrap: "wrap" }}>
              <button
                onClick={downloadPNG}
                className="cta-button magnetic-element"
                style={{ flex: "1 1 auto", minWidth: "150px" }}
              >
                Download PNG
              </button>
              <button
                onClick={downloadPDF}
                className="secondary-button magnetic-element"
                style={{ flex: "1 1 auto", minWidth: "150px", padding: "12px 24px" }}
              >
                Download PDF
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
