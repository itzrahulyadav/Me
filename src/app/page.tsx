"use client";

import type { NextPage } from 'next';
import { Geist } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const geist = Geist({ subsets: ['latin'] });

const LightningBoltIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12L13 2H7l4 10H5l7 10z" />
    </svg>
);

const ThunderStrikeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-gray-500 group-hover:text-blue-500 transition-colors">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-gray-500 group-hover:text-red-500 transition-colors">
        <path d="M24 4H0V20H24V4ZM12 13.5L3 7.5H21L12 13.5Z" />
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-gray-500 group-hover:text-gray-900 transition-colors">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.043c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
    </svg>
);

const LeetCodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-gray-500 group-hover:text-yellow-500 transition-colors">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.406L.648 12.269a1.374 1.374 0 0 0 0 1.943l11.874 11.868a1.374 1.374 0 0 0 1.943 0l11.874-11.868a1.374 1.374 0 0 0 0-1.943L14.444.406a1.374 1.374 0 0 0-.961-.406zM18.42 15.355h-1.637v-1.228h-3.834v1.228h-1.637V8.645h1.637v1.228h3.834V8.645h1.637v6.71zm-5.471-2.035v-1.228h-3.834v1.228h3.834z"></path>
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-gray-500 group-hover:text-pink-500 transition-colors">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
    </svg>
);

const ContentStudioIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
    </svg>
);

