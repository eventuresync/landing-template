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
import Reality from "@/components/sections/Reality";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("react-quill"), { ssr: false });
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { htmlToRichText } from "@/lib/htmlParser";

const RealitySchema = z.object({
  finalNote: z.string().optional(),
  points: z.string().optional(),
  subtitle: z.string().optional(),
  title: z.string().optional(),
  icon: z.string().optional(),
});

type RealityFormProps = {
  data: any;
  onSave: (data: any) => void;
  saving: boolean;
};

export default function HeroForm({ data, onSave, saving }: RealityFormProps) {
  const subInitialHTML = data?.points?.json
    ? documentToHtmlString(data.points.json)
    : "";

  const finalHTML = data?.finalNote?.json
    ? documentToHtmlString(data.finalNote.json)
    : "";

  const form = useForm({
    resolver: zodResolver(RealitySchema),
    defaultValues: {
      finalNote: finalHTML,
      points: subInitialHTML,
      subtitle: data?.subtitle || "",
      title: data?.title || "",
      icon: data?.icon || "",
    },
  });

  const handleSubmit = (formData: any) => {
    const changedFields: any = {
      entryId: data?.sys?.id,
    };

    if (formData.finalNote !== finalHTML) {
      // Convierte HTML a Rich Text JSON usando la nueva función
      const richTextJSON = htmlToRichText(formData.finalNote);
      changedFields.finalNote = richTextJSON;
    }

    if (formData.points !== subInitialHTML) {
      // Convierte HTML a Rich Text JSON usando la nueva función
      const richTextJSON = htmlToRichText(formData.points);
      changedFields.points = richTextJSON;
    }

    if (formData.subtitle !== data?.subtitle) {
      changedFields.subtitle = formData.subtitle;
    }

    if (formData.title !== data?.title) {
      changedFields.title = formData.title;
    }

    if (formData.icon !== data?.icon) {
      changedFields.icon = formData.icon;
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
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icono</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="points"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Puntos</FormLabel>
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

              <FormField
                control={form.control}
                name="finalNote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nota final</FormLabel>
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
                <Reality
                  title={form.watch("title") || data?.title}
                  subtitle={form.watch("subtitle") || data?.subtitle}
                  icon={form.watch("icon") || data?.icon}
                  points={
                    form.watch("points")
                      ? { json: htmlToRichText(form.watch("points")) }
                      : data?.points
                  }
                  finalNote={
                    form.watch("finalNote")
                      ? { json: htmlToRichText(form.watch("finalNote")) }
                      : data?.finalNote
                  }
                  __typename="Reality"
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
