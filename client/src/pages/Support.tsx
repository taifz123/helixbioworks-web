import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ShoppingCart, Heart, Search, ChevronDown } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export default function Support() {
  const { getTotalItems } = useCart();
  const [, setLocation] = useLocation();
  const cartCount = getTotalItems();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the purity of your compounds?",
      answer: "All our compounds are laboratory-tested and certified to be 99%+ pure. Each batch comes with a certificate of analysis from our third-party testing facility."
    },
    {
      question: "How long does shipping take?",
      answer: "Orders are processed within 24-48 hours and shipped via express courier. Delivery times vary by location but typically range from 3-7 business days."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times are calculated at checkout based on your location."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, cryptocurrency, and multiple online payment methods. Payment instructions are sent via email after order confirmation."
    },
    {
      question: "Is my order confidential?",
      answer: "Yes, we maintain strict confidentiality. Orders are shipped in discreet packaging with no external markings that indicate the contents."
    },
    {
      question: "Can I return or exchange products?",
      answer: "We stand behind the quality of our products. If you receive a defective item, please contact us within 7 days for a replacement or refund."
    },
    {
      question: "Do you provide documentation?",
      answer: "Yes, every order includes a certificate of analysis, product specifications, and handling instructions."
    },
    {
      question: "How should I store the compounds?",
      answer: "Store in a cool, dry place away from direct sunlight. Most compounds should be kept at 2-8°C for optimal stability. Detailed storage instructions are included with each order."
    }
  ];

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
              <button onClick={() => setLocation("/support")} className="text-primary transition-colors duration-200">
                SUPPORT
              </button>
              <button onClick={() => setLocation("/contact")} className="text-foreground hover:text-primary transition-colors duration-200">
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
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">Support Center</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions and get the support you need
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Order Tracking", description: "Track your shipment in real-time" },
              { title: "Product Info", description: "Detailed specifications and usage guides" },
              { title: "Contact Us", description: "Reach our support team directly" }
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={() => idx === 2 && setLocation("/contact")}
                className="p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-left group hover:bg-primary/5"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-foreground/70">{link.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground tracking-tight mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground/70">
              Find quick answers to your most common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-2 border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-muted/30 transition-colors duration-300 text-left"
                >
                  <h3 className="text-lg font-bold text-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === idx && (
                  <div className="px-6 py-6 bg-muted/20 border-t-2 border-border">
                    <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tight">Still need help?</h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or concerns
          </p>
          <Button
            onClick={() => setLocation("/contact")}
            className="bg-primary text-white hover:bg-primary/90 font-bold px-12 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            CONTACT SUPPORT
          </Button>
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
            <p>&copy; 2026 Helix BioWorks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
