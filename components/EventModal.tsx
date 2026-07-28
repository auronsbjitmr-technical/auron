"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_evkz5x8";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_REGISTRATION_TEMPLATE_ID || "template_2cu08jp";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "aB8r5qyVP7paTnBCe";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventName: string;
}

export default function EventModal({ isOpen, onClose, eventName }: EventModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [semester, setSemester] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !roll || !semester) {
      setStatus({ type: "error", text: "Please complete all required fields." });
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: name,
          email: email,
          roll: roll,
          semester: `Semester ${semester}`,
          event_name: eventName,
          time: new Date().toLocaleString(),
          reply_to: email,
        },
        PUBLIC_KEY
      );
      setStatus({ type: "success", text: `Registration Successful! Ticket sent to ${email}` });
      setName("");
      setEmail("");
      setRoll("");
      setSemester("");
      setTimeout(onClose, 2500);
    } catch (err: unknown) {
      console.error("EmailJS Event Registration Error:", err);
      const errObj = err as { text?: string; status?: number; message?: string };
      const detail = errObj.text || errObj.message || (typeof err === "string" ? err : "");
      
      setStatus({ 
        type: "error", 
        text: detail 
          ? `Registration failed (${errObj.status || "API"}): ${detail}.` 
          : "Failed to send registration confirmation email. Please try again." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="modal-overlay active" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card glass-card relative">
        <button className="modal-close" onClick={onClose} aria-label="Close Modal">
          <X size={16} />
        </button>

        <div className="section-header" style={{ textAlign: "left", marginBottom: "35px" }}>
          <span className="section-subtitle">Secure Your Spot</span>
          <h3 className="bearer-name" id="modal-title" style={{ fontSize: "1.6rem" }}>
            Register for {eventName}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" id="modal-form">
          <input type="hidden" id="modal-event-name" value={eventName} />

          <div className="form-group">
            <input 
              type="text" 
              id="reg-name" 
              className="form-input" 
              placeholder=" " 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="reg-name" className="form-label">Full Name</label>
            <div className="form-line"></div>
          </div>

          <div className="form-group">
            <input 
              type="email" 
              id="reg-email" 
              className="form-input" 
              placeholder=" " 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="reg-email" className="form-label">Email Address</label>
            <div className="form-line"></div>
          </div>

          <div className="form-group">
            <input 
              type="text" 
              id="reg-roll" 
              className="form-input" 
              placeholder=" " 
              required 
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />
            <label htmlFor="reg-roll" className="form-label">Roll Number</label>
            <div className="form-line"></div>
          </div>

          <div className="form-group">
            <select 
              id="reg-semester" 
              className="form-input"
              style={{ background: "var(--bg-form)", color: "var(--text-primary)" }}
              required 
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="" disabled hidden></option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
            <label htmlFor="reg-semester" className="form-label">Select Semester</label>
            <div className="form-line"></div>
          </div>

          <button 
            type="submit" 
            className={`cta-button submit-btn magnetic-element ${loading ? "loading" : ""}`}
            id="reg-submit"
            disabled={loading}
          >
            <div className="spinner" />
            <span>Submit Registration</span>
          </button>
        </form>

        {status && (
          <div className={`form-status ${status.type}`} id="reg-status">
            {status.text}
          </div>
        )}
      </div>
    </div>
  );
}
