"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signOut } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getLanding } from "@/lib/contentful";

// Import all form components
import HeaderForm from "@/components/admin/forms/HeaderForm";
import HeroForm from "@/components/admin/forms/HeroForm";
import RealityForm from "@/components/admin/forms/RealityForm";
import TestimonialsForm from "@/components/admin/forms/TestimonialsForm";
import PricingForm from "@/components/admin/forms/PricingForm";

// Define section types for type safety
type Section = {
  id: string;
  label: string;
  description: string;
  component: React.ComponentType<any>;
};

const sections: Section[] = [
  {
    id: "header",
    label: "Header",
    description: "Main site header with profile image and subtitle",
    component: HeaderForm,
  },
  {
    id: "hero",
    label: "Hero Section",
    description: "Main hero section with title, subtitle and video",
    component: HeroForm,
  },
  {
    id: "reality",
    label: "Reality Section",
    description: "Reality check section with points and final note",
    component: RealityForm,
  },
  {
    id: "testimonials",
    label: "Testimonials",
    description: "Customer testimonials and success stories",
    component: TestimonialsForm,
  },
  {
    id: "pricing",
    label: "Pricing",
    description: "Program pricing and payment options",
    component: PricingForm,
  },
];

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState("header");
  const [unsavedChanges, setUnsavedChanges] = useState<Record<string, boolean>>(
    {}
  );
  const [contentData, setContentData] = useState<any>(null);
  const { toast } = useToast();

  // Fetch initial content data
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getLanding();
        const components =
          data.pageCollection.items[0].componentsCollection.items;

        // Organizar los datos por tipo de componente
        const organizedData = components.reduce((acc: any, component: any) => {
          acc[component.__typename.toLowerCase()] = component;
          return acc;
        }, {});

        setContentData(organizedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching content:", error);
        toast({
          title: "Error",
          description: "Failed to load content. Please try again.",
          variant: "destructive",
        });
      }
    };

    fetchContent();
  }, [toast]);

  // Handle content updates
  const handleSave = async (sectionId: string, data: any) => {
    setSaving(true);
    try {
      const response = await fetch(`/api/content/${sectionId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update content");
      }

      setUnsavedChanges((prev) => ({ ...prev, [sectionId]: false }));
      toast({
        title: "Success",
        description: "Content updated successfully",
      });
    } catch (error) {
      console.error("Error saving content:", error);
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  // Handle form changes
  const handleFormChange = (sectionId: string) => {
    setUnsavedChanges((prev) => ({ ...prev, [sectionId]: true }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <Breadcrumb className="mt-2">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {sections.find((s) => s.id === activeSection)?.label}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <Button
              className="text-white"
              onClick={() => signOut({ callbackUrl: "/auth/login" })}
            >
              Sign Out
            </Button>
          </div>

          <Tabs
            value={activeSection}
            onValueChange={setActiveSection}
            className="space-y-8"
          >
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="relative"
                >
                  {section.label}
                  {unsavedChanges[section.id] && (
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {sections.map((section) => {
              console.log("section", section);
              console.log(
                "contentData?.[section.id]",
                contentData?.[section.id]
              );
              return (
                <TabsContent key={section.id} value={section.id}>
                  <Card className="p-6">
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold mb-2">
                        {section.label}
                      </h2>
                      <p className="text-gray-600">{section.description}</p>
                    </div>

                    <section.component
                      onSave={(data: any) => handleSave(section.id, data)}
                      onChange={() => handleFormChange(section.id)}
                      saving={saving}
                      data={contentData?.[section.id]}
                    />
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
