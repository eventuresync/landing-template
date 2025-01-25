"use client";

/* import { useSession } from "next-auth/react"; */
/* import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react"; */

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signOut } from "next-auth/react";
import { Loader2 } from "lucide-react";
/* import { getEntry, updateEntry } from "@/lib/contentful"; */
import HeroForm from "@/components/admin/forms/HeroForm";
import RealityForm from "@/components/admin/forms/RealityForm";
import TestimonialsForm from "@/components/admin/forms/TestimonialsForm";
import PricingForm from "@/components/admin/forms/PricingForm";

export default function AdminDashboard() {
  /* const { data: session } = useSession(); */

  {
    /* <Button onClick={() => signOut({ callbackUrl: "/auth/login" })}>
              Sign Out
            </Button> */
  }

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [contentData, setContentData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        /* const data = await getEntry("landing-page"); */
        /*  setContentData(data); */
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const handleSave = async (sectionId: string, data: any) => {
    setSaving(true);
    try {
      /*   await updateEntry(sectionId, data); */
      // Show success toast
    } catch (error) {
      // Show error toast
      console.error("Error saving content:", error);
    } finally {
      setSaving(false);
    }
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
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button onClick={() => signOut({ callbackUrl: "/auth/login" })}>
              Sign Out
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 gap-4 mb-8">
              <TabsTrigger value="hero">Hero Section</TabsTrigger>
              <TabsTrigger value="reality">Reality Section</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>

            <TabsContent value="hero">
              <HeroForm
                data={contentData?.fields?.hero}
                onSave={(data) => handleSave("hero", data)}
                saving={saving}
              />
            </TabsContent>

            <TabsContent value="reality">
              <RealityForm
                data={contentData?.fields?.reality}
                onSave={(data) => handleSave("reality", data)}
                saving={saving}
              />
            </TabsContent>

            <TabsContent value="testimonials">
              <TestimonialsForm
                data={contentData?.fields?.testimonials}
                onSave={(data) => handleSave("testimonials", data)}
                saving={saving}
              />
            </TabsContent>

            <TabsContent value="pricing">
              <PricingForm
                data={contentData?.fields?.pricing}
                onSave={(data) => handleSave("pricing", data)}
                saving={saving}
              />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
