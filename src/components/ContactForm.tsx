import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Asterisk } from "lucide-react";

interface ContactFormProps {
  variant?: "page" | "dialog";
  onCancel?: () => void;
  onSubmit?: (formData: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    question: string;
  }) => void;
  isLoading?: boolean;
}

const ContactForm = ({ variant = "page", onCancel, onSubmit, isLoading = false }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    question: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms before submitting.");
      return;
    }
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  const isDialog = variant === "dialog";

  return (
    <div className={isDialog ? "" : "min-h-screen bg-background px-6 py-8"}>
      <div className={isDialog ? "" : "max-w-md mx-auto"}>
        {/* Logo - only show in page variant */}
        {!isDialog && (
          <div className="mb-6">
            <img src="/app_logo.png" alt="Sun Point Appliances" className="h-12" />
          </div>
        )}

        {/* Heading - only show in page variant */}
        {!isDialog && (
          <>
            <h1 className="text-2xl font-bold text-foreground mb-6">
              Have a query?
            </h1>
            {/* Divider */}
            <div className="h-px bg-border mb-6" />
          </>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First Name */}
          <div className="relative">
            <Input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="border border-border rounded px-3 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground"
            />
            <span className="absolute -top-2 right-2 bg-background px-1 text-primary text-sm">
              *
            </span>
          </div>

          {/* Last Name */}
          <div className="relative">
            <Input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="border border-border rounded px-3 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground"
            />
            <span className="absolute -top-2 right-2 bg-background px-1 text-primary text-sm">
              *
            </span>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <Input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="border border-border rounded px-3 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground"
            />
            <span className="absolute -top-2 right-2 bg-background px-1 text-primary text-sm">
              *
            </span>
          </div>

          {/* Email */}
          <div className="relative">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border border-border rounded px-3 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground"
            />
            <span className="absolute -top-2 right-2 bg-background px-1 text-primary text-sm">
              *
            </span>
          </div>

          {/* Question */}
          <div className="relative">
            <Textarea
              name="question"
              placeholder="Your question"
              value={formData.question}
              onChange={handleInputChange}
              required
              rows={4}
              className="border border-border rounded px-3 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground resize-none"
            />
            <span className="absolute -top-2 right-2 bg-background px-1 text-primary text-sm">
              *
            </span>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="agree"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
              className="mt-0.5 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <label
              htmlFor="agree"
              className="text-sm text-foreground cursor-pointer"
            >
              I agree
            </label>
          </div>

          {/* Terms Text */}
          <p className="text-sm text-foreground leading-relaxed">
            By submitting this form, I agree to receive marketing updates and
            promotional offers from Sun Point Appliances and its associates via Email, SMS
            (Text Messages), RCS, and WhatsApp. I also confirm that I have read
            and agree to your{" "}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Privacy Policy & Terms
            </a>
            .
          </p>

          {/* Submit Button and Asterisk */}
          <div className={`flex items-center gap-4 pt-4 ${isDialog ? "flex-col" : ""}`}>
            <div className="flex items-center gap-4 w-full">
              {onCancel && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  className="flex-1"
                >
                  Cancel
                </Button>
              )}
              <Button
                type="submit"
                disabled={isLoading || !agreed}
                className={`bg-primary hover:bg-primary/90 text-primary-foreground rounded px-6 py-2 ${onCancel ? "flex-1" : ""}`}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </div>
            {!isDialog && (
              <div className="w-10 h-10 border border-border rounded flex items-center justify-center">
                <Asterisk className="w-5 h-5 text-primary" />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
