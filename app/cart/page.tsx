"use client";

import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
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
              My Cart
            </span>

            {/* Spacer to keep Title Centered */}
            <div className="w-10 h-10 shrink-0" />
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grow w-full flex flex-col justify-center text-left">
        
        {/* Content Box */}
        <div className="w-full max-w-xl mx-auto bg-white border border-[#415e47]/5 rounded-3xl p-8 shadow-xs flex flex-col items-center text-center gap-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#fade1a]/15 text-[#1b3b24] shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-title text-2xl font-extrabold text-[#1b3b24]">Your Cart is Empty</h1>
            <p className="text-sm text-[#415e47]/75 leading-relaxed">
              Looks like you haven&apos;t added any organic groceries yet. Start shopping and load your basket with health!
            </p>
          </div>
          <Link
            href="/order-now"
            className="w-full max-w-xs mt-2 py-3.5 bg-[#415e47] text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#344d39] transition duration-200 text-center shadow-md active:scale-98"
          >
            Start Shopping Now
          </Link>
        </div>
      </main>

    </div>
  );
}
