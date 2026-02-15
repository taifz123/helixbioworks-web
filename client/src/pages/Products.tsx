import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, User, Heart, ShoppingCart, Filter } from "lucide-react";
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
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Our Product Catalog</h1>
          <p className="text-xl font-light max-w-2xl">
            Explore our comprehensive range of laboratory-verified research compounds
          </p>
        </div>
      </section>

      {/* Filters & Search Section */}
      <section className="bg-muted/20 py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-foreground" />
              <span className="font-semibold text-foreground">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === "all"
                    ? "bg-primary text-white shadow-md"
                    : "bg-white border-2 border-border text-foreground hover:border-primary"
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setSelectedCategory("peptides")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === "peptides"
                    ? "bg-primary text-white shadow-md"
                    : "bg-white border-2 border-border text-foreground hover:border-primary"
                }`}
              >
                Peptides
              </button>
              <button
                onClick={() => setSelectedCategory("sarms")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === "sarms"
                    ? "bg-primary text-white shadow-md"
                    : "bg-white border-2 border-border text-foreground hover:border-primary"
                }`}
              >
                SARMs
              </button>
              <button
                onClick={() => setSelectedCategory("solutions")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === "solutions"
                    ? "bg-primary text-white shadow-md"
                    : "bg-white border-2 border-border text-foreground hover:border-primary"
                }`}
              >
                Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-12">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group"
              >
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 text-xs font-bold rounded-lg shadow-md">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2 line-clamp-2 text-sm">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    {product.originalPrice && product.originalPrice !== product.price && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

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

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-6">No products found matching your criteria</p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
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
