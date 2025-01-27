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
import { Loader2, Plus, Trash2, GripVertical } from "lucide-react";
import Module from "@/components/sections/ModuleHeader";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const moduleSchema = z.object({
  modules: z.array(
    z.object({
      title: z.string().min(1, "Title is required"),
      description: z.string().min(1, "Description is required"),
      icon: z.string().min(1, "Icon is required"),
      sys: z
        .object({
          id: z.string(),
        })
        .optional(),
    })
  ),
});

function SortableModuleCard({
  id,
  module,
  onRemove,
  form,
  index,
}: {
  id: string;
  module: any;
  onRemove: (id: string) => void;
  form: any;
  index: number;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card ref={setNodeRef} style={style} className="p-4 relative">
      <div
        {...attributes}
        {...listeners}
        className="absolute top-2 right-12 cursor-move bg-gray-100 rounded-full p-1"
      >
        <GripVertical className="w-4 h-4" />
      </div>
      <Button
        type="button"
        variant="destructive"
        size="icon"
        className="absolute top-2 right-2"
        onClick={() => onRemove(id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      <div className="space-y-4 mt-8">
        <FormField
          control={form.control}
          name={`modules.${index}.title`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`modules.${index}.description`}
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

        <FormField
          control={form.control}
          name={`modules.${index}.icon`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Icon (emoji)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter an emoji" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Preview</h4>
          <div className="border rounded-lg p-4 bg-[#f6f7f4]">
            <Module
              title={form.watch(`modules.${index}.title`) || module.title}
              description={
                form.watch(`modules.${index}.description`) || module.description
              }
              icon={form.watch(`modules.${index}.icon`) || module.icon}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function ModuleForm({
  data = [],
  onSave,
  saving,
}: {
  data: any[];
  onSave: (data: any) => void;
  saving: boolean;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const form = useForm({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      modules:
        data.map((module) => ({
          ...module,
          sys: { id: module.sys?.id || Math.random().toString() },
        })) || [],
    },
  });

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const modules = form.getValues("modules");
      const oldIndex = modules.findIndex((m) => m.sys?.id === active.id);
      const newIndex = modules.findIndex((m) => m.sys?.id === over.id);

      form.setValue("modules", arrayMove(modules, oldIndex, newIndex));
    }
  };

  const addModule = () => {
    const modules = form.getValues("modules") || [];
    form.setValue("modules", [
      ...modules,
      {
        title: "",
        description: "",
        icon: "",
        sys: { id: Math.random().toString() },
      },
    ]);
  };

  const removeModule = (id: string) => {
    const modules = form.getValues("modules");
    form.setValue(
      "modules",
      modules.filter((m) => m.sys?.id !== id)
    );
  };

  const handleSubmit = (formData: any) => {
    onSave(formData.modules);
  };

  const modules = form.watch("modules") || [];

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={modules.map((m) => m.sys?.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <SortableModuleCard
                    key={module.sys?.id}
                    id={module.sys?.id}
                    module={module}
                    onRemove={removeModule}
                    form={form}
                    index={index}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>

          <Button
            type="button"
            variant="outline"
            onClick={addModule}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Module
          </Button>

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
