import "./ProfessionalPortfolio.css";

type Project = {
  number: string;
  name: string;
  type: string;
  summary: string;
  details: string;
  stack: string[];
  href?: string;
  label?: string;
  tone: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "TraceLens",
    type: "Developer tooling · In progress",
    summary: "Find out what changes when an API gets busy.",
    details: "A local performance workbench that runs repeatable k6 traffic against a PostgreSQL-backed API. Compare latency and throughput across runs, then inspect pool and query evidence.",
    stack: ["React", "TypeScript", "PostgreSQL", "k6", "Docker"],
    href: "https://github.com/danielngira/tracelens",
    label: "View on GitHub",
    tone: "trace",
  },
  {
    number: "02",
    name: "HookRelay",
    type: "Backend reliability · In progress",
    summary: "Make webhook delivery behavior visible and repeatable.",
    details: "A local delivery workbench that queues event batches with Redis and BullMQ, signs webhook requests, and records retries and outcomes. Compare receiver behavior and worker concurrency using saved runs.",
    stack: ["TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    href: "https://github.com/danielngira/hookrelay",
    label: "View on GitHub",
    tone: "hookrelay",
  },
  {
    number: "03",
    name: "Ledger",
    type: "Full-stack application · In progress",
    summary: "A finance app designed around a reliable data layer.",
    details: "Building account and transaction workflows with a TypeScript API, shared validation, PostgreSQL migrations, automated tests, and Docker-based environments.",
    stack: ["React", "Express", "PostgreSQL", "Drizzle", "Terraform"],
    href: "https://github.com/Sanaa-Studio/ledger",
    label: "View on GitHub",
    tone: "ledger",
  },
  {
    number: "04",
    name: "LEGv8 / ARM64 simulator",
    type: "Computer architecture · Completed",
    summary: "Make processor behavior visible, one cycle at a time.",
    details: "A five-stage pipeline simulator with hazard detection, forwarding, branch handling, and cache behavior. Performance counters and traces show stalls, CPI, and cache activity.",
    stack: ["C++", "Computer architecture", "Simulation"],
    href: "https://github.com/danielngira/computer-architecture-lab-2",
    label: "View on GitHub",
    tone: "systems",
  },
  {
    number: "05",
    name: "Accessibility reporting",
    type: "Workflow automation · Completed",
    summary: "Turn a two-hour monthly report into a five-minute workflow.",
    details: "Python automation pulls data from Siteimprove, cleans it with pandas, and publishes a consistent report to Google Sheets—cutting manual formatting and transcription.",
    stack: ["Python", "pandas", "REST APIs", "Google Sheets"],
    href: "https://github.com/danielngira/automating-cda-reporting",
    label: "View on GitHub",
    tone: "automation",
  },
  {
    number: "06",
    name: "College Life Simulator",
    type: "Interactive application · Completed",
    summary: "A small simulation about decisions, schedules, and time.",
    details: "A React game that updates a student's day as the player makes choices, with custom scheduling and state-transition logic.",
    stack: ["React", "JavaScript", "Game logic"],
    href: "https://github.com/spencerdearman/procrastination-simulator",
    label: "View on GitHub",
    tone: "play",
  },
  {
    number: "07",
    name: "Word search solver",
    type: "Algorithms · Completed",
    summary: "A focused exercise in search and constraint handling.",
    details: "A solver that searches a grid for target words, applying direction-aware traversal to locate matches efficiently.",
    stack: ["Python", "Grid search", "PyEnchant"],
    href: "https://github.com/danielngira/word-search-solver",
    label: "View on GitHub",
    tone: "search",
  },
];

