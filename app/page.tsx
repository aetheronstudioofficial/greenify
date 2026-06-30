import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f9fbf8]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-32 h-32 rounded-3xl overflow-hidden bg-white p-2 border border-[#e2ece4] shadow-sm">
          <Image
            src="/logo.png"
            alt="Greenify Logo"
            width={128}
            height={128}
            className="object-cover rounded-2xl"
            priority
          />
        </div>
        <h1 className="font-title text-4xl font-extrabold tracking-tight text-[#1b4d22]">
          Greenify
        </h1>
      </div>
    </div>
  );
}
