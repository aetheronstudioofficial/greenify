import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#415e47] via-[#527759] to-[#5b8262] text-white overflow-x-hidden selection:bg-[#fade1a] selection:text-[#1b3b24] relative flex flex-col">
      
      {/* Header / Navigation */}
      <header className="w-full border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-50 shrink-0 pt-[env(safe-area-inset-top)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6 w-10 h-10">
              <Image
                src="/logo.webp"
                alt="Greenify Logo"
                fill
                className="object-contain"
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
            <button className="bg-[#fade1a] text-[#1b3b24] hover:bg-white hover:text-[#44644c] font-extrabold px-9 py-4 rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 self-start text-sm uppercase tracking-widest focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#527759]">
              Order Now
            </button>

            {/* Reviews Section */}
            <div className="flex items-center gap-4 mt-2">
              {/* Avatar stack */}
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#4c6d53] overflow-hidden hover:scale-110 hover:z-10 transition duration-200 relative">
                  <Image src="/customer1.webp" alt="Customer avatar" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#4c6d53] overflow-hidden hover:scale-110 hover:z-10 transition duration-200 relative">
                  <Image src="/customer2.webp" alt="Customer avatar" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#4c6d53] overflow-hidden hover:scale-110 hover:z-10 transition duration-200 relative">
                  <Image src="/customer3.webp" alt="Customer avatar" fill className="object-cover" />
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
                <Image src="/grocery_bag.webp" alt="Organic grocery bag" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-lg">
                <Image src="/mixed_veggies.webp" alt="Fresh vegetables" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-lg">
                <Image src="/hand_carrots.webp" alt="Fresh carrots" fill className="object-cover" />
              </div>
              <div className="relative aspect-2/3 rounded-3xl overflow-hidden border-4 border-white/10 shadow-lg">
                <Image src="/stacked_veggies.webp" alt="Stacked green veggies" fill className="object-cover" />
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-md py-8 shrink-0 text-white/70 text-sm mt-auto pb-[calc(2rem+env(safe-area-inset-bottom,0px))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left side: Brand */}
            <div className="flex items-center gap-2">
              <span className="font-title text-xl font-bold tracking-tight text-white">
                Greenify
              </span>
              <span className="text-white/30">|</span>
              <p className="text-xs text-white/50">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            {/* Middle: Designer Info */}
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-white/90">
                Designed & Developed by{" "}
                <span className="font-bold text-[#fade1a] hover:underline cursor-pointer transition duration-300">
                  Rijan Rayamajhi
                </span>
              </p>
            </div>

            {/* Right side: Social Icons */}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rijan-rayamajhi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#fade1a] text-white hover:text-[#1b3b24] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rijan.rayamajhi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#fade1a] text-white hover:text-[#1b3b24] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/rijan-rayamajhi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#fade1a] text-white hover:text-[#1b3b24] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
