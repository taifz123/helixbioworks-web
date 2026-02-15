import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Beaker, Lock, Zap, Search, User, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

/**
 * Helix BioWorks - Premium White Aesthetic
 * Clean, professional design with navy blue accents
 * Unique copy and premium branding
 */

export default function Home() {
  const { addItem, getTotalItems } = useCart();
  const [, setLocation] = useLocation();
  const cartCount = getTotalItems();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDose, setSelectedDose] = useState(100);
  const [peptideMg, setPeptideMg] = useState(5);
  const [diluentMl, setDiluentMl] = useState(2);

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

  const reviews = [
    {
      name: "Dr. Michael Chen",
      text: "Exceptional purity and consistency. The quality of these compounds exceeds laboratory standards. Highly recommended for serious research applications.",
    },
    {
      name: "Professor Sarah Williams",
      text: "Outstanding service and product quality. The peptides arrived in perfect condition with comprehensive documentation. This is the standard we expect in research.",
    },
    {
      name: "Dr. James Patterson",
      text: "Remarkable attention to detail and quality assurance. Every batch meets our rigorous specifications. A trusted partner for our research initiatives.",
    },
    {
      name: "Dr. Elena Rodriguez",
      text: "Professional excellence from start to finish. The compounds are precisely formulated and the support team is incredibly responsive and knowledgeable.",
    },
  ];

  const concentration = (peptideMg / diluentMl).toFixed(3);
  const drawVolume = ((selectedDose / 1000) / parseFloat(concentration)).toFixed(3);
  const syringeUnits = (parseFloat(drawVolume) * 100).toFixed(1);

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
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo Placeholder */}
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

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-12 text-sm font-semibold">
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">
                PRODUCTS
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">
                ABOUT
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">
                SUPPORT
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">
                CONTACT
              </a>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center bg-muted rounded-lg px-4 py-2 gap-2 border border-border">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm w-40 placeholder-muted-foreground"
                />
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 relative">
                <Heart className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              <button
                onClick={() => setLocation("/cart")}
                className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative bg-primary h-96 md:h-[550px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Molecular visualization background */}
          <div className="absolute inset-0 opacity-10">
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

          {/* Left Arrow */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-8 z-20 p-3 hover:bg-white/20 rounded-full transition-all duration-200 group"
          >
            <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Center Content */}
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">{slides[currentSlide].title}</h1>
            <p className="text-xl md:text-2xl mb-10 font-light tracking-wide">{slides[currentSlide].subtitle}</p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => setLocation("/cart")}
            >
              EXPLORE COLLECTION
            </Button>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-8 z-20 p-3 hover:bg-white/20 rounded-full transition-all duration-200 group"
          >
            <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 ${
                idx === currentSlide ? "bg-white w-8 h-3" : "bg-white/50 w-3 h-3"
              } rounded-full`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight text-foreground">
            Why Choose Helix BioWorks
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Laboratory Certified */}
            <div className="text-center group">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-muted rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                  <Beaker className="w-12 h-12 text-primary group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground tracking-tight">Laboratory Verified</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every batch undergoes rigorous third-party testing to ensure maximum purity and consistency. Our compounds meet the highest research standards.
              </p>
            </div>

            {/* Secure & Confidential */}
            <div className="text-center group">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-muted rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                  <Lock className="w-12 h-12 text-primary group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground tracking-tight">Secure & Confidential</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy and security are paramount. We employ enterprise-grade encryption and maintain strict confidentiality protocols for all transactions.
              </p>
            </div>

            {/* Fast Delivery */}
            <div className="text-center group">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-muted rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                  <Zap className="w-12 h-12 text-primary group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground tracking-tight">Expedited Processing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Orders are processed and shipped within 24-48 hours. We work with trusted logistics partners to ensure your compounds arrive safely and promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-foreground">
            Research Compounds
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="relative h-56 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 text-xs font-bold rounded-lg shadow-md">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {/* Product Name */}
                  <h3 className="font-bold text-foreground mb-3 line-clamp-2 text-sm">{product.name}</h3>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    {product.originalPrice !== product.price && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    className="w-full bg-primary text-white hover:bg-primary/90 font-bold rounded-lg transition-all duration-200 hover:shadow-lg"
                    onClick={() => handleAddToCart(product)}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Peptide Dose Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-foreground">
            Dosage Calculator
          </h2>

          <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl border border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold mb-4 text-foreground tracking-tight">Syringe Size</label>
                  <div className="flex gap-3">
                    {["0.3 mL", "0.5 mL", "1 mL"].map((size) => (
                      <button
                        key={size}
                        className="px-5 py-2 border border-border rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 text-sm font-semibold"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-foreground tracking-tight">Compound per Vial (mg)</label>
                  <input
                    type="number"
                    value={peptideMg}
                    onChange={(e) => setPeptideMg(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-foreground tracking-tight">Diluent Volume (mL)</label>
                  <input
                    type="number"
                    value={diluentMl}
                    onChange={(e) => setDiluentMl(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-4 text-foreground tracking-tight">Target Dose (mcg)</label>
                  <div className="flex gap-3 flex-wrap">
                    {[50, 100, 250, 500].map((dose) => (
                      <button
                        key={dose}
                        onClick={() => setSelectedDose(dose)}
                        className={`px-4 py-2 border rounded-lg font-semibold transition-all duration-200 text-sm ${
                          selectedDose === dose
                            ? "bg-primary text-white border-primary shadow-md"
                            : "border-border hover:bg-muted"
                        }`}
                      >
                        {dose} mcg
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6 bg-muted/50 p-8 rounded-xl border border-border">
                <h3 className="font-bold text-lg text-foreground mb-8 tracking-tight">Calculation Results</h3>

                <div className="pb-6 border-b border-border">
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase">Concentration</p>
                  <p className="text-3xl font-bold text-foreground">{concentration}</p>
                  <p className="text-xs text-muted-foreground mt-1">mg per mL</p>
                </div>

                <div className="pb-6 border-b border-border">
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase">Draw Volume</p>
                  <p className="text-3xl font-bold text-foreground">{drawVolume}</p>
                  <p className="text-xs text-muted-foreground mt-1">mL to extract</p>
                </div>

                <div className="pb-6 border-b border-border">
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase">Syringe Units (U-100)</p>
                  <p className="text-3xl font-bold text-foreground">{syringeUnits}</p>
                  <p className="text-xs text-muted-foreground mt-1">1 mL = 100 units</p>
                </div>

                <div className="pt-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold">Disclaimer:</span> This tool is for educational purposes only. Always verify calculations independently and consult with qualified professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-foreground">
            Researcher Testimonials
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-8 border border-border bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-primary rounded-full" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{review.text}</p>
                <p className="font-bold text-foreground">{review.name}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white rounded-lg transition-all duration-200">
              View All Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">About Helix BioWorks</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Helix BioWorks represents the pinnacle of research compound excellence. We are dedicated to providing scientists and researchers with the highest quality peptides and compounds available in the market.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Our commitment to purity, consistency, and scientific integrity has made us the trusted partner for researchers worldwide. Every product undergoes meticulous quality control to ensure optimal results in your research endeavors.
              </p>
              <Button className="bg-primary text-white hover:bg-primary/90 font-bold rounded-lg px-8 py-6 transition-all duration-200 hover:shadow-lg">
                LEARN MORE
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://via.placeholder.com/250x300?text=Lab+Facility"
                alt="Lab Facility"
                className="w-full h-72 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="https://via.placeholder.com/250x300?text=Quality+Testing"
                alt="Quality Testing"
                className="w-full h-72 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-6 text-lg tracking-tight">HELIX BIOWORKS</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Home</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Products</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg tracking-tight">RESOURCES</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Support Center</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Documentation</a></li>
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
