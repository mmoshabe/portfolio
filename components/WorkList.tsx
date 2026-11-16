"use client";

import { useRef, useState } from "react";
import { work } from "@/lib/data";

const total = String(work.length).padStart(2, "0");

/**
 * Hover preview: a screenshot of the live site (public/previews/<slug>.jpg, made by `npm run previews`).
 * Projects with no public URL, or whose screenshot is missing or fails to load, get the typographic card.
 */
export default function WorkList() {
  const [hover, setHover] = useState<number | null>(null);
  const [broken, setBroken] = useState<Set<string>>(new Set());
  const preview = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLOListElement>(null);

  const move = (e: React.MouseEvent) => {
    const box = list.current?.getBoundingClientRect();
    if (!box || !preview.current) return;
    preview.current.style.transform = `translate(${e.clientX - box.left}px, ${e.clientY - box.top}px)`;
  };

  return (
    <div className="work-wrap">
      <ol className="work-list" ref={list} onMouseMove={move} onMouseLeave={() => setHover(null)}>
        {work.map((w, i) => {
          const Inner = (
            <>
              <span className="mono work-n">{w.n}</span>
              <span className="work-name">{w.name}</span>
              <span className="work-tag mono">{w.tag}</span>
              <span className="work-desc">{w.desc}</span>
              <span className="work-cta">
                {w.cta} {w.href && <span aria-hidden>↗</span>}
              </span>
            </>
          );
          return (
            <li key={w.n} onMouseEnter={(e) => { setHover(i); move(e); }} className={hover !== null && hover !== i ? "is-dim" : ""}>
              {w.href ? (
                <a className="work-row" href={w.href} target="_blank" rel="noreferrer">
                  {Inner}
                </a>
              ) : (
                <div className="work-row">{Inner}</div>
              )}
            </li>
          );
        })}

        {/* Every preview is rendered (so screenshots preload); only the hovered one is visible. */}
        <div className={`work-preview ${hover !== null ? "is-on" : ""}`} ref={preview} aria-hidden>
          {work.map((w, i) => {
            const shot = w.href && !broken.has(w.slug);
            return (
              <div key={w.slug} className={`work-preview-card ${shot ? "has-shot" : ""} ${hover === i ? "is-active" : ""}`}
                style={shot ? undefined : { background: w.tone[0], color: w.tone[1] }}>
                {shot ? (
                  <>
                    <div className="shot-bar mono">
                      <i /><i /><i />
                      <span>{w.href!.replace(/^https?:\/\//, "")}</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/previews/${w.slug}.jpg`}
                      alt=""
                      onError={() => setBroken((b) => new Set(b).add(w.slug))}
                    />
                  </>
                ) : (
                  <>
                    <span className="mono">{w.n} / {total}</span>
                    <strong>{w.name}</strong>
                    <span className="mono">{w.tag}</span>
                    <div className="work-preview-slash" style={{ background: w.tone[1] }} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </ol>
    </div>
  );
}
