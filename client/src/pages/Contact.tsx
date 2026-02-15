import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ShoppingCart, Heart, Search, Mail, Phone, MapPin, Send } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export default function Contact() {
  const { getTotalItems } = useCart();
  const [, setLocation] = useLocation();
  const cartCount = getTotalItems();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            <button
              onClick={() => setLocation("/")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">HB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-foreground">HELIX</span>
                <span className="font-bold text-xs tracking-tight text-muted-foreground">BIOWORKS</span>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-12 text-sm font-semibold">
              <button onClick={() => setLocation("/products")} className="text-foreground hover:text-primary transition-colors duration-200">
                PRODUCTS
              </button>
              <button onClick={() => setLocation("/about")} className="text-foreground hover:text-primary transition-colors duration-200">
                ABOUT
              </button>
              <button onClick={() => setLocation("/support")} className="text-foreground hover:text-primary transition-colors duration-200">
                SUPPORT
              </button>
              <button onClick={() => setLocation("/contact")} className="text-primary transition-colors duration-200">
                CONTACT
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center bg-muted rounded-lg px-4 py-2 gap-2 border border-border">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-40 placeholder-muted-foreground" />
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 relative">
                <Heart className="w-5 h-5" />
              </button>
              <button onClick={() => setLocation("/cart")} className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold">{cartCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">Get In Touch</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Our team is ready to assist you with any questions or support needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-12">
              <h2 className="text-5xl font-bold text-foreground tracking-tight">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6 p-6 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <p className="text-foreground/70">support@helixbioworks.com</p>
                  </div>
                </div>
                
                <div className="flex gap-6 p-6 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex gap-6 p-6 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Address</h3>
                    <p className="text-foreground/70">123 Research Boulevard<br />Science City, SC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-muted/20 to-white p-10 rounded-2xl border-2 border-border">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Send us a Message</h2>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 font-bold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                {submitted ? "Message Sent!" : <><Send className="w-4 h-4" /> Send Message</> }
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-6 text-lg tracking-tight">NAVIGATION</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setLocation("/")} className="hover:text-gray-200 transition-colors duration-200">Home</button></li>
                <li><button onClick={() => setLocation("/products")} className="hover:text-gray-200 transition-colors duration-200">Products</button></li>
                <li><button onClick={() => setLocation("/about")} className="hover:text-gray-200 transition-colors duration-200">About</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg tracking-tight">SUPPORT</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setLocation("/contact")} className="hover:text-gray-200 transition-colors duration-200">Contact</button></li>
                <li><button onClick={() => setLocation("/support")} className="hover:text-gray-200 transition-colors duration-200">Help Center</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg tracking-tight">LEGAL</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
            <p>&copy; 2026 Helix BioWorks. All rights reserved. For research use only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
