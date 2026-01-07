import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "../../schema";
import { useContactForm } from "@/hooks/use-contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const mutation = useContactForm();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: InsertMessage) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <div className="bg-secondary text-white pt-32 pb-20">
        <div className="container-padding text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Have questions about our products or want a custom quote? We'd love
            to hear from you.
          </p>
        </div>
      </div>

      <div className="container-padding py-16 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-border">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 bg-secondary p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white/60 text-sm">Phone</p>
                    <p className="text-lg">+91 97420-91664</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white/60 text-sm">Email</p>
                    <p className="text-lg break-all">
                      contact@zakainternational.com
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white/60 text-sm">Office</p>
                    <p className="text-lg leading-snug">
                      554, Kote Camp, Tarikere,
                      <br />
                      Chikkamagaluru, Karnataka, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <div className="w-24 h-24 bg-primary/20 rounded-full blur-2xl absolute -bottom-10 -left-10" />
              <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl absolute bottom-10 right-10" />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-10 bg-white">
            <h3 className="font-display text-2xl font-bold text-secondary mb-6">
              Send us a Message
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Business Ltd."
                            {...field}
                            className="bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary"
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          {...field}
                          className="bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary"
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your requirements (product type, quantity, destination)..."
                          className="min-h-[150px] bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full md:w-auto px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                >
                  {mutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
