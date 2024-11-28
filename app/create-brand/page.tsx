"use client";
import ColorPicker from "@/components/main/ColorPicker";
import ImagePicker from "@/components/main/ImagePicker";
import KeywordInput from "@/components/main/KeywordInput";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import zod from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const createBrandSchema = zod.object({
  name: zod.string().min(1, { message: "Brand name is required" }),
  description: zod.string().min(100, {
    message: "Characters in the brand requirement should be greater than 100",
  }),
  voices: zod.array(zod.string()).optional(),
  typography: zod.string().min(1, { message: "Brand typography is required" }),
  imageGuidelines: zod
    .string()
    .min(1, { message: "Image guidelines are required" }),
  colors: zod.array(zod.string()),
  dos: zod.string().min(1, { message: "Brand do's are required" }),
  donts: zod.string().min(1, { message: "Brand don'ts are required" }),
  images: zod
    .instanceof(File)
    .array()
    .min(1, { message: "At least one image is required" }),
});

createBrandSchema.required();

const CreateBrand = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(createBrandSchema),
    defaultValues: {
      name: "",
      description: "",
      voices: [],
      typography: "",
      imageGuidelines: "",
      dos: "",
      donts: "",
      colors: [],
      images: [],
    },
  });

  const onSubmit = async (data: zod.infer<typeof createBrandSchema>) => {
    const formData = new FormData();

    formData.append("brand_name", data.name);
    formData.append("description", data.description);
    formData.append("brand_voice", (data.voices ?? []).join(", "));
    formData.append("typography", data.typography);
    formData.append("image_guidelines", data.imageGuidelines);
    formData.append("dos", data.dos);
    formData.append("donts", data.donts);
    formData.append("color_palette", data.colors.join(", "));
    data.images.forEach((file, index) => {
      formData.append(`reference_images`, file);
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/api/v1/ingest-guidelines`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit brand guidelines");
      }

      const result = await response.json();

      toast.success("Brand Guidelines Successfully Created", {
        description: "Your brand guidelines have been saved.",
        position: "bottom-right",
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Submission Failed", {
        description: "There was an error saving your brand guidelines.",
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Brand Creation</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full max-w-3xl"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter brand name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your brand's public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand Description *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your brand"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Provide a brief description of your brand.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="voices"
            render={() => (
              <FormItem>
                <FormLabel>Brand Voice</FormLabel>
                <FormControl>
                  <Controller
                    name="voices"
                    control={form.control}
                    render={({ field }) => (
                      <KeywordInput
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Enter the brand values"
                      />
                    )}
                  />
                </FormControl>
                <FormDescription>
                  Provide some voices of your brand.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="typography"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Typography *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter brand typography" {...field} />
                </FormControl>
                <FormDescription>
                  This is your brand's typography.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageGuidelines"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image guidelines *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter image guidelines" {...field} />
                </FormControl>
                <FormDescription>This is the image guidelines.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full gap-4">
            <FormField
              control={form.control}
              name="dos"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Dos</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter brand do's..."
                      className="min-h-[200px] border-green-200 focus-visible:ring-green-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="donts"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Donts</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter brand don'ts..."
                      className="min-h-[200px] border-red-200 focus-visible:ring-red-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="colors"
            render={() => (
              <FormItem>
                <FormLabel>Pick the color palette *</FormLabel>
                <FormControl>
                  <Controller
                    name="colors"
                    control={form.control}
                    render={({ field }) => (
                      <ColorPicker
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </FormControl>
                <FormDescription>
                  This is your brand's color palette.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={() => (
              <FormItem>
                <FormLabel>Pick the images *</FormLabel>
                <FormControl>
                  <Controller
                    name="images"
                    control={form.control}
                    render={({ field }) => (
                      <ImagePicker
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </FormControl>
                <FormDescription>
                  This is your brand relevant images.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-40 self-end">
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateBrand;