const ArrowRightIcon = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${className}`}>
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
    </svg>
);

const HomePage: NextPage = () => {
  const skills = [
    { name: 'AWS', image: '/icons/icons8-amazon-web-services.svg' },
    { name: 'GCP', image: '/icons/icons8-google-cloud.svg' },
    { name: 'Azure', image: '/icons/icons8-azure.svg' },
    { name: 'Kubernetes', image: '/icons/icons8-kubernetes.svg' },
    { name: 'Python', image: '/icons/icons8-python.svg' },
    { name: 'Go (Golang)', image: '/icons/icons8-go-logo.svg' },
    { name: 'Terraform', image: '/icons/icons8-terraform.svg' },
    { name: 'ArgoCD', image: '/icons/argoprojio-icon.svg' },
    { name: 'Networking', image: '/icons/icons8-decentralized-network-100.png' },
    { name: 'Security', image: '/icons/icons8-protect-94.png' },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.2) translate(-2%, -2%);
          }
        }
        
        @keyframes lightningFlash {
          0%, 90% { 
            opacity: 0; 
          }
          91% {
            opacity: 0.9;
          }
          92% {
            opacity: 0.3;
          }
          93% {
            opacity: 0.7;
          }
          94% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes sparkGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.7);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(234, 179, 8, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(234, 179, 8, 0);
          }
        }

        .hero-background-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: kenburns 25s ease-out infinite alternate;
        }

        .lightning-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background-color: #eab308;
          opacity: 0;
          animation: lightningFlash 5s ease-out infinite;
          z-index: 1;
        }
        
        .dark-thunder-icon {
          stroke: #374151; /* gray-700 */
        }
      `}</style>
      
      <div className={`${geist.className} bg-white relative`}>
        
        <section className="min-h-screen text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/zenitsu.png"
              alt="Zenitsu Agatsuma"
              layout="fill"
              className="hero-background-image"
              priority
            />
            <div className="absolute inset-0 bg-black/50 z-1"></div>
          </div>
          
          <div className="absolute inset-0 lightning-overlay z-3"></div>

          <div className="fixed top-6 right-6 md:top-8 md:right-8 z-20">
            <a href="https://www.credly.com/users/aurafarmer/badges#credly" target='_blank'>
              <div className="bg-black/50 text-white text-xs sm:text-sm px-4 py-2 rounded-xl backdrop-blur-lg border border-yellow-400 font-medium">
                Rahul Yadav – Software Engineer who likes aura farming
              </div>
            </a>
          </div>

          <main className="flex flex-col items-center justify-center text-center z-10">
            <div className="relative inline-block mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl leading-tight">
                Not your <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent">average</span> software engineer
              </h1>
            </div>
            <p className="mt-2 text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-3xl">
              Building systems that strike like lightning. Ready to spark your next project?
            </p>

            <Link href="#content">
              <button className="mt-12 flex items-center justify-center space-x-2.5 bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 spark-glow">
                <LightningBoltIcon />
                <span>Explore</span>
              </button>
            </Link>
          </main>

          <div className="absolute bottom-8 sm:bottom-10 text-gray-400 flex items-center animate-bounce z-10">
            <span>Scroll</span>
            <ThunderStrikeIcon />
            <span>to Ignite</span>
          </div>
        </section>

        <section id="content" className="text-gray-900 bg-gray-50 py-20 px-4 sm:py-24 md:py-32 z-10 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-gray-900">
              Infra so solid, even the chaos monkey gives up.
            </h2>
            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Some chase feature velocity. I chase zero downtime.
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent px-2 py-1 rounded-md">From Docker to deployment, every move is electric.</span>
              If your infra isn’t predictable, it’s just expensive chaos. Let’s build something that runs smooth — no smoke, no mirrors.
            </p>
          </div>
        </section>

        <section className="bg-white text-gray-900 py-20 px-4 sm:py-24 z-10 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900">About Me</h1>
            <h3 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-800">
             I am Rahul Yadav
            </h3>
            <div className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto space-y-6 text-left leading-relaxed">
              <p>As an enthusiastic DevOps engineer, I excel at unraveling intricate Kubernetes challenges and resolving complex networking issues, while passionately architecting scalable, resilient systems using my expertise in AWS, GCP, and distributed systems design. Additionally, as a full-stack tinkerer, I embrace serverless technologies and leverage my proficiency in Go to build high-performance, concurrent applications, crafting end-to-end solutions with a focus on both front-end polish and back-end robustness.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 text-gray-900 py-20 px-4 sm:py-24 z-10 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900">Technologies I Work With</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Tools and tech I wield to craft lightning-fast, robust solutions.</p>
            
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col items-center justify-center transition-all duration-300 hover:border-yellow-400/50 hover:shadow-lg spark-glow">
                  <Image
                    src={skill.image}
                    alt={`${skill.name} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                  <h4 className="font-semibold text-lg mt-4 text-gray-900">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white text-gray-900 pt-20 pb-20 px-4 sm:pt-24 sm:pb-24 md:pb-32 z-10 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block relative mb-4">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900">Projects</h2>
              <span className="absolute -top-3 -right-4 bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full transform -rotate-12">Epic</span>
            </div>
            <p className="text-lg text-gray-600">Solutions that cut through challenges with precision</p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <a href="https://github.com/itzrahulyadav/awsx" target="_blank" rel="noopener noreferrer" className="group relative block bg-white border border-gray-200 p-6 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-400/50 hover:shadow-lg spark-glow">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
                <ContentStudioIcon />
                <h4 className="font-bold text-lg mt-4 text-gray-900">awsx</h4>
                <p className="mt-2 text-gray-600">Stuck in a network jam? awsx slices through connectivity issues by checking the reachability</p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">Networking</span>
                  <div className="group text-gray-500 hover:text-gray-900 font-semibold flex items-center text-sm">
                    Unleash the Tool <ArrowRightIcon />
                  </div>
                </div>
              </a>
              <a href="#" className="group relative block bg-white border border-gray-200 p-6 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-400/50 hover:shadow-lg spark-glow">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
                <div className="flex justify-between items-start">
                  <ClockIcon />
                  <span className="bg-yellow-400/20 text-yellow-500 text-xs font-medium px-2.5 py-0.5 rounded-full">New</span>
                </div>
                <h4 className="font-bold text-lg mt-4 text-gray-900">More Tools Coming Soon</h4>
                <p className="mt-2 text-gray-600">Forging epic tools to supercharge productivity and electrify workflows. Stay tuned!</p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">In Development</span>
                  <div className="group text-gray-500 hover:text-gray-900 font-semibold flex items-center text-sm">
                    Follow the Spark <ArrowRightIcon className="rotate-[-45deg] group-hover:rotate-0" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-50 text-gray-900 py-20 px-4 sm:py-24 md:py-32 z-10 relative">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900">
                    Ready to Connect?
                </h3>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Let&apos;s build something electric together. Reach out and let the sparks fly.
                </p>

                <div className="mt-12 flex items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                    <a href="https://www.linkedin.com/in/rahul-yadav-2a4b3b199/" target='_blank' rel="noopener noreferrer" className="group p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200 spark-glow">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:rahulkyadav9691@gmail.com" rel="noopener noreferrer" className="group p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200 spark-glow">
                        <MailIcon />
                    </a>
                    <a href="https://github.com/itzrahulyadav/" target='_blank' rel="noopener noreferrer" className="group p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200 spark-glow">
                        <GitHubIcon />
                    </a>
                    <a href="https://leetcode.com/u/itzrahulyadav/" target='_blank' rel="noopener noreferrer" className="group p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200 spark-glow">
                        <LeetCodeIcon />
                    </a>
                    <a href="https://www.instagram.com/_rxhxlx_" target='_blank' rel="noopener noreferrer" className="group p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200 spark-glow">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;