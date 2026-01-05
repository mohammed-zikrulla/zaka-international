import { useMutation } from "@tanstack/react-query";
import { type InsertMessage } from "client/schema";
import { useToast } from "@/hooks/use-toast";

export function useContactForm() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Pure frontend email simulation via mailto
      const subject = encodeURIComponent(`New Inquiry from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\n\nMessage:\n${data.message}`
      );
      
      // We open the user's default email client
      window.location.href = `mailto:export@zakainternational.com?subject=${subject}&body=${body}`;
      
      // Simulate success
      await new Promise(resolve => setTimeout(resolve, 500));
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Redirecting to Email",
        description: "Opening your email client to send the inquiry.",
        variant: "default",
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to Open Email Client",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
