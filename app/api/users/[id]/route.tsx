import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  // get data from a db
  // if not found return 404 error otherwise return data
  if (params.id > 10)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json({ id: 1, name: "name" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  // .parse() throws error on validation error, but .safeParse() just returns object with validation info
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "not found" }, { status: 404 });

  return NextResponse.json({});
}
