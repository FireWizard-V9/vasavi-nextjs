// app/api/create-order/route.js
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import dbConnect from "@/lib/mongoose";
import Order from "@/lib/models/Order";
import { db } from "@/lib/db"; // This now uses the Mongoose compatibility layer

export async function POST(req) {
  try {
    await dbConnect();
    
    const { customerInfo, items, total } = await req.json();
    
    // Validate required fields
    if (!customerInfo || !items || !total) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Generate a unique order ID
    const orderId = uuidv4();
    
    // Store order in database using Mongoose
    const order = new Order({
      orderId,
      customerInfo,
      items,
      total,
      status: "pending",
    });
    
    await order.save();
    
    return NextResponse.json({ orderId, success: true });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { message: "Failed to create order" },
      { status: 500 }
    );
  }
}
