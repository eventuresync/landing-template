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
import CourseInclude from "@/components/sections/CourseInclude";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("react-quill"), { ssr: false });
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { htmlToRichText } from "@/lib/htmlParser";

const courseIncludesForm = z.object({
  title: z.string().optional(),
  icon: z.string().optional(),
  buttonText: z.string().optional(),
  features: z.string().optional(),
});

type CourseIncludesFormProps = {
  data: any;
  onSave: (data: any) => void;
  saving: boolean;
};

export default function CourseIncludesForm({
  data,
  onSave,
  saving,
}: CourseIncludesFormProps) {
  const subInitialHTML = data?.features?.json
    ? documentToHtmlString(data.features.json)
    : "";

  const form = useForm({
    resolver: zodResolver(courseIncludesForm),
    defaultValues: {
      title: data?.title || "",
      icon: data?.icon || "",
      buttonText: data?.buttonText || "",
      features: subInitialHTML,
    },
  });

  const handleSubmit = (formData: any) => {
    const changedFields: any = {
      entryId: data?.sys?.id,
    };

    if (formData.title !== data?.title) {
      changedFields.title = formData.title;
    }

    if (formData.icon !== data?.icon) {
      changedFields.icon = formData.icon;
    }

    if (formData.buttonText !== data?.buttonText) {
      changedFields.buttonText = formData.buttonText;
    }

    if (formData.features !== subInitialHTML) {
      // Convierte HTML a Rich Text JSON usando la nueva función
      const richTextJSON = htmlToRichText(formData.features);
      changedFields.features = richTextJSON;
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
                name="title"
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
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icono</FormLabel>
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
                name="features"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Features</FormLabel>
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
                <CourseInclude
                  buttonText={form.watch("buttonText") || data?.buttonText}
                  title={form.watch("title") || data?.title}
                  icon={form.watch("icon") || data?.icon}
                  features={
                    form.watch("features")
                      ? { json: htmlToRichText(form.watch("features")) }
                      : data?.features
                  }
                  __typename="CourseInclude"
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
