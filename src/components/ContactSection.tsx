
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  message: z.string().min(1, { message: "Message is required" })
});

type FormData = z.infer<typeof formSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);
      
      // Insert data into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);
        
      if (error) throw error;
      
      // Show success message
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out — we'll be in touch shortly.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 container-custom scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">
          Are you a candidate? An advocate? A changemaker?
        </h2>
        <p className="text-center text-lg mb-10">
          Fill out this brief form and our team will be in touch shortly.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 border-2 border-gray-200 rounded-xl p-8 shadow-md">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium mb-1">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark-blue placeholder:text-gray-400"
                      aria-label="Your name"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium mb-1">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark-blue placeholder:text-gray-400"
                      aria-label="Your email address"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium mb-1">
                    How can we help?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Tell us about your campaign needs..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark-blue placeholder:text-gray-400"
                      aria-label="Your message"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex justify-center items-center"
              aria-label="Submit contact form"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
