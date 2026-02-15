import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, User, Heart, ShoppingCart, Filter, Sparkles } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLocation } from "wouter";
import { useState } from "react";

export default function Products() {
  const { addItem, getTotalItems } = useCart();
  const [, setLocation] = useLocation();
  const cartCount = getTotalItems();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const allProducts = [
    {
      id: 1,
      name: "Bacteriostatic Water Solution",
      price: "$29.95 AUD",
      originalPrice: "$34.95 AUD",
      category: "solutions",
      image: "https://via.placeholder.com/250x300?text=Bacteriostatic+Water",
      description: "Sterile bacteriostatic water for peptide reconstitution"
    },
    {
      id: 2,
      name: "BPC-157 Peptide Compound",
      price: "$84.95 AUD",
      originalPrice: "$94.95 AUD",
      category: "peptides",
      image: "https://via.placeholder.com/250x300?text=BPC-157",
      description: "Premium BPC-157 for advanced research applications",
      featured: true,
    },
    {
      id: 3,
      name: "TB-500 Research Grade",
      price: "$109.95 AUD",
      originalPrice: "$119.95 AUD",
      category: "peptides",
      image: "https://via.placeholder.com/250x300?text=TB-500",
      description: "High-purity TB-500 compound"
    },
    {
      id: 4,
      name: "MK677 Advanced Formula",
      price: "$129.95 AUD",
      originalPrice: "$139.95 AUD",
      category: "sarms",
      image: "https://via.placeholder.com/250x300?text=MK677",
      description: "Research-grade MK677 formulation"
    },
    {
      id: 5,
      name: "Ipamorelin Peptide",
      price: "$94.95 AUD",
      category: "peptides",
      image: "https://via.placeholder.com/250x300?text=Ipamorelin",
      description: "Pure Ipamorelin for research"
    },
    {
      id: 6,
      name: "Ostarine MK-2866",
      price: "$119.95 AUD",
      category: "sarms",
      image: "https://via.placeholder.com/250x300?text=Ostarine",
      description: "Laboratory-tested Ostarine compound"
    },
    {
      id: 7,
      name: "Sermorelin Acetate",
      price: "$99.95 AUD",
      category: "peptides",
      image: "https://via.placeholder.com/250x300?text=Sermorelin",
      description: "Premium Sermorelin for research"
    },
    {
      id: 8,
      name: "Ligandrol LGD-4033",
      price: "$139.95 AUD",
      category: "sarms",
      image: "https://via.placeholder.com/250x300?text=Ligandrol",
      description: "High-purity Ligandrol compound"
    },
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: typeof allProducts[0]) => {
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
              <button onClick={() => setLocation("/products")} className="text-primary transition-colors duration-200">
                PRODUCTS
              </button>
              <button onClick={() => setLocation("/about")} className="text-foreground hover:text-primary transition-colors duration-200">
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
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent outline-none text-sm w-40 placeholder-muted-foreground"
                />
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 relative">
                <Heart className="w-5 h-5" />
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm font-semibold tracking-widest">PREMIUM RESEARCH COMPOUNDS</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">Our Product Catalog</h1>
            <p className="text-xl font-light max-w-2xl leading-relaxed">
              Explore our comprehensive range of laboratory-verified research compounds, each tested to the highest standards of purity and consistency
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-border sticky top-20 z-40 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-primary font-semibold" />
              <span className="font-semibold text-foreground text-sm">FILTER BY CATEGORY</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { id: "all", label: "All Products" },
                { id: "peptides", label: "Peptides" },
                { id: "sarms", label: "SARMs" },
                { id: "solutions", label: "Solutions" }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-muted text-foreground border-2 border-transparent hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-white to-muted/10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-center text-muted-foreground font-medium">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white group"
              >
                <div className="relative h-72 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 text-xs font-bold rounded-lg shadow-lg backdrop-blur-sm">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2 line-clamp-2 text-sm leading-tight">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-6 line-clamp-2 leading-relaxed">{product.description}</p>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && product.originalPrice !== product.price && (
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-32">
              <div className="mb-6">
                <Search className="w-16 h-16 text-muted-foreground/30 mx-auto" />
              </div>
              <p className="text-2xl font-bold text-foreground mb-4">No products found</p>
              <p className="text-lg text-muted-foreground mb-8">Try adjusting your filters or search terms</p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                className="bg-primary text-white hover:bg-primary/90 font-bold px-8 py-3 rounded-lg"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Laboratory Verified",
                description: "Every batch undergoes rigorous third-party testing to ensure maximum purity and consistency"
              },
              {
                title: "Secure Checkout",
                description: "Enterprise-grade encryption protects your information with complete confidentiality"
              },
              {
                title: "Fast Shipping",
                description: "Orders processed within 24 hours with expedited delivery to researchers worldwide"
              }
            ].map((info, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">{info.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{info.description}</p>
              </div>
            ))}
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
