"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { work } from "@/lib/data";

type Project = (typeof work)[number];

/** Live products show a screenshot of the site (public/previews/<slug>.jpg, from `npm run previews`); the rest get a typographic cover. */
function Cover({ p }: { p: Project }) {
  const [broken, setBroken] = useState(false);
  const isAi = "kind" in p && p.kind === "ai";
  const shot = p.href && !isAi && !broken;

  if (shot) {
    return (
      <div className="cover cover-shot">
        <div className="shot-bar">
          <i /><i /><i />
          <span>{p.href!.replace(/^https?:\/\//, "")}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/previews/${p.slug}.jpg`} alt={`${p.name} website`} loading="lazy" onError={() => setBroken(true)} />
      </div>
    );
  }
  return (
    <div className="cover cover-type" style={{ "--tone": p.tone[1] } as React.CSSProperties}>
      <strong>{p.name}</strong>
      <span className="cover-slash" />
    </div>
  );
}

function Card({ p, featured }: { p: Project; featured?: boolean }) {
  const external = p.href?.includes("github.com");
  const body = (
    <>
      <Cover p={p} />
      <div className="project-body">
        <div className="project-top">
          <span className="project-number">{p.n}</span>
          <span className="project-type">{p.tag}</span>
          {p.href && <ArrowUpRight className="project-arrow" size={18} />}
        </div>
        <h3>{p.name}</h3>
        <p className="project-summary">{p.desc}</p>
        <span className={`text-link ${p.href ? "" : "is-muted"}`}>
          {external && <GithubIcon size={14} />}
          {!p.href && <CheckCircle2 size={14} />}
          {p.cta} {p.href && <ArrowUpRight size={14} />}
        </span>
      </div>
    </>
  );
  return p.href ? (
    <a className={`project-card ${featured ? "is-featured" : ""}`} href={p.href} target="_blank" rel="noreferrer" data-reveal>{body}</a>
  ) : (
    <article className={`project-card ${featured ? "is-featured" : ""}`} data-reveal>{body}</article>
  );
}

/** `featured` leading cards span two columns of the four-column grid. */
export default function Projects({ kind, featured = 0 }: { kind: "ai" | "product"; featured?: number }) {
  const list = work.filter((p) => (("kind" in p && p.kind === "ai") ? "ai" : "product") === kind);
  return (
    <div className="project-grid">
      {list.map((p, i) => <Card key={p.slug} p={p} featured={i < featured} />)}
    </div>
  );
}
