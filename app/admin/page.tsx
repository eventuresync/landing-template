"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import ProgramForm from "@/components/admin/forms/ProgramForm";
import VideoTestimonialForm from "@/components/admin/forms/videoTestimonialForm";
import CourseIncludesForm from "@/components/admin/forms/courseIncludesForm";
import AboutPilarForm from "@/components/admin/forms/AboutPilarForm";
import CallToActionForm from "@/components/admin/forms/CallToActionForm";
import ModuleForm from "@/components/admin/forms/ModuleForm";

import "react-quill/dist/quill.snow.css";
import { Toaster } from "@/components/ui/toaster";
import StudentResultsForm from "@/components/admin/forms/StudentResultsForm";

// Define section types for type safety
type Section = {
  id: string;
  label: string;
  description: string;
  icon: string;
  component: React.ComponentType<any>;
};

const sections: Section[] = [
  {
    id: "header",
    label: "Header",
    description: "Main site header with profile image and subtitle",
    icon: "👤",
    component: HeaderForm,
  },
  {
    id: "hero",
    label: "Hero Section",
    description: "Main hero section with title, subtitle and video",
    icon: "🎯",
    component: HeroForm,
  },
  {
    id: "reality",
    label: "Reality Section",
    description: "Reality check section with points and final note",
    icon: "✨",
    component: RealityForm,
  },
  {
    id: "testimonials",
    label: "Testimonials",
    description: "Customer testimonials and success stories",
    icon: "💬",
    component: TestimonialsForm,
  },
  {
    id: "program",
    label: "Program",
    description: "",
    icon: "📚",
    component: ProgramForm,
  },
  {
    id: "videoTestimonial",
    label: "Video Testimonial",
    description: "",
    icon: "📹",
    component: VideoTestimonialForm,
  },
  {
    id: "module",
    label: "Module",
    description: "",
    icon: "📦",
    component: ModuleForm,
  },
  {
    id: "courseIncludes",
    label: "Course Includes",
    description: "",
    icon: "💻",
    component: CourseIncludesForm,
  },
  {
    id: "aboutPilar",
    label: "About Pilar",
    description: "",
    icon: "👩‍🦳",
    component: AboutPilarForm,
  },
  {
    id: "pricing",
    label: "Pricing",
    description: "Program pricing and payment options",
    icon: "💰",
    component: PricingForm,
  },
  {
    id: "studentResults",
    label: "Student Results",
    description: "",
    icon: "📈",
    component: StudentResultsForm,
  },
  {
    id: "callToAction",
    label: "Call To Action",
    description: "",
    icon: "📞",
    component: CallToActionForm,
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
        const organizedData: any = {};

        components.forEach((component: any) => {
          const type = component.__typename.toLowerCase();
          if (type === "module") {
            // Si es un módulo, almacenamos en un array
            if (!organizedData[type]) {
              organizedData[type] = [];
            }
            organizedData[type].push(component);
          } else {
            // Para otros tipos, almacenamos directamente
            organizedData[type] = component;
          }
        });

        setContentData(organizedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching content:", error);
        toast({
          title: "❌ Error",
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
        title: "✅ Success",
        description: "Content updated successfully",
      });
    } catch (error) {
      console.error("Error saving content:", error);
      toast({
        title: "❌ Error",
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
    <>
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar with section navigation */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold mb-4">Page Sections</h2>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-primary text-white"
                        : "bg-white hover:bg-gray-50"
                    } relative group`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{section.icon}</span>
                      <div>
                        <p className="font-medium">{section.label}</p>
                      </div>
                    </div>
                    {unsavedChanges[section.id] && (
                      <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              {/* Main content area */}
              <div className="md:col-span-3">
                {sections.map((section) => {
                  const Component = section.component;
                  return (
                    activeSection === section.id && (
                      <div key={section.id}>
                        <Component
                          onSave={(data: any) => handleSave(section.id, data)}
                          onChange={() => handleFormChange(section.id)}
                          saving={saving}
                          data={contentData?.[section.id.toLowerCase()]}
                        />
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Toaster />
    </>
  );
}
