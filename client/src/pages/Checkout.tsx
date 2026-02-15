import { useCart } from "@/contexts/CartContext";
import { ChevronLeft, CheckCircle, Mail } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import { sendOrderConfirmationEmail } from "@/lib/emailService";
import { Button } from "@/components/ui/button";

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
    country: "Australia",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.email || !formData.address || !formData.city) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // Generate order ID
      const orderId = `ORD-${Date.now()}`;
      const orderDate = new Date().toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const totalPrice = getTotalPrice();
      const tax = totalPrice * 0.10;
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
        paymentMethod: "Email Invoice",
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          country: formData.country,
        },
      });

      console.log("Email result:", emailResult);

      // Mark order as placed
      setOrderPlaced(true);
      clearCart();
      
      // Redirect to home after 5 seconds
      setTimeout(() => {
        setLocation("/");
      }, 5000);
    } catch (error) {
      console.error("Order processing error:", error);
      alert("Error processing order. Please try again.");
    }
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <button
              onClick={() => setLocation("/")}
              className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity duration-200"
            >
              <span className="text-primary">HELIX</span>
              <span className="text-foreground">BIOWORKS</span>
            </button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-foreground">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">Add some premium peptides to get started.</p>
            <Button
              onClick={() => setLocation("/")}
              className="bg-primary text-secondary hover:bg-green-600 font-bold"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8 flex justify-center">
            <div className="p-6 bg-green-100 rounded-full">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Thank you for your order. You will receive an email with payment instructions within 5 minutes.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="font-bold text-blue-900 mb-2">Check Your Email</h3>
                <p className="text-blue-800 text-sm">
                  We've sent payment instructions to your email address. Please check your inbox and spam folder if you don't see it within 5 minutes.
                </p>
              </div>
            </div>
          </div>
          <Button
            onClick={() => setLocation("/")}
            className="bg-primary text-secondary hover:bg-green-600 font-bold"
          >
            Return to Home
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Redirecting in 5 seconds...
          </p>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const tax = totalPrice * 0.10;
  const total = totalPrice + tax;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity duration-200"
          >
            <span className="text-primary">HELIX</span>
            <span className="text-foreground">BIOWORKS</span>
          </button>
        </div>
      </header>

      {/* Checkout Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setLocation("/cart")}
            className="flex items-center gap-2 text-primary hover:text-green-600 transition-colors mb-8"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Cart
          </button>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Shipping Form */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-8 text-foreground">Shipping Information</h1>

              <form onSubmit={handleSubmitOrder} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-foreground">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary md:col-span-2"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary md:col-span-2"
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-foreground">Shipping Address</h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address *"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City *"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State/Province"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <input
                      type="text"
                      name="zip"
                      placeholder="Postal Code"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="Australia">Australia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Payment Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Payment Instructions</h3>
                  <p className="text-blue-800 text-sm mb-3">
                    After submitting this form, you will receive an email within 5 minutes with payment instructions and available payment methods.
                  </p>
                  <p className="text-blue-800 text-sm">
                    Please check your email (including spam folder) for the payment details.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-secondary text-white hover:bg-black font-bold py-4 text-lg rounded-lg transition-all duration-200"
                >
                  Complete Order & Receive Payment Instructions
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-muted/30 rounded-lg p-8 border border-border sticky top-24">
                <h2 className="text-2xl font-bold mb-8 text-foreground">Order Summary</h2>

                {/* Items */}
                <div className="space-y-4 mb-8 pb-8 border-b border-border">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-foreground">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)} AUD</p>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal:</span>
                    <span>${totalPrice.toFixed(2)} AUD</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax (10%):</span>
                    <span>${tax.toFixed(2)} AUD</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Shipping:</span>
                    <span>FREE</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-xl font-bold text-foreground">
                    <span>Total:</span>
                    <span>${total.toFixed(2)} AUD</span>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-xs text-yellow-800">
                    <span className="font-bold">Note:</span> Payment will be collected via email invoice. No payment information is collected on this form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
