export const site = {
  name: "Nephtally Moshabeshe",
  wordmark: "nephtally moshabeshe",
  role: "AI Implementation & Integration Engineer",
  email: "moshneph@gmail.com",
  location: "Johannesburg",
  tz: "Africa/Johannesburg",
  tzLabel: "GMT+2",
  status: "Open to remote roles · US hours",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nephtally-m-01028691/" },
    { label: "GitHub", href: "https://github.com/mmoshabe" },
    { label: "Email", href: "mailto:moshneph@gmail.com" },
  ],
};

export const nav = [
  { n: "01", label: "Home", href: "#top" },
  { n: "02", label: "Work", href: "#work" },
  { n: "03", label: "About", href: "#about" },
  { n: "04", label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "2022", label: "In support since" },
  { value: "8", label: "SaaS products built" },
  { value: "3+", label: "Years in production" },
];

export const frames = [
  {
    n: "01",
    title: "The report",
    angle: 12,
    body: "A customer writes in. A sync has stopped, an order is stuck, a webhook went quiet. I listen first, then I ask the right questions in plain language.",
  },
  {
    n: "02",
    title: "The triage",
    angle: 47,
    body: "Logs, payloads, API responses, SLA clock. I reproduce the fault and narrow it down. If it needs escalating, it goes up with symptoms, steps and impact already written.",
  },
  {
    n: "03",
    title: "The root cause",
    angle: 101,
    body: "Rate limits, pagination edge cases, expired OAuth tokens, a bad mapping in a workflow. I don't stop at the workaround. I find the actual reason it broke.",
  },
  {
    n: "04",
    title: "The fix",
    angle: 158,
    body: "A lasting change, not a patch. Then the runbook, the knowledge-base note and the workflow tweak that stop it coming back.",
  },
];

