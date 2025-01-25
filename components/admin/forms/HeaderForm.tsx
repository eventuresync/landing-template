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
import Image from "next/image";
import Header from "@/components/layout/Header";

const headerSchema = z.object({
  image: z
    .object({
      url: z.string().url("Must be a valid URL").optional(),
    })
    .optional(),
  title: z.string().optional(),
});

type HeaderFormProps = {
  onSave: (data: any) => void;
  onChange: () => void;
  saving: boolean;
  data?: {
    sys: {
      id: string;
    };
    image?: {
      url: string;
    };
    title?: string;
  };
};

export default function HeaderForm({
  onSave,
  onChange,
  saving,
  data,
}: HeaderFormProps) {
  const form = useForm({
    resolver: zodResolver(headerSchema),
    defaultValues: {
      image: {
        url: data?.image?.url || "",
      },
      title: data?.title || "",
    },
  });

  const handleSubmit = (formData: any) => {
    // Objeto para almacenar solo los campos modificados
    const changedFields: any = {
      entryId: data?.sys?.id, // Incluir el ID de entrada en el payload
    };

    // Comparar cada campo con los valores originales
    if (formData.title !== data?.title) {
      changedFields.title = formData.title;
    }

    if (formData.image?.url !== data?.image?.url) {
      changedFields.image = { url: formData.image.url };
    }

    // Solo enviar si hay cambios
    if (Object.keys(changedFields).length > 0) {
      onSave(changedFields);
    } else {
      // Si no hay cambios, mostrar un mensaje o manejar según necesites
      console.log("No hay cambios para guardar");
    }
  };

  return (
    <Card className="p-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          onChange={onChange}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="image.url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profile Image URL</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="url"
                        placeholder="Enter image URL"
                      />
                    </FormControl>
                    <FormMessage />
                    {data?.image?.url && (
                      <p className="text-sm text-gray-500">
                        Current value: {data.image.url}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter title" />
                    </FormControl>
                    <FormMessage />
                    {data?.title && (
                      <p className="text-sm text-gray-500">
                        Current value: {data.title}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Preview</h3>
              <div className="border rounded-lg p-4 bg-[#f6f7f4]">
                <div className="flex flex-col items-center">
                  {(form.watch("image.url") ||
                    data?.image?.url ||
                    form.watch("title") ||
                    data?.title) && (
                    <Header
                      title={form.watch("title") || data?.title || ""}
                      image={form.watch("image") || data?.image}
                      __typename="Header"
                    />
                  )}
                </div>
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
