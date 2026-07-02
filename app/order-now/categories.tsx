/* eslint-disable @next/next/no-img-element */
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
      <img src="https://img.icons8.com/3d-fluency/96/shopping-basket.png" alt="All" className={className} />
    ),
  },
  {
    id: "fruits",
    name: "Fruits",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/strawberry.png" alt="Fruits" className={className} />
    ),
  },
  {
    id: "vegetables",
    name: "Vegetables",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/carrot.png" alt="Vegetables" className={className} />
    ),
  },
  {
    id: "dairy",
    name: "Dairy & Eggs",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/cheese.png" alt="Dairy & Eggs" className={className} />
    ),
  },
  {
    id: "bakery",
    name: "Bakery",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/croissant.png" alt="Bakery" className={className} />
    ),
  },
  {
    id: "beverages",
    name: "Beverages",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/soda-can.png" alt="Beverages" className={className} />
    ),
  },
  {
    id: "beauty",
    name: "Beauty & Care",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/lipstick.png" alt="Beauty & Care" className={className} />
    ),
  },
  {
    id: "snacks",
    name: "Snacks & Sweets",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/cookie.png" alt="Snacks & Sweets" className={className} />
    ),
  },
  {
    id: "meat",
    name: "Meat & Seafood",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/steak.png" alt="Meat & Seafood" className={className} />
    ),
  },
  {
    id: "pantry",
    name: "Pantry & Staples",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/ketchup.png" alt="Pantry & Staples" className={className} />
    ),
  },
  {
    id: "frozen",
    name: "Frozen Foods",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/snowflake.png" alt="Frozen Foods" className={className} />
    ),
  },
  {
    id: "household",
    name: "Household & Cleaning",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/toilet-paper.png" alt="Household & Cleaning" className={className} />
    ),
  },
  {
    id: "baby",
    name: "Baby Care",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/pacifier.png" alt="Baby Care" className={className} />
    ),
  },
  {
    id: "pets",
    name: "Pet Supplies",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/dog.png" alt="Pet Supplies" className={className} />
    ),
  },
  {
    id: "organic",
    name: "Organic & Health",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/sprout.png" alt="Organic & Health" className={className} />
    ),
  },
  {
    id: "pharmacy",
    name: "Pharmacy & Wellness",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/pill.png" alt="Pharmacy & Wellness" className={className} />
    ),
  },
  {
    id: "kitchen",
    name: "Kitchen & Home",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/frying-pan.png" alt="Kitchen & Home" className={className} />
    ),
  },
  {
    id: "gifts",
    name: "Gifts & Flowers",
    icon: (className) => (
      <img src="https://img.icons8.com/3d-fluency/96/gift.png" alt="Gifts & Flowers" className={className} />
    ),
  },
];
