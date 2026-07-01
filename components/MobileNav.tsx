"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const isHomeActive = pathname === "/order-now";
  const isCategoryActive = pathname === "/category";
  const isOrderAgainActive = pathname === "/order-again";
  const isCartActive = pathname === "/cart" || pathname === "/card";

  if (pathname === "/") return null;

  return (
    <>
      {/* Sticky Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-45 md:hidden bg-[#faf7f2] border-t border-black/5 shadow-2xl safe-bottom transition-all duration-300">
        <nav className="flex items-center justify-around h-16 px-2">
          {/* Tab: Home */}
          <Link
            href="/order-now"
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors duration-200 ${
              isHomeActive
                ? "text-[#415e47] font-bold"
                : "text-[#415e47]/60"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-[10px] tracking-wide">Home</span>
          </Link>

          {/* Tab: Category */}
          <Link
            href="/category"
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors duration-200 ${
              isCategoryActive
                ? "text-[#415e47] font-bold"
                : "text-[#415e47]/60"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>
            <span className="text-[10px] tracking-wide">Category</span>
          </Link>

          {/* Tab: Order Again */}
          <Link
            href="/order-again"
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors duration-200 ${
              isOrderAgainActive
                ? "text-[#415e47] font-bold"
                : "text-[#415e47]/60"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M12 7v5l4 2" />
            </svg>
            <span className="text-[10px] tracking-wide">Order Again</span>
          </Link>

          {/* Tab: Cart */}
          <Link
            href="/cart"
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors duration-200 relative ${
              isCartActive
                ? "text-[#415e47] font-bold"
                : "text-[#415e47]/60"
            }`}
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {/* Badge: Mock empty basket badge */}
              <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#fade1a] text-[9px] font-extrabold text-[#1b3b24] shadow-xs">
                0
              </span>
            </div>
            <span className="text-[10px] tracking-wide">Cart</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
