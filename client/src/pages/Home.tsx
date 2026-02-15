import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Shield, Beaker, Award, ShoppingCart, Search, User, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLocation } from "wouter";

/**
 * Helix BioWorks - Modern Biotech Minimalism
 * Design Philosophy: Scientific clarity, sophisticated minimalism, molecular storytelling
 * Color Palette: Navy (#1a3a52), Teal (#00b4d8), Sage Green (#7cb342)
 * Typography: Playfair Display (headings) + Inter (body)
 */

export default function Home() {
  const { addItem, getTotalItems } = useCart();
  const [, setLocation] = useLocation();
  const cartCount = getTotalItems();

  const products = [
    {
      id: 1,
      name: "BPC-157 Peptide",
      category: "Premium Peptides",
      price: "$89.99",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/FYaptkGopCHT7xYmeEAweY/sandbox/J3NpzBUdCB789cntZ8RvcG-img-2_1771153713000_na1fn_cGVwdGlkZS1wcm9kdWN0LWhlcm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRllhcHRrR29wQ0hUN3hZbWVFQXdlWS9zYW5kYm94L0ozTnB6QlVkQ0I3ODljbnRaOFJ2Y0ctaW1nLTJfMTc3MTE1MzcxMzAwMF9uYTFmbl9jR1Z3ZEdsa1pTMXdjbTlrZFdOMExXaGxjbTgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ray6iN576oVbPoAI48-rMmZ~ydrJvd3OTeFVlX5GR0gaNLIqXPJkth6iS2Sra9yEUUs0Dy43WEoOPZHu3F4PKGNbXwLZD2slfGZNLF9MWCv39rMhOKpGT8vLdmQhh1Rh7PIaOdM0dODe0uaSOJ1Lx12ktpAFkSfj7baRkQGmfCeltHkZ7l8VBuidN3lpUSBVbnfhhg65f5sJKpobGHT-jlqbwhtkoNn5dM5fjJCJrxty4XterkOPdUZPerh100crVBPUdf6YoME3IEgbMZ2HBWOgCzBD3oY1i8QCUHdJfsRnrt5OWmU5kRx3WfehR1NU6IlPmd9ZeEVwhZSOhykn2w__",
      purity: "99.5%",
      certified: true,
    },
    {
      id: 2,
      name: "TB-500 Peptide",
      category: "Premium Peptides",
      price: "$109.99",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/FYaptkGopCHT7xYmeEAweY/sandbox/J3NpzBUdCB789cntZ8RvcG-img-2_1771153713000_na1fn_cGVwdGlkZS1wcm9kdWN0LWhlcm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRllhcHRrR29wQ0hUN3hZbWVFQXdlWS9zYW5kYm94L0ozTnB6QlVkQ0I3ODljbnRaOFJ2Y0ctaW1nLTJfMTc3MTE1MzcxMzAwMF9uYTFmbl9jR1Z3ZEdsa1pTMXdjbTlrZFdOMExXaGxjbTgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ray6iN576oVbPoAI48-rMmZ~ydrJvd3OTeFVlX5GR0gaNLIqXPJkth6iS2Sra9yEUUs0Dy43WEoOPZHu3F4PKGNbXwLZD2slfGZNLF9MWCv39rMhOKpGT8vLdmQhh1Rh7PIaOdM0dODe0uaSOJ1Lx12ktpAFkSfj7baRkQGmfCeltHkZ7l8VBuidN3lpUSBVbnfhhg65f5sJKpobGHT-jlqbwhtkoNn5dM5fjJCJrxty4XterkOPdUZPerh100crVBPUdf6YoME3IEgbMZ2HBWOgCzBD3oY1i8QCUHdJfsRnrt5OWmU5kRx3WfehR1NU6IlPmd9ZeEVwhZSOhykn2w__",
      purity: "99.8%",
      certified: true,
    },
    {
      id: 3,
      name: "MK-677 SARM",
      category: "SARMs",
      price: "$129.99",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/FYaptkGopCHT7xYmeEAweY/sandbox/J3NpzBUdCB789cntZ8RvcG-img-2_1771153713000_na1fn_cGVwdGlkZS1wcm9kdWN0LWhlcm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRllhcHRrR29wQ0hUN3hZbWVFQXdlWS9zYW5kYm94L0ozTnB6QlVkQ0I3ODljbnRaOFJ2Y0ctaW1nLTJfMTc3MTE1MzcxMzAwMF9uYTFmbl9jR1Z3ZEdsa1pTMXdjbTlrZFdOMExXaGxjbTgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ray6iN576oVbPoAI48-rMmZ~ydrJvd3OTeFVlX5GR0gaNLIqXPJkth6iS2Sra9yEUUs0Dy43WEoOPZHu3F4PKGNbXwLZD2slfGZNLF9MWCv39rMhOKpGT8vLdmQhh1Rh7PIaOdM0dODe0uaSOJ1Lx12ktpAFkSfj7baRkQGmfCeltHkZ7l8VBuidN3lpUSBVbnfhhg65f5sJKpobGHT-jlqbwhtkoNn5dM5fjJCJrxty4XterkOPdUZPerh100crVBPUdf6YoME3IEgbMZ2HBWOgCzBD3oY1i8QCUHdJfsRnrt5OWmU5kRx3WfehR1NU6IlPmd9ZeEVwhZSOhykn2w__",
      purity: "99.2%",
      certified: true,
    },
    {
      id: 4,
      name: "GHK-CU Peptide",
      category: "Premium Peptides",
      price: "$119.99",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/FYaptkGopCHT7xYmeEAweY/sandbox/J3NpzBUdCB789cntZ8RvcG-img-2_1771153713000_na1fn_cGVwdGlkZS1wcm9kdWN0LWhlcm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRllhcHRrR29wQ0hUN3hZbWVFQXdlWS9zYW5kYm94L0ozTnB6QlVkQ0I3ODljbnRaOFJ2Y0ctaW1nLTJfMTc3MTE1MzcxMzAwMF9uYTFmbl9jR1Z3ZEdsa1pTMXdjbTlrZFdOMExXaGxjbTgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ray6iN576oVbPoAI48-rMmZ~ydrJvd3OTeFVlX5GR0gaNLIqXPJkth6iS2Sra9yEUUs0Dy43WEoOPZHu3F4PKGNbXwLZD2slfGZNLF9MWCv39rMhOKpGT8vLdmQhh1Rh7PIaOdM0dODe0uaSOJ1Lx12ktpAFkSfj7baRkQGmfCeltHkZ7l8VBuidN3lpUSBVbnfhhg65f5sJKpobGHT-jlqbwhtkoNn5dM5fjJCJrxty4XterkOPdUZPerh100crVBPUdf6YoME3IEgbMZ2HBWOgCzBD3oY1i8QCUHdJfsRnrt5OWmU5kRx3WfehR1NU6IlPmd9ZeEVwhZSOhykn2w__",
      purity: "99.6%",
      certified: true,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Lab Certified",
      description: "All products tested by reputable third-party laboratories for purity and quality assurance.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Minimum 99% purity guarantee on all peptides and SARMs with rigorous quality control.",
    },
    {
      icon: Beaker,
      title: "Research Grade",
      description: "Pharmaceutical-grade ingredients sourced from trusted suppliers worldwide.",
    },
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      purity: product.purity,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HB</span>
            </div>
            <span className="font-bold text-lg text-primary">Helix BioWorks</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition">
              Products
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition">
              About
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-muted rounded-full px-3 py-2 gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm w-32 placeholder-muted-foreground"
              />
            </div>
            <button className="p-2 hover:bg-muted rounded-full transition">
              <User className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => setLocation("/cart")}
              className="p-2 hover:bg-muted rounded-full transition relative"
            >
              <Heart className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => setLocation("/cart")}
              className="p-2 hover:bg-muted rounded-full transition relative"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/FYaptkGopCHT7xYmeEAweY/sandbox/J3NpzBUdCB789cntZ8RvcG-img-3_1771153708000_na1fn_bW9sZWN1bGFyLXBhdHRlcm4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRllhcHRrR29wQ0hUN3hZbWVFQXdlWS9zYW5kYm94L0ozTnB6QlVkQ0I3ODljbnRaOFJ2Y0ctaW1nLTNfMTc3MTE1MzcwODAwMF9uYTFmbl9iVzlzWldOMWJHRnlMWEJoZEhSbGNtNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=d948dSpKRHYWmf4W4qfo7bd3RmtPTpQ8-FXmN2-MW9iEOny0TMeVVuqPj9zaB5~x2abVSOTwLkYM4I5-vJY~PHixnnLC6ViYGGRJE5YHw28QDjJD15GCB-y5DkcfMA107jXQUhnB1Kmdf283jYQujMY7wJUT99i~ZmhfiGm67GyvLidsIv4WtH-JErajkoAGxgW-h9hNiTzHDpPj5nSZgVsk5VQh2t-sjnY-Vx7Cd71C6FeInJJQYnF18J~ic55pVG8WexxeBYD54miIjpiZa1n5bNVODI~m1d3K4uRw23wzR5qwPqqCs5uomQyi57krsC69DHypX~ekb57vF9HDSA__"
            alt="molecular pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  Premium Research Compounds
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Helix BioWorks
              </h1>
              <p className="text-lg text-white/80 max-w-md">
                Premium peptides and SARMs for research. Lab-certified, pharmaceutical-grade quality with 99%+ purity guarantee.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold"
                  onClick={() => setLocation("/cart")}
                >
                  Shop Now
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/FYaptkGopCHT7xYmeEAweY/sandbox/J3NpzBUdCB789cntZ8RvcG-img-1_1771153710000_na1fn_aGVsaXgtaGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRllhcHRrR29wQ0hUN3hZbWVFQXdlWS9zYW5kYm94L0ozTnB6QlVkQ0I3ODljbnRaOFJ2Y0ctaW1nLTFfMTc3MTE1MzcxMDAwMF9uYTFmbl9hR1ZzYVhndGFHVnlieTFpWncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KcFAGq5n~R3825SaDVHl5IMxmCcKosfy0za0b2GQqxYNJYJpkVhI-YE3G51EiHbjNUo5SrMo1aNUVVZg93U3ivWuTfMTtp8q3ACuUGN8G2~xE86Yk2IRGJ60nem7T3WU4Xs8ZwHxmdYINbpx2~socRuAz0VPqAa81~0DDxMaRGmhuCMPQyyoDds2cr3iX6e8Mww6ouKJnW4DJdhmOXKmuG6nOqlvBD4cb0fayqWOyJshn2DZR-x~fzPq3Xlz4W4qRF3p~W197hvDuDYNQGchm-F3hV~waKiTq4k9~QOlJNZ7Dr7SpfJTSNqgddTYyaRy7jByEy6iC14ZnAxity3AFw__"
                alt="DNA Helix"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="space-y-4 p-6 rounded-lg border border-border hover:border-accent/50 transition">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Premium Products
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our selection of lab-certified peptides and SARMs, each tested for purity and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.certified && (
                    <div className="absolute top-3 right-3">
                      <img
                        src="https://private-us-east-1.manuscdn.com/sessionFile/FYaptkGopCHT7xYmeEAweY/sandbox/J3NpzBUdCB789cntZ8RvcG-img-4_1771153705000_na1fn_bGFiLWNlcnRpZmllZC1iYWRnZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRllhcHRrR29wQ0hUN3hZbWVFQXdlWS9zYW5kYm94L0ozTnB6QlVkQ0I3ODljbnRaOFJ2Y0ctaW1nLTRfMTc3MTE1MzcwNTAwMF9uYTFmbl9iR0ZpTFdObGNuUnBabWxsWkMxaVlXUm5aUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qzAyvcGM~m9oRDbmd6xi5~srPz2MCYgI5WoT8N1rewDObZ9k0J8y4aHzpcl9zJgmjP7zVHdMW-Q6cpP9ov61qrlyT804DogTtSihv--mxEy2UQRhKtB6q~qXWV4Q9hoqllkCi~FTBj-wZiynNGtst1MFET7u8568Y73IfAnkoQwSNxC27gYuzj7L7PvdV~3xff5EadfOr6o1fzx5vVJ2mP7yjhjtl7uouEg8dpNUCa7nWGEUUSHbia8CTWS3vVxaYXfa8bZclf7QxRLaCXVTNQA0dK-J3EKyqRUXT~hnnwMDv-LORVmL7u2Ikg8ljU9pVBCC9jN25LeX0LbAtHD0hQ__"
                        alt="certified"
                        className="w-12 h-12"
                      />
                    </div>
                  )}
                </div>

                <div className="p-4 space-y-3">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-primary text-lg">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                      {product.purity} Pure
                    </span>
                  </div>
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/FYaptkGopCHT7xYmeEAweY/sandbox/J3NpzBUdCB789cntZ8RvcG-img-5_1771153712000_na1fn_YWJvdXQtc2VjdGlvbi1pbWFnZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRllhcHRrR29wQ0hUN3hZbWVFQXdlWS9zYW5kYm94L0ozTnB6QlVkQ0I3ODljbnRaOFJ2Y0ctaW1nLTVfMTc3MTE1MzcxMjAwMF9uYTFmbl9ZV0p2ZFhRdGMyVmpkR2x2YmkxcGJXRm5aUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qOCqdgmlKeStf-OVdRF-XFut2gVDmfszfFAH6ni6HNhSdEEhJd72Jas5TlqCSt23Gr4z7tozpeVAyq6D7fDz7WL5i7qkjTZNZAutboZH3RKnM~~WbaxanUMttdw13bio~UCfxdYi3RQ94J28ZsK5y4tENPNLzLXqzC8VUNT6QPZoxkuZgsa~Xfo5-Y3NH75CoJBgNRlFYdnToGHyaGnpa8W~hzu7h1X2zWpUN7R5eDiDL2D-NZLJEGuuFLYA6fFACvMNquGMRi9bbO~fRdgC0uDUDexKtGJ4QL9-VO-gG5IPxVcQsuOrh7XKio-6rB0~-q7eBPZldNao5F9FenKsgA__"
                alt="laboratory"
                className="rounded-lg w-full"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                About Helix BioWorks
              </h2>
              <p className="text-lg text-foreground/70">
                Helix BioWorks is dedicated to providing researchers with the highest quality peptides and SARMs available. With a commitment to scientific excellence and rigorous quality control, we ensure every product meets pharmaceutical-grade standards.
              </p>
              <p className="text-lg text-foreground/70">
                Our products are sourced from reputable suppliers, tested by independent laboratories, and guaranteed to meet minimum 99% purity standards. We support researchers globally with comprehensive product information and expert guidance.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Industry Leading Purity</p>
                    <p className="text-sm text-foreground/70">Minimum 99% purity on all products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Lab Certified</p>
                    <p className="text-sm text-foreground/70">Third-party tested by reputable laboratories</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Beaker className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Research Grade</p>
                    <p className="text-sm text-foreground/70">Pharmaceutical-grade quality standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Browse our complete selection of premium peptides and SARMs. All products are lab-certified and backed by our quality guarantee.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold"
              onClick={() => setLocation("/cart")}
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HB</span>
                </div>
                <span className="font-bold">Helix BioWorks</span>
              </div>
              <p className="text-sm text-white/70">
                Premium peptides and SARMs for research.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Products</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Peptides</a></li>
                <li><a href="#" className="hover:text-white transition">SARMs</a></li>
                <li><a href="#" className="hover:text-white transition">Compounds</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 Helix BioWorks. All rights reserved. For research use only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
