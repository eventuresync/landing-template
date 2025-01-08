import { Card } from "@/components/ui/card";

interface ModuleHeaderProps {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
}

export default function ModuleHeader({
  icon,
  title,
  subtitle,
  description,
}: ModuleHeaderProps) {
  return (
    <section className="pt-20 pb-4  max-w-[960px] mx-auto">
      <Card
        style={{ boxShadow: "0 4px 50px 0 rgba(0, 0, 0, 0.25)" }}
        className="border-none relative bg-white rounded-[32px] p-8 md:p-12 max-w-[960px] mx-auto mb-8"
      >
        {/* Icon overlay */}
        <div className="absolute text-8xl -top-12 left-1/2 transform -translate-x-1/2">
          {icon}
        </div>

        <div className="text-center pt-8">
          <h2 className="text-[1.5rem] text-[#444] md:text-[2rem] font-black leading-tight mb-2">
            {title}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-xl text-[#444] mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </section>
  );
}
