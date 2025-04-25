// pages/checkout.js or app/checkout/page.js (depending on your Next.js setup)
"use client";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useCart } from "@/lib/CartContext";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import OrderSummary from "@/components/Checkout/OrderSummary";
import PaymentProcessor from "@/components/Checkout/PaymentProcessor";

export default function Checkout() {
  const router = useRouter();
  const { cartItems, calculateSubtotal, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Address, 2: Payment
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });
  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    if (cartItems.length === 0 && !orderId) {
      redirect("/cart");
    }
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">Redirecting to cart...</div>
    );
  }

  const handleInfoChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create order in the database and get order ID
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerInfo,
          items: cartItems,
          total: calculateSubtotal(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setOrderId(data.orderId);
        setStep(2); // Move to payment step
      } else {
        throw new Error(data.message || "Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("There was an error processing your order. Please try again.");
    }
  };

  const handlePaymentSuccess = async (paymentId) => {
    try {
      // Update order with payment information
      const response = await fetch("/api/complete-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          paymentId,
          status: "paid",
        }),
      });

      if (response.ok) {
        clearCart();
        router.refresh();
        router.push(`/order-confirmation/${orderId}`);
      } else {
        throw new Error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error completing order:", error);
      alert(
        "Payment was successful, but there was an issue finalizing your order. Our team will contact you shortly."
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl mt-12">
      <h1 className="text-6xl font-bold mt-16 mb-7 font-[theater]">CHECKOUT</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {step === 1 ? (
            <CheckoutForm
              customerInfo={customerInfo}
              handleInfoChange={handleInfoChange}
              handleSubmit={handleAddressSubmit}
            />
          ) : (
            <PaymentProcessor
              amount={calculateSubtotal()}
              orderId={orderId}
              customerInfo={customerInfo}
              onPaymentSuccess={handlePaymentSuccess}
            />
          )}
        </div>

        <div className="lg:w-1/3">
          <OrderSummary cartItems={cartItems} total={calculateSubtotal()} />
        </div>
      </div>
    </div>
  );
}
