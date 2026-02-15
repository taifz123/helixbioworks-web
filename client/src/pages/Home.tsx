import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Star, Award, Headphones, Shield, Search, User, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

/**
 * Helix BioWorks - DXB Supps Style Design
 * Bright green accent (#00FF00), black and white contrast
 * Dark hero section with molecular visualization
 * Professional product grid with green dashed borders
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
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="text-primary">HELIX BIOWORKS</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
              <a href="#" className="text-foreground hover:text-primary transition">
                SARMS AND PEPTIDES | BEST PEPTIDES ONLINE
              </a>
              <a href="#" className="text-foreground hover:text-primary transition">
                PEPTIDES FOR SALE | HIGH PURITY
              </a>
              <a href="#" className="text-foreground hover:text-primary transition">
                ABOUT US
              </a>
              <a href="#" className="text-foreground hover:text-primary transition">
                FAQS
              </a>
              <a href="#" className="text-foreground hover:text-primary transition">
                AFFILIATE PROGRAM
              </a>
              <a href="#" className="text-foreground hover:text-primary transition">
                CONTACT
              </a>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center bg-muted rounded px-3 py-2 gap-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-transparent outline-none text-sm w-40 placeholder-muted-foreground"
                />
              </div>
              <button className="p-2 hover:bg-muted rounded transition">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-muted rounded transition relative">
                <Heart className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-secondary text-xs rounded-full flex items-center justify-center font-bold">
                  5
                </span>
              </button>
              <button
                onClick={() => setLocation("/cart")}
                className="p-2 hover:bg-muted rounded transition relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-secondary text-xs rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative bg-secondary h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Molecular visualization background */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="150" cy="100" r="40" fill="#999" />
              <circle cx="250" cy="150" r="40" fill="#999" />
              <circle cx="200" cy="250" r="40" fill="#999" />
              <circle cx="100" cy="300" r="40" fill="#999" />
              <line x1="150" y1="100" x2="250" y2="150" stroke="#999" strokeWidth="3" />
              <line x1="250" y1="150" x2="200" y2="250" stroke="#999" strokeWidth="3" />
              <line x1="200" y1="250" x2="100" y2="300" stroke="#999" strokeWidth="3" />
            </svg>
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-8 z-20 p-3 hover:bg-white/20 rounded-full transition"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Center Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-2xl mb-8">{slides[currentSlide].subtitle}</p>
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-gray-100 font-bold px-8"
              onClick={() => setLocation("/cart")}
            >
              SHOP NOW
            </Button>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-8 z-20 p-3 hover:bg-white/20 rounded-full transition"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === currentSlide ? "bg-primary" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">PEPTIDES | SARMS</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Certified Lab Testing */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Award className="w-16 h-16 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">CERTIFIED LAB TESTING</h3>
              <p className="text-muted-foreground">
                We provide our customers with products that have been tested by reputable laboratories.
              </p>
            </div>

            {/* International Support */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Headphones className="w-16 h-16 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">INTERNATIONAL SUPPORT</h3>
              <p className="text-muted-foreground">
                When you purchase any peptides through Helix Supps, you are guaranteed full support and advice before, during and after.
              </p>
            </div>

            {/* Premium Quality */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Shield className="w-16 h-16 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">PREMIUM QUALITY</h3>
              <p className="text-muted-foreground">
                We ensure that the ingredients we source are premium quality. Our products each have minimum of 99% purity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">ELITE PEPTIDES</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-2 border-dashed border-primary overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-56 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.sale && (
                    <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 text-sm font-bold">
                      Sale!
                    </div>
                  )}
                </div>

                <div className="p-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
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
                    <span className="bg-primary text-secondary text-xs px-2 py-1 rounded font-bold">
                      {product.reviews} reviews
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-bold text-foreground mb-3 line-clamp-2">{product.name}</h3>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    {product.originalPrice !== product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    className="w-full bg-secondary text-white hover:bg-black font-bold"
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Peptide Dose Calculator</h2>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-3 text-foreground">Syringe size</label>
                  <div className="flex gap-2">
                    {["0.3 mL", "0.5 mL", "1 mL"].map((size) => (
                      <button
                        key={size}
                        className="px-4 py-2 border border-border rounded hover:bg-muted transition text-sm font-semibold"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">Peptide per vial (mg)</label>
                  <input
                    type="number"
                    value={peptideMg}
                    onChange={(e) => setPeptideMg(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">Diluent volume (mL)</label>
                  <input
                    type="number"
                    value={diluentMl}
                    onChange={(e) => setDiluentMl(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-foreground">Desired dose (mcg)</label>
                  <div className="flex gap-2 flex-wrap">
                    {[50, 100, 250, 500].map((dose) => (
                      <button
                        key={dose}
                        onClick={() => setSelectedDose(dose)}
                        className={`px-4 py-2 border rounded font-semibold transition text-sm ${
                          selectedDose === dose
                            ? "bg-primary text-secondary border-primary"
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
              <div className="space-y-4 bg-muted/50 p-6 rounded">
                <h3 className="font-bold text-lg text-foreground mb-6">Results</h3>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Concentration</p>
                  <p className="text-2xl font-bold text-foreground">{concentration}</p>
                  <p className="text-xs text-muted-foreground">mg per mL</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Draw Volume</p>
                  <p className="text-2xl font-bold text-foreground">{drawVolume}</p>
                  <p className="text-xs text-muted-foreground">mL to pull</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Syringe Units (U-100)</p>
                  <p className="text-2xl font-bold text-foreground">{syringeUnits}</p>
                  <p className="text-xs text-muted-foreground">1 mL = 100 units</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Disclaimer: Educational tool only. Not medical advice. Always confirm calculations with a licensed clinician.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">REVIEWS</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6 border border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4">{review.text}</p>
                <div className="flex justify-between items-center text-sm">
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-muted-foreground">{review.date}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white">
              Show more reviews (2588)
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">ABOUT HELIX</h2>
              <p className="text-foreground/80">
                Helix Supps has the backing of leading research users around the world due to our dedication to offering the highest purity ingredients in every product, with our commitment and care globally.
              </p>
              <p className="text-foreground/80">
                We are here to help researchers attain their optimum potential in all endeavours. At Helix Supps, we sell high-quality, tried and laboratory tested research use-only products.
              </p>
              <Button className="bg-secondary text-white hover:bg-black font-bold">
                READ MORE
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://via.placeholder.com/200x250?text=Product+1"
                alt="Product"
                className="w-full h-64 object-cover rounded"
              />
              <img
                src="https://via.placeholder.com/200x250?text=Product+2"
                alt="Product"
                className="w-full h-64 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">HELIX SUPPS</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition">Home</a></li>
                <li><a href="#" className="hover:text-primary transition">Shop</a></li>
                <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition">FAQs</a></li>
                <li><a href="#" className="hover:text-primary transition">Shipping + Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">AFFILIATE</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition">Join Our Affiliate Program</a></li>
                <li><a href="#" className="hover:text-primary transition">Affiliate Login</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">LEGAL</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm">
            <p>&copy; 2026 Helix BioWorks. All rights reserved. For research use only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
