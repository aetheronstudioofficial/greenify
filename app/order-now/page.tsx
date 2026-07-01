"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Types
interface Category {
  id: string;
  name: string;
  icon: (className: string) => React.ReactNode;
}

const categories: Category[] = [
    {
      id: "all",
      name: "All Categories",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      ),
    },
    {
      id: "fruits",
      name: "Fruits",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 22c4.97 0 9-3.03 9-7 0-3.31-2.69-6-6-6-.54 0-1.04.09-1.5.26-.77.29-1.5.26-2.25-.09A5.62 5.62 0 0 0 9 9c-3.31 0-6 2.69-6 6 0 3.97 4.03 7 9 7Z" />
          <path d="M12 9c0-2.5 1.5-4.5 3.5-5" />
          <path d="M14 4.5c.5-1 2.5-.5 2.5-.5s0 2-1 2.5" />
        </svg>
      ),
    },
    {
      id: "vegetables",
      name: "Vegetables",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M15.3 3.3c.4-.4 1-.4 1.4 0l4 4c.4.4.4 1 0 1.4L9.4 20c-.5.5-1.2.8-2 .8H4v-3.4c0-.8.3-1.5.8-2L15.3 3.3z" />
          <path d="M14 7l3 3" />
          <path d="M18.5 2.5c0 0 .5 2-1 3.5s-3.5 1-3.5 1" />
        </svg>
      ),
    },
    {
      id: "dairy",
      name: "Dairy & Eggs",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 18h12" />
          <path d="M8 22h8" />
          <path d="M9 2h6v4H9z" />
          <path d="M7 6h10v12a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V6z" />
          <circle cx="12" cy="13" r="2" />
        </svg>
      ),
    },
    {
      id: "bakery",
      name: "Bakery",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M3 14c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7C12.7 6.9 14.2 6 16 6c3.3 0 6 2.7 6 6v3H3v-1z" />
          <path d="M3 15h19v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" />
          <path d="M7 11v3" />
          <path d="M12 10v4" />
          <path d="M17 11v3" />
        </svg>
      ),
    },
    {
      id: "beverages",
      name: "Beverages",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      ),
    },
    {
      id: "beauty",
      name: "Beauty & Care",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M9 11h6v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V11z" />
          <path d="M12 6v5" />
          <path d="M12 6a3 3 0 0 1 3-3h1" />
          <path d="M12 6a3 3 0 0 0-3-3H8" />
        </svg>
      ),
    },
    {
      id: "snacks",
      name: "Snacks & Sweets",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h.01" strokeWidth="3" />
          <path d="M12 8h.01" strokeWidth="3" />
          <path d="M16 12h.01" strokeWidth="3" />
          <path d="M12 16h.01" strokeWidth="3" />
          <path d="M12 12h.01" strokeWidth="3" />
          <path d="M7 16h.01" strokeWidth="3" />
          <path d="M17 16h.01" strokeWidth="3" />
          <path d="M17 8h.01" strokeWidth="3" />
          <path d="M7 8h.01" strokeWidth="3" />
        </svg>
      ),
    },
    {
      id: "meat",
      name: "Meat & Seafood",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m15 4 5 5v3a8 8 0 0 1-8 8H7a3 3 0 0 1-3-3v-5a8 8 0 0 1 8-8h3Z" />
          <path d="M9.5 14.5c.5.5.5 1.5 0 2s-1.5.5-2 0" />
          <path d="M19 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
    {
      id: "pantry",
      name: "Pantry & Staples",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M5 6h14M5 10h14M5 14h14M5 18h14" />
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      ),
    },
    {
      id: "frozen",
      name: "Frozen Foods",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
        </svg>
      ),
    },
    {
      id: "household",
      name: "Household & Cleaning",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2v4M8 6h8M6 10h12v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10z" />
          <path d="M10 14h4M10 18h4" />
        </svg>
      ),
    },
    {
      id: "baby",
      name: "Baby Care",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M9 12h6v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-9z" />
          <path d="M10 7a2 2 0 0 1 4 0v5H10V7z" />
          <path d="M12 2v5" />
          <path d="M10 16h4" />
        </svg>
      ),
    },
    {
      id: "pets",
      name: "Pet Supplies",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M17.5 7.5a2.5 2.5 0 1 1-5 0c0-.8.4-1.5 1-2L7 12c-.5-.6-1.2-1-2-1a2.5 2.5 0 1 0 0 5c.8 0 1.5-.4 2-1l6.5 6.5c.6-.5 1.3-.9 2.1-.9a2.5 2.5 0 1 1-1.1-4.9Z" />
        </svg>
      ),
    },
    {
      id: "organic",
      name: "Organic & Health",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8a3 3 0 0 1 3 3c0 3-3 6-3 6s-3-3-3-6a3 3 0 0 1 3-3z" />
        </svg>
      ),
    },
    {
      id: "pharmacy",
      name: "Pharmacy & Wellness",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(45 12 12)" />
          <line x1="9" y1="15" x2="15" y2="9" />
        </svg>
      ),
    },
    {
      id: "kitchen",
      name: "Kitchen & Home",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 8v8M6 8h4" />
          <path d="M16 8v8M14 8h4" />
        </svg>
      ),
    },
    {
      id: "gifts",
      name: "Gifts & Flowers",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="4" y="9" width="16" height="12" rx="2" />
          <rect x="3" y="5" width="18" height="4" rx="1" />
          <line x1="12" y1="5" x2="12" y2="21" />
          <line x1="4" y1="13" x2="20" y2="13" />
          <path d="M12 5a3 3 0 0 0-3-3c-1.5 0-3 1.5-3 3h6Z" />
          <path d="M12 5a3 3 0 0 1 3-3c1.5 0 3 1.5 3 3h-6Z" />
        </svg>
      ),
    },
  ];

export default function OrderNow() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const isProgrammaticScroll = useRef<boolean>(false);

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

            {/* Row 3: Mobile Category Selector */}
            <div className="flex overflow-x-auto gap-2 pb-3 pt-0.5 px-0.5 -mx-4 px-4 no-scrollbar scroll-smooth">
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
        <div className="flex-grow flex flex-col gap-16 py-2 pb-[40vh]">
          {categories.map((cat) => (
            <section
              key={cat.id}
              id={`category-section-${cat.id}`}
              className="w-full min-h-[250px] flex flex-col items-start justify-start pt-4 text-left scroll-mt-48 md:scroll-mt-28"
            >
              {/* Simple icon + title heading */}
              <div className="flex items-center gap-4 mb-6 text-[#1b3b24]">
                <div className="w-12 h-12 flex items-center justify-center bg-[#415e47]/10 rounded-xl text-[#415e47]">
                  {cat.icon("w-6 h-6")}
                </div>
                <h2 className="font-title text-3xl sm:text-4xl font-extrabold tracking-tight capitalize">
                  {cat.name}
                </h2>
              </div>
              
              <p className="text-[#415e47]/80 text-base leading-relaxed max-w-2xl font-medium">
                We are preparing to stock fresh, organic, and hand-picked items for the <span className="font-bold text-[#415e47]">{cat.name}</span> category. Check back soon for our full delivery selection!
              </p>
            </section>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#415e47]/10 bg-[#faf7f2] py-6 text-[#415e47]/60 text-xs text-center">
        <p>&copy; {new Date().getFullYear()} Greenify. All rights reserved.</p>
      </footer>
    </div>
  );
}
