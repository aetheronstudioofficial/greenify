import React from "react";

export interface Category {
  id: string;
  name: string;
  icon: (className: string) => React.ReactNode;
}

export const categories: Category[] = [
  {
    id: "all",
    name: "All",
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
