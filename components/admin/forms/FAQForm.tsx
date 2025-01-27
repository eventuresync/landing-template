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
import { Loader2, Plus, Trash2 } from "lucide-react";
import FAQ from "@/components/sections/FAQ";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("react-quill"), { ssr: false });
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { htmlToRichText } from "@/lib/htmlParser";

const faqSchema = z.object({
  title: z.string().optional(),
  questions: z.array(
    z.object({
      question: z.string().min(1, "Question is required"),
      answer: z.string().min(1, "Answer is required"),
      sys: z
        .object({
          id: z.string(),
        })
        .optional(),
    })
  ),
});

export default function FAQForm({
  data,
  onSave,
  saving,
}: {
  data: any;
  onSave: (data: any) => void;
  saving: boolean;
}) {
  const form = useForm({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      title: data?.title || "",
      questions:
        data?.questionsCollection?.items.map((question: any) => ({
          ...question,
          sys: { id: question.sys?.id || Math.random().toString() },
        })) || [],
    },
  });

  const addQuestion = () => {
    const questions = form.getValues("questions") || [];
    form.setValue("questions", [
      ...questions,
      {
        question: "",
        answer: "",
        sys: { id: Math.random().toString() },
      },
    ]);
  };

  const removeQuestion = (id: string) => {
    const questions = form.getValues("questions");
    form.setValue(
      "questions",
      questions.filter((q: any) => q.sys?.id !== id)
    );
  };

  const handleSubmit = (formData: any) => {
    const changedFields: any = {
      entryId: data?.sys?.id,
      title: formData.title,
      questions: formData.questions.map((question: any) => ({
        ...question,
        answer: htmlToRichText(question.answer),
      })),
    };

    onSave(changedFields);
  };

  const questions = form.watch("questions") || [];

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
            {questions.map((question: any, index: number) => (
              <Card key={question.sys?.id} className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Question {index + 1}
                </h3>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name={`questions.${index}.question`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Question</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`questions.${index}.answer`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Answer</FormLabel>
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

                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeQuestion(question.sys?.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove Question
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={addQuestion}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Question
          </Button>

          <div className="space-y-4">
            <h3 className="font-semibold">Preview</h3>
            <div className="border rounded-lg p-4 bg-[#f6f7f4]">
              <FAQ
                title={form.watch("title")}
                questionsCollection={{
                  items: form.watch("questions").map((question: any) => ({
                    ...question,
                    answer: { json: htmlToRichText(question.answer) },
                  })),
                }}
                __typename={""}
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
