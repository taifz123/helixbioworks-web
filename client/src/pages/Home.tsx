import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Beaker, Lock, Zap, Search, User, Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

export default function Home() {
  const { addItem, getTotalItems } = useCart();
  const [, setLocation] = useLocation();
  const cartCount = getTotalItems();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "HELIX BIOWORKS", subtitle: "Advanced Peptide Research Solutions", image: "hero-1" },
    { title: "HELIX BIOWORKS", subtitle: "Laboratory-Verified Excellence", image: "hero-2" },
    { title: "HELIX BIOWORKS", subtitle: "Precision Compounds for Researchers", image: "hero-3" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "Bacteriostatic Water Solution",
      price: "$29.95 AUD",
      originalPrice: "$34.95 AUD",
      image: "https://via.placeholder.com/200x250?text=Bacteriostatic+Water",
    },
    {
      id: 2,
      name: "BPC-157 Peptide Compound",
      price: "$84.95 AUD",
      originalPrice: "$94.95 AUD",
      image: "https://via.placeholder.com/200x250?text=BPC-157",
      featured: true,
    },
    {
      id: 3,
      name: "TB-500 Research Grade",
      price: "$109.95 AUD",
      originalPrice: "$119.95 AUD",
      image: "https://via.placeholder.com/200x250?text=TB-500",
    },
    {
      id: 4,
      name: "MK677 Advanced Formula",
      price: "$129.95 AUD",
      originalPrice: "$139.95 AUD",
      image: "https://via.placeholder.com/200x250?text=MK677",
    },
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      purity: "99%+",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            <button
              onClick={() => setLocation("/")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 group"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <span className="text-white font-bold text-lg">HB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-foreground">HELIX</span>
                <span className="font-bold text-xs tracking-tight text-muted-foreground">BIOWORKS</span>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-12 text-sm font-semibold">
              <button onClick={() => setLocation("/products")} className="text-foreground hover:text-primary transition-colors duration-200 relative group">
                PRODUCTS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => setLocation("/about")} className="text-foreground hover:text-primary transition-colors duration-200 relative group">
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => setLocation("/support")} className="text-foreground hover:text-primary transition-colors duration-200 relative group">
                SUPPORT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => setLocation("/contact")} className="text-foreground hover:text-primary transition-colors duration-200 relative group">
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center bg-muted rounded-lg px-4 py-2 gap-2 border border-border hover:border-primary/30 transition-colors duration-300">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-40 placeholder-muted-foreground" />
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 relative">
                <Heart className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLocation("/cart")}
                className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/95 h-96 md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="150" cy="100" r="40" fill="#fff" />
              <circle cx="250" cy="150" r="40" fill="#fff" />
              <circle cx="200" cy="250" r="40" fill="#fff" />
              <circle cx="100" cy="300" r="40" fill="#fff" />
              <line x1="150" y1="100" x2="250" y2="150" stroke="#fff" strokeWidth="3" />
              <line x1="250" y1="150" x2="200" y2="250" stroke="#fff" strokeWidth="3" />
              <line x1="200" y1="250" x2="100" y2="300" stroke="#fff" strokeWidth="3" />
            </svg>
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-8 z-20 p-3 hover:bg-white/20 rounded-full transition-all duration-200 group hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
          </button>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight animate-fade-in">{slides[currentSlide].title}</h1>
            <p className="text-2xl md:text-3xl mb-12 font-light tracking-wide animate-fade-in">{slides[currentSlide].subtitle}</p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-bold px-12 py-7 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              onClick={() => setLocation("/products")}
            >
              EXPLORE COLLECTION <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-8 z-20 p-3 hover:bg-white/20 rounded-full transition-all duration-200 group hover:scale-110"
          >
            <ChevronRight className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 ${
                idx === currentSlide ? "bg-white w-8 h-3 shadow-lg" : "bg-white/50 w-3 h-3 hover:bg-white/75"
              } rounded-full`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
              Why Choose Helix BioWorks
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Experience the difference that quality and integrity make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Beaker,
                title: "Laboratory Verified",
                description: "Every batch undergoes rigorous third-party testing to ensure maximum purity and consistency. Our compounds meet the highest research standards."
              },
              {
                icon: Lock,
                title: "Secure & Confidential",
                description: "Your privacy and security are paramount. We employ enterprise-grade encryption and maintain strict confidentiality protocols for all transactions."
              },
              {
                icon: Zap,
                title: "Expedited Processing",
                description: "Orders are processed and shipped within 24-48 hours. We work with trusted logistics partners to ensure your compounds arrive safely and promptly."
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="group text-center p-10 rounded-2xl border border-border/50 bg-gradient-to-br from-white to-muted/20 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-8">
                    <div className="p-6 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground tracking-tight">{feature.title}</h3>
                  <p className="text-foreground/75 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-28 bg-gradient-to-b from-muted/20 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-20">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-foreground/70">
                Discover our most popular research compounds
              </p>
            </div>
            <Button
              onClick={() => setLocation("/products")}
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white rounded-lg transition-all duration-300 hover:scale-105 hidden md:flex items-center gap-2"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-white group"
              >
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 text-xs font-bold rounded-lg shadow-lg">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-3 line-clamp-2 text-sm leading-tight">{product.name}</h3>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice !== product.price && (
                      <span className="text-xs text-muted-foreground line-through font-medium">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button
                    className="w-full bg-primary text-white hover:bg-primary/90 font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 py-2.5"
                    onClick={() => handleAddToCart(product)}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Button
              onClick={() => setLocation("/products")}
              className="w-full bg-primary text-white hover:bg-primary/90 font-bold rounded-lg py-3"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">About Helix BioWorks</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Helix BioWorks represents the pinnacle of research compound excellence. We are dedicated to providing scientists and researchers with the highest quality peptides and compounds available in the market.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our commitment to purity, consistency, and scientific integrity has made us the trusted partner for researchers worldwide. Every product undergoes meticulous quality control to ensure optimal results in your research endeavors.
              </p>
              <Button
                onClick={() => setLocation("/about")}
                className="bg-primary text-white hover:bg-primary/90 font-bold rounded-lg px-10 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
              >
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://via.placeholder.com/250x300?text=Lab+Facility"
                alt="Lab Facility"
                className="w-full h-72 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform"
              />
              <img
                src="https://via.placeholder.com/250x300?text=Quality+Testing"
                alt="Quality Testing"
                className="w-full h-72 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h4 className="font-bold mb-8 text-lg tracking-tight">NAVIGATION</h4>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => setLocation("/")} className="hover:text-gray-200 transition-colors duration-200">Home</button></li>
                <li><button onClick={() => setLocation("/products")} className="hover:text-gray-200 transition-colors duration-200">Products</button></li>
                <li><button onClick={() => setLocation("/about")} className="hover:text-gray-200 transition-colors duration-200">About</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-lg tracking-tight">SUPPORT</h4>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => setLocation("/contact")} className="hover:text-gray-200 transition-colors duration-200">Contact</button></li>
                <li><button onClick={() => setLocation("/support")} className="hover:text-gray-200 transition-colors duration-200">Help Center</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-lg tracking-tight">LEGAL</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-12 text-center text-sm text-white/80">
            <p>&copy; 2026 Helix BioWorks. All rights reserved. For research use only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
