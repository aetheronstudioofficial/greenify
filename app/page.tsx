import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#415e47] via-[#527759] to-[#5b8262] text-white overflow-x-hidden selection:bg-[#fade1a] selection:text-[#1b3b24] relative flex flex-col">
      
      <header className="w-full sticky top-0 z-50 shrink-0 pt-[env(safe-area-inset-top)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
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
            <span className="font-title text-2xl font-bold tracking-tight text-white">
              Greenify
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0 grow flex items-center justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-6 justify-center text-left">
            
            {/* Main Headline with Fluid Typography */}
            <h1 className="text-white text-3xl sm:text-5xl lg:text-[clamp(2.5rem,4.5vw,4rem)] xl:text-[clamp(2.8rem,5vw,4.5rem)] font-light leading-[1.1] tracking-tight font-title max-w-2xl">
              Order fresh <span className="font-extrabold font-sans text-white">grocery</span> <br className="hidden sm:inline" />
              enjoy healthy life.
            </h1>

            {/* Order Now Button with Accessibility Focus State */}
            <Link href="/order-now" className="bg-[#fade1a] text-[#1b3b24] hover:bg-white hover:text-[#44644c] font-extrabold px-9 py-4 rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 self-start text-sm uppercase tracking-widest text-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#527759]">
              Order Now
            </Link>

            {/* Reviews Section */}
            <div className="flex items-center gap-4 mt-2">
              {/* Avatar stack */}
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#4c6d53] overflow-hidden hover:scale-110 hover:z-10 transition duration-200 relative">
                  <Image src="/customer1.webp" alt="Customer avatar" fill className="object-cover" sizes="40px" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#4c6d53] overflow-hidden hover:scale-110 hover:z-10 transition duration-200 relative">
                  <Image src="/customer2.webp" alt="Customer avatar" fill className="object-cover" sizes="40px" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#4c6d53] overflow-hidden hover:scale-110 hover:z-10 transition duration-200 relative">
                  <Image src="/customer3.webp" alt="Customer avatar" fill className="object-cover" sizes="40px" />
                </div>
              </div>
              
              {/* Text info */}
              <div className="flex flex-col justify-center text-left">
                <span className="text-white font-bold text-sm tracking-wide">Our Happy Customer</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <svg className="w-4 h-4 text-[#fade1a] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-[#fade1a] font-extrabold text-sm">4.5</span>
                  <span className="text-[#cce8a8] font-semibold text-xs ml-1">(12.5k Review)</span>
                </div>
              </div>
            </div>

            {/* App Store Links */}
            <div className="flex flex-col gap-2 mt-4 relative self-start">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Download App</span>
              <div className="flex items-center gap-4 relative pr-10 sm:pr-12">
                {/* Google Play */}
                <a href="#play-store" className="block transition duration-300 hover:scale-105 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white rounded-[5px] overflow-hidden shadow-md">
                  <Image
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-[40px] w-auto object-contain"
                    priority
                  />
                </a>

                {/* App Store */}
                <a href="#app-store" className="block transition duration-300 hover:scale-105 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white rounded-[5px] overflow-hidden shadow-md">
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-[40px] w-auto object-contain"
                    priority
                  />
                </a>

                {/* Arrow Overlay */}
                <div className="absolute -top-13 -right-2 w-20 h-20 pointer-events-none block">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#fade1a]" fill="none">
                    {/* Organic Yellow Blob */}
                    <path
                      d="M 68 12 C 80 10, 92 18, 89 32 C 86 46, 68 52, 55 42 C 45 32, 50 14, 62 12 Z"
                      fill="currentColor"
                      className="opacity-95"
                    />
                    {/* Looped Arrow Path */}
                    <path
                      d="M 78 22 C 68 20, 60 26, 60 32 C 60 38, 68 42, 76 38 C 82 35, 78 28, 70 26 C 50 15, 20 25, 12 49"
                      stroke="white"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    {/* Arrowhead */}
                    <path
                      d="M 23 47 L 12 49 L 14 37"
                      stroke="white"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Collage */}
          <div className="lg:col-span-5 relative w-full h-auto sm:h-[460px] md:h-[500px] lg:h-[460px] xl:h-[520px] max-w-[500px] lg:max-w-none mx-auto flex items-center justify-center shrink-0">
            
            {/* Desktop-only Absolute Collage */}
            <div className="relative w-full h-full hidden sm:block">
              {/* Floating Pin / Location Badge */}
              <div className="absolute left-[54%] top-[1%] w-14 h-14 rounded-full bg-[#527759]/65 backdrop-blur-md border border-white/12 flex items-center justify-center shadow-lg custom-float z-30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff3d3d" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3.5" fill="#ffffff"/>
                </svg>
              </div>

              {/* Circle Image (Grocery Bag in hand) */}
              <div className="absolute left-[5%] top-[14%] w-[200px] md:w-[220px] lg:w-[200px] xl:w-[240px] h-[200px] md:h-[220px] lg:h-[200px] xl:h-[240px] rounded-full overflow-hidden border-[5px] border-white/12 shadow-2xl custom-float-slow z-20 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/grocery_bag.webp"
                  alt="Organic grocery bag"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
                  priority
                />
              </div>

              {/* Top Right Image (Mixed Veggies Flatlay) */}
              <div className="absolute right-[5%] top-[2%] w-[150px] md:w-[170px] lg:w-[150px] xl:w-[190px] h-[150px] md:h-[170px] lg:h-[150px] xl:h-[190px] rounded-custom-3xl overflow-hidden border-[5px] border-white/12 shadow-xl z-10 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/mixed_veggies.webp"
                  alt="Fresh organic vegetables"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 150px, (max-width: 1024px) 170px, 190px"
                />
              </div>

              {/* Bottom Left Image (Hand Carrots) */}
              <div className="absolute left-[12%] bottom-[2%] w-[160px] md:w-[180px] lg:w-[160px] xl:w-[200px] h-[160px] md:h-[180px] lg:h-[160px] xl:h-[200px] rounded-custom-3xl overflow-hidden border-[5px] border-white/12 shadow-xl z-20 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/hand_carrots.webp"
                  alt="Fresh carrots"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 180px, 200px"
                />
              </div>

              {/* Bottom Right Image (Stacked Veggies) */}
              <div className="absolute right-[0%] bottom-[2%] w-[160px] md:w-[180px] lg:w-[160px] xl:w-[200px] h-[270px] md:h-[300px] lg:h-[270px] xl:h-[330px] rounded-[3rem] overflow-hidden border-[5px] border-white/12 shadow-2xl z-10 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/stacked_veggies.webp"
                  alt="Stacked healthy food"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 180px, 200px"
                />
              </div>
            </div>

            {/* Mobile Fallback Layout */}
            <div className="sm:hidden w-full grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
                <Image src="/grocery_bag.webp" alt="Organic grocery bag" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-lg">
                <Image src="/mixed_veggies.webp" alt="Fresh vegetables" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-lg">
                <Image src="/hand_carrots.webp" alt="Fresh carrots" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="relative aspect-2/3 rounded-3xl overflow-hidden border-4 border-white/10 shadow-lg">
                <Image src="/stacked_veggies.webp" alt="Stacked green veggies" fill className="object-cover" sizes="50vw" />
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer theme="dark" />
    </div>
  );
}
