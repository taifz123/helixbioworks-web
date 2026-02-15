import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Trash2, ChevronLeft, ShoppingCart } from "lucide-react";
import { useLocation } from "wouter";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [, setLocation] = useLocation();

  if (items.length === 0) {
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
          </div>
        </nav>

        {/* Empty Cart */}
        <div className="container mx-auto px-4 py-20 text-center">
          <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-primary mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Add some premium peptides and SARMs to get started.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold"
            onClick={() => setLocation("/")}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();

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
          <button
            onClick={() => setLocation("/")}
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            <ChevronLeft className="w-4 h-4 inline mr-2" />
            Back to Shop
          </button>
        </div>
      </nav>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border border-border rounded-lg hover:border-accent/50 transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-lg text-primary">{item.name}</h3>
                  <p className="text-sm text-foreground/70 mb-2">
                    Purity: {item.purity}
                  </p>
                  <p className="text-xl font-bold text-accent">{item.price}</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="px-2 py-1 hover:bg-white rounded transition"
                    >
                      −
                    </button>
                    <span className="px-3 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 hover:bg-white rounded transition"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-destructive hover:bg-destructive/10 p-2 rounded transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 border border-border rounded-lg bg-muted/30 space-y-6">
              <h2 className="text-2xl font-bold text-primary">Order Summary</h2>

              <div className="space-y-3 border-t border-b border-border py-4">
                <div className="flex justify-between text-foreground/70">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary">Total</span>
                <span className="text-3xl font-bold text-accent">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                onClick={() => setLocation("/checkout")}
              >
                Proceed to Checkout
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={() => setLocation("/")}
              >
                Continue Shopping
              </Button>

              <button
                onClick={clearCart}
                className="w-full text-sm text-destructive hover:bg-destructive/10 py-2 rounded transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
