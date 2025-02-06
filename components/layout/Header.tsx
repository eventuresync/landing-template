"use client";

import type { Header } from "@/lib/contentful/interface";
import Image from "next/image";

export default function Header({ img, text }: { img: string; text: string }) {
  return (
    <div className="max-w-[960px] mx-auto mb-4">
      <header className="flex flex-col items-center pt-6 pb-2">
        <div className="relative bg-gradient-to-tr from-pink-800 via-pink-600 to-pink-900 rounded-full shadow-2xl mb-4 p-2 ">
          <Image
            src={img}
            alt="logo"
            width={192}
            height={192}
            className="w-28"
          />
        </div>
        <p className="mt-2 text-gray-200 font-thin text-lg sm:text-xl text-center px-4">
          Para dueños de bares y locales de karaoke en LATAM que quieren
          eliminar el caos
        </p>
      </header>
    </div>
  );
}
