import { Mail, Phone, MapPin, Send, Car, Bike, Truck, Heart, Umbrella, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const insuranceOptions = [
  { id: "car", label: "Car", icon: Car },
  { id: "bike", label: "Bike", icon: Bike },
  { id: "commercial", label: "Commercial Vehicle", icon: Truck },
  { id: "health", label: "Health", icon: Heart },
  { id: "life", label: "Life", icon: Umbrella },
  { id: "mutual-funds", label: "Mutual Funds", icon: TrendingUp },
];

const Contact = () => {
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
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Ready to take control of your financial future? Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-foreground/70">+91 98765 43210</p>
                    <p className="text-foreground/70">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-foreground/70">info@moneytreewealth.co.in</p>
                    <p className="text-foreground/70">support@moneytreewealth.co.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-foreground/70">
                      123 Finance Street, Business District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-foreground/70">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Insurance Selection */}
              <div>
                <label className="text-sm font-medium mb-3 block">
                  Select below the insurance you are interested in (Multi-select)
                </label>
                <div className="flex flex-wrap gap-3">
                  {insuranceOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = selectedInsurance.includes(option.id);
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggleInsurance(option.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all duration-300 font-medium text-sm ${
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                            : "bg-background border-border hover:border-primary/50 text-foreground/80 hover:text-primary"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input name="first_name" placeholder="John" className="bg-background" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input name="last_name" placeholder="Doe" className="bg-background" required />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" name="email" placeholder="john@example.com" className="bg-background" required />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input type="tel" name="phone" placeholder="+91 98765 43210" className="bg-background" required />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your financial goals..."
                  className="bg-background min-h-[120px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
