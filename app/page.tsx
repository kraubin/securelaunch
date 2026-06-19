import Image from "next/image";

export const metadata = {
  title: "I help startups build AI systemsthey can trust.",
};

export default function Home() {
  return (
    <main className="bg-white text-[#0a0a0a] font-sans antialiased overflow-x-hidden selection:bg-cyan-100">

      {/* ── Nav ────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
          <a
  href="/"
  className="flex items-center gap-3"
>

  <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center">

    <span className="text-cyan-400 font-black text-sm">

      SL

    </span>

  </div>

  <div className="text-base font-bold tracking-tight">

    Secure

    <span className="text-cyan-500">

      Launch

    </span>

  </div>

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
              Book AI Audit
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

      {/* ── Hero ───────────────────────────────────── */}
<section className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-14">

  <div className="py-16 md:py-0">

    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-12 border border-gray-200 rounded-full px-4 py-2">

      <span className="w-2 h-2 bg-emerald-500 rounded-full" />

      Trusted expertise in AI Testing • Playwright • DevOps • Security

    </div>

    <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.92] tracking-[-0.05em] max-w-5xl">

      I help startups

      <br />

      build AI systems

      <br />

      <span className="text-gray-300">

       they can trust.

      </span>

    </h1>

    <p className="mt-10 text-xl text-gray-500 max-w-2xl leading-relaxed">

      Testing AI isn't the same as testing software.

I help startups catch hallucinations,

build reliable automation

and ship confidently.
    </p>

    <div className="flex flex-wrap gap-4 mt-12">

      <a

        href="https://calendly.com/kraubin192/30min"

        target="_blank"

        rel="noopener noreferrer"

      >

        <button className="bg-black hover:bg-neutral-800 text-white px-8 py-4 rounded-2xl font-semibold transition">

          Book Free AI Audit →

        </button>

      </a>

      <a href="#cases">

        <button className="border border-gray-200 hover:border-gray-400 px-8 py-4 rounded-2xl text-gray-600 hover:text-black transition">

          View Engineering Work

        </button>

      </a>

    </div>

    <div className="mt-16 pt-16 border-t border-black/[0.07] flex flex-wrap gap-x-10 gap-y-4 text-sm text-gray-400">

      <span>7+ Years Experience</span>

      <span className="text-gray-200">•</span>

      <span>Anthropic • OpenAI • Python</span>

      <span className="text-gray-200">•</span>

      <span>Playwright • Selenium • REST Assured</span>

      <span className="text-gray-200">•</span>

      <span>Docker • Kubernetes • AWS</span>

    </div>

  </div>

</section>

{/* ── Why SecureLaunch ───────────────────────── */}

<section className="max-w-6xl mx-auto px-6 py-20">

  <div className="text-center">

    <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold">

      Why SecureLaunch

    </p>

    <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-6">

      Build Trusted AI.

      <br />

      Not just test cases.

    </h2>

  </div>


  <div className="grid md:grid-cols-3 gap-8 mt-20">


    <div className="border border-black/[0.06] rounded-3xl p-10">

      <h3 className="text-2xl font-bold">

I test AI differently.

</h3>

<p className="text-gray-500 mt-5 leading-relaxed">

Most QA teams test APIs.

I test prompts,

hallucinations,

RAG systems

and AI agents.

Because AI fails differently.

</p>
    </div>



    <div className="border border-black/[0.06] rounded-3xl p-10">

      <h3 className="text-2xl font-bold">

        Founder Led

      </h3>

      <p className="text-gray-500 mt-5 leading-relaxed">

        Work directly with an experienced

        SDET with expertise in Python,

        Anthropic AI, Playwright

        and DevOps.

      </p>

    </div>



    <div className="border border-black/[0.06] rounded-3xl p-10">

      <h3 className="text-2xl font-bold">

        I care about production.

      </h3>

      <p className="text-gray-500 mt-5 leading-relaxed">

        Testing is useless

if software breaks in production.

I focus on reliability,

security and real-world failures.

      </p>

    </div>

  </div>

</section>
      {/* ── Divider ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-black/[0.07]" />
      </div>

      {/* ── Services ───────────────────────────────────── */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Left label */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 sticky top-24">
              What I Do
            </p>
          </div>
          {/* Right content */}
          <div className="md:col-span-9 space-y-0">
            {[
  {
    num: "01",

    title: "AI Quality Engineering",

    body:
      "Modern AI systems fail in unexpected ways. I help startups test prompts, detect hallucinations, evaluate RAG pipelines and validate AI agents before they reach production.",

    pills: [
      "Prompt Testing",
      "Hallucination Detection",
      "RAG Evaluation",
      "AI Agent Testing",
      "Claude API",
    ],
  },

  {
    num: "02",

    title: "QA Automation",

    body:
      "I build Playwright and Selenium frameworks that run in CI, catch regressions early and give your team confidence to ship faster.",

    pills: [
      "Playwright",
      "Selenium",
      "REST Assured",
      "Allure",
      "GitHub Actions",
    ],
  },

  {
    num: "03",

    title: "DevOps & Reliability",

    body:
      "Reliable software needs reliable infrastructure. I build CI/CD pipelines, Docker environments and Kubernetes deployments engineered for fast and safe releases.",

    pills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions",
      "Jenkins",
    ],
  },

  {
    num: "04",

    title: "Security Engineering",

    body:
      "Security should never be an afterthought. I help startups identify vulnerabilities, secure APIs and build safer production systems.",

    pills: [
      "OWASP",
      "API Security",
      "Vulnerability Assessment",
      "Authentication",
    ],
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

      {/* ── Featured Engineering Work ───────────────── */}

<section className="max-w-6xl mx-auto px-6 py-20">

  <div className="grid md:grid-cols-12 gap-10">

    <div className="md:col-span-3">

      <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 sticky top-24">

        Things I'm Building

      </p>

    </div>


    <div className="md:col-span-9 space-y-12">

      {/* Project 1 */}

      <div>

        <span className="text-xs font-semibold text-black uppercase tracking-widest">

          AI Testing

        </span>

        <h3 className="text-3xl font-black tracking-tight mt-3">

          Claude Hallucination Testing

        </h3>

        <p className="text-gray-500 mt-5 max-w-2xl leading-relaxed">

          I'm experimenting with ways to detect hallucinations,
compare responses and improve AI reliability
before production deployment.

        </p>


        <div className="flex flex-wrap gap-2 mt-6">

          {[
            "Claude",

            "Anthropic",

            "Python",

            "Prompt Testing",

            "Evaluation",

          ].map((item) => (

            <span

              key={item}

              className="text-xs text-gray-500 border border-black/[0.06] px-3 py-1 rounded-full"

            >

              {item}

            </span>

          ))}

        </div>

      </div>



      {/* Project 2 */}

      <div className="pt-10 border-t border-black/[0.07]">

        <span className="text-xs font-semibold text-black uppercase tracking-widest">

          QA Automation

        </span>

        <h3 className="text-3xl font-black tracking-tight mt-3">

          The Playwright Framework I Use

        </h3>

        <p className="text-gray-500 mt-5 max-w-2xl leading-relaxed">

          The automation framework I use for
UI, API and regression testing.

Simple, fast and CI friendly.

        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {[
            "Playwright",

            "REST Assured",

            "GitHub Actions",

            "Allure",

            "Docker",

          ].map((item) => (

            <span

              key={item}

              className="text-xs text-gray-500 border border-black/[0.06] px-3 py-1 rounded-full"

            >

              {item}

            </span>

          ))}

        </div>

      </div>



      {/* Project 3 */}

      <div className="pt-16 border-t border-black/[0.07]">

        <span className="text-xs font-semibold text-black uppercase tracking-widest">

          DevOps

        </span>

        <h3 className="text-3xl font-black tracking-tight mt-3">

          How I Ship Software

        </h3>

        <p className="text-gray-500 mt-5 max-w-2xl leading-relaxed">

          Docker.

Kubernetes.

GitHub Actions.

The stack I trust to ship software
reliably.

        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {[
            "Docker",

            "Kubernetes",

            "AWS",

            "GitHub Actions",

            "Jenkins",

          ].map((item) => (

            <span

              key={item}

              className="text-xs text-gray-500 border border-black/[0.06] px-3 py-1 rounded-full"

            >

              {item}

            </span>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

      
      {/* ── Divider ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-black/[0.07]" />
      </div>

      {/* ── How It Works ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
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

      {/* ── AI Reliability Audit ───────────────────── */}

<section className="bg-[#0a0a0a] text-white py-32">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-12 gap-10">

      <div className="md:col-span-3">

        <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 sticky top-24">

          AI Reliability Audit

        </p>

      </div>



      <div className="md:col-span-9">

        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-3xl">

          Building AI?

          <br />

          Let's make sure

          <span className="text-gray-500">

            it won't fail

          </span>

          in production.

        </h2>


        <p className="text-gray-400 mt-8 max-w-2xl text-lg leading-relaxed">

          In a free 30-minute audit,

          I'll review your AI application,

          testing strategy and infrastructure

          and show exactly where the risks are.

        </p>



        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-14">

          {[
            "Prompt Testing",

            "Hallucination Detection",

            "RAG Evaluation",

            "AI Agent Testing",

            "QA Automation Review",

            "DevOps Health Check",

            "API Security Review",

            "Written Action Plan",

          ].map((item) => (

            <div

              key={item}

              className="flex items-center gap-4"

            >

              <div className="w-2 h-2 rounded-full bg-cyan-500" />

              <span className="text-gray-300">

                {item}

              </span>

            </div>

          ))}

        </div>


        <div className="mt-16 flex flex-wrap gap-4">

          <a

            href="https://calendly.com/kraubin192/30min"

            target="_blank"

            rel="noopener noreferrer"

          >

            <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-2xl font-bold transition">

              Book Free AI Audit →

            </button>

          </a>


          <span className="text-gray-500 text-sm self-center">

            Limited slots every month

          </span>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ── About ──────────────────────────────────────── */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 sticky top-24">
              About
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Raubin Kumar</h2>
                <p className="text-cyan-500 font-semibold mt-5">

  Founder · AI Quality Engineer · SDET

</p>

<p className="text-gray-500 mt-8 leading-relaxed text-lg">

  I help AI startups and SaaS companies
  build reliable, secure and production-ready
  systems through AI testing,
  QA automation and DevOps.

</p>

<p className="text-gray-500 mt-6 leading-relaxed">

  With 7+ years of experience in software
  quality engineering, I specialize in
  Playwright, Python, Anthropic AI,
  Kubernetes and cloud-native testing.

</p>

<div className="mt-10 flex flex-wrap gap-3">

  {[
    "AI Quality Engineering",
    "Anthropic Claude",
    "Python",
    "Playwright",
    "DevOps",
    "AWS",
    "Kubernetes"
  ].map((item)=>(

    <span

      key={item}

      className="text-sm border border-black/[0.06] rounded-full px-4 py-2 text-gray-500"

    >

      {item}

    </span>

  ))}

</div>
<p className="text-gray-500 mt-8 leading-relaxed">

My mission is simple —

help startups build trusted AI systems

that are reliable, secure and ready

for production from day one.

</p>                <div className="flex gap-6 mt-8">
                  <a href="https://www.linkedin.com/in/raubink/" target="_blank" rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
                    LinkedIn ↗
                  </a>
                  <a href="https://github.com/kraubin" target="_blank" rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
                    GitHub ↗
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-gray-100">
                <div className="absolute top-5 left-5 z-10">

  <div className="bg-white border border-black/[0.06] rounded-full px-4 py-2 text-xs font-semibold shadow-sm">

    Building Trusted AI

  </div>

</div>
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


      {/* ── SecureLaunch AI Eval ───────────────── */}

<section className="max-w-6xl mx-auto px-6 py-20">

  <div className="grid md:grid-cols-12 gap-10">

    <div className="md:col-span-3">

      <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">

        Framework

      </p>

    </div>


    <div className="md:col-span-9">

      <span className="text-sm text-cyan-500 font-semibold">

        Currently Building

      </span>


      <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-6">

        SecureLaunch

        <br />

        AI Eval

      </h2>


      <p className="text-gray-500 text-lg mt-8 max-w-2xl leading-relaxed">

        This is the toolkit I'm building

to test prompts,

detect hallucinations

and evaluate AI systems.

Still evolving.

Just like AI itself.

      </p>


      <div className="flex flex-wrap gap-3 mt-12">

        {[
          "Prompt Testing",

          "Hallucination Detection",

          "Claude Evaluation",

          "GPT Evaluation",

          "RAG Evaluation",

          "AI Agent Testing",

          "Regression Testing",

        ].map((item)=>(

          <span

            key={item}

            className="border border-black/[0.06] rounded-full px-4 py-2 text-sm text-gray-500"

          >

            {item}

          </span>

        ))}

      </div>

    </div>

  </div>

</section>


      {/* ── Divider ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-black/[0.07]" />
      </div>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 sticky top-24">
              FAQ
            </p>
          </div>
          <div className="md:col-span-9 space-y-0">
            {[
              {
                q: "Will I work with you directly?",
                a: "Yes. I'm not running a big agency. When you book a call, you talk directly to me.I design it. I build it. I maintain it.",
              },
              {
                q: "Why do you focus on AI quality?",
                a: "Because AI fails differently. Traditional QA catches bugs. AI Quality Engineering catches: • Hallucinations • Bad prompts • RAG failures • Agent mistakes That's the problem I'm obsessed with solving.",
              },
              {
                q: "Who do you work with?",
                a: "Mostly early-stage startups. AI startups. SaaS companies. Founders who move fast and care about quality.",
              },
              {
                q: "What happens in the AI Audit?",
                a: "I'll review: • Your AI application • Testing strategy • DevOps setup • Security risks And tell you exactly what I'd fix first. No fluff. No pressure. No sales tricks.",
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
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">

  Build Trusted AI.

  <br />

  Ship Faster.

  <br />

  <span className="text-gray-300">

    Sleep Better.

  </span>

</h2>
              <p className="text-gray-500 mt-8 max-w-lg leading-relaxed">

Book a free AI Reliability Audit.

I'll review your AI application,

testing strategy and infrastructure

and tell you exactly what I'd fix first.

</p>
              <div className="flex flex-wrap gap-4 mt-10">
                <a href="https://calendly.com/kraubin192/30min" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#0a0a0a] hover:bg-[#222] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
                    Book Free AI Audit →
                  </button>
                </a>
                <a href="mailto:hello@securelaunch.co.in">
                  <button className="border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-black px-8 py-4 rounded-xl font-semibold text-sm transition-colors">
                    hello@securelaunch.co.in
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
            Book AI Audit →
          </button>
        </a>
      </div>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="border-t border-black/[0.07] py-8 mb-16 md:mb-0">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <span suppressHydrationWarning>
  © {new Date().getFullYear()} SecureLaunch · Raubin Kumar
</span>
          <span>Built by Raubin Kumar. Obsessed with quality. Currently building SecureLaunch.</span>
        </div>
      </footer>

    </main>
  );
}
