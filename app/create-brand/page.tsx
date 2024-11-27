"use client";
import KeywordInput from "@/components/main/KeywordInput";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import zod from "zod";

const createBrandSchema = zod.object({
    name: zod.string().min(1, { message: "Brand name is required" }),
    description: zod.string().min(100, { message: "Characters in the brand requirement should be greater than 100" }),
    values: zod.array(zod.string()).optional(),
    attributes: zod.array(zod.string()).optional()
});

createBrandSchema.required();

const CreateBrand = () => {
    const form = useForm({
        resolver: zodResolver(createBrandSchema),
        defaultValues: {
            name: "",
            description: "",
            values: [],
            attributes: []
        }
    });

    const onSubmit = (data: zod.infer<typeof createBrandSchema>) => {
        console.log(data);
    }

    return (
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold">Brand Creation</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full max-w-3xl">
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
                        name="values"
                        render={() => (
                            <FormItem>
                                <FormLabel>Brand Values</FormLabel>
                                <FormControl>
                                    <Controller 
                                        name="values"
                                        control={form.control}
                                        render={({ field }) => (
                                            <KeywordInput value={field.value} onChange={field.onChange} placeholder="Enter the brand values"/>
                                        )}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Provide some brief values of your brand.
                                </FormDescription>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="attributes"
                        render={() => (
                            <FormItem>
                                <FormLabel>Brand Attributes</FormLabel>
                                <FormControl>
                                    <Controller 
                                        name="attributes"
                                        control={form.control}
                                        render={({ field }) => (
                                            <KeywordInput value={field.value} onChange={field.onChange} placeholder="Enter the brand attributes"/>
                                        )}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Provide some brief attributes of your brand.
                                </FormDescription>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-40 self-end">Save</Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateBrand;