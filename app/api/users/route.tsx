import { NextRequest, NextResponse } from "next/server";

/**
 * Route handler for api/users route
 * NOTE: by removing the request argument NextJS will cache the response.
 * if you don't want it cached, then you need to have the request arg
 */
export function GET(request: NextRequest) {
  // fetch resources from a db
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name)
    return NextResponse.json({ error: "Name is missing." }, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}


