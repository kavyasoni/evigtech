import { Menu, X, Mail, Linkedin, Github, ArrowRight, Code, Database, Brain, Layers, Server, Monitor } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white focus:rounded">
        Skip to main content
      </a>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Kavya Soni
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-slate-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('expertise')} className="text-slate-700 hover:text-slate-900 transition-colors">Expertise</button>
              <button onClick={() => scrollToSection('approach')} className="text-slate-700 hover:text-slate-900 transition-colors">Approach</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-slate-900 transition-colors">Contact</button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-6 py-4 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-700 hover:text-slate-900">About</button>
              <button onClick={() => scrollToSection('expertise')} className="block w-full text-left text-slate-700 hover:text-slate-900">Expertise</button>
              <button onClick={() => scrollToSection('approach')} className="block w-full text-left text-slate-700 hover:text-slate-900">Approach</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-700 hover:text-slate-900">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <main id="main-content">
        <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Building the future,
              <span className="block bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">one startup at a time</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Technical consultant specializing in zero-to-one product development.
              I help ambitious startups transform ideas into scalable, production-ready systems.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg"
            >
              Let's work together
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                I'm a technical consultant who bridges the gap between vision and execution.
                With deep expertise across the entire technology stack, I help startups navigate
                their critical early stages.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                From architecting robust backend systems to crafting intuitive user experiences,
                from building data pipelines to implementing AI solutions—I bring a comprehensive
                approach to product development that ensures your technology foundation is built to scale.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
                <div className="text-slate-600">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-slate-600">Client Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <div className="text-slate-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Expertise</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive technical consulting across the entire product development lifecycle
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Core Software Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Building robust, maintainable codebases with modern development practices,
                testing strategies, and architectural patterns that stand the test of time.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Full-Stack Engineering</h3>
              <p className="text-slate-600 leading-relaxed">
                End-to-end product development from database design to user interface,
                ensuring seamless integration and optimal performance across all layers.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Backend Systems</h3>
              <p className="text-slate-600 leading-relaxed">
                Designing scalable APIs, microservices, and distributed systems that handle
                growth while maintaining reliability and security.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Frontend Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Creating responsive, accessible, and performant user interfaces with modern
                frameworks and best practices in UX design.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Data Science & Systems</h3>
              <p className="text-slate-600 leading-relaxed">
                Building data pipelines, analytics platforms, and insights engines that turn
                raw data into actionable business intelligence.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">AI & Machine Learning</h3>
              <p className="text-slate-600 leading-relaxed">
                Implementing intelligent systems, from recommendation engines to natural language
                processing, that give your product a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">My Approach</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            A structured methodology that takes your startup from concept to launch
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Discovery</h3>
              <p className="text-slate-600">
                Understanding your vision, technical requirements, and business objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Architecture</h3>
              <p className="text-slate-600">
                Designing scalable systems and choosing the right technology stack
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Development</h3>
              <p className="text-slate-600">
                Building your product with clean code, best practices, and rapid iteration
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Launch & Scale</h3>
              <p className="text-slate-600">
                Deploying to production and optimizing for growth and performance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to build something exceptional?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how I can help turn your startup vision into reality
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="mailto:contact@kavyasoni.com"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-100 transition-all hover:shadow-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/kavyasoni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all hover:shadow-lg border border-slate-700 font-semibold"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/kavyasoni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="py-8 px-6 lg:px-8 border-t border-slate-200" role="contentinfo">
        <div className="max-w-7xl mx-auto text-center text-slate-600">
          <p>© 2025 Kavya Soni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
