"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock, Users, IndianRupee, ArrowLeft, UserCheck, AlertCircle, ExternalLink, Phone, Mail, Info } from "lucide-react";
import { type EventDetail } from "@/data/eventDetails";

export default function EventDetails({ event }: { event: EventDetail }) {
  const wing = event.wing ?? "hybrid";

  return (
    <section className="section-padding event-detail-section">
      <div className="container">
        {/* Back Button */}
        <Link href="/events#events-showcase" className="event-detail-back" aria-label="Back to Upcoming Events">
          <ArrowLeft size={18} />
          <span>Back to Upcoming Events</span>
        </Link>

        {/* Event Header */}
        <div className="event-detail-header glass-card">
          <div className="spotlight" />
          <div className="card-border-glow" />

          <div className="event-detail-hero">
            {event.image && (
              <div className="event-detail-img">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-contain p-8 transition-transform duration-700"
                  sizes="(max-width: 992px) 100vw, 50vw"
                  priority
                />
                {event.category && (
                  <span className="event-overlay-badge">{event.category}</span>
                )}
                <span className={`event-wing-badge ${wing}`}>
                  {wing === "technical" ? "TECH" : wing === "hybrid" ? "HYBRID" : "OPS"}
                </span>
              </div>
            )}

            <div className="event-detail-info">
              <span className={`event-detail-wing ${wing}`}>
                {wing === "technical" ? "TECHNICAL WING" : wing === "hybrid" ? "HYBRID WING" : "NON-TECHNICAL WING"}
              </span>
              <h1 className="event-detail-title">{event.title}</h1>
              <p className="event-detail-desc">{event.description}</p>

              <div className="event-detail-meta">
                {event.date && (
                  <div className="event-detail-meta-item">
                    <Calendar size={18} />
                    <div>
                      <span className="meta-label">Date</span>
                      <span className="meta-value">{event.date}</span>
                    </div>
                  </div>
                )}
                {event.time && (
                  <div className="event-detail-meta-item">
                    <Clock size={18} />
                    <div>
                      <span className="meta-label">Time</span>
                      <span className="meta-value">{event.time}</span>
                    </div>
                  </div>
                )}
                {event.venue && (
                  <div className="event-detail-meta-item">
                    <MapPin size={18} />
                    <div>
                      <span className="meta-label">Venue</span>
                      <span className="meta-value">{event.venue}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* About Event */}
        {(event.about || event.description) && (
          <div className="event-detail-card glass-card">
            <div className="spotlight" />
            <div className="card-border-glow" />
            <h2 className="event-detail-section-title">About Event</h2>
            <p className="event-detail-about-text">
              {event.about || event.description}
            </p>
          </div>
        )}

        {/* Event Information Grid */}
        <div className="event-detail-card glass-card">
          <div className="spotlight" />
          <div className="card-border-glow" />
          <h2 className="event-detail-section-title">Event Information</h2>
          <div className="event-detail-info-grid">
            {event.date && (
              <div className="info-item">
                <Calendar size={20} />
                <span className="info-label">Date</span>
                <span className="info-value">{event.date}</span>
              </div>
            )}
            {event.time && (
              <div className="info-item">
                <Clock size={20} />
                <span className="info-label">Time</span>
                <span className="info-value">{event.time}</span>
              </div>
            )}
            {event.venue && (
              <div className="info-item">
                <MapPin size={20} />
                <span className="info-label">Venue</span>
                <span className="info-value">{event.venue}</span>
              </div>
            )}
            {event.registrationFee && (
              <div className="info-item">
                <IndianRupee size={20} />
                <span className="info-label">Registration Fee</span>
                <span className="info-value">{event.registrationFee}</span>
              </div>
            )}
            {event.teamSize && (
              <div className="info-item">
                <Users size={20} />
                <span className="info-label">Team Size</span>
                <span className="info-value">{event.teamSize}</span>
              </div>
            )}
            {event.eligibility && (
              <div className="info-item">
                <UserCheck size={20} />
                <span className="info-label">Eligibility</span>
                <span className="info-value">{event.eligibility}</span>
              </div>
            )}
            {event.registrationDeadline && (
              <div className="info-item">
                <AlertCircle size={20} />
                <span className="info-label">Registration Deadline</span>
                <span className="info-value">{event.registrationDeadline}</span>
              </div>
            )}
          </div>
        </div>

        {/* Rules / Guidelines */}
        {event.rules && event.rules.length > 0 && (
          <div className="event-detail-card glass-card">
            <div className="spotlight" />
            <div className="card-border-glow" />
            <h2 className="event-detail-section-title">Rules &amp; Guidelines</h2>
            <ul className="event-detail-rules-list">
              {event.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Schedule */}
        {event.schedule && event.schedule.length > 0 && (
          <div className="event-detail-card glass-card">
            <div className="spotlight" />
            <div className="card-border-glow" />
            <h2 className="event-detail-section-title">Schedule</h2>
            <div className="event-detail-info-grid">
              {event.schedule.map((item, idx) => (
                <div key={idx} className="info-item">
                  <Clock size={20} />
                  <span className="info-label">{item.time}</span>
                  <span className="info-value">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Organizers */}
        {event.organizers && event.organizers.length > 0 && (
          <div className="event-detail-card glass-card">
            <div className="spotlight" />
            <div className="card-border-glow" />
            <h2 className="event-detail-section-title">Organizers</h2>
            <ul className="event-detail-organizers-list">
              {event.organizers.map((org, idx) => (
                <li key={idx}>{org}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact Information */}
        {event.contact && event.contact.length > 0 && (
          <div className="event-detail-card glass-card">
            <div className="spotlight" />
            <div className="card-border-glow" />
            <h2 className="event-detail-section-title">Contact Information</h2>
            <div className="event-detail-contact-grid">
              {event.contact.map((person, idx) => (
                <div key={idx} className="contact-person-card">
                  <span className="contact-name">{person.name}</span>
                  {person.phone && (
                    <a href={`tel:${person.phone}`} className="contact-detail">
                      <Phone size={14} />
                      <span>{person.phone}</span>
                    </a>
                  )}
                  {person.email && (
                    <a href={`mailto:${person.email}`} className="contact-detail">
                      <Mail size={14} />
                      <span>{person.email}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Information */}
        {event.additionalInformation && (
          <div className="event-detail-card glass-card">
            <div className="spotlight" />
            <div className="card-border-glow" />
            <h2 className="event-detail-section-title">Additional Information</h2>
            <p className="event-detail-about-text">
              {event.additionalInformation}
            </p>
          </div>
        )}

        {/* Registration */}
        {event.registrationLink && (
          <div className="event-detail-register">
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="event-detail-register-btn"
            >
              <ExternalLink size={18} />
              Register Now
            </a>
          </div>
        )}

        {/* Bottom Back Link */}
        <div className="event-detail-bottom-back">
          <Link href="/events#events-showcase" className="event-detail-back">
            <ArrowLeft size={18} />
            <span>Back to Upcoming Events</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
