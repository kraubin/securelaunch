export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* Navbar */}

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">

        <h1 className="text-3xl font-bold text-cyan-400">
          SecureLaunch
        </h1>

        <div className="flex gap-8 text-gray-300">

          <a href="#services" className="hover:text-cyan-400">
            Services
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>

        </div>

      </nav>


      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-28">

        <div className="inline-block border border-cyan-400 rounded-full px-4 py-2 text-cyan-400">

          AI Powered QA + DevOps

        </div>

        <h1 className="text-6xl md:text-7xl font-bold mt-8 leading-tight">

          Ship Faster.
          <br />

          Release Securely.

        </h1>


        <p className="text-xl text-gray-300 mt-8 max-w-2xl">

          SecureLaunch helps startups deliver software
          faster and with confidence using

          <span className="text-cyan-400 font-semibold">
            {" "}AI, Automation and Modern DevOps.
          </span>

        </p>


        <div className="flex gap-4 mt-10">

          <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold">

            Book Free QA Audit

          </button>


          <button className="border border-gray-500 hover:border-cyan-400 px-6 py-3 rounded-xl">

            Schedule a Call

          </button>

        </div>

      </section>



      {/* Services */}

      <section
        id="services"
        className="max-w-7xl mx-auto px-8 py-20"
      >

        <h2 className="text-5xl font-bold mb-16">

          Services

        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400">

            <h3 className="text-2xl font-bold">

              QA Automation

            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>✓ Selenium</li>

              <li>✓ Playwright</li>

              <li>✓ REST Assured</li>

            </ul>

          </div>



          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400">

            <h3 className="text-2xl font-bold">

              AI Assisted QA

            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>✓ Claude AI</li>

              <li>✓ ChatGPT</li>

              <li>✓ NotebookLM</li>

            </ul>

          </div>



          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400">

            <h3 className="text-2xl font-bold">

              DevOps

            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>✓ GitHub Actions</li>

              <li>✓ Docker</li>

              <li>✓ Kubernetes</li>

            </ul>

          </div>



          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400">

            <h3 className="text-2xl font-bold">

              Release Engineering

            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>✓ CI/CD</li>

              <li>✓ Quality Gates</li>

              <li>✓ Release Readiness</li>

            </ul>

          </div>

        </div>

      </section>




      {/* Why SecureLaunch */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-5xl font-bold mb-16">

          Why SecureLaunch

        </h2>


        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 rounded-2xl p-8">

            🚀 Faster Releases

          </div>


          <div className="bg-slate-900 rounded-2xl p-8">

            🤖 AI Powered Testing

          </div>


          <div className="bg-slate-900 rounded-2xl p-8">

            ⚙️ Modern Automation Stack

          </div>


          <div className="bg-slate-900 rounded-2xl p-8">

            🛡️ Startup Focused

          </div>

        </div>

      </section>



      {/* Contact */}

      <section
        id="contact"
        className="max-w-7xl mx-auto px-8 py-20"
      >

        <h2 className="text-5xl font-bold">

          Contact

        </h2>

        <p className="text-gray-300 mt-8">

          📧 kraubin192@gmail.com

        </p>

        <p className="text-gray-300 mt-4">

          📍 India

        </p>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl mt-10 font-semibold">

          Book Free QA Audit

        </button>

      </section>


      <footer className="border-t border-slate-800 py-8 text-center text-gray-400">

        © 2026 SecureLaunch.
        AI Powered Quality Engineering & DevOps.

      </footer>

    </main>
  );
}