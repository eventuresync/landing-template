"use client";

import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">María Durán</h3>
            <p className="text-gray-400">
              Experta en marketing de contenidos y creación de comunidades digitales.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Términos y Condiciones</li>
              <li>Política de Privacidad</li>
              <li>Política de Reembolso</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Sígueme</h3>
            <div className="flex gap-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
              <Mail className="w-6 h-6 text-gray-400 hover:text-white" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Marketing con María. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}