import React, { useState, useEffect } from "react";
import { Dialog, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { sendUserInfoEmail } from "@/lib/emailService";
import ContactForm from "@/components/ContactForm";

// Custom DialogContent without close button
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const UserInfoDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show dialog when component mounts (app launches)
    setIsOpen(true);
  }, []);

  const handleSubmit = async (formData: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    question: string;
  }) => {
    setIsLoading(true);

    try {
      // Transform ContactForm data to match email service format
      const userInfo = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        phone: formData.phoneNumber,
        email: formData.email,
        question: formData.question?.trim() || undefined
      };

      // Send email with user information
      const emailSent = await sendUserInfoEmail(userInfo);
      
      if (emailSent) {
        toast({
          title: "Thank You!",
          description: "Your inquiry has been submitted successfully. We'll contact you soon!",
        });

        // Close dialog after successful submission
        setIsOpen(false);
        
        // Store in localStorage to remember user
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    // Store a flag to remember user declined
    localStorage.setItem('userInfoDeclined', 'true');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-primary">
            Get in Touch with Sun Point Appliances
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <ContactForm
            variant="dialog"
            onCancel={handleCancel}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoDialog; 