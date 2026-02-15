import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import { sendOrderConfirmationEmail } from "@/lib/emailService";

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [, setLocation] = useLocation();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.email || !formData.address || !formData.cardNumber) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // Generate order ID
      const orderId = `ORD-${Date.now()}`;
      const orderDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const totalPrice = getTotalPrice();
      const tax = totalPrice * 0.08;
      const total = totalPrice + tax;

      // Send order confirmation email
      const emailResult = await sendOrderConfirmationEmail({
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        orderId,
        orderDate,
        items: items.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        subtotal: totalPrice,
        tax,
        shipping: 0,
        total,
        paymentMethod: "Credit Card",
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
        },
      });

      console.log("Email result:", emailResult);

      // Mark order as placed
      setOrderPlaced(true);
      clearCart();
      
      // Redirect to confirmation after 3 seconds
      setTimeout(() => {
        setLocation("/");
      }, 3000);
    } catch (error) {
      console.error("Order processing error:", error);
      alert("Error processing order. Please try again.");
    }
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-white">
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

        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">No Items to Checkout</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Your cart is empty. Add products before proceeding to checkout.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold"
            onClick={() => setLocation("/")}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Button>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white">
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

        <div className="container mx-auto px-4 py-20 text-center">
          <CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-primary mb-4">Order Confirmed!</h1>
          <p className="text-lg text-foreground/70 mb-2">
            Thank you for your order, {formData.firstName}!
          </p>
          <p className="text-foreground/70 mb-8">
            A confirmation email has been sent to {formData.email}
          </p>
          <div className="bg-muted/50 p-6 rounded-lg mb-8 inline-block">
            <p className="text-sm text-foreground/70 mb-2">Order Total</p>
            <p className="text-3xl font-bold text-accent">
              ${getTotalPrice().toFixed(2)}
            </p>
          </div>
          <p className="text-foreground/70 mb-8">
            Redirecting to home page in 3 seconds...
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold"
            onClick={() => setLocation("/")}
          >
            Return to Home
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
            onClick={() => setLocation("/cart")}
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            <ChevronLeft className="w-4 h-4 inline mr-2" />
            Back to Cart
          </button>
        </div>
      </nav>

      {/* Checkout Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmitOrder} className="space-y-8">
              {/* Shipping Information */}
              <div className="border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Shipping Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <input
                  type="text"
                  name="address"
                  placeholder="Street Address *"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent mb-4"
                  required
                />

                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State/Province"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="ZIP/Postal Code"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Payment Information
                </h2>

                <input
                  type="text"
                  name="cardName"
                  placeholder="Cardholder Name *"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent mb-4"
                  required
                />

                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number (4111 1111 1111 1111) *"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  maxLength={19}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent mb-4"
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    maxLength={5}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    maxLength={4}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <p className="text-xs text-foreground/70 mt-4">
                  For testing: Use card number 4111 1111 1111 1111 with any future date and any CVV
                </p>
              </div>

              {/* Order Items Summary */}
              <div className="border border-border rounded-lg p-6">
                <h2 className="text-xl font-bold text-primary mb-4">Order Items</h2>
                <div className="space-y-3">
                  {items.map(item => {
                    const price = parseFloat(item.price.replace('$', ''));
                    return (
                      <div key={item.id} className="flex justify-between text-foreground/70">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(price * item.quantity).toFixed(2)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
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
                  <span className="font-semibold text-secondary">FREE</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>Tax</span>
                  <span>${((totalPrice as number) * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary">Total</span>
                <span className="text-3xl font-bold text-accent">
                  ${(totalPrice * 1.08).toFixed(2)}
                </span>
              </div>

              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                onClick={handleSubmitOrder}
                type="submit"
              >
                Complete Order & Send Email
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={() => setLocation("/cart")}
              >
                Back to Cart
              </Button>

              <div className="bg-secondary/10 p-4 rounded-lg">
                <p className="text-xs text-foreground/70">
                  ✓ Secure checkout
                  <br />
                  ✓ Lab-certified products
                  <br />
                  ✓ 30-day satisfaction guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
