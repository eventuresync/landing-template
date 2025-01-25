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
import CallToAction from "@/components/sections/CallToAction";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("react-quill"), { ssr: false });
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { htmlToRichText } from "@/lib/htmlParser";

const callToActionSchema = z.object({
  title: z.string().optional(),
  sub: z.any().optional(),
  buttonText: z.string().optional(),
});

type CallToActionProps = {
  data: any;
  onSave: (data: any) => void;
  saving: boolean;
};

export default function CallToActionForm({
  data,
  onSave,
  saving,
}: CallToActionProps) {
  const subInitialHTML = data?.sub?.json
    ? documentToHtmlString(data.sub.json)
    : "";

  const form = useForm({
    resolver: zodResolver(callToActionSchema),
    defaultValues: {
      title: data?.title || "",
      sub: subInitialHTML, // HTML inicial para el editor
      buttonText: data?.buttonText || "",
    },
  });

  const handleSubmit = async (formData: any) => {
    const changedFields: any = {
      entryId: data?.sys?.id,
    };

    if (formData.title !== data?.title) {
      changedFields.title = formData.title;
    }

    if (formData.sub !== subInitialHTML) {
      // Convierte HTML a Rich Text JSON usando la nueva función
      const richTextJSON = htmlToRichText(formData.sub);
      changedFields.sub = richTextJSON;
    }

    if (formData.buttonText !== data?.buttonText) {
      changedFields.buttonText = formData.buttonText;
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
                name="sub"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subtitle</FormLabel>
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
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Preview</h3>
              <div className="border rounded-lg p-4 bg-[#f6f7f4]">
                <CallToAction
                  buttonText={form.watch("buttonText") || data?.buttonText}
                  title={form.watch("title") || data?.title}
                  sub={
                    form.watch("sub")
                      ? { json: htmlToRichText(form.watch("sub")) }
                      : data?.sub
                  }
                  __typename="CallToAction"
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
