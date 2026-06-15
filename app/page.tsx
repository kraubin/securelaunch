export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* Navbar */}

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">

        <h1 className="text-3xl font-bold text-cyan-400">
          SecureLaunch
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#services" className="hover:text-cyan-400">
            Services
          </a>

          <a href="#why" className="hover:text-cyan-400">
            Why Us
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>

        </div>

      </nav>





      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">

        <div className="inline-block border border-cyan-400 rounded-full px-4 py-2 text-cyan-400">

          AI-Powered Quality Engineering & DevOps

        </div>


        <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight">

Ship Faster.

<br />

Release Securely.

<br />

<span className="text-cyan-400">

Scale Confidently.

</span>

</h1>

        <p className="text-lg md:text-xl text-gray-300 mt-8 max-w-3xl leading-relaxed">

Build reliable software with confidence.

SecureLaunch helps startups reduce production bugs,
automate testing and ship faster using

<span className="text-cyan-400 font-semibold">

{" "}AI-powered QA,
Modern DevOps and Release Engineering.

</span>

</p>

<div className="flex flex-col sm:flex-row gap-4 mt-10">

  <a href="mailto:hello@securelaunch.co.in">

    <button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold transition">

      Get Free QA Audit

    </button>

  </a>


  <a href="#services">

    <button className="w-full sm:w-auto border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-xl font-semibold transition">

      View Services

    </button>

  </a>

</div>
      </section>





      {/* Services */}

      <section
        id="services"
        className="max-w-7xl mx-auto px-8 py-24"
      >

        <h2 className="text-5xl font-bold mb-16">

          Services

        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">



          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

            <h3 className="text-2xl font-bold">

              QA Automation

            </h3>

            <p className="text-gray-400 mt-4">

              Build reliable automated testing pipelines
              for faster and safer releases.

            </p>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>✓ Selenium</li>

              <li>✓ Playwright</li>

              <li>✓ REST Assured</li>

            </ul>

          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

            <h3 className="text-2xl font-bold">

              AI Assisted QA

            </h3>

            <p className="text-gray-400 mt-4">

              Leverage AI to improve testing efficiency
              and quality engineering workflows.

            </p>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>✓ AI Test Generation</li>

              <li>✓ Intelligent Automation</li>

              <li>✓ AI Quality Engineering</li>

            </ul>

          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

            <h3 className="text-2xl font-bold">

              DevOps

            </h3>

            <p className="text-gray-400 mt-4">

              Modern CI/CD pipelines and cloud-native
              deployment strategies.

            </p>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>✓ GitHub Actions</li>

              <li>✓ Docker</li>

              <li>✓ Kubernetes</li>

            </ul>

          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

            <h3 className="text-2xl font-bold">

              Release Engineering

            </h3>

            <p className="text-gray-400 mt-4">

              Ensure production readiness with
              quality gates and release validation.

            </p>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>✓ CI/CD</li>

              <li>✓ Quality Gates</li>

              <li>✓ Release Readiness</li>

            </ul>

          </div>

        </div>

      </section>





      {/* Why Us */}

      <section
        id="why"
        className="max-w-7xl mx-auto px-8 py-24"
      >

        <h2 className="text-5xl font-bold mb-16">

          Why SecureLaunch

        </h2>


        <div className="grid md:grid-cols-2 gap-8">



          <div className="bg-slate-900 rounded-2xl p-8">

            <h3 className="text-2xl font-bold">

Faster Releases

</h3>

<p className="text-gray-400 mt-4">

Accelerate software delivery with
automated testing and streamlined CI/CD pipelines.

</p>
          </div>



          <div className="bg-slate-900 rounded-2xl p-8">

            <h3 className="text-2xl font-bold">

Better Quality

</h3>

<p className="text-gray-400 mt-4">

Reduce production bugs through
AI-powered testing and quality engineering.

</p>
          </div>



          <div className="bg-slate-900 rounded-2xl p-8">

            <h3 className="text-2xl font-bold">

Modern Tooling

</h3>

<p className="text-gray-400 mt-4">

Built with Selenium, Playwright,
Docker, Kubernetes and cloud-native technologies.

</p>
          </div>



          <div className="bg-slate-900 rounded-2xl p-8">

            <h3 className="text-2xl font-bold">

Built For Startups

</h3>

<p className="text-gray-400 mt-4">

Flexible engagement models designed
for fast-growing startups and SaaS teams.

</p>
          </div>

        </div>

      </section>



{/* Technologies */}

<section className="max-w-7xl mx-auto px-8 py-24">

  <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">

    Technologies We Work With

  </h2>

  <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">

    Industry-standard technologies used to build reliable,
    scalable and secure software.

  </p>


  <div className="flex flex-wrap justify-center gap-5">

    {[
      "Selenium",
      "Playwright",
      "REST Assured",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "OpenAI",
      "Claude AI",
    ].map((tech) => (

      <div
        key={tech}
        className="bg-slate-900 border border-slate-800 hover:border-cyan-400 transition px-6 py-3 rounded-2xl text-base md:text-lg font-medium"
      >

        {tech}

      </div>

    ))}

  </div>

</section>



{/* Contact */}

<section
  id="contact"
  className="max-w-7xl mx-auto px-8 py-24 text-center"
>
        <h2 className="text-5xl font-bold">

          Ready to Ship Faster?

        </h2>


        <p className="text-xl text-gray-300 mt-8 max-w-2xl mx-auto leading-relaxed">

  Get a free QA audit and discover how

  <span className="text-cyan-400 font-semibold">

    {" "}SecureLaunch 

  </span>

  can help you reduce bugs, automate testing
  and release with confidence.

</p>

        <p className="text-gray-300 mt-10">

  hello@securelaunch.co.in

</p>

<p className="text-gray-300 mt-4">

  Remote • Available Worldwide

</p>


<a
  href="https://www.linkedin.com/company/securelaunch-in"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 text-cyan-400 hover:text-cyan-300 font-semibold"
>

  Connect with us on LinkedIn →

</a>


<br />


<a href="mailto:hello@securelaunch.co.in">

  <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl mt-10 font-semibold">

    Get Free QA Audit

  </button>

</a>
      </section>




      <footer className="border-t border-slate-800 py-8 text-center text-gray-400">

  © 2025 SecureLaunch. All rights reserved.

  <br />

  AI-Powered Quality Engineering & DevOps.

  <br />

  <a
    href="https://www.linkedin.com/company/securelaunch-in"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-400 hover:text-cyan-300"
  >

    LinkedIn

  </a>

</footer>
    </main>
  );
}