export const work = [
  {
    n: "01",
    name: "11OCLOCK",
    slug: "11oclock",
    tag: "Co-founder · Systems engineering studio",
    desc: "Studio that builds, ships and supports production software: platforms, ERP/CRM/payment integrations, CI/CD and monitoring.",
    href: "https://11oclock.co.za",
    cta: "Open live site",
    tone: ["#141414", "#f4f1ea"],
  },
  {
    n: "02",
    name: "Smooth Links",
    slug: "smooth-links",
    tag: "Founder · Accounting + WhatsApp automation",
    desc: "Invoicing, VAT, bank reconciliation and payroll for SA small businesses, with a WhatsApp assistant that takes bookings.",
    href: "https://smoothlinks.co.za",
    cta: "Open live site",
    tone: ["#0b2e22", "#5ef2a8"],
  },
  {
    n: "03",
    name: "Reeliant",
    slug: "reeliant",
    tag: "Lead developer · Higher-ed SaaS",
    desc: "Academic planning, commencement and accreditation suite for registrars, deans and advisors.",
    href: "https://reeliant.io",
    cta: "Open live site",
    tone: ["#10213d", "#9cc2ff"],
  },
  {
    n: "04",
    name: "ShipWizard",
    slug: "shipwizard",
    tag: "Lead developer · Shipping & logistics",
    desc: "Compares live carrier rates and sells printer-free labels you drop off with a QR code.",
    href: "https://shipwizard.io",
    cta: "Open live site",
    tone: ["#24133d", "#c9a6ff"],
  },
  {
    n: "05",
    name: "CourseCommand",
    slug: "coursecommand",
    tag: "Lead developer · Golf instruction SaaS",
    desc: "Golf teaching pros manage clients and track progress; golfers book lessons and keep a permanent lesson record.",
    href: "https://coursecommand.io",
    cta: "Open live site",
    tone: ["#0f2b1c", "#8fe3a4"],
  },
  {
    n: "06",
    name: "Parts Match",
    slug: "parts-match",
    tag: "Marketplace · Stripe Connect",
    desc: "Automotive parts marketplace with split payouts to sellers.",
    href: "https://parts-match.com",
    cta: "Open live site",
    tone: ["#1b1b1b", "#ff5a1f"],
  },
  {
    n: "07",
    name: "Business Essentials CRM",
    slug: "business-essentials-crm",
    tag: "CRM · Gmail, Twilio, Stripe",
    desc: "Sales pipeline that ties email, SMS and payments into one view.",
    href: "https://crm.elite-automations.ai",
    cta: "Open live site",
    tone: ["#0f2a3d", "#7fd1ff"],
  },
  {
    n: "08",
    name: "RoboCommerce",
    slug: "robocommerce",
    tag: "E-commerce · Shopify app",
    desc: "Multi-tenant Shopify app, with reviewer guides written for app review.",
    href: null,
    cta: "Case notes on request",
    tone: ["#1d2b1a", "#a6f07a"],
  },
  {
    n: "09",
    name: "CampusBot",
    slug: "campusbot",
    tag: "AI voice · Vapi, Pinecone",
    desc: "Voice assistant that answers admissions questions from a knowledge base.",
    href: null,
    cta: "Case notes on request",
    tone: ["#2a1a33", "#d59bff"],
  },
  {
    n: "10",
    name: "EliteCFO",
    slug: "elitecfo",
    tag: "FinTech · Plaid",
    desc: "Finance app on live bank data. I chased its sync failures down to root cause.",
    href: null,
    cta: "Case notes on request",
    tone: ["#2e2614", "#ffd166"],
  },
  {
    n: "11",
    name: "AI Booking Assistant",
    slug: "ai-booking-assistant",
    kind: "ai",
    tag: "Implementation · Claude + n8n, live at a salon",
    desc: "Website enquiries sorted by AI with a drafted reply checked against the price list, logged to Sheets and emailed to the owner. About $0.001 per enquiry, hosted for $0.",
    href: "https://github.com/mmoshabe/ai-booking-assistant",
    cta: "View on GitHub",
    tone: ["#2a1630", "#f7a8d8"],
  },
  {
    n: "12",
    name: "AI Support Triage",
    slug: "ai-support-triage",
    kind: "ai",
    tag: "AI engineering · Multi-agent on Claude",
    desc: "Classifier, drafter and critic agents triage support tickets; risky ones go to a human in Slack. 96.8% routing accuracy on a held-out set, $0.018 per ticket.",
    href: "https://github.com/mmoshabe/ai-support-triage",
    cta: "View on GitHub",
    tone: ["#10213a", "#7cc4ff"],
  },
  {
    n: "13",
    name: "Job Copilot",
    slug: "job-copilot",
    kind: "ai",
    tag: "AI engineering · Daily agent",
    desc: "Scores job posts against my CV and writes cover letters that a second agent fact-checks, so fabricated claims went to 0. Runs daily with a Slack digest.",
    href: "https://github.com/mmoshabe/job-copilot",
    cta: "View on GitHub",
    tone: ["#1d2a14", "#b8f27c"],
  },
  {
    n: "14",
    name: "AI Adoption Playbook",
    slug: "ai-adoption-playbook",
    kind: "ai",
    tag: "AI strategy · ROI + POPIA governance",
    desc: "Build vs buy, an ROI model with sensitivity analysis (about 3-month payback), a gated rollout and a one-page POPIA governance checklist.",
    href: "https://github.com/mmoshabe/ai-adoption-playbook",
    cta: "View on GitHub",
    tone: ["#2e1d10", "#ffb27c"],
  },
];

