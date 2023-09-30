import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client"; //@ represents the root of the project - configured by create-next-app

/**
 * Route handler for api/users route
 * NOTE: by removing the request argument NextJS will cache the response.
 * if you don't want it cached, then you need to have the request arg
 */
export async function GET(request: NextRequest) {
  // fetch resources from a db
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const exists = await prisma.user.findUnique({ where: { email: body.email } });
  console.log({ exists, email: body.email });
  if (exists)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const user = await prisma.user.create({
    // don't set body since it is coming from users and can't be trusted. set individual properties
    data: {
      name: body.name,
      email: body.email,
      // the other props have defaults so we don't need to set them here
    },
  });
  return NextResponse.json(user, { status: 201 });
}
