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
              <h1 className="text-xl font-medium glitch-text">Nicholas</h1>
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
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Logo size="xlarge" className="animate-pulse" />
          </div>
          <h2 className="text-5xl font-light mb-6 glitch-text">
            Hello, I'm Nicholas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I build things for the web. Currently focused on creating simple,
            elegant solutions to complex problems.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-light mb-8">About</h3>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            I'm a developer with a passion for clean code and thoughtful design.
            I believe in the power of simplicity and the importance of user
            experience.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            reading, or enjoying the outdoors.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-light mb-8">Work</h3>
        <div className="space-y-8">
          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <h4 className="text-xl font-medium mb-2">Project Title</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Brief description of the project and technologies used.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Source Code
              </a>
            </div>
          </div>

          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <h4 className="text-xl font-medium mb-2">Another Project</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Another brief description of a project you've worked on.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-light mb-8">Contact</h3>
        <div className="max-w-md">
          <p className="text-lg leading-relaxed mb-6">
            I'm always interested in hearing about new opportunities and
            interesting projects.
          </p>
          <div className="space-y-3">
            <a
              href="mailto:hello@nicholas.com"
              className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              hello@nicholas.com
            </a>
            <a
              href="https://github.com/nicholas"
              className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nicholas"
              className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              LinkedIn
            </a>
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
