"use client";

import Link from "next/link";
import { categories } from "../order-now/categories";
import Image from "next/image";

export default function CategoryPage() {
  return (
    <div className="min-h-screen w-full bg-[#faf7f2] text-[#0d1c12] selection:bg-[#fade1a] selection:text-[#1b3b24] relative flex flex-col justify-between pb-16 md:pb-0">
      
      {/* Sticky Header matching order-now design */}
      <header className="w-full sticky top-0 z-50 shrink-0 pt-[env(safe-area-inset-top)] bg-[#415e47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-0 md:h-20 flex flex-col md:flex-row items-center justify-between w-full">
          {/* Mobile Header Structure */}
          <div className="flex md:hidden items-center justify-between w-full h-12">
            <Link
              href="/order-now"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 text-white shrink-0 cursor-pointer"
              aria-label="Go Back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </Link>

            <span className="font-title text-lg font-bold text-white tracking-wide">
              Browse Categories
            </span>

            <Link
              href="/search"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 text-white shrink-0 cursor-pointer"
              aria-label="Open Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </Link>
          </div>

          {/* Desktop Header Structure */}
          <div className="hidden md:flex items-center justify-between w-full h-full gap-6">
            <Link href="/" className="flex items-center gap-3 shrink-0 group cursor-pointer">
              <div className="relative transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6 w-10 h-10">
                <Image
                  src="/logo.webp"
                  alt="Greenify Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                  priority
                />
              </div>
              <span className="font-title text-2xl font-bold tracking-tight text-white transition duration-300 group-hover:text-[#fade1a]">
                Greenify
              </span>
            </Link>

            <div className="flex items-center gap-2 cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#fade1a]">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-white/50 uppercase tracking-wider leading-none">Deliver to</span>
                <span className="text-xs text-white font-semibold leading-tight mt-0.5">New York, USA</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/order-now"
                className="px-5 py-2.5 bg-[#fade1a] text-[#1b3b24] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-[#415e47] transition duration-200 shadow-sm"
              >
                Go to Shop
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grow w-full flex flex-col gap-6 text-left">
        <div>
          <h1 className="font-title text-2xl sm:text-3xl font-extrabold text-[#1b3b24]">
            Browse Categories
          </h1>
          <p className="text-sm text-[#415e47]/70 mt-1">
            Select a category to view fresh items and make your selection.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/order-now?category=${cat.id}`}
              className="flex flex-col items-center justify-center p-6 bg-white border border-[#415e47]/5 rounded-2xl shadow-xs hover:shadow-md hover:scale-102 hover:border-[#415e47]/15 transition-all duration-300 group cursor-pointer text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#415e47]/5 text-[#415e47] group-hover:bg-[#fade1a]/20 group-hover:text-[#1b3b24] transition-all duration-300 mb-4 shadow-inner">
                {cat.icon("w-7 h-7")}
              </div>
              <span className="font-bold text-sm text-[#1b3b24] group-hover:text-[#415e47] transition duration-200">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </main>

    </div>
  );
}
