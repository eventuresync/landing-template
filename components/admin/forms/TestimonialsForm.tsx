"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Loader2, Plus, Trash2 } from "lucide-react";

const testimonialSchema = z.object({
  testimonials: z.array(z.object({
    name: z.string().min(1, "Name is required"),
    image: z.string().url("Must be a valid URL"),
    content: z.string().min(1, "Content is required"),
  })),
});

type TestimonialsFormProps = {
  data: any;
  onSave: (data: any) => void;
  saving: boolean;
};

export default function TestimonialsForm({ data, onSave, saving }: TestimonialsFormProps) {
  const form = useForm({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      testimonials: data?.testimonials || [{
        name: "",
        image: "",
        content: "",
      }],
    },
  });

  const { fields, append, remove } = form.useFieldArray({
    name: "testimonials",
  });

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSave)} className="space-y-6">
          <div className="space-y-6">
            {fields.map((field, index) => (
              <Card key={field.id} className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Testimonial {index + 1}</h3>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name={`testimonials.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`testimonials.${index}.image`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL</FormLabel>
                        <FormControl>
                          <Input {...field} type="url" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`testimonials.${index}.content`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() => append({ name: "", image: "", content: "" })}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Testimonial
          </Button>

          <Button type="submit" disabled={saving}>
            {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </form>
      </Form>
    </Card>
  );
}