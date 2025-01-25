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
import Autocuidarse from "@/components/sections/Autocuidarse";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("react-quill"), { ssr: false });
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { htmlToRichText } from "@/lib/htmlParser";

const ProgramSchema = z.object({
  image: z
    .object({
      url: z.string().url("Must be a valid URL").optional(),
      uploadId: z.string().optional(),
      fileName: z.string().optional(),
    })
    .optional(),
  desc: z.string().optional(),
  mainTitle: z.string().optional(),
  welcomeText: z.string().optional(),
  descMobile: z.string().optional(),
});

type ProgramFormProps = {
  onSave: (data: any) => void;
  onChange: () => void;
  saving: boolean;
  data?: any;
};

export default function ProgramForm({
  onSave,
  onChange,
  saving,
  data,
}: ProgramFormProps) {
  const subInitialHTML = data?.desc?.json
    ? documentToHtmlString(data.desc.json)
    : "";

  const finalHTML = data?.descMobile?.json
    ? documentToHtmlString(data.descMobile.json)
    : "";

  const [imagePreview, setImagePreview] = useState<string | null>(
    data?.image?.url || null
  );
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(ProgramSchema),
    defaultValues: {
      image: {
        url: data?.image?.url || "",
      },
      desc: subInitialHTML,
      mainTitle: data?.mainTitle || "",
      welcomeText: data?.welcomeText || "",
      descMobile: finalHTML,
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

    if (formData.mainTitle !== data?.mainTitle) {
      changedFields.mainTitle = formData.mainTitle;
    }

    if (formData.welcomeText !== data?.welcomeText) {
      changedFields.welcomeText = formData.welcomeText;
    }

    if (formData.descMobile !== finalHTML) {
      // Convierte HTML a Rich Text JSON usando la nueva función
      const richTextJSON = htmlToRichText(formData.descMobile);
      changedFields.descMobile = richTextJSON;
    }

    if (formData.desc !== subInitialHTML) {
      // Convierte HTML a Rich Text JSON usando la nueva función
      const richTextJSON = htmlToRichText(formData.desc);
      changedFields.desc = richTextJSON;
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
                name="welcomeText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titulo</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mainTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titulo</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image.url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
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
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
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
                name="descMobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripction Mobile</FormLabel>
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
                <Autocuidarse
                  mainTitle={form.watch("mainTitle") || data?.mainTitle || ""}
                  welcomeText={
                    form.watch("welcomeText") || data?.welcomeText || ""
                  }
                  desc={
                    form.watch("desc")
                      ? { json: htmlToRichText(form.watch("desc")) }
                      : data?.desc
                  }
                  descMobile={
                    form.watch("descMobile")
                      ? { json: htmlToRichText(form.watch("descMobile")) }
                      : data?.descMobile
                  }
                  image={{
                    url: imagePreview || data?.image?.url || "",
                  }}
                  __typename="Program"
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
