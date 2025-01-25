"use client";

import type { Header } from "@/lib/contentful/interface";
import Image from "next/image";

interface HeaderProps {
  title: string;
  image: {};
}

export default function Header({ title, image }: Header) {
  return (
    <div className="max-w-[960px] mx-auto mb-4">
      <header className="flex flex-col items-center pt-6 pb-2">
        <div className="relative mb-4">
          <Image
            src={image.url}
            alt="Pilar Benitez - Perfil Instagram"
            width={192}
            height={192}
            className="w-48"
          />
        </div>
        <p className="mt-2 text-[#444] text-lg sm:text-xl text-center px-4">
          {title}
        </p>
      </header>
    </div>
  );
}
