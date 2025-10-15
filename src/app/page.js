import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Logo size="small" />
              <h1 className="text-xl font-medium glitch-text">k0ncept</h1>
            </div>
            <div className="flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                className="text-gray-600 dark:text-gray-400 hover:text-fuchsia-400 transition-colors"
              >
                Work
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-400 hover:text-green-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 relative">
        <div className="flex items-center justify-between min-h-[400px]">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-5xl font-light mb-6 glitch-text text-left">
              Hi, I'm kon
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-left">
              Generalist, product engineer, and meme specialist.
            </p>
          </div>

          {/* Right side - Large background logo */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20 dark:opacity-30">
            <Logo
              size="xlarge"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-pulse"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-light mb-8">About</h3>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            I'm rebuilding my career and diving into all things AI. Currently
            focused on shipping new projects.
          </p>
          {/* <p className="text-lg leading-relaxed">
     
          </p> */}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-light mb-8">Work</h3>
        <div className="space-y-8">
          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <h4 className="text-xl font-medium mb-2">Coming Soon</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Coming soon
            </p>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <h4 className="text-xl font-medium mb-2">Coming Soon</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Coming soonish
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-light mb-8">Contact</h3>
        <div className="max-w-md">
          <div className="space-y-3">
            <a
              href="https://x.com/k0ncept"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>DM me on X</span>
            </a>
            <a
              href="https://github.com/k0ncept"
              className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              GitHub
            </a>
            {/* <a
              href="https://linkedin.com/in/nicholas"
              className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              LinkedIn
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-center text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Nicholas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
