"use client";

import { useState } from "react";
import { tickets } from "@/lib/data";

const pad = (n: number) => String(n).padStart(2, "0");

/** A set of support cases: the ticket as reported on one side, root cause and the steps to fix it on the other. */
export default function Compare() {
  const [i, setI] = useState(0);
  const t = tickets[i];
  const go = (d: number) => setI((v) => (v + d + tickets.length) % tickets.length);

  return (
    <div className="cases">
      <div className="cases-nav">
        <div className="cases-tabs" role="tablist" aria-label="Support cases">
          {tickets.map((c, n) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={n === i}
              className={n === i ? "is-active" : ""}
              onClick={() => setI(n)}
            >
              <span className="mono">{pad(n + 1)}</span> {c.short}
            </button>
          ))}
        </div>
        <div className="cases-count">
          <span className="mono">
            case {pad(i + 1)} / {pad(tickets.length)}
          </span>
          <button onClick={() => go(-1)} aria-label="Previous case">←</button>
          <button onClick={() => go(1)} aria-label="Next case">→</button>
        </div>
      </div>

      <div className="compare">
        <div className="compare-pane compare-before" key={`b-${t.id}`}>
          <div className="mock-head mono">
            <span>{t.id} · {t.system}</span>
            <span className="pill pill-red">{t.priority} · Open</span>
          </div>
          <span className="pane-label mono">i · the ticket</span>
          <h4>{t.symptom}</h4>
          <ul className="mock-log mono">
            {t.log.map((l) => (
              <li key={l.t} className={l.bad ? "is-bad" : ""}>
                {l.t} {l.bad && "✕"}
              </li>
            ))}
          </ul>
        </div>

        <div className="compare-pane compare-after" key={`a-${t.id}`}>
          <div className="mock-head mono">
            <span>{t.id} · {t.system}</span>
            <span className="pill pill-green">Resolved · RCA attached</span>
          </div>
          <span className="pane-label mono">r · the resolution</span>
          <h4>
            <span className="mono">root cause</span>
            {t.cause}
          </h4>
          <ol className="steps">
            {t.steps.map((s, n) => (
              <li key={s} style={{ animationDelay: `${0.15 + n * 0.09}s` }}>
                <span className="mono">{pad(n + 1)}</span>
                {s}
              </li>
            ))}
          </ol>
          <p className="prevent">
            <span className="mono">prevention</span> {t.prevent}
          </p>
        </div>

        <div className="compare-line" aria-hidden>
          <span className="mono">i / r</span>
        </div>
      </div>
    </div>
  );
}
