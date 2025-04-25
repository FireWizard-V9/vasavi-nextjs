// app/api/get-order/[orderId]/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Order from "@/lib/models/Order";

export async function GET(req, context) {
  try {
    await dbConnect();
    const { params } = context;
    const orderId = params.orderId;

    const order = await Order.findOne({ orderId }).lean();

    if (!order) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ order });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { message: "Failed to fetch order" },
      { status: 500 }
    );
  }
}
