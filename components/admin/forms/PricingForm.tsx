"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import Pricing from "@/components/sections/Pricing";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("react-quill"), { ssr: false });
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { htmlToRichText } from "@/lib/htmlParser";

const pricingSchema = z.object({
  title: z.string().min(1, "Title is required"),
  plans: z.array(
    z.object({
      title: z.string().min(1, "Title is required"),
      price: z.string().min(1, "Price is required"),
      paymentType: z.string().min(1, "Payment type is required"),
      features: z.any(),
      buttonText: z.string().min(1, "Button text is required"),
      buttonLink: z.string().min(1, "Button link is required"),
      sys: z
        .object({
          id: z.string(),
        })
        .optional(),
    })
  ),
});

export default function PricingForm({
  data,
  onSave,
  saving,
}: {
  data: any;
  onSave: (data: any) => void;
  saving: boolean;
}) {
  const form = useForm({
    resolver: zodResolver(pricingSchema),
    defaultValues: {
      title: data?.title || "",
      plans:
        data?.plansCollection?.items.map((plan: any) => ({
          ...plan,
          features: documentToHtmlString(plan.features?.json),
        })) || [],
    },
  });

  const handleSubmit = (formData: any) => {
    interface Plan {
      title: string;
      price: string;
      paymentType: string;
      features: any;
      buttonText: string;
      buttonLink: string;
      sys?: {
        id: string;
      };
    }

    interface ChangedFields {
      entryId: string | undefined;
      title: string;
      plans: Plan[];
    }

    const changedFields: ChangedFields = {
      entryId: data?.sys?.id,
      title: formData.title,
      plans: formData.plans.map((plan: Plan) => ({
        ...plan,
        features: htmlToRichText(plan.features),
      })),
    };

    onSave(changedFields);
  };

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Section Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-8">
            {form.watch("plans").map((_: any, index: number) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-4">Plan {index + 1}</h3>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name={`plans.${index}.title`}
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>Plan Title</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`plans.${index}.price`}
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`plans.${index}.paymentType`}
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>Payment Type</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`plans.${index}.features`}
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>Features</FormLabel>
                        <FormControl>
                          <RichTextEditor
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`plans.${index}.buttonText`}
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>Button Text</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`plans.${index}.buttonLink`}
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>Button Link</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Preview</h3>
            <div className="border rounded-lg p-4 bg-[#f6f7f4]">
              <Pricing
                title={form.watch("title") as string}
                plansCollection={{
                  items: form.watch("plans").map(
                    (plan: {
                      title: string;
                      price: string;
                      paymentType: string;
                      features: any;
                      buttonText: string;
                      buttonLink: string;
                      sys?: {
                        id: string;
                      };
                    }) => ({
                      ...plan,
                      features: { json: htmlToRichText(plan.features) },
                    })
                  ),
                }}
                __typename="Pricing"
              />
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