export const experience = [
  {
    role: "Co-founder",
    org: "11OCLOCK",
    dates: "Aug 2026 – Present",
    points: [
      "Co-founded and built a systems engineering studio that builds, ships and supports production software.",
      "Delivers platforms, ERP/CRM/payment integrations, CI/CD pipelines, monitoring and ongoing support.",
    ],
  },
  {
    role: "Founder",
    org: "Smooth Links",
    dates: "Aug 2026 – Present",
    points: [
      "Founded and built an accounting and WhatsApp automation platform for South African small businesses.",
      "Covers invoicing, VAT, bank reconciliation and PAYE/UIF/SDL payroll, with Paystack card payments.",
      "Runs a WhatsApp assistant that answers enquiries and takes bookings, plus AI-read receipts and SMS reminders.",
    ],
  },
  {
    role: "Lead Engineer",
    org: "Elite Automations AI",
    dates: "Dec 2025 – Aug 2026",
    points: [
      "Remained the technical support contact for clients while leading product builds.",
      "Designed an AI voice admissions assistant (Vapi + Pinecone) grounded in a knowledge base.",
      "Designed and built 8 SaaS products across e-commerce, AI voice, marketplaces, FinTech and CRM.",
      "Lead developer on client platforms Reeliant (higher-ed), ShipWizard (shipping) and CourseCommand (golf instruction).",
      "Resolved production issues on live products, including bank sync failures and API pagination edge cases.",
      "Wrote deployment runbooks, Shopify reviewer guides and integration documentation.",
    ],
  },
  {
    role: "Automation & Integration Engineer",
    org: "Elite Automations AI",
    dates: "Jun 2025 – Dec 2025",
    points: [
      "Diagnosed and fixed broken integrations across CRM, email, webhooks and third-party APIs.",
      "Walked clients new to GoHighLevel through its more complex features, step by step.",
      "Built and optimised workflows in GoHighLevel, HubSpot and Make to remove failure points.",
      "Built React/TypeScript dashboards and PostgreSQL reporting views.",
    ],
  },
  {
    role: "Junior Developer · Systems Support",
    org: "Körber (HighJump WMS)",
    dates: "Jul 2022 – Apr 2024",
    points: [
      "Resolved 20+ incidents a week via ServiceNow, PagerDuty and Moogsoft at 95%+ SLA compliance.",
      "Troubleshot RF scanner errors, stuck orders, interface failures and label printing live.",
      "Cut repeat incidents by 20% through root cause analysis and preventive fixes.",
      "Optimised SQL Server queries and scripts, improving performance by 30%.",
    ],
  },
];

export const sides = {
  support: [
    "Incident management & SLAs",
    "Root cause analysis",
    "Live, step-by-step guidance",
    "Escalation documentation",
    "Knowledge base & runbooks",
  ],
  build: [
    "REST APIs, webhooks & OAuth",
    "GoHighLevel, HubSpot & Make",
    "TypeScript, React & Next.js",
    "SQL Server & PostgreSQL",
    "OpenAI, Claude, Vapi & Pinecone",
  ],
};

export const credentials = [
  {
    kicker: "Award",
    title: "1st Place, Empire Partner Foundation Tech Hub Hackathon",
    meta: "November 2020",
  },
  {
    kicker: "Recognition",
    title: "Intern of the Month, for outstanding performance and dedication",
    meta: "Internship",
  },
  {
    kicker: "Certification",
    title: "Oracle Autonomous Database Cloud 2019 Certified Specialist",
    meta: "Oracle · plus SQL Nanodegree (Udacity) and MTA Database Fundamentals (Microsoft)",
  },
];

export const stats = [
  { value: "3+", label: "Years resolving production issues" },
  { value: "8", label: "SaaS products designed & built" },
  { value: "30%", label: "Faster SQL Server queries" },
  { value: "7", label: "Products live in production" },
  { value: "1st", label: "Place, Tech Hub Hackathon" },
];

