// app/api/complete-order/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Order from "@/lib/models/Order";
import { sendOrderConfirmationEmails } from "@/lib/email"; // You'll need to create this

export async function POST(req) {
  try {
    await dbConnect();
    
    const { orderId, paymentId, status } = await req.json();
    
    // Update order in database
    const order = await Order.findOneAndUpdate(
      { orderId },
      {
        $set: {
          paymentId,
          status,
          updatedAt: new Date(),
        },
      },
      { new: true } // Return the updated document
    );
    
    if (!order) {
      return NextResponse.json(
        { message: "Order not found" },
        { status: 404 }
      );
    }
    
    // Send confirmation emails

    await sendOrderConfirmationEmails(order);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error completing order:", error);
    return NextResponse.json(
      { message: "Failed to complete order" },
      { status: 500 }
    );
  }
}
