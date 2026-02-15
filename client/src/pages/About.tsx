import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ShoppingCart, User, Heart, Search, CheckCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function About() {
  const { getTotalItems } = useCart();
  const [, setLocation] = useLocation();
  const cartCount = getTotalItems();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
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
              <button onClick={() => setLocation("/about")} className="text-primary transition-colors duration-200">
                ABOUT
              </button>
              <button onClick={() => setLocation("/support")} className="text-foreground hover:text-primary transition-colors duration-200">
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
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200">
                <User className="w-5 h-5" />
              </button>
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
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">About Helix BioWorks</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Setting the standard for research-grade compounds with uncompromising quality and integrity
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-foreground tracking-tight mb-6">Our Mission</h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  At Helix BioWorks, our mission is to provide the global research community with the highest quality peptides and compounds available. We believe that scientific advancement requires unwavering commitment to purity, consistency, and integrity.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Every product we offer has undergone rigorous testing and quality control to ensure it meets the exacting standards of the research community. We are dedicated to supporting researchers in their quest for discovery and innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-3xl" />
              <img 
                src="https://via.placeholder.com/550x450?text=Research+Lab" 
                alt="Research Lab" 
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground tracking-tight mb-6">Our Core Values</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              These principles guide every decision we make and every product we deliver
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We maintain the highest standards in every aspect of our operations, from sourcing to quality control to customer service. Perfection is not an accident—it's a commitment.",
                icon: "✨"
              },
              {
                title: "Integrity",
                description: "Honesty and transparency guide all our interactions. We provide accurate information and stand behind every product we sell with complete confidence.",
                icon: "🔐"
              },
              {
                title: "Innovation",
                description: "We continuously improve our processes and expand our offerings to support the evolving needs of the research community. Progress never stops.",
                icon: "🚀"
              }
            ].map((value, idx) => (
              <div 
                key={idx}
                className="group bg-white p-10 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-foreground/75 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-foreground tracking-tight mb-16">Our Commitment to You</h2>
            
            <div className="space-y-6">
              {[
                "Laboratory-verified purity on every batch with third-party testing",
                "Secure and confidential transactions with enterprise-grade encryption",
                "Fast processing and expedited shipping to researchers worldwide",
                "Comprehensive support and guidance for all your research needs",
                "Transparent pricing with no hidden fees or surprise charges"
              ].map((commitment, idx) => (
                <div key={idx} className="flex items-start gap-6 p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/80">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 tracking-tight">Ready to Explore Our Products?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our complete range of research-grade compounds and peptides, all backed by our commitment to excellence
          </p>
          <Button
            onClick={() => setLocation("/products")}
            className="bg-white text-primary hover:bg-gray-100 font-bold px-12 py-7 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            BROWSE PRODUCTS
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-6 text-lg tracking-tight">HELIX BIOWORKS</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setLocation("/")} className="hover:text-gray-200 transition-colors duration-200">Home</button></li>
                <li><button onClick={() => setLocation("/products")} className="hover:text-gray-200 transition-colors duration-200">Products</button></li>
                <li><button onClick={() => setLocation("/about")} className="hover:text-gray-200 transition-colors duration-200">About Us</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg tracking-tight">RESOURCES</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setLocation("/contact")} className="hover:text-gray-200 transition-colors duration-200">Contact Us</button></li>
                <li><button onClick={() => setLocation("/support")} className="hover:text-gray-200 transition-colors duration-200">Support Center</button></li>
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
