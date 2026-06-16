import Image from "next/image";

export const metadata = {
  title: "QA Automation for Startups | SecureLaunch",
  description:
    "I help early-stage startups ship confidently with Playwright automation, CI/CD pipelines, and AI-powered QA. Book a free 30-min audit with Raubin Kumar.",
};

export default function Home() {
  const services = [
    {
      title: "QA Automation",
      tagline: "Stop shipping bugs to production.",
      body: "Playwright, Selenium, API automation — built into your CI pipeline with parallel execution, real reporting, and coverage that actually matters.",
      pills: ["Playwright", "Selenium", "REST Assured", "Allure Reports"],
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
        </svg>
      ),
    },
    {
      title: "DevOps & CI/CD",
      tagline: "Deploy multiple times a week. Without fear.",
      body: "GitHub Actions, Docker, Kubernetes. Automated quality gates so every deploy is validated before it touches production.",
      pills: ["GitHub Actions", "Docker", "Kubernetes", "AWS"],
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
    },
    {
      title: "AI-Powered QA",
      tagline: "Make your test suite smarter, not bigger.",
      body: "Self-healing locators, AI-generated test cases, LLM-powered failure analysis. Your team ships faster — the AI handles the repetitive QA work.",
      pills: ["Claude API", "Self-Healing", "NLP to Tests", "Failure Analysis"],
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 9h.01M15 9h.01M9 15h6" />
        </svg>
      ),
    },
  ];

  const caseStudies = [
    {
      tag: "QA Automation",
      title: "From 3-day regression cycles to 4-hour deploys",
      problem: "A 6-person SaaS team was manually testing 200+ user flows before every release. Bugs still slipped through. Founders were losing sleep before deploys.",
      solution: "Built a Playwright E2E suite + REST API automation layer, integrated into GitHub Actions with parallel execution and Allure reporting. Test coverage: 20% → 85%.",
      result: "Release cycle dropped from 3 days to 4 hours. Zero critical regressions in 3 months post-launch.",
      metric: "3 days → 4 hrs",
    },
    {
      tag: "DevOps & CI/CD",
      title: "Zero-downtime deploys for a fast-moving fintech",
      problem: "Deployments happened over SSH with no staging environment and no rollback plan. Every deploy was a gamble.",
      solution: "Docker + Kubernetes on AWS, GitHub Actions pipelines with automated smoke tests as quality gates, and a blue-green deployment strategy.",
      result: "Multiple reliable deploys per week. Zero production incidents in 2 months after go-live.",
      metric: "0 incidents",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Free audit call",
      desc: "30 minutes. I review your testing setup and give you an honest picture of where the biggest risks are. No pitch — just clarity.",
    },
    {
      n: "02",
      title: "Written roadmap",
      desc: "You get a prioritized action plan: what to automate first, which tools fit your stack, and realistic timelines. Yours to keep either way.",
    },
    {
      n: "03",
      title: "I build it",
      desc: "I execute the plan directly. No handoffs to junior devs, no account managers in the way. You work with the same person who designed the strategy.",
    },
  ];

  const faqs = [
    {
      q: "Are you a team or a solo consultant?",
      a: "Solo. You work directly with me — Raubin Kumar. No account managers, no handoffs. That's intentional.",
    },
    {
      q: "Why hire you instead of an Upwork freelancer?",
      a: "I don't write test scripts — I design QA systems. There's a difference. After 7+ years doing this across fintech, SaaS, and enterprise, I know what breaks before it breaks.",
    },
    {
      q: "Do you work with non-Indian startups?",
      a: "Yes. All engagements are remote. I work with teams across India, Southeast Asia, and Europe.",
    },
    {
      q: "What's the smallest engagement?",
      a: "The free audit is zero commitment. From there, the smallest paid engagement is a focused 2-week sprint.",
    },
  ];

  const auditItems = [
    "Review your current QA and release process",
    "Identify the highest-risk automation gaps",
    "CI/CD pipeline health check",
    "Playwright vs Selenium recommendation for your stack",
    "AI-powered QA opportunities specific to your product",
    "30-min call + written summary delivered after",
  ];

  return (
    <main className="min-h-screen bg-[#080C14] text-white font-sans antialiased overflow-x-hidden">

      {/* ── Sticky Nav ─────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#080C14] backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tight">
            Secure<span className="text-cyan-400">Launch</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition-colors duration-150">Services</a>
            <a href="#cases"    className="hover:text-white transition-colors duration-150">Work</a>
            <a href="#about"    className="hover:text-white transition-colors duration-150">About</a>
            <a
              href="https://calendly.com/kraubin192/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black text-sm font-bold px-6 py-2.5 rounded-lg transition-all duration-150"
            >
              Book Free Audit
            </a>
          </div>
          <a
            href="https://calendly.com/kraubin192/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-cyan-500 text-black text-sm font-bold px-4 py-2.5 rounded-lg active:scale-95 transition-all"
          >
            Book Audit
          </a>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────── */}
      {/* pt-24 = 96px which is exactly nav height (64px) + breathing room */}
      <section className="relative max-w-6xl mx-auto px-6 pt-36 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(ellipse at center, #22d3ee 0%, transparent 70%)" }}
        />

        <div className="relative">
          <div className="inline-flex items-center gap-2 border border-cyan-500/25 bg-cyan-500/[0.07] rounded-full px-4 py-1.5 text-cyan-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            Available for new clients · Remote · Worldwide
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.04] tracking-tight max-w-4xl">
            Your startup ships fast.<br />
            <span className="text-cyan-400">Does your QA?</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            I help early-stage engineering teams build Playwright automation, CI/CD pipelines, and AI-powered QA — so you stop finding bugs in production and start deploying with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a href="https://calendly.com/kraubin192/30min" target="_blank" rel="noopener noreferrer">
              <button className="bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black px-8 py-4 rounded-xl font-bold text-base transition-all duration-150">
                Book Free 30-Min Audit →
              </button>
            </a>
            <a href="#cases">
              <button className="border border-white/10 hover:border-white/20 hover:bg-white/[0.04] text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-150">
                See Case Studies
              </button>
            </a>
          </div>

          {/* Stats — only real, verifiable numbers */}
          <div className="mt-16 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "7+",    label: "Years in QA Automation" },
              { val: "4",     label: "Free audit spots / month" },
              { val: "2 wk",  label: "Fastest engagement start" },
              { val: "Free",  label: "Audit, zero commitment" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-white">{s.val}</div>
                <div className="text-sm text-gray-500 mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────── */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.15em] mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">Three things. Done properly.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/40 rounded-2xl p-8 transition-all duration-200 hover:bg-white/[0.055] flex flex-col"
            >
              <div className="text-cyan-400 mb-6 w-10 h-10 flex items-center justify-center bg-cyan-500/10 rounded-xl">
                {s.svg}
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-cyan-400 text-sm font-medium mt-2">{s.tagline}</p>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed flex-1">{s.body}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {s.pills.map((p) => (
                  <span key={p} className="text-xs bg-white/[0.06] border border-white/[0.08] text-gray-400 px-3 py-1 rounded-full">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Case Studies ───────────────────────────────── */}
      <section id="cases" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.15em] mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">Real work. Real results.</h2>
          <p className="text-gray-600 text-sm mt-2">Client names withheld under NDA. Results are real.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((c) => (
            <div
              key={c.title}
              className="bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/30 rounded-2xl p-8 transition-all duration-200 flex flex-col gap-6"
            >
              <div>
                <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  {c.tag}
                </span>
                <h3 className="text-xl font-bold mt-5 leading-snug">{c.title}</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">Problem</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">Solution</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.solution}</p>
                </div>
              </div>
              <div className="mt-auto border border-cyan-500/20 bg-cyan-500/[0.06] rounded-xl p-5 flex flex-col gap-3">
                <div className="text-2xl font-extrabold text-cyan-400 leading-none">{c.metric}</div>
                <p className="text-sm text-gray-300 leading-snug">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────── */}
      <section id="how" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.15em] mb-3">Process</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">How it works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.n} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
              <div className="text-5xl font-black text-cyan-400/25 leading-none mb-5 select-none">{step.n}</div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Free QA Audit ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="relative border border-cyan-500/30 bg-cyan-500/[0.03] rounded-3xl p-10 md:p-14 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }}
          />
          <div className="relative max-w-3xl">
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.15em] mb-4">Limited — 4 Spots / Month</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Free QA Audit</h2>
            <p className="text-gray-400 mt-4 text-base leading-relaxed max-w-2xl">
              I limit this to 4 calls a month so I can give it proper attention. In 30 minutes I'll tell you exactly what's broken in your QA process and what to fix first — no upsell, no fluff.
            </p>
          </div>
          <div className="relative grid md:grid-cols-2 gap-x-12 gap-y-4 mt-10">
            {auditItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="text-cyan-400 mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="relative mt-10">
            <a href="https://calendly.com/kraubin192/30min" target="_blank" rel="noopener noreferrer">
              <button className="bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black px-8 py-4 rounded-xl font-bold transition-all duration-150">
                Claim Your Free Audit →
              </button>
            </a>
            <p className="text-gray-600 text-xs mt-3">No sales pitch. Just an honest conversation about your QA.</p>
          </div>
        </div>
      </section>

      {/* ── About / Founder ────────────────────────────── */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.15em] mb-5">The person behind this</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Raubin Kumar</h2>
            <p className="text-gray-400 text-base mt-6 leading-relaxed">
              I'm a QA Automation Engineer with 7+ years of experience building testing infrastructure for software teams. I've worked across fintech, SaaS, and enterprise products — from Playwright E2E suites to full CI/CD pipelines and AI-enhanced QA workflows.
            </p>
            <p className="text-gray-400 text-base mt-4 leading-relaxed">
              I started SecureLaunch because most early-stage startups treat QA as an afterthought — until a production incident costs them a client. I fix that, before it happens.
            </p>
            <p className="text-gray-400 text-base mt-4 leading-relaxed">
              When you book a call with me, you talk to me. Not an account manager. Not a junior dev. Me.
            </p>
            <div className="flex gap-5 mt-8">
              <a href="https://www.linkedin.com/in/raubink/" target="_blank" rel="noopener noreferrer"
                className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-150">
                LinkedIn ↗
              </a>
              <a href="https://github.com/kraubin" target="_blank" rel="noopener noreferrer"
                className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-150">
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            {/* White/light bg behind photo so face is clearly visible */}
            <div className="relative rounded-2xl overflow-hidden w-full max-w-sm aspect-square bg-slate-800">
              <Image
                src="/raubin.jpg"
                alt="Raubin Kumar — Founder, SecureLaunch"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Subtle cyan gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/4"
                style={{ background: "linear-gradient(to top, rgba(8,12,20,0.6), transparent)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.15em] mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">Honest answers to real questions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7">
              <h3 className="font-bold text-white text-base">{faq.q}</h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────── */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(34,211,238,0.07), transparent 60%)" }}
          />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold max-w-2xl mx-auto leading-tight">
              Stop guessing about your QA.
            </h2>
            <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute audit. I'll review your setup and tell you exactly what I'd fix first — no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a href="https://calendly.com/kraubin192/30min" target="_blank" rel="noopener noreferrer">
                <button className="bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black px-9 py-4 rounded-xl font-bold text-base transition-all duration-150">
                  Book a Slot →
                </button>
              </a>
              <a href="mailto:hello@securelaunch.co.in">
                <button className="border border-white/10 hover:border-white/20 hover:bg-white/[0.04] text-gray-300 hover:text-white px-9 py-4 rounded-xl font-semibold text-base transition-all duration-150">
                  Email Me
                </button>
              </a>
              <a href="https://wa.me/919845857619" target="_blank" rel="noopener noreferrer">
                <button className="border border-white/10 hover:border-white/20 hover:bg-white/[0.04] text-gray-300 hover:text-white px-9 py-4 rounded-xl font-semibold text-base transition-all duration-150">
                  WhatsApp →
                </button>
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-10">
              hello@securelaunch.co.in · Remote · Available Worldwide
            </p>
          </div>
        </div>
      </section>

      {/* ── Mobile Sticky CTA ──────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-white/[0.08] bg-[#080C14]/98 backdrop-blur-xl px-5 py-4 pb-safe">
        <a href="https://calendly.com/kraubin192/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
          <button className="w-full bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black py-4 rounded-xl font-bold text-base transition-all duration-150">
            Book Free Audit →
          </button>
        </a>
      </div>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="border-t border-white/[0.05] py-8 text-center text-gray-600 text-sm mb-20 md:mb-0">
        <p>© {new Date().getFullYear()} SecureLaunch · Raubin Kumar</p>
        <p className="mt-1">QA Automation · DevOps & CI/CD · AI-Powered QA</p>
      </footer>

    </main>
  );
}
