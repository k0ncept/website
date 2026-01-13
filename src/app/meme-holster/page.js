import Link from "next/link";
import Image from "next/image";

export default function MemeHolsterPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors font-mono text-sm mb-8 inline-block"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 glitch-text">
            MEME HOLSTER
          </h1>
          <p className="text-gray-400 font-mono">
            A macOS app for quick meme access
          </p>
        </div>

        {/* App Icon and Download Section */}
        {/* <div className="mb-16 flex flex-col md:flex-row items-start md:items-center gap-8">

          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-black relative">
              <Image
                src="/meme-holster-icon.png"
                alt="Meme Holster App Icon"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          </div> */}

        {/* Download Button */}
        <div className="mb-16">
          <a
            href="/meme-holster.dmg"
            download="meme-holster.dmg"
            className="inline-flex items-center gap-2 px-8 py-4 text-white hover:text-gray-400 transition-colors font-mono rounded-lg border border-gray-700 hover:border-gray-600 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </a>
        </div>

        {/* Instructions Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 font-mono">INSTRUCTIONS</h2>
          <div className="space-y-4 font-mono">
            <div className="border-l-2 border-gray-700 pl-6">
              <p className="text-white mb-1">1. Download the DMG file</p>
              <p className="text-gray-400 text-sm">
                Click the download button above
              </p>
            </div>
            <div className="border-l-2 border-gray-700 pl-6">
              <p className="text-white mb-1">2. Save to Applications</p>
              <p className="text-gray-400 text-sm">
                Drag the app to your Applications folder
              </p>
            </div>
            <div className="border-l-2 border-gray-700 pl-6">
              <p className="text-white mb-1">3. Open the app</p>
              <p className="text-gray-400 text-sm">
                Double-click to launch from Applications
              </p>
            </div>
            <div className="border-l-2 border-gray-700 pl-6">
              <p className="text-white mb-1">4. Use Option + M to open</p>
              <p className="text-gray-400 text-sm">
                Press Option + M (⌥ + M) to open Meme Holster
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section>
          <h2 className="text-2xl font-light mb-6 font-mono">DEMO</h2>
          <div className="aspect-video bg-black rounded-lg border border-gray-800 overflow-hidden">
            {/* Replace with your video - add meme-holster-demo.mp4 to /public */}
            {/* Uncomment when you add the video:
            <video
              src="/meme-holster-demo.mp4"
              controls
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
            */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 font-mono mb-2">
                  Video placeholder
                </p>
                <p className="text-gray-600 font-mono text-sm">
                  Upload your demo video here
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
