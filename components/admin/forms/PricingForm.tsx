"use client";

import { useForm, useFieldArray } from "react-hook-form";
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
import { Loader2, Plus, Trash2 } from "lucide-react";

const pricingSchema = z.object({
  plans: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      price: z.string().min(1, "Price is required"),
      description: z.string().min(1, "Description is required"),
      features: z.array(z.string().min(1, "Feature cannot be empty")),
      ctaText: z.string().min(1, "CTA text is required"),
    })
  ),
});

type PricingFormProps = {
  data: any;
  onSave: (data: any) => void;
  saving: boolean;
};

export default function PricingForm({
  data,
  onSave,
  saving,
}: PricingFormProps) {
  const form = useForm({
    resolver: zodResolver(pricingSchema),
    defaultValues: {
      plans: data?.plans || [
        {
          name: "",
          price: "",
          description: "",
          features: [""],
          ctaText: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "plans",
  });

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSave)} className="space-y-6">
          <div className="space-y-6">
            {fields.map((field, index) => (
              <Card key={field.id} className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Plan {index + 1}</h3>
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
                    name={`plans.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plan Name</FormLabel>
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
                    render={({ field }) => (
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
                    name={`plans.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Features</label>
                    {form
                      .watch(`plans.${index}.features`)
                      .map((_: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex gap-2">
                          <FormField
                            control={form.control}
                            name={`plans.${index}.features.${featureIndex}`}
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            onClick={() => {
                              const features: string[] = form.getValues(
                                `plans.${index}.features`
                              );
                              form.setValue(
                                `plans.${index}.features`,
                                features.filter((_, i) => i !== featureIndex)
                              );
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        const features = form.getValues(
                          `plans.${index}.features`
                        );
                        form.setValue(`plans.${index}.features`, [
                          ...features,
                          "",
                        ]);
                      }}
                      className="w-full"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Feature
                    </Button>
                  </div>

                  <FormField
                    control={form.control}
                    name={`plans.${index}.ctaText`}
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
              </Card>
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              append({
                name: "",
                price: "",
                description: "",
                features: [""],
                ctaText: "",
              })
            }
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Plan
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
