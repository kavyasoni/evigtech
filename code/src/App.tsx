import {
  Menu,
  X,
  Mail,
  ArrowRight,
  Code,
  Database,
  Brain,
  Layers,
  Server,
  Monitor,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      <nav
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <img
              src="/evigtech_logo.png"
              alt="EvigTech"
              className="h-6 sm:h-8 w-auto object-contain"
              width="120"
              height="32"
            />

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("expertise")}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("approach")}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                Approach
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                Contact
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-6 py-4 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-slate-700 hover:text-slate-900 py-3 px-2 rounded hover:bg-slate-50 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("expertise")}
                className="block w-full text-left text-slate-700 hover:text-slate-900 py-3 px-2 rounded hover:bg-slate-50 transition-colors"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("approach")}
                className="block w-full text-left text-slate-700 hover:text-slate-900 py-3 px-2 rounded hover:bg-slate-50 transition-colors"
              >
                Approach
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-slate-700 hover:text-slate-900 py-3 px-2 rounded hover:bg-slate-50 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <main id="main-content">
        <section className="pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Turning visions into
                <span className="block bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  PMF ready products
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                15+ years building startup products that launch in weeks, not
                months. We use lean tech stacks and adaptive architecture—so you
                validate quickly with early users, then evolve to serve millions
                when you find Product-Market Fit.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  About
                </h2>
                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                  We've spent 15+ years mastering the hardest challenge in
                  startup development: building fast enough to find
                  Product-Market Fit, without creating technical debt that kills
                  you at scale. Most consultants either over-engineer (slow,
                  expensive) or build prototypes that collapse under real
                  growth.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our approach is different: lean tech stacks optimized for
                  speed, adaptive architecture designed to evolve, and pragmatic
                  engineering that prioritizes your next milestone—whether
                  that's 100 beta users or 10 million at scale. Full-stack
                  expertise. One partner. Systems that grow with you.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 rounded-xl border border-slate-200">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                    15+
                  </div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 rounded-xl border border-slate-200">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                    50+
                  </div>
                  <div className="text-slate-600">Global Projects</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 rounded-xl border border-slate-200">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                    100%
                  </div>
                  <div className="text-slate-600">Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 rounded-xl border border-slate-200">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                    24/7
                  </div>
                  <div className="text-slate-600">Partnership Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
              Expertise
            </h2>
            <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
              Full-stack technical expertise across every stage of your product
              journey
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Core Software Development
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Clean, maintainable code is your competitive moat—but
                  perfectionism kills startups. We write pragmatic, well-tested
                  code using proven patterns that accelerate shipping, not slow
                  it down. The result: systems you can iterate on rapidly
                  pre-PMF, and refactor confidently when you're scaling to
                  millions.
                </p>
              </div>

              <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Full-Stack Engineering
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  From PostgreSQL to React, from APIs to user flows—we handle
                  the entire stack so you don't juggle multiple specialists.
                  Seamless integration, optimal performance, and one team
                  accountable for the complete product experience.
                </p>
              </div>

              <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Server className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Backend Systems
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Your backend determines how fast you ship and how far you
                  scale. We design systems right-sized for your stage: simple,
                  focused architectures that get you to market in weeks, with
                  clean foundations that evolve into distributed systems when
                  your growth demands it. Fast APIs. Bank-level security. No
                  over-engineering.
                </p>
              </div>

              <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Monitor className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Frontend Development
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  First impressions convert users or lose them. We craft
                  lightning-fast, accessible interfaces using modern frameworks
                  that don't just look beautiful—they drive engagement, reduce
                  bounce rates, and turn visitors into customers.
                </p>
              </div>

              <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Data Science & Systems
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Data is only valuable when it drives decisions. We build
                  production-grade pipelines, real-time analytics platforms, and
                  intelligence engines that transform raw data into insights
                  that actually move metrics—not just pretty dashboards.
                </p>
              </div>

              <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  AI & Machine Learning
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  AI that ships, not science projects. From recommendation
                  systems that boost revenue to NLP that understands intent, we
                  implement machine learning solutions grounded in business
                  outcomes, not academic papers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
              Our Approach
            </h2>
            <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
              A proven methodology refined over 15+ years and 50+ successful
              launches
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  Discovery
                </h3>
                <p className="text-slate-600">
                  Deep-dive sessions to align on your vision, identify technical
                  risks early, and define success metrics that matter to your
                  business—not just engineering vanity metrics.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  Adaptive Architecture
                </h3>
                <p className="text-slate-600">
                  We don't build for 10 million users on day one. Instead, we
                  choose lean stacks and patterns that optimize for your current
                  milestone: fast validation with early users, clean foundations
                  that refactor as you find PMF, scalable infrastructure that
                  grows when your metrics justify it. Right-sized technology,
                  every stage.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  Development
                </h3>
                <p className="text-slate-600">
                  Rapid iteration with weekly demos, continuous deployment, and
                  pragmatic code quality that balances speed and
                  maintainability. Your codebase stays well-documented and
                  transfer-ready—because we're building your long-term asset,
                  not our vendor lock-in.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6">
                  4
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  Launch & Scale
                </h3>
                <p className="text-slate-600">
                  Production deployment with monitoring, performance
                  optimization, and on-call support through critical growth
                  phases. We don't just launch—we ensure your systems scale as
                  your user base explodes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to turn your startup idea into reality?
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-10 max-w-3xl mx-auto">
                Join 50+ founders who chose EvigTech to build their zero-to-one
                product. Let's discuss your vision, timeline, and how we can
                become your founding CTO.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:contact@evigtech.com"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-slate-100 transition-all hover:shadow-lg font-semibold text-base sm:text-lg"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="py-8 px-6 lg:px-8 border-t border-slate-200"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto text-center text-slate-600">
          <p>© 2020 EvigTech Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
