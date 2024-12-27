"use client";

import { Card } from "@/components/ui/card";
import { MessageSquare, Heart, Share2 } from "lucide-react";

const highlights = [
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Carmen López",
    content: "¡Increíble comunidad! El apoyo entre todas es invaluable 💪",
    interactions: {
      comments: 24,
      likes: 156,
      shares: 12
    }
  },
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "Isabel Martínez",
    content: "Cada día aprendo algo nuevo de las compañeras ❤️",
    interactions: {
      comments: 18,
      likes: 142,
      shares: 8
    }
  },
  {
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    name: "Ana Torres",
    content: "La mejor inversión que he hecho en mi negocio 🚀",
    interactions: {
      comments: 32,
      likes: 198,
      shares: 15
    }
  }
];

export default function CommunityHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            ÚNETE A NUESTRA COMUNIDAD
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conecta con emprendedoras que comparten tus mismos objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={highlight.avatar}
                  alt={highlight.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{highlight.name}</h3>
                  <p className="text-sm text-gray-600">Miembro de la comunidad</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">{highlight.content}</p>
              <div className="flex gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>{highlight.interactions.comments}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{highlight.interactions.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  <span>{highlight.interactions.shares}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}