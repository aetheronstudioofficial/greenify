"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { categories } from "../order-now/categories";

// Mock popular search items mapping to their target category
const MOCK_ITEMS = [
  { name: "Fresh Apples", category: "fruits" },
  { name: "Ripe Bananas", category: "fruits" },
  { name: "Organic Carrots", category: "vegetables" },
  { name: "Fresh Tomatoes", category: "vegetables" },
  { name: "Organic Spinach", category: "vegetables" },
  { name: "Farm Fresh Eggs", category: "dairy" },
  { name: "Organic Milk", category: "dairy" },
  { name: "Cheddar Cheese", category: "dairy" },
  { name: "Sourdough Bread", category: "bakery" },
  { name: "Chocolate Croissant", category: "bakery" },
  { name: "Fresh Orange Juice", category: "beverages" },
  { name: "Organic Green Tea", category: "beverages" },
  { name: "Coconut Water", category: "beverages" },
  { name: "Avocado Oil", category: "pantry" },
  { name: "Organic Quinoa", category: "pantry" },
];

const POPULAR_SEARCHES = ["Fruits", "Vegetables", "Eggs", "Milk", "Bakery", "Beverages"];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Derive search results directly during render rather than in an effect
  const cleanQuery = query.toLowerCase().trim();
  const results = cleanQuery
    ? [
        ...categories
          .filter((cat) => cat.id !== "all" && cat.name.toLowerCase().includes(cleanQuery))
          .map((cat) => ({ name: cat.name, category: cat.id, type: "category" as const })),
        ...MOCK_ITEMS
          .filter((item) => item.name.toLowerCase().includes(cleanQuery))
          .map((item) => ({ name: item.name, category: item.category, type: "item" as const })),
      ]
    : [];

  return (
    <div className="min-h-screen w-full bg-[#faf7f2] text-[#0d1c12] selection:bg-[#fade1a] selection:text-[#1b3b24] relative flex flex-col justify-between pb-16 md:pb-0">
      
      {/* Mobile-first Search Header */}
      <header className="w-full sticky top-0 z-50 shrink-0 pt-[env(safe-area-inset-top)] bg-[#415e47] shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 text-white shrink-0 cursor-pointer"
            aria-label="Go Back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          {/* Search input container */}
          <div className="relative grow flex items-center">
            <span className="absolute left-3.5 text-white/50 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search organic fruits, veggies, milk..."
              className="w-full bg-white/15 text-white text-sm rounded-xl py-2.5 pl-10 pr-10 outline-none transition duration-250 focus:bg-white focus:text-[#1b3b24] focus:placeholder-gray-400 placeholder-white/60 shadow-inner"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 p-1 rounded-full text-white/60 hover:text-white focus:text-white bg-white/10 hover:bg-white/20 transition-all duration-200 cursor-pointer"
                aria-label="Clear Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Area */}
      <main className="max-w-3xl mx-auto px-4 py-6 grow w-full flex flex-col gap-6 text-left">
        
        {/* State 1: Empty Query - Popular Searches and Browse Categories */}
        {!query.trim() && (
          <>
            {/* Popular Searches */}
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-xs uppercase tracking-wider text-[#415e47]/70">
                Popular Searches
              </h2>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((search) => (
                  <button
                    key={search}
                    onClick={() => setQuery(search)}
                    className="px-4 py-2.5 bg-white border border-[#415e47]/10 hover:border-[#415e47]/30 rounded-xl text-xs font-bold text-[#1b3b24] hover:bg-[#415e47]/5 transition duration-200 shadow-xs cursor-pointer"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Categories Grid */}
            <div className="flex flex-col gap-3 mt-2">
              <h2 className="font-bold text-xs uppercase tracking-wider text-[#415e47]/70">
                Browse Categories
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {categories
                  .filter((cat) => cat.id !== "all")
                  .slice(0, 6)
                  .map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/order-now?category=${cat.id}`}
                      className="flex items-center gap-3 p-4 bg-white border border-[#415e47]/5 rounded-2xl shadow-2xs hover:shadow-xs hover:border-[#415e47]/15 transition duration-200 cursor-pointer"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#415e47]/5 text-[#415e47] shrink-0">
                        {cat.icon("w-5 h-5")}
                      </div>
                      <span className="font-bold text-sm text-[#1b3b24]">
                        {cat.name}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          </>
        )}

        {/* State 2: Query Active with Results */}
        {query.trim() && results.length > 0 && (
          <div className="flex flex-col bg-white border border-[#415e47]/5 rounded-2xl overflow-hidden shadow-xs divide-y divide-[#415e47]/5">
            {results.map((res, index) => (
              <Link
                key={index}
                href={`/order-now?category=${res.category}`}
                className="flex items-center justify-between p-4 hover:bg-[#415e47]/5 transition duration-150 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#415e47]/5 text-[#415e47] shrink-0">
                    {res.type === "category" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" rx="1.5" />
                        <rect x="14" y="3" width="7" height="7" rx="1.5" />
                        <rect x="14" y="14" width="7" height="7" rx="1.5" />
                        <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c4.97 0 9-3.03 9-7 0-3.31-2.69-6-6-6-.54 0-1.04.09-1.5.26-.77.29-1.5.26-2.25-.09A5.62 5.62 0 0 0 9 9c-3.31 0-6 2.69-6 6 0 3.97 4.03 7 9 7Z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-sm text-[#1b3b24] group-hover:text-[#415e47] transition duration-150">
                      {res.name}
                    </span>
                    <span className="text-[10px] text-[#415e47]/60 font-medium capitalize">
                      in {res.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#415e47]/70 text-xs font-semibold group-hover:text-[#1b3b24] transition duration-150">
                  <span>Go to Category</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* State 3: Query Active but Empty Results */}
        {query.trim() && results.length === 0 && (
          <div className="w-full py-16 flex flex-col items-center justify-center text-center gap-4 bg-white border border-[#415e47]/5 rounded-3xl p-8 shadow-xs">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#415e47]/5 text-[#415e47]/60">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-lg text-[#1b3b24]">No Results Found</h3>
              <p className="text-sm text-[#415e47]/70 max-w-xs leading-relaxed">
                We couldn&apos;t find any items matching &ldquo;{query}&rdquo;. Try another search terms.
              </p>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}
