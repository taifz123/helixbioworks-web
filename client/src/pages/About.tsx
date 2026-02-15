import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ShoppingCart, User, Heart, Search } from "lucide-react";
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
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">About Helix BioWorks</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Pioneering excellence in research compounds since 2020
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground tracking-tight">Our Mission</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                At Helix BioWorks, our mission is to provide the global research community with the highest quality peptides and compounds available. We believe that scientific advancement requires unwavering commitment to purity, consistency, and integrity.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Every product we offer has undergone rigorous testing and quality control to ensure it meets the exacting standards of the research community. We are dedicated to supporting researchers in their quest for discovery and innovation.
              </p>
            </div>
            <img src="https://via.placeholder.com/500x400?text=Research+Lab" alt="Research Lab" className="w-full h-96 object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">Excellence</h3>
              <p className="text-foreground/80 leading-relaxed">
                We maintain the highest standards in every aspect of our operations, from sourcing to quality control to customer service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">Integrity</h3>
              <p className="text-foreground/80 leading-relaxed">
                Honesty and transparency guide all our interactions. We provide accurate information and stand behind every product we sell.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">Innovation</h3>
              <p className="text-foreground/80 leading-relaxed">
                We continuously improve our processes and expand our offerings to support the evolving needs of the research community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Our Team</h2>
          <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Our team consists of experienced scientists, quality assurance specialists, and customer service professionals dedicated to your success. With decades of combined experience in pharmaceutical research and development, we understand what researchers need.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <img src={`https://via.placeholder.com/250x250?text=Team+Member+${i}`} alt={`Team Member ${i}`} className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg" />
                <h3 className="text-xl font-bold text-foreground mb-2">Team Member {i}</h3>
                <p className="text-muted-foreground">Senior Scientist</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Explore Our Products?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
            Discover our complete range of research-grade compounds and peptides
          </p>
          <Button
            onClick={() => setLocation("/")}
            className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-6 text-lg rounded-lg transition-all duration-200"
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
            <p>&copy; 2026 Helix BioWorks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
