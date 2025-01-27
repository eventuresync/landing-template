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
import { Loader2, Upload } from "lucide-react";
import Header from "@/components/layout/Header";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const headerSchema = z.object({
  image: z
    .object({
      url: z.string().url("Must be a valid URL").optional(),
      uploadId: z.string().optional(),
      fileName: z.string().optional(),
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
  const [imagePreview, setImagePreview] = useState<string | null>(
    data?.image?.url || null
  );
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(headerSchema),
    defaultValues: {
      image: {
        url: data?.image?.url || "",
      },
      title: data?.title || "",
    },
  });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    try {
      setUploading(true);

      // Upload the file
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const { uploadId } = await response.json();

      // Update form with upload ID and filename
      form.setValue("image", {
        uploadId,
        fileName: file.name,
      } as any);
      toast({
        title: "Success",
        description: "Imágen subida correctamente",
        variant: "default",
      });

      onChange();
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        title: "Error",
        description: "Error al subir, por favor intentar otra vez.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (formData: any) => {
    const changedFields: any = {
      entryId: data?.sys?.id,
    };

    if (formData.title !== data?.title) {
      changedFields.title = formData.title;
    }

    if (formData.image?.uploadId) {
      changedFields.uploadId = formData.image.uploadId;
      changedFields.fileName = formData.image.fileName;
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
                    <FormLabel>Profile Image</FormLabel>
                    {imagePreview && (
                      <div className="mt-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-48"
                        />
                      </div>
                    )}
                    <FormControl>
                      <div className="space-y-4">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                          id="image-upload"
                          disabled={uploading}
                        />
                        <label
                          htmlFor="image-upload"
                          className={`flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md cursor-pointer hover:bg-primary/90 w-fit ${
                            uploading ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          {uploading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Upload className="w-4 h-4" />
                          )}
                          {uploading ? "Uploading..." : "Upload Image"}
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
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
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Preview</h3>
              <div className="border rounded-lg p-4 bg-[#f6f7f4]">
                <Header
                  title={form.watch("title") || data?.title || ""}
                  image={{
                    url: imagePreview || data?.image?.url || "",
                  }}
                  __typename="Header"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              className="text-white"
              type="submit"
              disabled={saving || uploading}
            >
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
