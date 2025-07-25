"use client";

import Link from "next/link";

export default function OA3LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="/OA3_logo_main.png"
              alt="OA3 Logo"
              className="w-auto"
              style={{ height: 'clamp(12rem, 20vw, 31.25rem)' }}
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: '#12e732' }}>
              OA3 Lab
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 tracking-wide">
              Testing Site
            </h2>
          </div>

          {/* Navigation to other apps */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="px-6 py-3 bg-gray-600 rounded-lg text-white font-medium opacity-75 cursor-not-allowed">
              Admin Dashboard
              <span className="block text-xs text-gray-300 mt-1">Coming Soon</span>
            </div>
            <div className="px-6 py-3 bg-gray-600 rounded-lg text-white font-medium opacity-75 cursor-not-allowed">
              Blog Site
              <span className="block text-xs text-gray-300 mt-1">Coming Soon</span>
            </div>
          </div>

          {/* Compelling Copy */}
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 font-light px-2 sm:px-0">
              Exploring the convergence of <span className="text-blue-400 font-medium">Web3 blockchain technology</span> and 
              <span className="text-purple-400 font-medium"> artificial intelligence</span> to create revolutionary 
              applications that redefine digital marketing and sales experiences.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 font-light px-2 sm:px-0">
              From innovative <span className="text-cyan-400 font-medium">mobile app integrations</span> to cutting-edge 
              web development concepts, we&apos;re building the future of decentralized marketing solutions. 
              <span className="text-green-400 font-medium">Testing the boundaries</span> of what&apos;s possible when 
              blockchain meets AI-driven consumer engagement.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-16 px-4 sm:px-0">
            <div className="text-center space-y-3">
              <div className="text-2xl sm:text-3xl mb-3">🚀</div>
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">Web3 Integration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Blockchain-powered content creation and community engagement</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-2xl sm:text-3xl mb-3">🤖</div>
              <h3 className="text-base sm:text-lg font-semibold text-purple-400">AI-Driven Content</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Intelligent content generation for marketing and sales optimization</p>
            </div>
            <div className="text-center space-y-3 sm:col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3">📱</div>
              <h3 className="text-base sm:text-lg font-semibold text-cyan-400">Mobile-First Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Cross-platform applications built for the decentralized future</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
