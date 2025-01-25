"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signOut } from "next-auth/react";
import { Loader2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Import all form components
import HeaderForm from "@/components/admin/forms/HeaderForm";
import HeroForm from "@/components/admin/forms/HeroForm";
import RealityForm from "@/components/admin/forms/RealityForm";
import TestimonialsForm from "@/components/admin/forms/TestimonialsForm";
/* import AutocuidarseForm from "@/components/admin/forms/AutocuidarseForm";
import VideoTestimonialForm from "@/components/admin/forms/VideoTestimonialForm";
import ModuleForm from "@/components/admin/forms/ModuleForm";
import CourseIncludesForm from "@/components/admin/forms/CourseIncludesForm";
import AboutPilarForm from "@/components/admin/forms/AboutPilarForm"; */
import PricingForm from "@/components/admin/forms/PricingForm";
/* import StudentResultsForm from "@/components/admin/forms/StudentResultsForm";
import FAQForm from "@/components/admin/forms/FAQForm";
import CallToActionForm from "@/components/admin/forms/CallToActionForm"; */

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
  /*   {
    id: "autocuidarse",
    label: "Autocuidarse",
    description: "Program overview and main features",
    component: AutocuidarseForm,
  }, */
  /*   {
    id: "videoTestimonial",
    label: "Video Testimonial",
    description: "Featured video testimonial section",
    component: VideoTestimonialForm,
  }, */
  /*   {
    id: "modules",
    label: "Course Modules",
    description: "Course curriculum and module details",
    component: ModuleForm,
  }, */
  /*   {
    id: "courseIncludes",
    label: "Course Includes",
    description: "Program features and inclusions",
    component: CourseIncludesForm,
  }, */
  /*   {
    id: "aboutPilar",
    label: "About Pilar",
    description: "Biography and personal information",
    component: AboutPilarForm,
  }, */
  {
    id: "pricing",
    label: "Pricing",
    description: "Program pricing and payment options",
    component: PricingForm,
  },
  /*   {
    id: "studentResults",
    label: "Student Results",
    description: "Student success stories and transformations",
    component: StudentResultsForm,
  }, */
  /*   {
    id: "faq",
    label: "FAQ",
    description: "Frequently asked questions",
    component: FAQForm,
  }, */
  /*   {
    id: "callToAction",
    label: "Call to Action",
    description: "Final call to action section",
    component: CallToActionForm,
  }, */
];

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState("header");
  const [unsavedChanges, setUnsavedChanges] = useState<Record<string, boolean>>(
    {}
  );
  const { toast } = useToast();

  // Fetch initial content data
  useEffect(() => {
    const fetchContent = async () => {
      try {
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
    console.log(sectionId, "sectionId");
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

            {sections.map((section) => (
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
                    /*  data={{
                      title: "Autora de 5 libros para la mujer te revela:",
                      image: {
                        url: "https://images.ctfassets.net/i8i7ymflqy95/3TMBa10xqhTRfvMWJH3Jrk/b5bb65a2d055b20368f8e7b936fd2d3b/pilar_profile.png",
                      },
                    }} */
                    // Here should be the data of each componente as you see on the above example. Also here we need some logic to have the entry or the id to find and update the correct entry.
                  />
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
