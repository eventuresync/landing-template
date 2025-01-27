"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("react-quill"), { ssr: false });
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { htmlToRichText } from "@/lib/htmlParser";

const heroSchema = z.object({
  mainTitle: z.string().optional(),
  subtitle: z.string().optional(),
  buttonText: z.string().optional(),
  videoId: z.string().optional(),
  titleResponsive: z.any().optional(),
});

type HeroFormProps = {
  data: any;
  onSave: (data: any) => void;
  saving: boolean;
};

export default function HeroForm({ data, onSave, saving }: HeroFormProps) {
  const subInitialHTML = data?.titleResponsive?.json
    ? documentToHtmlString(data.titleResponsive.json)
    : "";

  const form = useForm({
    resolver: zodResolver(heroSchema),
    defaultValues: {
      mainTitle: data?.mainTitle || "",
      subtitle: data?.subtitle || "",
      buttonText: data?.buttonText || "",
      videoId: data?.videoId || "",
      titleResponsive: subInitialHTML,
    },
  });

  console.log(subInitialHTML, "subInitialHTML");

  const handleSubmit = (formData: any) => {
    const changedFields: any = {
      entryId: data?.sys?.id,
    };

    if (formData.mainTitle !== data?.mainTitle) {
      changedFields.mainTitle = formData.mainTitle;
    }

    if (formData.subtitle !== data?.subtitle) {
      changedFields.subtitle = formData.subtitle;
    }

    if (formData.buttonText !== data?.buttonText) {
      changedFields.buttonText = formData.buttonText;
    }

    if (formData.videoId !== data?.videoId) {
      changedFields.videoId = formData.videoId;
    }
    console.log(formData, "formData.titleResponsive");
    if (formData.titleResponsive !== subInitialHTML) {
      // Convierte HTML a Rich Text JSON usando la nueva función
      const richTextJSON = htmlToRichText(formData.titleResponsive);
      changedFields.titleResponsive = richTextJSON;
    }

    if (Object.keys(changedFields).length > 0) {
      onSave(changedFields);
    } else {
      console.log("No hay cambios para guardar");
    }
  };

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="mainTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subtitle</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="buttonText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CTA Text</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="videoId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video ID</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="titleResponsive"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title Responsive</FormLabel>
                    <FormControl>
                      <RichTextEditor
                        value={field.value} // HTML inicial del editor
                        onChange={field.onChange} // Actualiza el formulario
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Preview</h3>
              <div className="border rounded-lg p-4 bg-[#f6f7f4]">
                <Hero
                  buttonText={form.watch("buttonText") || data?.buttonText}
                  mainTitle={form.watch("mainTitle") || data?.mainTitle}
                  subtitle={form.watch("subtitle") || data?.subtitle}
                  titleResponsive={
                    form.watch("titleResponsive")
                      ? { json: htmlToRichText(form.watch("titleResponsive")) }
                      : data?.sub
                  }
                  videoId={form.watch("videoId") || data?.videoId}
                  __typename="Hero"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="text-white" type="submit" disabled={saving}>
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
