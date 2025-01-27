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
import VideoTestimonial from "@/components/sections/videoTestimonial";

const heroSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  videoUrl: z.string().optional(),
});

type VideoTestimonialFormProps = {
  data: any;
  onSave: (data: any) => void;
  saving: boolean;
};

export default function VideoTestimonialForm({
  data,
  onSave,
  saving,
}: VideoTestimonialFormProps) {
  console.log("data", data);
  const form = useForm({
    resolver: zodResolver(heroSchema),
    defaultValues: {
      title: data?.title || "",
      subtitle: data?.subtitle || "",
      videoUrl: data?.videoUrl || "",
    },
  });

  const handleSubmit = (formData: any) => {
    const changedFields: any = {
      entryId: data?.sys?.id,
    };

    if (formData.title !== data?.title) {
      changedFields.title = formData.title;
    }

    if (formData.subtitle !== data?.subtitle) {
      changedFields.subtitle = formData.subtitle;
    }

    if (formData.videoUrl !== data?.videoUrl) {
      changedFields.videoUrl = formData.videoUrl;
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
                name="videoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video URL</FormLabel>
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
                <VideoTestimonial
                  title={form.watch("title") || data?.title}
                  subtitle={form.watch("subtitle") || data?.subtitle}
                  videoUrl={form.watch("videoUrl") || data?.videoUrl}
                  __typename="VideoTestimonial"
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
