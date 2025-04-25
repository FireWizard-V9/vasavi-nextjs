// pages/order-confirmation/[orderId].js or app/order-confirmation/[orderId]/page.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function OrderConfirmation() {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`/api/get-order/${orderId}`);
        if (response.ok) {
          const data = await response.json();
          setOrderDetails(data.order);
        } else {
          console.error("Failed to fetch order details");
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Loading order details...</h1>
        </div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Order not found</h1>
          <Link
            href="/"
            className="text-black underline font-medium hover:text-gray-600"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center py-8 mb-8 border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-xl mb-2">Your order has been successfully placed.</p>
        <p className="text-gray-600">
          Order ID: <span className="font-medium">{orderId}</span>
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-medium">{orderDetails.customerInfo.email}</span>
        </p>
        <p className="mt-2">We will notify you when your order ships.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-2">Shipping Information</h3>
          <div className="border border-gray-300 p-4">
            <p>
              {orderDetails.customerInfo.firstName}{" "}
              {orderDetails.customerInfo.lastName}
              <br />
              {orderDetails.customerInfo.address}
              <br />
              {orderDetails.customerInfo.city},{" "}
              {orderDetails.customerInfo.state}{" "}
              {orderDetails.customerInfo.pincode}
              <br />
              {orderDetails.customerInfo.country}
              <br />
              Phone: {orderDetails.customerInfo.phone}
            </p>
          </div>
        </div>

        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-2">Payment Information</h3>
          <div className="border border-gray-300 p-4">
            <p>
              <span className="font-medium">Payment Status:</span> Paid
              <br />
              <span className="font-medium">Payment Method:</span> Razorpay
              <br />
              <span className="font-medium">Payment ID:</span>{" "}
              {orderDetails.paymentId}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <Link
          href="/categories"
          className="bg-black text-white px-8 py-3 inline-block font-medium hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
