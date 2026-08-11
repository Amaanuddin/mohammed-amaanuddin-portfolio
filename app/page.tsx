const work = [
  {
    index: "01",
    label: "Wisedoc",
    title: "AI resume screening that moved beyond the demo",
    description:
      "Built an LLM-powered screening system that ranks and shortlists candidates against a job description, improving screening efficiency by approximately 60%.",
    proof: "60% screening efficiency gain",
    tags: ["LLMs", "AWS Serverless", "Product Engineering"],
    href: "https://wisedoc.io",
    linkLabel: "Visit Wisedoc",
  },
  {
    index: "02",
    label: "Zluri",
    title: "Fewer calls. Faster insights. Enterprise impact.",
    description:
      "Re-engineered the reporting path from six calls per request to one, introduced Redis caching, and shipped license optimisation workflows tied to enterprise contracts.",
    proof: "83% fewer reporting API calls",
    tags: ["Node.js", "Redis", "SaaS Architecture"],
    href: "https://app.zluri.com/",
    linkLabel: "Open Zluri",
  },
  {
    index: "03",
    label: "FlipItNews",
    title: "News classification with measurable model quality",
    description:
      "Developed a BERT text-classification engine and a custom summarisation pipeline for multi-label news categorisation.",
    proof: "0.89 macro F1 score",
    tags: ["BERT", "NLP", "Summarisation"],
  },
  {
    index: "04",
    label: "Zee",
    title: "Recommendation systems tuned for relevance",
    description:
      "Built collaborative filtering and hybrid recommenders, then tuned matrix-factorisation models with PySpark MLlib.",
    proof: "24% hit-rate improvement",
    tags: ["Recommenders", "PySpark", "Matrix Factorisation"],
  },
  {
    index: "05",
    label: "NinjaCart",
    title: "Demand forecasting designed around operations",
    description:
      "Modelled weekly inventory demand with LSTM and ARIMA, using backtests to connect prediction quality with simulated stockout reduction.",
    proof: "27% fewer simulated stockouts",
    tags: ["LSTM", "Time Series", "Forecasting"],
  },
];

const experience = [
  ["2025 — NOW", "TechNube Solutions", "Co-Founder & Senior Software Engineer"],
  ["2024", "Deel", "Software Engineer"],
  ["2022 — 2023", "Zluri", "Senior Software Engineer"],
  ["2019 — 2022", "Wisedoc", "Founding Engineer → Senior Software Engineer"],
];

const expertise = [
  {
    number: "A",
    title: "Backend systems",
    copy: "Node.js, Python, REST APIs, distributed systems, caching, background jobs and database design.",
  },
  {
    number: "B",
    title: "Production AI",
    copy: "LLMs, retrieval and ranking, NLP, recommendation systems and forecasting—shipped with monitoring and guardrails.",
  },
  {
    number: "C",
    title: "Cloud delivery",
    copy: "AWS Lambda, API Gateway, DynamoDB, S3, Docker, CI/CD and serverless architecture built for reliable releases.",
  },
  {
    number: "D",
    title: "Technical leadership",
    copy: "Architecture, requirements, mentoring, code review and full-cycle product ownership from first commit to production.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Mohammed Amaanuddin Parvez — home">
          MAP<span className="brand-mark">/</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:amaanuddinparvez@gmail.com?subject=Senior%20engineering%20opportunity">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          Senior Backend Engineer · Applied AI
        </div>
        <h1>
          I build backend systems
          <span>that make AI useful.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            Nine years turning complex product ideas into reliable software—across
            SaaS, serverless platforms, and AI features used by paying customers.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              See selected work <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-quiet" href="https://github.com/Amaanuddin" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-core">9+</div>
          <div className="orbit-copy">years<br />shipping</div>
        </div>
      </header>

      <section className="proof-strip" aria-label="Career highlights">
        <div className="shell proof-grid">
          <div><strong>5+</strong><span>products shipped<br />zero to production</span></div>
          <div><strong>40%</strong><span>faster<br />deployments</span></div>
          <div><strong>83%</strong><span>fewer reporting<br />API calls</span></div>
          <div><strong>$500K</strong><span>enterprise contract<br />impact</span></div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 2020—2025</p>
          <h2>Systems with<br />a reason to exist.</h2>
          <p className="section-intro">
            Product outcomes first. Architecture, AI, and infrastructure in service
            of something measurable.
          </p>
        </div>
        <div className="work-list">
          {work.map((item) => (
            <article className="work-card" key={item.label}>
              <div className="work-index">{item.index}</div>
              <div className="work-main">
                <p className="work-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p className="work-description">{item.description}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="work-proof">
                <span>Outcome</span>
                <strong>{item.proof}</strong>
                {item.href && (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section">
        <div className="shell expertise-layout">
          <div className="expertise-lead">
            <p className="eyebrow eyebrow-light">What I bring</p>
            <h2>Depth where<br />it matters.</h2>
            <p>
              I work comfortably from architecture whiteboard to production incident,
              balancing velocity with systems that stay maintainable.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item) => (
              <article key={item.number}>
                <span className="expertise-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell experience-section" id="experience">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Experience</p>
          <h2>Built across<br />the product arc.</h2>
        </div>
        <div className="timeline">
          {experience.map(([year, company, role]) => (
            <div className="timeline-row" key={`${company}-${role}`}>
              <span>{year}</span>
              <strong>{company}</strong>
              <p>{role}</p>
            </div>
          ))}
          <div className="timeline-row education-row">
            <span>2025</span>
            <strong>MS, Computer Science</strong>
            <p>Artificial Intelligence &amp; Machine Learning · Woolf University</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <p className="eyebrow">Have a hard problem?</p>
          <h2>Let&apos;s build the<br /><em>useful</em> version.</h2>
          <a className="contact-email" href="mailto:amaanuddinparvez@gmail.com?subject=Senior%20engineering%20opportunity">
            amaanuddinparvez@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-footer">
            <span>Hyderabad, India · Open to global opportunities</span>
            <div>
              <a href="https://www.linkedin.com/in/amaanuddin" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/Amaanuddin" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
