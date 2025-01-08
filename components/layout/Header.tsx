"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="max-w-[960px] mx-auto mb-4">
      <header className="flex flex-col items-center pt-6 pb-2">
        <div className="relative mb-4">
          <Image
            src="/pilar_profile.png"
            alt="Pilar Benitez - Perfil Instagram"
            width={192}
            height={192}
            className="w-48"
          />
        </div>
        <p className="mt-2 text-[#444] text-xs sm:text-base text-center px-4">
          Autora de 5 libros para la mujer te revela:
        </p>
      </header>
    </div>
  );
}
