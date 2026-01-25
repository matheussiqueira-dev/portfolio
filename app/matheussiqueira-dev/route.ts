import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse("Gone", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

export function HEAD() {
  return new NextResponse(null, { status: 410 });
}
