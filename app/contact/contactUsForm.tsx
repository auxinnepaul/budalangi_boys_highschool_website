"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormStatus } from "react-dom";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FC } from "react";
import { sendEmail } from "@/utils/send-email";
import { contactFormSchema } from "@/lib/schema";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactUs: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  // function onSubmit(data: FormData) {
  //   sendEmail(data);
  // }

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // // 2. Define a submit handler.
  // function onSubmit(data: z.infer<typeof contactFormSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   //console.log(data)
  //   setLoading(true);
  //   sendEmail(data);
  //   form.reset();
  //   setLoading(false);
  // }

  // 3. Define onSubmit function
  async function onSubmit(data: z.infer<typeof contactFormSchema>) {
    // Set loading to true to indicate that the form is submitting
    setLoading(true);

    try {
      // Send the email
      await sendEmail(data);

      // Reset the form after successful submission
      form.reset();
    } catch (error) {
      // Handle any errors that occur during the submission process
      console.error("Error submitting form:", error);
    } finally {
      // Set loading back to false regardless of success or failure
      setLoading(false);
    }
  }

  const { pending } = useFormStatus();

  return (
    <>
      <section className="md:px-8" id="contact">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Send Us A Message</h2>

          <div className="py-3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Type Your Name/Company"
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Type Your Email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Start typing your message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary"
                  disabled={pending}
                >
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
