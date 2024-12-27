"use client";

import { Card } from "@/components/ui/card";
import { CreditCard, Lock } from "lucide-react";

export default function PaymentMethods() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <Card className="max-w-2xl mx-auto p-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="w-5 h-5 text-[#FF3366]" />
            <span>Pago 100% Seguro</span>
          </div>
          <div className="flex justify-center items-center gap-6">
            <CreditCard className="w-8 h-8 text-gray-400" />
            <span className="text-gray-600">Aceptamos todas las tarjetas de crédito y débito</span>
          </div>
        </Card>
      </div>
    </section>
  );
}