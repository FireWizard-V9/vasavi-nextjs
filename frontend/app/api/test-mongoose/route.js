// app/api/test-mongoose/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import mongoose from "mongoose";

export async function GET() {
  try {
    await dbConnect();
    
    // Check connection status
    const connectionState = mongoose.connection.readyState;
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };
    
    return NextResponse.json({ 
      connected: connectionState === 1,
      state: states[connectionState],
      dbName: mongoose.connection.db.databaseName
    });
  } catch (error) {
    console.error("Connection test failed:", error);
    return NextResponse.json(
      { connected: false, error: error.message },
      { status: 500 }
    );
  }
}
