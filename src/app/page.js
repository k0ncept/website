import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Centered */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        {/* Logo - Top Center */}
        <div className="mb-12">
          <Logo
            size="xlarge"
            className="glitch-text w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
          />
        </div>

        {/* Main Title - KØNCEPT */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 glitch-text text-center">
          KØNCEPT
        </h1>

        {/* Role Text */}
        <p className="text-base md:text-lg mb-8 text-center font-mono tracking-wide">
          GENERALIST // PRODUCT ENGINEER // MEME SPECIALIST
        </p>

        {/* About Paragraph */}
        <p className="text-base md:text-lg max-w-2xl text-center font-mono leading-relaxed">
          REBUILDING MY CAREER AND DIVING INTO ALL THINGS AI. CURRENTLY FOCUSED
          ON SHIPPING NEW PROJECTS.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16 w-full">
        <h3 className="text-3xl font-light mb-8 font-mono">PROJECTS</h3>
        <div className="space-y-8">
          <div className="border-l-2 border-gray-700 pl-6">
            <h4 className="text-xl font-medium mb-2 font-mono">Coming Soon</h4>
            <p className="text-gray-400 mb-3 font-mono">Coming soon</p>
          </div>

          <div className="border-l-2 border-gray-700 pl-6">
            <h4 className="text-xl font-medium mb-2 font-mono">Coming Soon</h4>
            <p className="text-gray-400 mb-3 font-mono">Coming soonish</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16 w-full">
        <h3 className="text-3xl font-light mb-8 font-mono">CONTACT</h3>
        <div className="max-w-md">
          <div className="space-y-3 font-mono">
            <a
              href="https://x.com/k0ncept"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>DM me on X</span>
            </a>
            <a
              href="https://github.com/k0ncept"
              className="block text-white hover:text-gray-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
