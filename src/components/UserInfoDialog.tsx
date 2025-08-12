import React, { useState, useEffect } from "react";
import { Dialog, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

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

interface UserInfo {
  name: string;
  phone: string;
  email: string;
}

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const UserInfoDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    phone: "",
    email: ""
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show dialog when component mounts (app launches)
    setIsOpen(true);
  }, []);

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    // Clear previous errors
    setFieldErrors({});
    
    const errors: FieldErrors = {};
    
    // Validate inputs
    if (!userInfo.name.trim()) {
      errors.name = "Name is required";
    }

    if (!userInfo.phone.trim()) {
      errors.phone = "Phone number is required";
    }

    if (!userInfo.email.trim()) {
      errors.email = "Email is required";
    } else {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userInfo.email)) {
        errors.email = "Please enter a valid email address";
      }
    }

    // If there are errors, display them and return
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      // Here you can add API call to save user info
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Thank You!",
        description: "Your information has been submitted successfully.",
      });

      // Close dialog after successful submission
      setIsOpen(false);
      
      // Store in localStorage to remember user
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-primary">
            Welcome to Sun Point Appliances
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          
          <div className="space-y-3">
            <div>
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={userInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`mt-1 ${fieldErrors.name ? 'border-red-500' : ''}`}
              />
              {fieldErrors.name && (
                <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={userInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`mt-1 ${fieldErrors.phone ? 'border-red-500' : ''}`}
              />
              {fieldErrors.phone && (
                <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={userInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`mt-1 ${fieldErrors.email ? 'border-red-500' : ''}`}
              />
              {fieldErrors.email && (
                <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="flex-1"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="flex-1"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoDialog; 