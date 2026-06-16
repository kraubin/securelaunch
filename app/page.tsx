import Image from "next/image";

export const metadata = {
  title: "QA Automation for Startups | SecureLaunch",
  description:
    "I help early-stage startups ship confidently with Playwright automation, CI/CD pipelines, and AI-powered QA. Book a free 30-min audit with Raubin Kumar.",
};

export default function Home() {
  return (
    <main className="bg-white text-[#0a0a0a] font-sans antialiased overflow-x-hidden selection:bg-cyan-100">

      {/* ── Nav ────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
          <a href="/" className="text-base font-bold tracking-tight text-[#0a0a0a]">
            Secure<span className="text-cyan-500">Launch</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#cases"    className="hover:text-black transition-colors">Work</a>
            <a href="#about"    className="hover:text-black transition-colors">About</a>
            <a
              href="https://calendly.com/kraubin192/30min"
              target="_blank" rel="noopener noreferrer"
              className="ml-2 bg-[#0a0a0a] hover:bg-[#222] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Book Free Audit
            </a>
          </div>
          <a
            href="https://calendly.com/kraubin192/30min"
            target="_blank" rel="noopener noreferrer"
            className="md:hidden bg-[#0a0a0a] text-white text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Book Audit
          </a>
        </div>
      </nav>

      {/* ── Hero — Full screen, dramatic ───────────────── */}
      <section className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-14">
        <div className="py-24 md:py-0">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 text-xs text-gray-500 mb-12">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            Available for new clients
            <span className="text-gray-300 mx-1">·</span>
            Remote · Worldwide
          </div>

          {/* Headline — dramatic, full weight */}
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-[-0.03em] max-w-5xl">
            Your startup<br />
            ships fast.<br />
            <span className="text-gray-300">Does your QA?</span>
          </h1>

          {/* Subtext — narrow, grounded */}
          <p className="mt-10 text-lg text-gray-500 max-w-md leading-relaxed font-normal">
            I build Playwright automation, CI/CD pipelines, and AI-powered QA for early-stage teams — so bugs stop reaching production.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="https://calendly.com/kraubin192/30min" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#0a0a0a] hover:bg-[#222] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-colors">
                Book free 30-min audit →
              </button>
            </a>
            <a href="#cases">
              <button className="text-sm font-semibold text-gray-500 hover:text-black px-7 py-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors">
                See case studies
              </button>
            </a>
          </div>

          {/* Bottom strip — credentials, not stats */}
          <div className="mt-24 pt-8 border-t border-black/[0.07] flex flex-wrap gap-x-10 gap-y-4 text-sm text-gray-400">
            <span>7+ years QA Automation</span>
            <span className="text-gray-200">·</span>
            <span>Playwright · Selenium · REST Assured</span>
            <span className="text-gray-200">·</span>
            <span>Docker · Kubernetes · AWS</span>
            <span className="text-gray-200">·</span>
            <span>GitHub Actions · Jenkins</span>
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-black/[0.07]" />
      </div>

      {/* ── Services ───────────────────────────────────── */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Left label */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 sticky top-24">
              What I do
            </p>
          </div>
          {/* Right content */}
          <div className="md:col-span-9 space-y-0">
            {[
              {
                num: "01",
                title: "QA Automation",
                body: "Most startups I talk to are manually testing before every release. That's not a process — that's a prayer. I build Playwright and Selenium suites that run in CI, catch regressions before they reach users, and give your team real confidence to ship.",
                pills: ["Playwright", "Selenium", "REST Assured", "Allure", "GitHub Actions"],
              },
              {
                num: "02",
                title: "DevOps & CI/CD",
                body: "If your deploys feel scary, the problem isn't your engineers — it's your pipeline. I set up Docker, Kubernetes, and GitHub Actions with automated quality gates so every deploy is validated, rollback-ready, and boring. Boring deploys are good deploys.",
                pills: ["GitHub Actions", "Docker", "Kubernetes", "AWS", "Jenkins"],
              },
              {
                num: "03",
                title: "AI-Powered QA",
                body: "LLMs are genuinely useful for QA. Self-healing locators, AI-generated test cases from specs, failure analysis without the manual digging. I integrate these into your workflow so your team spends time on what matters, not on maintenance.",
                pills: ["Claude API", "Self-Healing Locators", "NLP → Tests", "Failure Analysis"],
              },
            ].map((s, i, arr) => (
              <div
                key={s.num}
                className={`py-12 ${i < arr.length - 1 ? "border-b border-black/[0.07]" : ""}`}
              >
                <div className="flex gap-6 items-start">
                  <span className="text-xs text-gray-300 font-mono mt-1 shrink-0">{s.num}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
                    <p className="text-gray-500 mt-4 leading-relaxed text-base max-w-2xl">{s.body}</p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {s.pills.map((p) => (
                        <span key={p} className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-black/[0.07]" />
      </div>

      {/* ── Case Studies ───────────────────────────────── */}
      <section id="cases" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 sticky top-24">
              Case studies
              <span className="block mt-2 font-normal normal-case tracking-normal text-gray-300">
                Names under NDA.
                Results are real.
              </span>
            </p>
          </div>
          <div className="md:col-span-9 space-y-16">
            {[
              {
                tag: "QA Automation",
                title: "From 3-day regression cycles to 4-hour deploys",
                problem: "A 6-person SaaS team was manually testing 200+ user flows before every release. Bugs still slipped through. The founder called me after a production incident that cost them a key client.",
                solution: "Built a full Playwright E2E suite + REST API automation layer into GitHub Actions. Parallel execution, Allure reporting, coverage from 20% to 85%.",
                result: "Release cycle: 3 days → 4 hours. Zero critical regressions in 3 months after launch.",
                metric: "3d → 4h",
              },
              {
                tag: "DevOps & CI/CD",
                title: "Zero-downtime deploys for a fast-moving fintech",
                problem: "Deployments over SSH, no staging, no rollback plan. Every deploy was a coin flip. The team had stopped shipping features because they were afraid to deploy.",
                solution: "Docker + Kubernetes on AWS, GitHub Actions pipelines with automated smoke tests as quality gates, blue-green deployment strategy.",
                result: "Multiple reliable deploys per week. Zero production incidents in 2 months after go-live.",
                metric: "0 incidents",
              },
            ].map((c, i) => (
              <div key={c.title} className={i > 0 ? "pt-16 border-t border-black/[0.07]" : ""}>
                <span className="text-xs font-semibold text-cyan-500 uppercase tracking-widest">{c.tag}</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-3 max-w-2xl leading-snug">{c.title}</h3>

                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[11px] font-bold text-gray-300 uppercase tracking-widest mb-2">Problem</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-300 uppercase tracking-widest mb-2">Solution</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <span className="text-4xl font-black tracking-tight text-[#0a0a0a]">{c.metric}</span>
                  <span className="text-sm text-gray-400 max-w-xs leading-snug">{c.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-black/[0.07]" />
      </div>

      {/* ── How It Works ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 sticky top-24">
              How it works
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { n: "1", title: "Free audit call", desc: "30 minutes. I look at your current setup honestly — no pitch, no upsell. You'll leave with clarity on where your biggest risks are, whether or not we work together." },
                { n: "2", title: "Written roadmap", desc: "A prioritized action plan delivered in writing. What to automate first, which tools fit your stack, realistic timelines. Yours to keep regardless." },
                { n: "3", title: "I build it", desc: "I execute directly — no junior devs, no handoffs. The same person who reviewed your setup and designed the strategy is the one who builds it." },
              ].map((s) => (
                <div key={s.n}>
                  <span className="text-xs font-mono text-gray-300">{s.n}</span>
                  <h3 className="text-lg font-bold mt-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Free QA Audit — full bleed dark section ────── */}
      <section className="bg-[#0a0a0a] text-white py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 sticky top-24">
                Free audit
                <span className="block mt-2 text-gray-600 font-normal normal-case tracking-normal">
                  4 spots / month
                </span>
              </p>
            </div>
            <div className="md:col-span-9">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-2xl">
                Not sure where your QA stands?
                <br />
                <span className="text-gray-500">Let's find out in 30 minutes.</span>
              </h2>
              <p className="text-gray-400 mt-8 max-w-xl leading-relaxed">
                I take 4 of these a month — enough to give it real attention. No pitch at the end. Just an honest assessment of where your testing process is failing and what to fix first.
              </p>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 mt-12">
                {[
                  "Review your current QA and release process",
                  "Identify the highest-risk automation gaps",
                  "CI/CD pipeline health check",
                  "Playwright vs Selenium recommendation",
                  "AI-powered QA opportunities",
                  "30-min call + written summary after",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="text-cyan-500 mt-0.5 shrink-0">—</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a href="https://calendly.com/kraubin192/30min" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-bold text-sm transition-colors">
                    Claim your free audit →
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────── */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 sticky top-24">
              About
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Raubin Kumar</h2>
                <p className="text-gray-500 mt-6 leading-relaxed">
                  I've spent 7+ years building testing infrastructure for software teams — fintech, SaaS, enterprise. I've seen what happens when QA is an afterthought. A production incident, a lost client, a team that's afraid to deploy on Fridays.
                </p>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  I started SecureLaunch to fix that for early-stage startups before it becomes a crisis, not after.
                </p>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  When you book a call, you talk to me. Not an account manager. Not a junior dev. Me — the same person who'll design and build your solution.
                </p>
                <div className="flex gap-6 mt-8">
                  <a href="https://www.linkedin.com/in/raubink/" target="_blank" rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#0a0a0a] hover:text-cyan-500 transition-colors">
                    LinkedIn ↗
                  </a>
                  <a href="https://github.com/kraubin" target="_blank" rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#0a0a0a] hover:text-cyan-500 transition-colors">
                    GitHub ↗
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-gray-100">
                <Image
                  src="/raubin.jpg"
                  alt="Raubin Kumar — Founder, SecureLaunch"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-black/[0.07]" />
      </div>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 sticky top-24">
              FAQ
            </p>
          </div>
          <div className="md:col-span-9 space-y-0">
            {[
              {
                q: "Are you a team or a solo consultant?",
                a: "Solo. You work directly with me — Raubin Kumar. No account managers, no handoffs to junior devs. That's the whole point.",
              },
              {
                q: "Why hire you instead of an Upwork freelancer?",
                a: "I don't write test scripts — I design QA systems. There's a real difference. After 7+ years doing this across fintech, SaaS, and enterprise products, I know what breaks before it breaks.",
              },
              {
                q: "Do you work with non-Indian startups?",
                a: "Yes. Everything is remote. I work with teams across India, Southeast Asia, and Europe.",
              },
              {
                q: "What's the smallest engagement?",
                a: "The free audit is zero commitment. From there, the smallest paid engagement is a focused 2-week sprint.",
              },
            ].map((faq, i, arr) => (
              <div
                key={faq.q}
                className={`py-8 ${i < arr.length - 1 ? "border-b border-black/[0.07]" : ""}`}
              >
                <h3 className="font-bold text-base text-[#0a0a0a]">{faq.q}</h3>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-2xl">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact — full bleed ───────────────────────── */}
      <section id="contact" className="border-t border-black/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <div className="grid md:grid-cols-12 gap-16 items-end">
            <div className="md:col-span-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
                Let's talk<br />
                about your<br />
                <span className="text-gray-300">QA.</span>
              </h2>
              <p className="text-gray-500 mt-8 max-w-lg leading-relaxed">
                Book a free 30-minute audit. I'll review your current setup and tell you exactly what I'd fix first — no strings attached.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <a href="https://calendly.com/kraubin192/30min" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#0a0a0a] hover:bg-[#222] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
                    Book a slot →
                  </button>
                </a>
                <a href="mailto:hello@securelaunch.co.in">
                  <button className="border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-black px-8 py-4 rounded-xl font-semibold text-sm transition-colors">
                    Email me
                  </button>
                </a>
                <a href="https://wa.me/919845857619" target="_blank" rel="noopener noreferrer">
                  <button className="border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-black px-8 py-4 rounded-xl font-semibold text-sm transition-colors">
                    WhatsApp →
                  </button>
                </a>
              </div>
            </div>
            <div className="md:col-span-4 text-sm text-gray-400 space-y-2 md:text-right">
              <p>hello@securelaunch.co.in</p>
              <p>Remote · Available Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile Sticky CTA ──────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-black/[0.08] px-5 py-4">
        <a href="https://calendly.com/kraubin192/30min" target="_blank" rel="noopener noreferrer" className="block">
          <button className="w-full bg-[#0a0a0a] text-white py-3.5 rounded-xl font-bold text-sm">
            Book Free Audit →
          </button>
        </a>
      </div>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="border-t border-black/[0.07] py-8 mb-16 md:mb-0">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} SecureLaunch · Raubin Kumar</span>
          <span>QA Automation · DevOps & CI/CD · AI-Powered QA</span>
        </div>
      </footer>

    </main>
  );
}
