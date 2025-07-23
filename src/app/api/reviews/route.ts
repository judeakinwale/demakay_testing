import { NextResponse } from "next/server";
import { getReviews } from "@/utils/firebase";

export async function GET() {
  try {
    const reviews = await getReviews();
    return NextResponse.json({
      success: true,
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    console.log("Error getting reviews from firebase ", error);
    return NextResponse.json({ success: false });
  }
}