/** Cases for the "one ticket, both sides" panel. `bad: true` log lines render in red. */
export const tickets = [
  {
    id: "INC-0412",
    system: "EliteCFO · Plaid",
    short: "Bank sync",
    priority: "P2",
    symptom: "Bank transactions stopped syncing at 09:14",
    log: [
      { t: "09:14:02 GET /transactions/sync → 200 (has_more: true)" },
      { t: "09:14:02 next_cursor not persisted", bad: true },
      { t: "09:14:03 GET /transactions/sync → 200 (same page again)" },
      { t: "09:14:03 upsert failed: 412 duplicate rows", bad: true },
      { t: "09:20:11 customer: “my balance is wrong”" },
    ],
    cause: "Pagination cursor dropped between pages",
    steps: [
      "Reproduced the sync against a sandbox item and logged every page request",
      "Saw the same page returned twice: the cursor was only saved after the final page",
      "Saved the cursor after each page and looped until has_more was false",
      "Made the write idempotent (upsert on transaction_id) and replayed the backfill",
      "Told the customer what happened in plain language and confirmed their balance",
    ],
    prevent: "Alert on sync runs that stall, plus a runbook for replaying a backfill.",
  },
  {
    id: "INC-0388",
    system: "HubSpot → GoHighLevel",
    short: "Rate limits",
    priority: "P2",
    symptom: "New leads missing from the CRM after a campaign launch",
    log: [
      { t: "10:02:15 webhook contact.created ×640 in 3 min" },
      { t: "10:02:19 POST /contacts → 429 Too Many Requests", bad: true },
      { t: "10:02:19 Make scenario: error, record dropped", bad: true },
      { t: "10:41:00 sales: “leads aren’t showing up”" },
    ],
    cause: "Burst traffic hit the API rate limit and failed records weren’t retried",
    steps: [
      "Compared lead counts in both systems to size the gap",
      "Traced the dropped records to 429 responses in the scenario history",
      "Added exponential backoff and queued the writes in small batches",
      "Backfilled the missing contacts from HubSpot and reconciled the counts",
    ],
    prevent: "A daily count check between both systems that flags any mismatch.",
  },
  {
    id: "INC-0371",
    system: "CRM · Gmail OAuth",
    short: "Expired token",
    priority: "P1",
    symptom: "Follow-up emails silently stopped sending",
    log: [
      { t: "08:00:01 scheduler: 37 follow-ups queued" },
      { t: "08:00:02 POST oauth2/token → 400 invalid_grant", bad: true },
      { t: "08:00:02 send skipped, no error surfaced to the user", bad: true },
      { t: "Day 3 · client: “nobody is replying to us”" },
    ],
    cause: "Refresh token rotated, but the new one was never stored",
    steps: [
      "Found the invalid_grant errors in the logs and confirmed with the client when sending stopped",
      "Found that each token refresh issued a new refresh token that we discarded",
      "Saved the rotated token on every refresh",
      "Added a reconnect prompt in the app when a grant is revoked",
      "Re-sent the queued follow-ups once the client approved",
    ],
    prevent: "Failed sends now raise an alert and show in the UI, not just in logs.",
  },
  {
    id: "INC-0355",
    system: "GoHighLevel workflow",
    short: "Duplicate SMS",
    priority: "P3",
    symptom: "Customers receiving the same appointment SMS twice",
    log: [
      { t: "14:10:05 webhook appointment.booked → workflow started" },
      { t: "14:10:35 webhook retried (no 200 within timeout)", bad: true },
      { t: "14:10:35 workflow started again → second SMS sent", bad: true },
    ],
    cause: "The upstream webhook was retried and the workflow had no duplicate check",
    steps: [
      "Walked through the workflow history with the client, step by step, on a call",
      "Matched each duplicate to a retried webhook delivery",
      "Added a contact tag and a filter so each booking only triggers once",
      "Showed the client how to spot and pause a misfiring workflow themselves",
    ],
    prevent: "Duplicate guards are now a standard step in every client workflow I build.",
  },
  {
    id: "INC-0207",
    system: "Körber · HighJump WMS",
    short: "Stuck orders",
    priority: "P1",
    symptom: "Orders stuck in “allocated”, pickers idle on RF scanners",
    log: [
      { t: "06:12:40 host interface: order batch received" },
      { t: "06:12:41 interface message failed: invalid UOM", bad: true },
      { t: "06:12:41 downstream wave not released", bad: true },
      { t: "06:30:00 PagerDuty: warehouse escalation" },
    ],
    cause: "One malformed order line blocked the whole interface batch",
    steps: [
      "Took the PagerDuty escalation and confirmed the impact with the shift lead",
      "Found the failed interface message and the order line it rejected",
      "Corrected the unit of measure, reprocessed the batch and released the wave",
      "Escalated to the host-system team with symptoms, steps and impact written up",
    ],
    prevent: "A monitor on failed interface messages, so a bad line is caught before the shift starts.",
  },
  {
    id: "INC-0189",
    system: "SQL Server · SSRS",
    short: "Slow reports",
    priority: "P3",
    symptom: "Daily operations report timing out each morning",
    log: [
      { t: "07:00:00 SSRS subscription started" },
      { t: "07:05:00 query timeout after 300 s", bad: true },
      { t: "07:05:00 report not delivered to the ops managers", bad: true },
    ],
    cause: "Full table scans from a non-sargable date filter and a missing index",
    steps: [
      "Captured the actual execution plan for the slow query",
      "Rewrote the date filter so it could use an index",
      "Added a covering index after testing it against the write load",
      "Verified the timings: queries ran about 30% faster and the report delivered on time",
    ],
    prevent: "Query timing is now tracked on the support team's SLA dashboard.",
  },
];

