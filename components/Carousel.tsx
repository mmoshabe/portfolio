"use client";

import { useState } from "react";
import { credentials } from "@/lib/data";

export default function Carousel() {
  const [i, setI] = useState(0);
  const n = credentials.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const c = credentials[i];
  const pad = (x: number) => String(x).padStart(2, "0");

  return (
    <div className="carousel">
      <div className="carousel-top mono">
        <span>{c.kicker}</span>
        <span>
          {pad(i + 1)} / {pad(n)}
        </span>
      </div>
      <blockquote key={i} className="carousel-quote">
        {c.title}
      </blockquote>
      <div className="carousel-bottom">
        <span className="mono">{c.meta}</span>
        <div className="carousel-btns">
          <button onClick={() => go(-1)} aria-label="Previous">←</button>
          <button onClick={() => go(1)} aria-label="Next">→</button>
        </div>
      </div>
    </div>
  );
}
