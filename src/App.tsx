import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './App.css';
import logo from './assets/SamasthamNew.png';
import doctorImage from './assets/doctorImg.png';
import { brandGradient } from './theme';

const stats = [
  {
    label: 'Care time saved',
    value: '8-12 min/visit',
    detail: 'Notes, billing codes, and orders drafted before your next patient.',
  },
  {
    label: 'Always-on support',
    value: '24/7',
    detail: 'Patient helpdesk that answers, books, and follows up any time.',
  },
  {
    label: 'Launch',
    value: 'Early 2025',
    detail: 'Private pilots running with clinics and telehealth teams.',
  },
];

const doctorHighlights = [
  'Listens during clinic and video visits and writes the note',
  'Shares the reasoning with links to sources',
  'Suggests codes, orders, and follow-ups for you to approve',
  'Exports ready for your EHR and team handoff',
];

const patientHighlights = [
  'Takes symptoms and sends to the right doctor safely',
  'Books visits, sends reminders, and reschedules easily',
  'Shares follow-up tips and keeps patients on track',
  'Hands over to people when a case looks risky',
];

const agents = [
  {
    title: 'Clinical Agent',
    description:
      'Captures the visit, writes the summary, and drafts orders so doctors review and sign quickly.',
    tags: ['Visit notes', 'Orders & codes', 'EHR-ready'],
  },
  {
    title: 'Patient Concierge',
    description:
      'Guides patients from intake to follow-up on chat, WhatsApp, and the portal with clear rules.',
    tags: ['Triage & routing', 'Scheduling', 'Follow-ups'],
  },
  {
    title: 'Ops & Compliance',
    description:
      'Same script every time, checks eligibility, and keeps an audit log while your team moves fast.',
    tags: ['Audit trails', 'Eligibility', 'Escalations'],
  },
];

const roadmap = [
  {
    phase: 'Now',
    title: 'Private pilots',
    detail: 'Private beta running with partner clinics and telehealth teams.',
  },
  {
    phase: 'Q1',
    title: 'Patient concierge launch',
    detail: 'Patient intake, routing, booking, and follow-ups live.',
  },
  {
    phase: 'Q2',
    title: 'Doctor-facing exports',
    detail: 'Exports ready for EHRs, e-prescription drafts, and easy sign-off.',
  },
];

