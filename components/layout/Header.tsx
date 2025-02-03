"use client";

import type { Header } from "@/lib/contentful/interface";
import Image from "next/image";

export default function Header({ img, text }: { img: string; text: string }) {
  return (
    <div className="max-w-[960px] mx-auto mb-4">
      <header className="flex flex-col items-center pt-6 pb-2">
        <div className="relative mb-4">
          <Image
            src={img}
            alt="Pilar Benitez - Perfil Instagram"
            width={192}
            height={192}
            className="w-48"
          />
        </div>
        <p className="mt-2 text-[#444] text-lg sm:text-xl text-center px-4">
          Para dueños de bares y locales de karaoke en LATAM que quieren
          eliminar el caos de pedidos manuales, evitar pérdidas de ventas y
          mejorar la experiencia de sus clientes
        </p>
      </header>
    </div>
  );
}
