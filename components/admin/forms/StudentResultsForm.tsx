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
import { Loader2, Upload, Trash2, GripVertical } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Testimonials from "@/components/sections/Testimonials";
import dynamic from "next/dynamic";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const RichTextEditor = dynamic(() => import("react-quill"), { ssr: false });
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { htmlToRichText } from "@/lib/htmlParser";
import StudentResults from "@/components/sections/StudentResults";

const testimonialsSchema = z.object({
  entry: z.string().optional(),
  textTitle: z.any().optional(),
  testimonialImages: z.array(
    z.object({
      url: z.string().url("Must be a valid URL").optional(),
      uploadId: z.string().optional(),
      fileName: z.string().optional(),
    })
  ),
});

interface SortableImageProps {
  id: string;
  url: string;
  onRemove: (id: string) => void;
}

function SortableImage({ id, url, onRemove }: SortableImageProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <div
        {...attributes}
        {...listeners}
        className="absolute top-2 left-2 cursor-move bg-white rounded-full p-1 z-10"
      >
        <GripVertical className="w-4 h-4" />
      </div>
      <img
        src={url}
        alt="Preview"
        className="w-full h-48 object-cover rounded-lg"
      />
      <Button
        type="button"
        variant="destructive"
        size="icon"
        className="absolute top-2 right-2 z-10"
        onClick={() => onRemove(id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default function StudentResultsForm({
  data,
  onSave,
  onChange,
  saving,
}: {
  data: any;
  onSave: (data: any) => void;
  onChange: () => void;
  saving: boolean;
}) {
  const textTitleInitialHTML = data?.textTitle?.json
    ? documentToHtmlString(data.textTitle.json)
    : "";

  const [imagePreviews, setImagePreviews] = useState<
    Array<{ id: string; url: string; isExisting?: boolean }>
  >(
    data?.testimonialImagesCollection?.items?.map((item: any) => ({
      id: item.sys?.id || Math.random().toString(),
      url: item.url,
      isExisting: true,
    })) || []
  );
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const form = useForm({
    resolver: zodResolver(testimonialsSchema),
    defaultValues: {
      entry: data?.entry || "",
      textTitle: textTitleInitialHTML,
      testimonialImages: data?.testimonialImagesCollection?.items || [],
    },
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = imagePreviews.findIndex((img) => img.id === active.id);
      const newIndex = imagePreviews.findIndex((img) => img.id === over?.id);

      setImagePreviews(arrayMove(imagePreviews, oldIndex, newIndex));

      const currentImages = form.getValues("testimonialImages");
      form.setValue(
        "testimonialImages",
        arrayMove(currentImages, oldIndex, newIndex)
      );
      onChange();
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    try {
      setUploading(true);

      const uploadPromises = files.map(async (file) => {
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

        // Create a preview
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve({
              preview: reader.result,
              uploadId,
              fileName: file.name,
            });
          };
          reader.readAsDataURL(file);
        });
      });

      const results = await Promise.all(uploadPromises);

      // Agregar nuevas imágenes manteniendo las existentes
      const newPreviews = (results as any[]).map((r) => ({
        id: r.uploadId,
        url: r.preview as string,
        isExisting: false,
      }));

      setImagePreviews((prev) => [...prev, ...newPreviews]);

      // Actualizar el formulario manteniendo las imágenes existentes
      const currentImages = form.getValues("testimonialImages");
      const newImages = (results as any[]).map((r) => ({
        uploadId: r.uploadId,
        fileName: r.fileName,
        isExisting: false,
      }));

      form.setValue("testimonialImages", [...currentImages, ...newImages]);

      toast({
        title: "Success",
        description: "Images uploaded successfully",
        variant: "default",
      });

      onChange();
    } catch (error) {
      console.error("Error uploading images:", error);
      toast({
        title: "Error",
        description: "Failed to upload images. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (idToRemove: string) => {
    const imageIndex = imagePreviews.findIndex((img) => img.id === idToRemove);
    if (imageIndex === -1) return;

    setImagePreviews((prev) => prev.filter((img) => img.id !== idToRemove));

    const currentImages = form.getValues("testimonialImages");
    const newImages: Array<{
      uploadId: string;
      fileName: string;
      isExisting?: boolean;
    }> = currentImages.filter((_: any, index: number) => index !== imageIndex);
    form.setValue("testimonialImages", newImages);
    onChange();
  };
  const handleSubmit = (formData: any) => {
    const changedFields: any = {
      entryId: data?.sys?.id,
    };

    if (formData.entry !== data?.entry) {
      changedFields.entry = htmlToRichText(formData.entry);
    }

    if (formData.textTitle !== textTitleInitialHTML) {
      changedFields.textTitle = htmlToRichText(formData.textTitle);
    }

    // Preparar el array de imágenes combinando existentes y nuevas
    const existingImages =
      data?.testimonialImagesCollection?.items?.map((item: any) => ({
        uploadId: item.sys.id,
        fileName: item.fileName,
      })) || [];

    const newImages = formData.testimonialImages
      .filter((img: any) => !img.isExisting && img.uploadId)
      .map((img: any) => ({
        uploadId: img.uploadId,
        fileName: img.fileName,
      }));

    // Combinar imágenes existentes y nuevas
    changedFields.testimonialImages = [...existingImages, ...newImages];

    if (Object.keys(changedFields).length > 0) {
      onSave(changedFields);
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
                name="entry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title Responsive</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="textTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
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

              <div>
                <FormLabel>Testimonial Images</FormLabel>
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={imagePreviews}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      {imagePreviews.map((img) => (
                        <SortableImage
                          key={img.id}
                          id={img.id}
                          url={img.url}
                          onRemove={removeImage}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>

                <div className="mt-4">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
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
                    {uploading ? "Uploading..." : "Upload Images"}
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Preview</h3>
              <div className="border rounded-lg p-4 bg-[#f6f7f4]">
                <StudentResults
                  entry={form.watch("entry") || data?.entry}
                  textTitle={
                    form.watch("textTitle")
                      ? {
                          json: htmlToRichText(form.watch("textTitle")),
                        }
                      : data?.textTitle
                  }
                  testimonialImagesCollection={{
                    items: imagePreviews.map((img) => ({ url: img.url })),
                  }}
                  __typename="StudentResults"
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
