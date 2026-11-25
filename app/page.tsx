import {
  ArrowDownRight, ArrowUpRight, Award, Bot, Braces, BriefcaseBusiness, Code2,
  LifeBuoy, Mail, MapPin, ShieldCheck, Sparkles, Workflow, Wrench,
} from "lucide-react";
import Projects from "@/components/Projects";
import Compare from "@/components/Compare";
import Reveal from "@/components/Reveal";
import Clock from "@/components/Clock";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import {
  approach, capabilities, credentials, experience, metrics, sides, site, skillGroups,
} from "@/lib/data";

const icons = { bot: Bot, workflow: Workflow, braces: Braces, lifebuoy: LifeBuoy, shield: ShieldCheck, code: Code2 };
const linkedin = site.socials.find((s) => s.label === "LinkedIn")!.href;
const github = site.socials.find((s) => s.label === "GitHub")!.href;

function Brand() {
  return (
    <a className="brand" href="#home">
      <span className="brand-mark">NM</span>
      <span>NEPHTALLY<span className="muted">.DEV</span></span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <Reveal />

      <nav className="nav shell">
        <Brand />
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#cases">Cases</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href={`mailto:${site.email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
      </nav>

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> {site.status.toUpperCase()} <span className="eyebrow-line" /></div>
          <h1>I turn business processes into <span className="gradient-text">intelligent systems</span> that stay fixed.</h1>
          <p className="hero-lede">
            I&apos;m Nephtally, an AI implementation and integration engineer. I build AI assistants,
            automations and integrations, and I support them in production: from the first ticket to the
            root cause and the lasting fix.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href={`mailto:${site.email}`}><Mail size={16} /> Get in touch</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={14} /> <Clock /></span>
            <span className="meta-divider" />
            <span>In production support since 2022</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract AI workflow illustration">
          <div className="visual-glow" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="core"><div className="core-inner"><Sparkles size={35} /><span>AI</span></div></div>
          <div className="node node-top"><Bot size={17} /><span>AI agents</span></div>
          <div className="node node-right"><Workflow size={17} /><span>Automation</span></div>
          <div className="node node-bottom"><Braces size={17} /><span>Integrations</span></div>
          <div className="node node-left"><LifeBuoy size={17} /><span>Support</span></div>
          <div className="visual-caption"><span className="caption-dot" /> FROM TICKET TO PRODUCTION</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /><span className="hero-bottom-line" /></div>
      </section>

      <section className="metrics shell">
        {metrics.map((m) => (
          <div className="metric" key={m.label}><strong>{m.value}<span>{m.unit}</span></strong><small>{m.label}</small></div>
        ))}
        <p className="metric-note">*Held-out test set of 100 labelled support tickets; see the AI Support Triage repository.</p>
      </section>

      {/* ── Work ─────────────────────────────────────── */}
      <section className="section shell" id="work">
        <div className="section-heading" data-reveal>
          <div><span className="section-kicker">01 / SELECTED WORK</span><h2>Built, shipped, <span className="gradient-text">then supported.</span></h2></div>
          <p>Products I designed and built that are live in production, and the ones I still answer for when something breaks.</p>
        </div>
        <Projects kind="product" featured={2} />

        <div className="sub-heading" data-reveal>
          <span className="section-kicker">AI ENGINEERING</span>
          <p>Agents and AI implementations with the evaluation to back them up.</p>
        </div>
        <Projects kind="ai" featured={1} />

        <div className="github-strip">
          <div><GithubIcon size={19} /><span>More code and experiments on GitHub</span></div>
          <a href={github} target="_blank" rel="noreferrer">{github.replace("https://", "")} <ArrowUpRight size={15} /></a>
        </div>
      </section>

      {/* ── What I do ────────────────────────────────── */}
      <section className="section section-alt" id="about">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div><span className="section-kicker">02 / WHAT I DO</span><h2>From business need to <span className="gradient-text">working solution.</span></h2></div>
            <p>Implementation thinking with hands-on engineering: the simplest technology that reliably solves the problem, and someone who stays on call for it.</p>
          </div>
          <div className="capability-grid" data-reveal>
            {capabilities.map(({ icon, title, text }, index) => {
              const Icon = icons[icon];
              return (
                <div className="capability" key={title}>
                  <div className="cap-icon"><Icon size={20} /></div>
                  <span className="cap-index">0{index + 1}</span>
                  <h3>{title}</h3><p>{text}</p>
                </div>
              );
            })}
          </div>
          <div className="approach" data-reveal>
            <div className="approach-intro"><span className="section-kicker">HOW I WORK</span><h3>Build it. Validate it. Keep it running.</h3></div>
            {approach.map((a, i) => (
              <div className="approach-step" key={a.title}><span>0{i + 1}</span><div><strong>{a.title}</strong><p>{a.text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Support cases ────────────────────────────── */}
      <section className="section shell" id="cases">
        <div className="section-heading" data-reveal>
          <div><span className="section-kicker">03 / ONE TICKET, BOTH SIDES</span><h2>The one who answers the ticket <span className="gradient-text">and ships the fix.</span></h2></div>
          <p>Real issues I&apos;ve worked, from the first report to the root cause. Pick a case to see the ticket beside how it was resolved.</p>
        </div>
        <div data-reveal><Compare /></div>
        <div className="sides" data-reveal>
          <div>
            <h3 className="section-kicker"><LifeBuoy size={15} /> SUPPORT</h3>
            <ol>{sides.support.map((s, i) => <li key={s}><span>0{i + 1}</span>{s}</li>)}</ol>
          </div>
          <div>
            <h3 className="section-kicker"><Wrench size={15} /> BUILD</h3>
            <ol>{sides.build.map((s, i) => <li key={s}><span>0{i + 1}</span>{s}</li>)}</ol>
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────── */}
      <section className="section section-alt" id="experience">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div><span className="section-kicker">04 / EXPERIENCE</span><h2>Technical depth. <span className="gradient-text">Operational mindset.</span></h2></div>
            <p>Founding and building products, client implementations and years of live production support.</p>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-item" key={job.role + job.dates} data-reveal>
                <div className="timeline-marker">{index === 0 ? <BriefcaseBusiness size={17} /> : <span>{String(index + 1).padStart(2, "0")}</span>}</div>
                <div className="timeline-content">
                  <div className="job-heading"><div><h3>{job.role}</h3><p>{job.org}</p></div><span className="job-date">{job.dates}</span></div>
                  <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Toolkit ──────────────────────────────────── */}
      <section className="section shell">
        <div className="section-heading" data-reveal>
          <div><span className="section-kicker">05 / TOOLKIT</span><h2>The tools behind <span className="gradient-text">the work.</span></h2></div>
          <p>AI platforms, automation, integrations, software engineering and the support stack that keeps it all running.</p>
        </div>
        <div className="skills-list" data-reveal>
          {skillGroups.map((g) => <div className="skill-row" key={g.title}><h3>{g.title}</h3><p>{g.items}</p></div>)}
        </div>
        <div className="education" data-reveal>
          <div><span className="section-kicker">EDUCATION</span><h3>Continuous learning, grounded in engineering.</h3></div>
          <div className="education-item"><strong>WeThinkCode_</strong><span>Certificate in Software Engineering · NQF Level 6 · 2020–2022</span></div>
          <div className="education-item"><strong>Tshwane University of Technology</strong><span>Diploma in Information Technology · 2018–2024</span></div>
        </div>
        <div className="credentials" data-reveal>
          {credentials.map((c) => (
            <div className="credential" key={c.title}>
              <span className="section-kicker"><Award size={14} /> {c.kicker.toUpperCase()}</span>
              <strong>{c.title}</strong>
              <span>{c.meta}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section className="contact-section shell" id="contact">
        <div className="contact-card" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="contact-portrait" src="/portrait.jpg" alt={site.name} width={88} height={88} />
          <span className="section-kicker">06 / LET&apos;S CONNECT</span>
          <h2>Something worth automating,<br />or <span className="gradient-text">something broken?</span></h2>
          <p>I&apos;m open to AI implementation, integration and technical support engineering roles. Remote, including US hours.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${site.email}?subject=Let%27s%20connect`}>Start a conversation <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href={linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={15} /> LinkedIn</a>
          </div>
          <div className="contact-email"><Mail size={15} /> {site.email}</div>
        </div>
      </section>

      <footer className="footer shell">
        <Brand />
        <span>© 2026 {site.name}. Supported and built by the same hands.</span>
        <div className="footer-links">
          <a href={linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={15} /> LinkedIn</a>
          <a href={github} target="_blank" rel="noreferrer"><GithubIcon size={15} /> GitHub <ArrowUpRight size={13} /></a>
        </div>
      </footer>
    </main>
  );
}
