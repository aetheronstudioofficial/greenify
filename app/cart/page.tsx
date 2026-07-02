"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "../order-now/products";

export default function CartPage() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("greenify-cart");
    const savedFavorites = localStorage.getItem("greenify-favorites");

    setTimeout(() => {
      setIsClient(true);
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart));
        } catch {}
      }
      if (savedFavorites) {
        try {
          setFavorites(JSON.parse(savedFavorites));
        } catch {}
      }
    }, 0);
  }, []);

  const updateCartQuantity = (productId: string, qty: number) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (qty <= 0) {
        delete updated[productId];
      } else {
        updated[productId] = qty;
      }
      localStorage.setItem("greenify-cart", JSON.stringify(updated));
      return updated;
    });
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const updated = { ...prev, [productId]: !prev[productId] };
      localStorage.setItem("greenify-favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const cartItems = Object.entries(cart).filter(([, qty]) => qty > 0);
  const cartItemCount = cartItems.reduce((sum, [, qty]) => sum + qty, 0);

  const subtotal = cartItems.reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === id);
    return sum + (product ? product.sp * qty : 0);
  }, 0);

  const shipping = subtotal > 20 || subtotal === 0 ? 0 : 3.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
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
        
        {!isClient ? (
          <div className="flex items-center justify-center py-20 w-full grow">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#415e47]"></div>
          </div>
        ) : cartItemCount === 0 ? (
          /* Content Box */
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
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">
            {/* Left side: Grid of Product Cards */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <h1 className="font-title text-3xl font-extrabold text-[#1b3b24]">
                Items in Your Cart ({cartItemCount})
              </h1>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {cartItems.map(([id, qty]) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      quantity={qty}
                      onQuantityChange={(q) => updateCartQuantity(product.id, q)}
                      isFavorite={!!favorites[product.id]}
                      onFavoriteToggle={() => toggleFavorite(product.id)}
                    />
                  );
                })}
              </div>
            </div>

            {/* Right side: Order Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white border border-[#415e47]/5 rounded-3xl p-6 shadow-xs flex flex-col gap-5">
                <h3 className="font-title text-xl font-bold text-[#1b3b24] border-b border-gray-150/50 pb-3">
                  Order Summary
                </h3>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex items-center justify-between text-[#415e47]/80">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#252525]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#415e47]/80">
                    <span>Shipping</span>
                    <span className="font-bold text-[#252525]">
                      {shipping === 0 ? (
                        <span className="text-[#2e7d32] bg-[#ddf5d8] px-2 py-0.5 rounded-sm font-extrabold text-[10px]">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#415e47]/80">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-bold text-[#252525]">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-150/50 pt-4 flex items-center justify-between font-extrabold text-base text-[#1b3b24]">
                  <span>Total</span>
                  <span className="text-xl">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => alert("Checkout initiated! Thank you for choosing Greenify.")}
                  className="w-full py-3.5 bg-[#2E7D32] hover:bg-[#256328] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition duration-200 text-center shadow-md active:scale-98 cursor-pointer mt-2"
                >
                  Proceed to Checkout
                </button>
                
                {shipping > 0 && (
                  <p className="text-[11px] text-[#415e47]/60 text-center">
                    Add <span className="font-bold">${(20 - subtotal).toFixed(2)}</span> more to unlock <span className="font-bold text-[#2e7d32]">FREE Shipping</span>!
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

    </div>
  );
}
