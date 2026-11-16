import Nav from "@/components/Nav";
import Narrative from "@/components/Narrative";
import WorkList from "@/components/WorkList";
import Compare from "@/components/Compare";
import Carousel from "@/components/Carousel";
import Reveal from "@/components/Reveal";
import Clock from "@/components/Clock";
import { dashboards, experience, heroStats, nav, sides, site, stats } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Reveal />
      <Nav />

      <main id="top">
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="hero">
          <p className="eyebrow mono" data-reveal>
            {site.role}
          </p>
          <h1 className="hero-title">
            <span className="hero-line"><span>Turning</span></span>
            <span className="hero-line">
              <span>
                <em>i</em>ssues <b className="slash">/</b> into
              </span>
            </span>
            <span className="hero-line"><span><em>r</em>esolutions.</span></span>
          </h1>

          <div className="hero-grid">
            <div className="hero-portrait" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/portrait.jpg" alt={site.name} width={647} height={1400} />
              <i className="mono">fig. 01 · Johannesburg</i>
            </div>
            <div className="hero-copy" data-reveal>
              <p className="lead">
                I fix it. Then I make sure it stays fixed. Three years of production support,
                integrations and automation, from warehouse systems to live SaaS products.
              </p>
              <dl className="hero-stats">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <dt className="mono">{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
              <a href={`mailto:${site.email}`} className="btn btn-dark">
                Get in touch <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Pinned narrative ─────────────────────────── */}
        <Narrative />

        {/* ── Selected work ────────────────────────────── */}
        <section className="section" id="work">
          <div className="section-head" data-reveal>
            <span className="mono">02 · Selected work</span>
            <h2>Built, then supported.</h2>
          </div>
          <WorkList />

          <div className="dash-head" data-reveal>
            <span className="mono">Inside the products</span>
            <p>The screens people actually work in.</p>
          </div>
          <div className="dash-grid">
            {dashboards.map((d) => (
              <figure key={d.src} className={`dash ${d.feature ? "dash-wide" : ""}`} data-reveal>
                <div className="dash-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.src} alt={`${d.project} ${d.title}`} width={d.w} height={d.h} loading="lazy" />
                </div>
                <figcaption>
                  <span className="mono">{d.project}</span>
                  <strong>{d.title}</strong>
                  <span>{d.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── Both sides ───────────────────────────────── */}
        <section className="section section-dark" id="about">
          <div className="section-head" data-reveal>
            <span className="mono">03 · One ticket, both sides</span>
            <h2>The person who answers the ticket and the one who ships the fix.</h2>
            <p className="section-sub">
              Issues I&apos;ve worked, from the first report to the root cause. Pick a case, then
              scroll or move across the frame to sweep from the ticket to how it was fixed.
            </p>
          </div>

          <div data-reveal>
            <Compare />
          </div>

          <div className="sides" data-reveal>
            <div>
              <h3 className="mono">i · support</h3>
              <ol>
                {sides.support.map((s, i) => (
                  <li key={s}>
                    <span className="mono">i.{i + 1}</span> {s}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="mono">r · build</h3>
              <ol>
                {sides.build.map((s, i) => (
                  <li key={s}>
                    <span className="mono">r.{i + 1}</span> {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────── */}
        <section className="section">
          <div className="section-head" data-reveal>
            <span className="mono">The record</span>
            <h2>Where I&apos;ve been on call.</h2>
          </div>
          <ol className="exp">
            {experience.map((e) => (
              <li key={e.role + e.dates} data-reveal>
                <div className="exp-meta">
                  <span className="mono">{e.dates}</span>
                  <span>{e.org}</span>
                </div>
                <div>
                  <h3>{e.role}</h3>
                  <ul>
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <p className="edu mono" data-reveal>
            WeThinkCode_ · Software Engineering (NQF 6), 2020–2022 &nbsp;/&nbsp; Tshwane University
            of Technology · Diploma in IT, 2018–2024
          </p>
        </section>

        {/* ── Credentials carousel ─────────────────────── */}
        <section className="section section-tight" data-reveal>
          <Carousel />
        </section>

        {/* ── Stats strip ──────────────────────────────── */}
        <section className="stats" aria-label="By the numbers">
          {stats.map((s) => (
            <div key={s.label} data-reveal>
              <strong>{s.value}</strong>
              <span className="mono">{s.label}</span>
            </div>
          ))}
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="cta" id="contact">
          <span className="mono" data-reveal>
            <i className="dot" /> {site.status}
          </span>
          <h2 data-reveal>
            Something broken<b className="slash">/</b>worth fixing?
          </h2>
          <a href={`mailto:${site.email}`} className="cta-mail" data-reveal>
            {site.email} <span aria-hidden>↗</span>
          </a>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-cols">
          <div>
            <h4 className="mono">Explore</h4>
            {nav.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div>
            <h4 className="mono">Connect</h4>
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
          <div>
            <h4 className="mono">Contact</h4>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <Clock />
          </div>
        </div>
        <div className="footer-base">
          <span className="footer-word">{site.wordmark}<b className="slash">/</b></span>
          <div className="footer-line mono">
            <span>© 2026 · Supported and built by the same hands</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
