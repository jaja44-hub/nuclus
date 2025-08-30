'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900 text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.2] z-0"></div>
      <div className="relative z-10">
        <h1 className="text-6xl font-extrabold mb-4 text-shadow-lg animate-fade-in-down">
          Welcome to Nuclus
        </h1>
        <p className="text-2xl mb-8 text-gray-300 animate-fade-in-up">
          The ultimate platform for fullstack orchestration of AI-driven UI panels,
          feedback modules, and deployment flows.
        </p>
        <Link href="/dashboard">
          <a className="px-8 py-4 bg-indigo-600 text-white rounded-lg text-xl font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
            Enter the Palace View
          </a>
        </Link>
      </div>
    </div>
  );
}
