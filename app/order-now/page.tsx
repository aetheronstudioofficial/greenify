import Image from "next/image";
import Link from "next/link";

export default function OrderNow() {
  return (
    <div className="min-h-screen w-full bg-white text-[#0d1c12] selection:bg-[#fade1a] selection:text-[#1b3b24] relative flex flex-col justify-between">
      <header className="w-full sticky top-0 z-50 shrink-0 pt-[env(safe-area-inset-top)] bg-[#415e47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-0 md:h-20 flex flex-col md:flex-row items-center justify-between w-full">
          {/* Mobile Header Structure */}
          <div className="flex md:hidden flex-col gap-3 w-full">
            {/* Row 1: App Info & Profile Icon */}
            <div className="flex items-center justify-between w-full">
              {/* Left: App name + Delivery Location */}
              <div className="flex flex-col text-left">
                <Link href="/" className="font-title text-2xl font-extrabold tracking-tight text-white leading-none hover:text-[#fade1a] transition duration-200">
                  Greenify
                </Link>
                {/* Delivery Location Selector */}
                <div className="flex items-center gap-1 mt-1 text-xs text-[#cce8a8] font-medium cursor-pointer hover:text-white transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#fade1a]">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Deliver to: New York, USA</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 mt-0.5">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
              
              {/* Right: Profile Icon */}
              <div className="relative group shrink-0 cursor-pointer">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition duration-200 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 2: Search Bar */}
            <div className="relative w-full group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-white/50 group-focus-within:text-[#1b3b24]/50 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search fresh groceries..."
                className="w-full bg-white/10 hover:bg-white/15 focus:bg-white focus:text-[#1b3b24] focus:placeholder-gray-400 placeholder-white/60 text-white text-sm rounded-xl py-2.5 pl-10 pr-4 outline-none transition duration-300 border border-white/5 focus:border-white/20 shadow-inner focus:shadow-md"
              />
            </div>
          </div>

          {/* Desktop Header Structure */}
          <div className="hidden md:flex items-center justify-between w-full h-full gap-6">
            {/* Left Section: Logo, Delivery Location, Search Bar */}
            <div className="flex items-center gap-6 flex-1">
              {/* Logo Group */}
              <Link href="/" className="flex items-center gap-3 shrink-0 group cursor-pointer">
                <div className="relative transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6 w-10 h-10">
                  <Image
                    src="/logo.webp"
                    alt="Greenify Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="font-title text-2xl font-bold tracking-tight text-white transition duration-300 group-hover:text-[#fade1a]">
                  Greenify
                </span>
              </Link>

              {/* Delivery Location Selector */}
              <div className="flex items-center gap-2 cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#fade1a] transition-transform duration-300 group-hover:scale-110">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-white/50 uppercase tracking-wider leading-none">Deliver to</span>
                  <span className="text-xs text-white font-semibold leading-tight mt-0.5">New York, USA</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 ml-1.5 transition-transform duration-300 group-hover:translate-y-0.5">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>

              {/* Search Bar */}
              <div className="relative flex-1 max-w-md group">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-white/50 group-focus-within:text-[#1b3b24]/50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.3-4.3"/>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search fresh groceries, organic veggies, fruits..."
                  className="w-full bg-white/10 hover:bg-white/15 focus:bg-white focus:text-[#1b3b24] focus:placeholder-gray-400 placeholder-white/60 text-white text-sm rounded-xl py-2.5 pl-10 pr-4 outline-none transition duration-300 border border-white/5 focus:border-white/20 shadow-inner focus:shadow-md"
                />
              </div>
            </div>

            {/* Profile Icon */}
            <div className="relative group shrink-0 cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-lg transition duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center flex flex-col items-center gap-6 max-w-md w-full p-8 rounded-custom-3xl bg-[#faf7f2]/90 border border-[#415e47]/10 shadow-2xl shadow-green-900/5 transition duration-500 hover:border-[#415e47]/20">
          
          {/* Logo with pulsing container */}
          <div className="relative w-28 h-28 flex items-center justify-center bg-[#415e47]/10 rounded-full p-4 shadow-inner group">
            <div className="absolute inset-0 bg-[#fade1a]/20 rounded-full animate-ping opacity-40 group-hover:animate-none"></div>
            <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Image
                src="/logo.webp"
                alt="Greenify Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Name and Tagline */}
          <div className="flex flex-col gap-2">
            <h1 className="font-title text-4xl font-extrabold tracking-tight text-[#1b3b24]">
              Greenify
            </h1>
            <p className="text-sm font-semibold text-[#415e47] tracking-wider uppercase">
              Fresh Groceries & Healthy Food
            </p>
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-[#fade1a] to-[#415e47] rounded-full"></div>

          {/* Placeholder Message */}
          <p className="text-[#415e47]/80 text-sm leading-relaxed font-medium">
            Our online store and ordering dashboard are coming soon. Get ready to experience local organic produce delivered straight to your door!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#415e47]/10 bg-[#faf7f2] py-6 text-[#415e47]/60 text-xs text-center">
        <p>&copy; {new Date().getFullYear()} Greenify. All rights reserved.</p>
      </footer>
    </div>
  );
}