const waitlistItems = [
  'Plan your clinic flow with our team',
  'HIPAA-first setup and data care',
  'Step-by-step rollout with clear rules',
];

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const headerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const updateOffsets = () => {
      const header = headerRef.current;
      if (!header) return;
      const rect = header.getBoundingClientRect();
      const offset = rect.height + rect.top + 12; // header height + current top gap + small cushion
      document.documentElement.style.setProperty('--header-offset', `${offset}px`);
    };

    updateOffsets();
    window.addEventListener('resize', updateOffsets);
    return () => window.removeEventListener('resize', updateOffsets);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleAnchorClick = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href') || '';
      if (!href.startsWith('#')) return;

      const targetId = href.slice(1) || 'top';
      const section = document.getElementById(targetId);
      if (!section) return;

      event.preventDefault();

      const headerRect = header.getBoundingClientRect();
      const computedOffset =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue('--header-offset')
        ) || headerRect.height + headerRect.top + 12;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - computedOffset,
        behavior: 'smooth',
      });
    };

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]:not([href="#"])')
    );
    links.forEach((link) => link.addEventListener('click', handleAnchorClick));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleAnchorClick));
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="bg-shape shape-1" />
      <div className="bg-shape shape-2" />

      <span id="top" className="top-anchor" aria-hidden="true" />

      <header className="top-bar" ref={headerRef}>
        <a className="brand brand-link" href="#top">
          <img src={logo} alt="Samastham logo" className="brand-logo" />
          <div>
            <div className="brand-name">Samastham Connect</div>
            <div className="brand-tagline">Health Care Agents</div>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#top">Home</a>
          <a href="#solutions">Solutions</a>
          <a href="#agents">Agents</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <span className="chip">Launching soon</span>
          <a className="button primary" href="#contact">
            Join waitlist
          </a>
        </div>
      </header>

      <main className="content">
        <section className="hero" id="solutions">
          <div className="hero-copy">
            <div className="pill">Built for doctors and patients</div>
            <h1>
              Health care agents that keep clinics running smoothly and patients cared for
            </h1>
            <p className="lead">
              Samastham Connect mixes medical thinking with friendly patient
              flows. We handle intake, notes, billing codes, scheduling, and
              follow-ups so teams can focus on care.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Get early access
              </a>
              <a className="button ghost" href="#agents">
                See how our agents work
              </a>
            </div>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <p className="stat-detail">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-header" style={{ background: brandGradient }}>
              <div>
                <p className="panel-kicker">Alpha launch</p>
                <p className="panel-title">Clinical + Patient agents</p>
              </div>
              <span className="badge">Private pilots</span>
            </div>
            <div className="panel-body">
              <div className="panel-row">
                <span>Clinic visits</span>
                <strong>Voice to draft note</strong>
              </div>
              <div className="panel-row">
                <span>Orders & codes</span>
                <strong>Ready for review</strong>
              </div>
              <div className="panel-row">
                <span>Patient intake</span>
                <strong>Checks symptoms and books</strong>
              </div>
              <div className="panel-row">
                <span>Follow-ups</span>
                <strong>Simple next steps</strong>
              </div>
            </div>
            <div className="panel-visual">
              <img src={doctorImage} alt="Doctor using Samastham" />
              <div className="overlay-card">
                <p className="overlay-title">Voice to clear note</p>
                <p className="overlay-body">
                  Gets a summary, suggested codes, and next steps ready for your
                  approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="personas">
          <div className="persona-card">
            <div className="card-header">
              <div className="pill soft">For doctors</div>
              <h2>Less paperwork, more care</h2>
              <p>
                Agents that listen, think, and prepare clean files for your EHR
                and teams.
              </p>
            </div>
            <ul className="bullet-list">
              {doctorHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="card-footer">
              <span className="tag">Clinical-grade</span>
              <span className="tag">Citations</span>
              <span className="tag">Team-friendly</span>
            </div>
          </div>

          <div className="persona-card secondary">
            <div className="card-header">
              <div className="pill soft">For patients</div>
              <h2>Simple help that feels human</h2>
              <p>
                Agents that answer fast, send people to the right doctor, and
                keep people on their care plan.
              </p>
            </div>
            <ul className="bullet-list">
              {patientHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="card-footer">
              <span className="tag">24/7</span>
              <span className="tag">Multilingual</span>
              <span className="tag">Escalations</span>
            </div>
          </div>
        </section>

        <section className="agents" id="agents">
          <div className="section-heading">
            <div className="pill soft">Our agents</div>
            <h2>Made for health care teams</h2>
            <p>
              Each agent follows clear protocols, medical evidence, and your
              workflow. People step in when it matters.
            </p>
          </div>
          <div className="agent-grid">
            {agents.map((agent) => (
              <div key={agent.title} className="agent-card">
                <div className="agent-title">{agent.title}</div>
                <p className="agent-description">{agent.description}</p>
                <div className="tag-row">
                  {agent.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="roadmap" id="roadmap">
          <div className="section-heading">
            <div className="pill soft">Launching soon</div>
            <h2>Roadmap to production</h2>
            <p>
              We build with clinical leaders, test carefully, and launch step
              by step. We will tune Samastham Connect for your team.
            </p>
          </div>
          <div className="roadmap-grid">
            {roadmap.map((item) => (
              <div key={item.title} className="roadmap-card">
                <div className="roadmap-phase">{item.phase}</div>
                <div className="roadmap-title">{item.title}</div>
                <p className="roadmap-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="cta-copy">
            <div className="pill">Work with us</div>
            <h2>Join the early access list</h2>
            <p>
              Tell us about your clinic or product, and we will share a simple
              demo and onboarding plan.
            </p>
            <ul className="bullet-list inline">
              {waitlistItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <form className="cta-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" placeholder="Dr. Anil Kumar" required />
            </label>
            <label>
              Work email
              <input
                name="email"
                placeholder="you@clinic.in"
                type="email"
                required
              />
            </label>
            <label>
              Your role
              <select name="role">
                <option>Doctor / Clinician</option>
                <option>Operations / Admin</option>
                <option>Product / Tech</option>
                <option>Patient experience</option>
              </select>
            </label>
            <label>
              What do you want help with?
              <textarea
                name="notes"
                placeholder="Notes help, patient helpdesk, follow-ups..."
                rows={3}
              />
            </label>
            <button type="submit" className="button primary full">
              Request a walkthrough
            </button>
            <p className="smallprint">
              HIPAA-first. We reply with next steps within 24 hours.
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
