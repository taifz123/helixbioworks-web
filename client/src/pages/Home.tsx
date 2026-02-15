import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Star, Award, Headphones, Shield, Search, User, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

/**
 * Helix BioWorks - Premium DXB Supps Style Design
 * Bright green accent (#00FF00), black and white contrast
 * Dark hero section with molecular visualization
 * Professional product grid with enhanced styling
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
    { title: "HELIX BIOWORKS", subtitle: "Premium Peptides", image: "hero-1" },
    { title: "HELIX BIOWORKS", subtitle: "Premium Peptides & SARMS", image: "hero-2" },
    { title: "HELIX BIOWORKS", subtitle: "Premium Peptides", image: "hero-3" },
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
      name: "Bacteriostatic Water",
      price: "$29.95",
      originalPrice: "$34.95",
      image: "https://via.placeholder.com/200x250?text=Bacteriostatic+Water",
      rating: 4.7,
      reviews: 37,
      sale: false,
    },
    {
      id: 2,
      name: "Premium BPC-157 5mg",
      price: "$84.95",
      originalPrice: "$94.95",
      image: "https://via.placeholder.com/200x250?text=BPC-157",
      rating: 4.8,
      reviews: 69,
      sale: true,
    },
    {
      id: 3,
      name: "TB-500",
      price: "$109.95",
      originalPrice: "$119.95",
      image: "https://via.placeholder.com/200x250?text=TB-500",
      rating: 4.6,
      reviews: 36,
      sale: false,
    },
    {
      id: 4,
      name: "MK677 | Helix Supps",
      price: "$129.95",
      originalPrice: "$139.95",
      image: "https://via.placeholder.com/200x250?text=MK677",
      rating: 4.7,
      reviews: 53,
      sale: false,
    },
  ];

  const reviews = [
    {
      name: "Thomas M.",
      rating: 5,
      text: "Helix Supps MOD GRF are high-quality and effective. I've experienced faster recovery and muscle growth.",
      date: "1 year ago",
    },
    {
      name: "Jacob Harris",
      rating: 5,
      text: "The quality of Helix Supps GHK-CU Peptide is incredible. I have seeing faster recovery and better muscle growth.",
      date: "1 year ago",
    },
    {
      name: "Thomas Anderson",
      rating: 5,
      text: "The purity of Helix Supps peptides is second to none. I have seen amazing gains in a short time.",
      date: "1 year ago",
    },
    {
      name: "Benjamin G.",
      rating: 5,
      text: "Helix Supps peptides are a game-changer. The quality is top-notch, and the results are clear.",
      date: "1 year ago",
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
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <span className="text-primary">HELIX</span>
              <span className="text-foreground">BIOWORKS</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-12 text-sm font-semibold">
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">
                SHOP
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">
                ABOUT US
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">
                FAQS
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
                  placeholder="Search products..."
                  className="bg-transparent outline-none text-sm w-40 placeholder-muted-foreground"
                />
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 relative">
                <Heart className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-secondary text-xs rounded-full flex items-center justify-center font-bold text-xs">
                  5
                </span>
              </button>
              <button
                onClick={() => setLocation("/cart")}
                className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-secondary text-xs rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative bg-secondary h-96 md:h-[550px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Molecular visualization background */}
          <div className="absolute inset-0 opacity-15">
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
              className="bg-white text-secondary hover:bg-gray-100 font-bold px-10 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => setLocation("/cart")}
            >
              SHOP NOW
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
                idx === currentSlide ? "bg-primary w-8 h-3" : "bg-white/50 w-3 h-3"
              } rounded-full`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight text-foreground">
            PEPTIDES | SARMS
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Certified Lab Testing */}
            <div className="text-center group">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-muted rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                  <Award className="w-12 h-12 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground tracking-tight">CERTIFIED LAB TESTING</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide our customers with products that have been tested by reputable laboratories.
              </p>
            </div>

            {/* International Support */}
            <div className="text-center group">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-muted rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                  <Headphones className="w-12 h-12 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground tracking-tight">INTERNATIONAL SUPPORT</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you purchase any peptides through Helix Supps, you are guaranteed full support and advice before, during and after.
              </p>
            </div>

            {/* Premium Quality */}
            <div className="text-center group">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-muted rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                  <Shield className="w-12 h-12 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground tracking-tight">PREMIUM QUALITY</h3>
              <p className="text-muted-foreground leading-relaxed">
                We ensure that the ingredients we source are premium quality. Our products each have minimum of 99% purity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-foreground">
            ELITE PEPTIDES
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-2 border-dashed border-primary overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="relative h-56 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.sale && (
                    <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-2 text-sm font-bold rounded-lg shadow-md">
                      Sale!
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="bg-primary text-secondary text-xs px-3 py-1 rounded-full font-bold">
                      {product.reviews}
                    </span>
                  </div>

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
                    className="w-full bg-secondary text-white hover:bg-black font-bold rounded-lg transition-all duration-200 hover:shadow-lg"
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
            Peptide Dose Calculator
          </h2>

          <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl border border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold mb-4 text-foreground tracking-tight">Syringe size</label>
                  <div className="flex gap-3">
                    {["0.3 mL", "0.5 mL", "1 mL"].map((size) => (
                      <button
                        key={size}
                        className="px-5 py-2 border border-border rounded-lg hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-200 text-sm font-semibold"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-foreground tracking-tight">Peptide per vial (mg)</label>
                  <input
                    type="number"
                    value={peptideMg}
                    onChange={(e) => setPeptideMg(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-foreground tracking-tight">Diluent volume (mL)</label>
                  <input
                    type="number"
                    value={diluentMl}
                    onChange={(e) => setDiluentMl(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-4 text-foreground tracking-tight">Desired dose (mcg)</label>
                  <div className="flex gap-3 flex-wrap">
                    {[50, 100, 250, 500].map((dose) => (
                      <button
                        key={dose}
                        onClick={() => setSelectedDose(dose)}
                        className={`px-4 py-2 border rounded-lg font-semibold transition-all duration-200 text-sm ${
                          selectedDose === dose
                            ? "bg-primary text-secondary border-primary shadow-md"
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
                <h3 className="font-bold text-lg text-foreground mb-8 tracking-tight">Results</h3>

                <div className="pb-6 border-b border-border">
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase">Concentration</p>
                  <p className="text-3xl font-bold text-foreground">{concentration}</p>
                  <p className="text-xs text-muted-foreground mt-1">mg per mL</p>
                </div>

                <div className="pb-6 border-b border-border">
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase">Draw Volume</p>
                  <p className="text-3xl font-bold text-foreground">{drawVolume}</p>
                  <p className="text-xs text-muted-foreground mt-1">mL to pull</p>
                </div>

                <div className="pb-6 border-b border-border">
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase">Syringe Units (U-100)</p>
                  <p className="text-3xl font-bold text-foreground">{syringeUnits}</p>
                  <p className="text-xs text-muted-foreground mt-1">1 mL = 100 units</p>
                </div>

                <div className="pt-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Disclaimer: Educational tool only. Not medical advice. Always confirm calculations with a licensed clinician.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-foreground">
            REVIEWS
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-8 border border-border bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{review.text}</p>
                <div className="flex justify-between items-center text-sm">
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-muted-foreground">{review.date}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white rounded-lg transition-all duration-200">
              Show more reviews (2588)
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">ABOUT HELIX</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Helix Supps has the backing of leading research users around the world due to our dedication to offering the highest purity ingredients in every product, with our commitment and care globally.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                We are here to help researchers attain their optimum potential in all endeavours. At Helix Supps, we sell high-quality, tried and laboratory tested research use-only products.
              </p>
              <Button className="bg-secondary text-white hover:bg-black font-bold rounded-lg px-8 py-6 transition-all duration-200 hover:shadow-lg">
                READ MORE
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://via.placeholder.com/250x300?text=Product+1"
                alt="Product"
                className="w-full h-72 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="https://via.placeholder.com/250x300?text=Product+2"
                alt="Product"
                className="w-full h-72 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-6 text-lg tracking-tight">HELIX SUPPS</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Shop</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg tracking-tight">SUPPORT</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">FAQs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Shipping + Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg tracking-tight">LEGAL</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a></li>
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
