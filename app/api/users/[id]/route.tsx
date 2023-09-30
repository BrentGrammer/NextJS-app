import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
interface QueryParams {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: QueryParams) {
  // get data from a db
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  // if not found return 404 error otherwise return data
  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: QueryParams) {
  const body = await request.json();
  // .parse() throws error on validation error, but .safeParse() just returns object with validation info
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updated = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest, { params }: QueryParams) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) return NextResponse.json({ error: "not found" }, { status: 404 });

  await prisma.user.delete({ where: { id: user.id } });

  return NextResponse.json({});
}
