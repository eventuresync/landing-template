"use client";

import { Card } from "@/components/ui/card";
import { BookOpen, Video, Users, MessageCircle } from "lucide-react";

export default function CourseContent(props: {
    title: string;
    modules: {
        title: string;
        description: string;
        icon: string;
    }[];
}) {
    const { title, modules } = props;
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
                    {title}
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {modules.map((module, i) => (
                        <Card
                            key={i}
                            className="p-8 hover:shadow-lg transition-shadow"
                        >
                            <module.icon  />
                            <h3 className="text-xl font-bold mb-3">
                                {module.title}
                            </h3>
                            <p className="text-gray-600">
                                {module.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
