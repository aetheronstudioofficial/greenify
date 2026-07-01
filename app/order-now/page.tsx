"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

import { categories } from "./categories";

function OrderNowContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isDesktopBasketOpen, setIsDesktopBasketOpen] = useState<boolean>(false);
  const isProgrammaticScroll = useRef<boolean>(false);
  const searchParams = useSearchParams();
  const categoryParam = searchParams ? searchParams.get("category") : null;

  const scrollToCategory = (id: string) => {
    isProgrammaticScroll.current = true;
    setActiveCategory(id);
    const element = document.getElementById(`category-section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Re-enable scrollspy observer after smooth scrolling finishes
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1000);
  };

  // Scroll to category if passed in URL query parameters
  useEffect(() => {
    if (categoryParam) {
      const timer = setTimeout(() => {
        scrollToCategory(categoryParam);
      }, 400); // Allow layout elements to mount
      return () => clearTimeout(timer);
    }
  }, [categoryParam]);

  // Scrollspy: Sync active category based on page scroll intersection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-180px 0px -60% 0px", // focus area just below sticky header
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isProgrammaticScroll.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace("category-section-", "");
          setActiveCategory(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    categories.forEach((cat) => {
      const el = document.getElementById(`category-section-${cat.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Center/Scroll active menu buttons into view automatically when selection changes
  useEffect(() => {
    // Scroll active mobile header button
    const activeMobileBtn = document.getElementById(`mobile-category-btn-${activeCategory}`);
    if (activeMobileBtn) {
      activeMobileBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }

    // Scroll active desktop sidebar button
    const activeDesktopBtn = document.getElementById(`desktop-category-btn-${activeCategory}`);
    if (activeDesktopBtn) {
      activeDesktopBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen w-full bg-[#faf7f2] text-[#0d1c12] selection:bg-[#fade1a] selection:text-[#1b3b24] relative flex flex-col justify-between">
      <header className="w-full sticky top-0 z-50 shrink-0 pt-[env(safe-area-inset-top)] bg-[#415e47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-0 md:h-20 flex flex-col md:flex-row items-center justify-between w-full">
          
          {/* Mobile Header Structure */}
          <div className="flex md:hidden flex-col gap-3.5 w-full">
            {/* Row 1: App Info & Profile Icon */}
            <div className="flex items-center justify-between w-full">
              {/* Left: App name + Delivery Location */}
              <div className="flex flex-col text-left">
                <Link href="/" className="font-title text-2xl font-extrabold tracking-tight text-white leading-none hover:text-[#fade1a] transition duration-200">
                  Greenify
                </Link>
                {/* Delivery Location Selector */}
                <div className="flex items-center gap-1 mt-1.5 text-xs text-[#cce8a8] font-medium cursor-pointer hover:text-white transition duration-200">
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
            <Link href="/search" className="relative w-full group block cursor-pointer">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-white/50 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </span>
              <div className="w-full bg-white/10 hover:bg-white/15 text-white/60 text-sm rounded-xl py-2.5 pl-10 pr-4 transition duration-300 border border-white/5 shadow-inner text-left select-none">
                Search fresh groceries...
              </div>
            </Link>

            {/* Row 3: Mobile Category Selector */}
            <div className="flex overflow-x-auto gap-2 pb-3 pt-0.5 -mx-4 px-4 no-scrollbar scroll-smooth">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`mobile-category-btn-${cat.id}`}
                    onClick={() => scrollToCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 active:scale-95 ${
                      isActive
                        ? "bg-[#fade1a] text-[#1b3b24] shadow-md shadow-black/10 scale-105"
                        : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    {cat.icon("w-3.5 h-3.5 shrink-0")}
                    <span>{cat.name}</span>
                  </button>
                );
              })}
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
                    sizes="40px"
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

            {/* Profile & Basket Icons */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Profile Icon */}
              <div className="relative group cursor-pointer">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-lg transition duration-300 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>

              {/* Basket Icon (Desktop) */}
              <button
                onClick={() => setIsDesktopBasketOpen(true)}
                className="relative group cursor-pointer outline-none"
                aria-label="Open Basket"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-lg transition duration-300 shadow-md relative animate-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  {/* Badge */}
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#fade1a] text-[10px] font-extrabold text-[#1b3b24] shadow-md border-2 border-[#415e47]">
                    0
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout with Sidebar */}
      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Desktop Sidebar: hidden on mobile */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-28 h-[calc(100vh-160px)] overflow-y-auto no-scrollbar flex flex-col gap-4 py-2 pr-2">
            <nav className="flex flex-col gap-1.5">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`desktop-category-btn-${cat.id}`}
                    onClick={() => scrollToCategory(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group text-left ${
                      isActive
                        ? "text-[#1b3b24] font-extrabold bg-[#415e47]/5"
                        : "text-[#415e47]/70 hover:bg-[#415e47]/5 hover:text-[#1b3b24]"
                    }`}
                  >
                    <span className={`transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                      {cat.icon("w-4.5 h-4.5 shrink-0")}
                    </span>
                    <span className="grow">{cat.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`opacity-50 transition-all duration-200 ${
                        isActive ? "opacity-90 translate-x-0.5" : "group-hover:translate-x-0.5"
                      }`}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content Area showing all categories stacked (flat layout) */}
        <div className="grow flex flex-col gap-16 py-2 pb-[40vh]">
          {categories.map((cat) => (
            <section
              key={cat.id}
              id={`category-section-${cat.id}`}
              className="w-full min-h-[150px] flex flex-col items-start justify-start pt-4 text-left scroll-mt-48 md:scroll-mt-28 border-b border-dashed border-[#415e47]/20 pb-8 last:border-b-0"
            >
              {/* Simple title heading */}
              <div className="flex items-center text-[#1b3b24] mb-4">
                <h2 className="font-title text-3xl sm:text-4xl font-extrabold tracking-tight capitalize">
                  {cat.name}
                </h2>
              </div>
            </section>
          ))}
        </div>

      </main>

      {/* Footer */}
      <div className="hidden md:block">
        <Footer theme="light" />
      </div>

      {/* Desktop Basket Sidebar Drawer */}
      {isDesktopBasketOpen && (
        <div className="fixed inset-0 z-100 hidden md:flex justify-end animate-fade-in">
          {/* Backdrop */}
          <div
            onClick={() => setIsDesktopBasketOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
          />
          {/* Drawer Panel */}
          <div className="relative w-96 h-full bg-[#faf7f2] shadow-2xl p-6 flex flex-col gap-6 animate-slide-in-right z-10 border-l border-[#415e47]/10">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200/50 pb-4">
              <h3 className="font-title text-2xl font-extrabold text-[#1b3b24]">My Basket</h3>
              <button
                onClick={() => setIsDesktopBasketOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#415e47] hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm border border-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {/* Content */}
            <div className="grow flex flex-col items-center justify-center text-center p-4 gap-6">
              <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-[#fade1a]/15 text-[#1b3b24] shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-[#1b3b24]">Your Basket is Empty</h4>
                <p className="text-sm text-[#415e47]/75 leading-relaxed">
                  Looks like you haven&apos;t added any items to your basket yet. Explore our categories of fresh, organic groceries to start shopping!
                </p>
              </div>
              <button
                onClick={() => setIsDesktopBasketOpen(false)}
                className="w-full py-3 bg-[#415e47] text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#344d39] transition duration-200 text-center shadow-md active:scale-98"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OrderNow() {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full bg-[#faf7f2] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#415e47]"></div>
      </div>
    }>
      <OrderNowContent />
    </Suspense>
  );
}