export const metrics = [
  { value: "96.8", unit: "%", label: "AI triage routing accuracy*" },
  { value: "95", unit: "%+", label: "Production support SLA" },
  { value: "8", unit: "", label: "SaaS products built" },
  { value: "7", unit: "", label: "Products live in production" },
];

export const capabilities = [
  { icon: "bot", title: "AI assistants & agents", text: "Conversational assistants, multi-agent workflows, prompt design and knowledge-grounded answers." },
  { icon: "workflow", title: "Workflow automation", text: "Business processes automated in n8n, Make, GoHighLevel, HubSpot and Power Automate." },
  { icon: "braces", title: "System integration", text: "REST APIs, webhooks and OAuth: reliable connections between CRMs, payments, banks and ERPs." },
  { icon: "lifebuoy", title: "Production support & RCA", text: "Incident management against SLA, root cause analysis and fixes that stay fixed." },
  { icon: "shield", title: "AI quality & oversight", text: "Evaluation sets, output validation, human approval steps and POPIA-aware adoption." },
  { icon: "code", title: "Software & data", text: "TypeScript, React, Next.js and Python, with PostgreSQL, SQL Server and reporting." },
] as const;

export const approach = [
  { title: "Discover", text: "Understand the process, the users and the actual problem." },
  { title: "Build", text: "Pick the right mix of AI, automation and conventional software." },
  { title: "Validate", text: "Test outputs, edge cases, accuracy and human escalation." },
  { title: "Support", text: "Document it, train people and own it in production." },
];

export const skillGroups = [
  { title: "AI & LLMs", items: "Claude · OpenAI · Vapi · Pinecone · AI agents · Prompt engineering · RAG · Knowledge bases · AI evaluation" },
  { title: "Automation", items: "n8n · Make · GoHighLevel · HubSpot · Power Automate · Zapier" },
  { title: "Integration", items: "REST APIs · Webhooks · OAuth · Stripe Connect · Paystack · Plaid · Shopify · Twilio · Gmail" },
  { title: "Engineering & data", items: "TypeScript · React · Next.js · Python · PostgreSQL · SQL Server · Power BI · SSRS" },
  { title: "Support & operations", items: "ServiceNow · PagerDuty · Moogsoft · Incident management · RCA · Runbooks · SOPs · Client onboarding" },
];
