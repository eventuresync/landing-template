"use client";

import Image from "next/image";

const brands = [
  { name: "Forbes", logo: "/assets/forbes-logo.png" },
  { name: "Entrepreneur", logo: "/assets/entrepreneur-logo.png" },
  { name: "Business Insider", logo: "/assets/business-insider-logo.png" }
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8">FEATURED IN</p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {brands.map((brand) => (
            <div key={brand.name} className="relative h-12 w-32 opacity-50 hover:opacity-100 transition-opacity">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}