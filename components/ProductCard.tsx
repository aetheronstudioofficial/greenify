"use client";

import Image from "next/image";
import { Product } from "@/app/order-now/products";

interface ProductCardProps {
  product: Product;
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

export default function ProductCard({
  product,
  quantity = 0,
  onQuantityChange,
  isFavorite = false,
  onFavoriteToggle,
}: ProductCardProps) {
  const { name, priceTag, image, mrp, sp, discount } = product;
  const [discountValue, discountLabel = ""] = discount.split(" ");

  const handleAddToCart = () => {
    if (onQuantityChange) {
      onQuantityChange(1);
    }
  };

  const handleIncrement = () => {
    if (onQuantityChange) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (onQuantityChange && quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="group relative flex flex-col w-full h-[290px] sm:h-[330px] bg-[#F8F3E9] border border-[#E7E3D8] rounded-2xl overflow-hidden hover:border-[#415e47]/40 transition-colors duration-300">
      
      {/* Discount Hanging Tag (Top Left - Flush on Edge) */}
      <div className="absolute top-0 left-0 z-10 bg-[#FFEBEB] text-[#D32F2F] font-medium w-10 pt-2.5 pb-4 flex flex-col items-center justify-center [clip-path:polygon(0_0,100%_0,100%_85%,87.5%_100%,75%_85%,62.5%_100%,50%_85%,37.5%_100%,25%_85%,12.5%_100%,0_85%)] select-none leading-none rounded-tl-2xl">
        <span className="text-[10px] font-semibold">{discountValue}</span>
        {discountLabel && <span className="text-[6.5px] font-medium tracking-wide mt-0.5 uppercase">{discountLabel}</span>}
      </div>

      {/* Favorite Heart (Top Right) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (onFavoriteToggle) onFavoriteToggle();
        }}
        className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/70 backdrop-blur-xs hover:bg-white text-gray-500 hover:text-red-500 transition-all duration-200 cursor-pointer"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isFavorite ? "#ff3d3d" : "none"}
          stroke={isFavorite ? "#ff3d3d" : "currentColor"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-4 h-4 transition-transform duration-300 ${
            isFavorite ? "scale-110" : "group-hover/fav:scale-110"
          }`}
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>

      {/* Center Image Container (Grows dynamically to absorb empty space) */}
      <div className="grow flex-1 relative w-full bg-white">
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 150px, 200px"
            priority
          />
        </div>
      </div>

      {/* Info & Action Section (Auto height - shrinks snug to text content) */}
      <div className="shrink-0 flex flex-col justify-between text-left p-3.5 pt-2.5 pb-3 w-full bg-[#F8F3E9] min-h-[110px]">
        
        {/* Details: Name and Price */}
        <div className="flex flex-col">
          {/* Product Name (Two Line Wrap for easy flow) */}
          <h3 className="font-sans text-xs sm:text-sm font-medium text-[#1F3D2B] line-clamp-2 leading-snug">
            {name}
          </h3>

          {/* Pricing Row: SP, MRP */}
          <div className="flex items-center gap-1.5 mt-1.5">
            {/* Selling Price */}
            <span className="font-semibold text-sm sm:text-base text-[#252525]">
              ${sp.toFixed(2)}
            </span>
            {/* MRP */}
            <span className="text-[10px] sm:text-xs text-[#9E9E9E] line-through font-normal">
              ${mrp.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Action Bar (No Divider Line - Side by Side) */}
        <div className="flex items-center justify-between gap-2 w-full mt-auto pt-1">
          {/* Unit / Package Size (Left Side) */}
          <span className="text-[11px] text-[#1F3D2B]/85 font-medium select-none shrink-0">
            {priceTag}
          </span>

          {/* Action Control (Right Side) */}
          <div className="shrink-0">
            {quantity === 0 ? (
              /* Green Add Button (Icon Only) */
              <button
                onClick={handleAddToCart}
                className="w-10 h-10 sm:w-11 sm:h-11 bg-[#2E7D32] hover:bg-[#256328] text-white rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer group/btn shrink-0"
                aria-label="Add to Cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4.5 h-4.5 sm:w-5 sm:h-5"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </button>
            ) : (
              /* Quantity Control Panel (- 1 +) */
              <div className="w-[100px] sm:w-[115px] h-10 sm:h-11 flex items-center justify-between bg-white border border-[#E7E3D8] rounded-xl overflow-hidden p-1 shrink-0">
                <button
                  onClick={handleDecrement}
                  className="w-8 h-8 flex items-center justify-center text-[#2E7D32] hover:bg-[#F8F3E9] rounded-lg transition-colors duration-200 cursor-pointer font-normal text-xs"
                  aria-label="Decrease quantity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>

                <span className="font-medium text-xs sm:text-sm text-[#252525] select-none">
                  {quantity}
                </span>

                <button
                  onClick={handleIncrement}
                  className="w-8 h-8 flex items-center justify-center text-[#2E7D32] hover:bg-[#F8F3E9] rounded-lg transition-colors duration-200 cursor-pointer font-normal text-xs"
                  aria-label="Increase quantity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