export default function ProfessionalPortfolio({ onHome }: { onHome: () => void }) {
  return (
    <main className="professional-site">
      <header className="pf-header">
        <button className="pf-brand" onClick={onHome} aria-label="Return to experience chooser">
          <span className="pf-brand-mark">DN</span>
          <span>Daniel Ngira</span>
        </button>
        <nav className="pf-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="pf-nav-contact" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="pf-hero" id="top">
        <div className="pf-hero-copy">
          <p className="professional-eyebrow"><span /> SOFTWARE ENGINEER · CHICAGO</p>
          <h1>I build products<br />and the systems<br /><em>behind them.</em></h1>
          <p className="pf-hero-intro">I’m Daniel, a software engineer and University of Chicago computer science graduate. I work across product, backend, and cloud infrastructure to turn ideas into dependable software.</p>
          <div className="pf-hero-actions">
            <a className="pf-primary-button" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="pf-secondary-button" href="mailto:danielngira@uchicago.edu">Let’s talk <span aria-hidden="true">↗</span></a>
          </div>
          <div className="pf-availability"><span /> Open to early-career software engineering roles</div>
        </div>

        <div className="pf-hero-art" aria-label="Abstract illustration of interconnected software layers" role="img">
          <div className="pf-art-glow" />
          <div className="pf-art-ring ring-one" />
          <div className="pf-art-ring ring-two" />
          <div className="pf-art-card art-api"><span>API</span><i>request → response</i></div>
          <div className="pf-art-card art-service"><span>Service</span><i>business logic</i></div>
          <div className="pf-art-card art-data"><span>Data</span><i>PostgreSQL</i></div>
          <div className="pf-art-node node-one" /><div className="pf-art-node node-two" /><div className="pf-art-node node-three" />
          <span className="pf-art-caption">PRODUCT × SYSTEMS</span>
        </div>
        <a className="pf-scroll-cue" href="#work">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
      </section>

      <section className="pf-section pf-work" id="work">
        <div className="pf-section-heading">
          <div><p className="professional-eyebrow">A FEW THINGS I’VE MADE</p><h2>Selected work<span>.</span></h2></div>
          <p className="pf-section-aside">I like projects that make a real workflow easier—or make a complex system easier to understand.</p>
        </div>
        <div className="pf-project-grid">
          {projects.map(project => <ProjectCard key={project.number} project={project} />)}
        </div>
      </section>

      <section className="pf-experience-section" id="experience">
        <div className="pf-section pf-experience">
          <div className="pf-section-heading">
            <div><p className="professional-eyebrow">WHERE I’VE CONTRIBUTED</p><h2>Experience<span>.</span></h2></div>
            <p className="pf-section-aside">Small teams, meaningful ownership, and software used by real people.</p>
          </div>
          <article className="pf-role">
            <div className="pf-role-date">JUN — AUG 2025</div>
            <div className="pf-role-main"><div className="pf-role-heading"><h3>Software Engineering Intern</h3><span>01</span></div><p className="pf-company">Mila Support <i>·</i> Remote</p><p>Built features for an AI-powered postpartum care app on a two-person team, from early development through pilot launch. Connected expert scheduling with Calendly, created privacy and partner-sharing controls, and shipped personalized weekly plans and AI-generated guidance.</p><div className="pf-tags"><span>React Native</span><span>TypeScript</span><span>Supabase</span><span>OpenAI API</span></div></div>
          </article>
          <article className="pf-role">
            <div className="pf-role-date">JUN — AUG 2024</div>
            <div className="pf-role-main"><div className="pf-role-heading"><h3>Software Engineering Intern</h3><span>02</span></div><p className="pf-company">GridLink <i>·</i> Remote</p><p>Designed modular AWS infrastructure in CDK and TypeScript, separating frontend, backend, logging, and shared resources. Built isolated beta and production environments, managed PostgreSQL on RDS, and automated CI/CD workflows that reduced deployments from about 30 minutes to 8.</p><div className="pf-tags"><span>AWS CDK</span><span>TypeScript</span><span>RDS</span><span>ECS Fargate</span><span>GitHub Actions</span></div></div>
          </article>
        </div>
      </section>

      <section className="pf-section pf-about" id="about">
        <div className="pf-about-intro"><p className="professional-eyebrow">A LITTLE ABOUT ME</p><h2>Curious about<br />what makes things <em>work.</em></h2></div>
        <div className="pf-about-copy"><p>I’m drawn to the seams between product engineering and systems work: the API behavior behind an interface, the infrastructure that makes a release repeatable, or the small automation that gives a team time back.</p><p>At UChicago, I studied computer science and built a foundation in systems programming, computer architecture, and algorithms. Outside work, I keep making things that help me learn—currently a finance app, a local API performance workbench, and small experiments in software and systems.</p>
          <div className="pf-education"><span className="education-mark">U</span><div><strong>The University of Chicago</strong><span>B.S. Computer Science · June 2026</span></div><small>ODYSSEY SCHOLAR</small></div>
          <div className="pf-focus"><span>AREAS I ENJOY</span><p>Product engineering <i>·</i> Backend systems <i>·</i> Cloud infrastructure <i>·</i> Developer tools</p></div>
        </div>
      </section>

      <section className="pf-contact" id="contact">
        <div className="pf-contact-inner"><p className="professional-eyebrow">HAVE A GOOD PROBLEM?</p><h2>Let’s build something<br /><em>useful.</em></h2><p>I’m looking for early-career software engineering roles where I can contribute to product velocity, infrastructure quality, and technically ambitious systems.</p><div className="pf-contact-links"><a className="pf-primary-button" href="mailto:danielngira@uchicago.edu">danielngira@uchicago.edu <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/danielngira" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/danielngira" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
      </section>

      <footer className="pf-footer"><button className="pf-footer-home" onClick={onHome}>← Choose another experience</button><span>DESIGNED & BUILT BY DANIEL NGIRA · {new Date().getFullYear()}</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`pf-project-card tone-${project.tone}`}>
      <div className="pf-project-visual" aria-hidden="true">
        <span className="pf-visual-number">{project.number}</span>
        <ProjectVisual tone={project.tone} />
        <span className="pf-visual-type">{project.type}</span>
      </div>
      <div className="pf-project-content">
        <p className="pf-project-type">{project.type}</p>
        <h3>{project.name}</h3>
        <strong>{project.summary}</strong>
        <p className="pf-project-details">{project.details}</p>
        <div className="pf-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        {project.href && <a className="pf-project-link" href={project.href} target="_blank" rel="noreferrer">{project.label} <span aria-hidden="true">↗</span></a>}
      </div>
    </article>
  );
}

function ProjectVisual({ tone }: { tone: string }) {
  if (tone === "trace") return <div className="visual-trace"><i /><i /><i /><i /><i /><span>p95</span></div>;
  if (tone === "hookrelay") return <div className="visual-hookrelay"><span>EVENT</span><i>→</i><b>QUEUE</b><i>→</i><span>DELIVERY</span><small>retry · backoff</small></div>;
  if (tone === "ledger") return <div className="visual-ledger"><div className="ledger-card"><span>NET WORTH</span><b>$12,480</b><i>↗ 8.2%</i></div><div className="ledger-lines"><i /><i /><i /></div></div>;
  if (tone === "systems") return <div className="visual-pipeline"><span>IF</span><i /> <span>ID</span><i /> <span>EX</span><i /> <span>MEM</span><i /> <span>WB</span></div>;
  if (tone === "automation") return <div className="visual-automation"><span>API</span><i>→</i><span>DATA</span><i>→</i><span>SHEETS</span></div>;
  if (tone === "play") return <div className="visual-play"><span>MON</span><span>TUE</span><span>WED</span><b>↗</b></div>;
  return <div className="visual-search"><i>⌕</i><span>WORD<br />FOUND</span><b>↘</b></div>;
}
