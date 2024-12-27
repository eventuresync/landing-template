"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date("2024-12-31T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-[#FF3366]">
      <div className="container mx-auto px-4">
        <h3 className="text-xl text-white text-center mb-4">
          ¡OFERTA ESPECIAL POR TIEMPO LIMITADO!
        </h3>
        <div className="flex justify-center gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <Card key={unit} className="p-4 w-20 text-center">
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-sm text-gray-600">{unit}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}