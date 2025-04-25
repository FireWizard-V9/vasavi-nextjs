// app/api/create-razorpay-order/route.js
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import dbConnect from "@/lib/mongoose";

export async function POST(req) {
  try {
    await dbConnect();
    
    const { amount, orderId } = await req.json();
    
    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    
    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amount, // amount in paise
      currency: "INR",
      receipt: orderId,
    });
    
    return NextResponse.json({
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { message: "Failed to create payment order" },
      { status: 500 }
    );
  }
}
