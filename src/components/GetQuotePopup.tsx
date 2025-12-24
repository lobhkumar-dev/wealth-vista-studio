import { Mail, Phone, Send, Car, Bike, Truck, Heart, Umbrella, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const insuranceOptions = [
  { id: "car", label: "Car", icon: Car },
  { id: "bike", label: "Bike", icon: Bike },
  { id: "commercial", label: "Commercial Vehicle", icon: Truck },
  { id: "health", label: "Health", icon: Heart },
  { id: "life", label: "Life", icon: Umbrella },
  { id: "mutual-funds", label: "Mutual Funds", icon: TrendingUp },
];

interface GetQuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

const GetQuotePopup = ({ isOpen, onClose, serviceTitle }: GetQuotePopupProps) => {
  const [selectedInsurance, setSelectedInsurance] = useState<string[]>([]);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const toggleInsurance = (id: string) => {
    setSelectedInsurance(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "1217b98a-d1f2-438a-8ce9-2178c354cd57");
    formData.append("insurance_interests", selectedInsurance.map(id => 
      insuranceOptions.find(opt => opt.id === id)?.label
    ).filter(Boolean).join(", "));
    if (serviceTitle) {
      formData.append("service_inquiry", serviceTitle);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        (event.target as HTMLFormElement).reset();
        setSelectedInsurance([]);
        setTimeout(() => {
          onClose();
          setResult("");
        }, 1500);
      } else {
        setResult("Error submitting form");
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setResult("Error submitting form");
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold">
            Get A Quote
            {serviceTitle && (
              <span className="block text-sm font-normal text-foreground/70 mt-1">
                Inquiry for: {serviceTitle}
              </span>
            )}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4 mt-4">
          {/* Insurance Selection */}
          <div>
            <label className="text-xs sm:text-sm font-medium mb-2 block">
              Select below the insurance you are interested in (Multi-select)
            </label>
            <div className="flex flex-wrap gap-2">
              {insuranceOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedInsurance.includes(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => toggleInsurance(option.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border-2 transition-all duration-300 font-medium text-xs ${
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                        : "bg-background border-border hover:border-primary/50 text-foreground/80 hover:text-primary"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs sm:text-sm font-medium mb-1.5 block">First Name</label>
              <Input name="first_name" placeholder="John" className="bg-background text-sm" required />
            </div>
            <div>
              <label className="text-xs sm:text-sm font-medium mb-1.5 block">Last Name</label>
              <Input name="last_name" placeholder="Doe" className="bg-background text-sm" required />
            </div>
          </div>

          <div>
            <label className="text-xs sm:text-sm font-medium mb-1.5 block">Email</label>
            <Input type="email" name="email" placeholder="john@example.com" className="bg-background text-sm" required />
          </div>

          <div>
            <label className="text-xs sm:text-sm font-medium mb-1.5 block">Phone</label>
            <Input type="tel" name="phone" placeholder="+91 98765 43210" className="bg-background text-sm" required />
          </div>

          <div>
            <label className="text-xs sm:text-sm font-medium mb-1.5 block">Message</label>
            <Textarea
              name="message"
              placeholder="Tell us about your financial goals..."
              className="bg-background min-h-[80px] text-sm"
              required
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group text-sm"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          {result && (
            <p className={`text-center text-sm ${result.includes("Success") ? "text-green-600" : result.includes("Error") ? "text-red-500" : "text-foreground/70"}`}>
              {result}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GetQuotePopup;
