"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { frames } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Narrative() {
  const root = useRef<HTMLElement>(null);
  const slash = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [angle, setAngle] = useState(frames[0].angle);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const state = { a: frames[0].angle };
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${window.innerHeight * 3}`,
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            const i = Math.min(frames.length - 1, Math.floor(self.progress * frames.length));
            setActive(i);
          },
        },
      });
      frames.forEach((f, i) => {
        if (i === 0) return;
        tl.to(state, {
          a: f.angle,
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            setAngle(Math.round(state.a));
            if (slash.current) slash.current.style.transform = `rotate(${state.a}deg)`;
          },
        });
      });
      tl.to({}, { duration: 0.4 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="narrative" ref={root} aria-label="How I work">
      <div className="narrative-inner">
        <div className="narrative-head">
          <span className="mono">The fix · frame {active + 1} of {frames.length}</span>
          <span className="mono">i · issue → r · resolved</span>
        </div>

        <div className="narrative-stage">
          <div className="dial" aria-hidden>
            <div className="dial-ring" />
            <div className="dial-slash" ref={slash} style={{ transform: `rotate(${frames[0].angle}deg)` }} />
            <span className="dial-i">i</span>
            <span className="dial-r">r</span>
            <span className="dial-readout mono">{String(angle).padStart(3, "0")}°</span>
          </div>

          <ol className="frames">
            {frames.map((f, i) => (
              <li key={f.n} className={`frame ${i === active ? "is-active" : ""}`}>
                <div className="frame-meta mono">
                  <span>{f.n}</span>
                  <span>{String(f.angle).padStart(3, "0")}°</span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
