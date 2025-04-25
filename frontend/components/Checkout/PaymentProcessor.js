// components/Checkout/PaymentProcessor.js
import { useEffect } from "react";
import Script from "next/script";

export default function PaymentProcessor({ amount, orderId, customerInfo, onPaymentSuccess }) {
  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeRazorpay = async () => {
    // Create a Razorpay order on the server
    try {
      const response = await fetch("/api/create-razorpay-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount >= 1000 ? amount * 100 : (amount + 100) * 100, // Convert to paise and add shipping if needed
          orderId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create payment order");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Vasavi",
        description: "Order Payment",
        order_id: data.razorpayOrderId,
        prefill: {
          name: `${customerInfo.firstName} ${customerInfo.lastName}`,
          email: customerInfo.email,
          contact: customerInfo.phone,
        },
        notes: {
          address: customerInfo.address,
          orderId: orderId,
        },
        theme: {
          color: "#000000",
        },
        handler: function (response) {
          // Handle successful payment
          onPaymentSuccess(response.razorpay_payment_id);
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment initialization failed:", error);
      alert("Unable to initialize payment. Please try again.");
    }
  };

  return (
    <div className="border border-gray-400 p-6 mb-6">
      <h2 className="text-2xl font-medium mb-6">Payment</h2>
      <p className="mb-6">
        Click the button below to proceed with payment using Razorpay's secure payment gateway.
      </p>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Shipping Address</h3>
        <p>
          {customerInfo.firstName} {customerInfo.lastName}<br />
          {customerInfo.address}<br />
          {customerInfo.city}, {customerInfo.state} {customerInfo.pincode}<br />
          {customerInfo.country}<br />
          Phone: {customerInfo.phone}
        </p>
      </div>
      
      <button
        onClick={initializeRazorpay}
        className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition"
      >
        Pay Now
      </button>
      
      <p className="text-red-500 text-md text-center my-4">
        Vasavi never sends payment links via WhatsApp, SMS or email.<br />
        Pay only via Vasavi Website.
      </p>
      
      <div className="mt-4">
        <p className="text-sm mb-2">We accept</p>
        <div className="flex gap-2">
          <div className="w-12 h-8 bg-blue-100 flex items-center justify-center">
            <span>VISA</span>
          </div>
          <div className="w-12 h-8 bg-red-100 flex items-center justify-center">
            <span>MC</span>
          </div>
          <div className="w-12 h-8 bg-yellow-100 flex items-center justify-center">
            <span>UPI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
