import type { NextPage } from 'next';

// A simple SVG icon to replicate the one in the button.
const MeditationIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 17 5-10 5 10" />
    <path d="m18 17-2-4" />
  </svg>
);

// An SVG icon for the scroll indicator arrow.
const ScrollArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1.5">
        <path d="M12 5v14"/>
        <path d="m19 12-7 7-7-7"/>
    </svg>
);

// Icons for the "Connect" section
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-gray-700 group-hover:text-black transition-colors">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);

const LeetCodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-gray-700 group-hover:text-black transition-colors">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.406L.648 12.269a1.374 1.374 0 0 0 0 1.943l11.874 11.868a1.374 1.374 0 0 0 1.943 0l11.874-11.868a1.374 1.374 0 0 0 0-1.943L14.444.406a1.374 1.374 0 0 0-.961-.406zM18.42 15.355h-1.637v-1.228h-3.834v1.228h-1.637V8.645h1.637v1.228h3.834V8.645h1.637v6.71zm-5.471-2.035v-1.228h-3.834v1.228h3.834z"></path>
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-gray-700 group-hover:text-black transition-colors">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.043c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-gray-700 group-hover:text-black transition-colors">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
    </svg>
);


const HomePage: NextPage = () => {
  return (
    // Main container for the whole page
    <div className="font-sans">
      {/* Section 1: Hero */}
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Top right badge */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
          <div className="bg-[#111111] border border-gray-800 text-gray-300 text-xs sm:text-sm px-4 py-2 rounded-full backdrop-blur-sm">
            Rahul Yadav – Software Engineer / Builder in Cloud
          </div>
        </div>

        <main className="flex flex-col items-center justify-center text-center z-10">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl leading-tight">
            Not your average software engineer.
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-3xl">
            I build in Cloud &apos; with Clarity and optimization
          </p>

          {/* CTA Button */}
          <button className="mt-12 flex items-center justify-center space-x-2.5 bg-[#090909] border border-gray-800 hover:border-gray-600 hover:bg-[#111111] text-gray-200 font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <MeditationIcon />
            <span>Explore</span>
          </button>
        </main>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-10 text-gray-500 flex items-center animate-bounce z-10">
          <span>Scroll</span>
          <ScrollArrowIcon />
          <span>to experience</span>
        </div>
      </section>

      {/* Section 2: Content */}
      <section className="bg-white text-black py-20 px-4 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-gray-900">
            Let&apos;s build something meaningful &apos;
          </h2>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Most developers chase complexity &apos; I choose clarity &apos; While others build features &apos; I build solutions that last &apos; <span className="bg-black text-white px-2 py-1 rounded-md">Every line of code, a deliberate choice. Every feature, a human need.</span> You&apos;re here because you value substance over spectacle. Let&apos;s create something that serves people, not algorithms.
          </p>

          <div className="my-16 text-gray-300 text-2xl tracking-[0.5em]">
            ...
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-800">
            Ready to Connect?
          </h3>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Social Link Item */}
            <a href="https://www.linkedin.com/in/rahul-yadav-2a4b3b199/" target='blank' className="group text-left p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <LinkedInIcon />
              <h4 className="font-bold mt-4 text-gray-900">LinkedIn</h4>
              <p className="text-sm text-gray-500">Professional</p>
            </a>

            <a href="https://leetcode.com/u/itzrahulyadav/" target='blank'className="group text-left p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <LeetCodeIcon />
              <h4 className="font-bold mt-4 text-gray-900">Leetcode</h4> 
              <p className="text-sm text-gray-500">Problems & Solutions</p>
            </a>

            {/* Social Link Item */}
            <a href="https://github.com/itzrahulyadav/" target='blank' className="group text-left p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <GitHubIcon />
              <h4 className="font-bold mt-4 text-gray-900">GitHub</h4>
              <p className="text-sm text-gray-500">Code & Projects</p>
            </a>
            {/* Social Link Item */}
            <a href="https://www.instagram.com/_rxhxlx_"target='blank' className="group text-left p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <InstagramIcon />
              <h4 className="font-bold mt-4 text-gray-900">Instagram</h4>
              <p className="text-sm text-gray-500">Photos & Stories</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;