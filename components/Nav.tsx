"use client";

import { useState } from "react";
import { nav, site } from "@/lib/data";
import Clock from "./Clock";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav ${open ? "is-open" : ""}`}>
      <div className="nav-bar">
        <a href="#top" className="wordmark" onClick={() => setOpen(false)}>
          {site.wordmark}
          <span className="wordmark-slash">/</span>
        </a>
        <div className="nav-meta">
          <span className="status">
            <i className="dot" /> {site.status}
          </span>
          <Clock />
        </div>
        <nav className="nav-links" aria-label="Primary">
          {nav.slice(1).map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${site.email}`} className="btn btn-dark nav-cta">
          Get in touch
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="nav-panel">
        <ul>
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                <span className="mono">{l.n}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-panel-foot">
          <span className="status">
            <i className="dot" /> {site.status}
          </span>
          <div className="nav-panel-socials">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
