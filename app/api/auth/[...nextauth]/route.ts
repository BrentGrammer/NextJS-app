import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// import { CredentialsProvider } from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt'
  }
};

const handler = NextAuth(authOptions);

// giving handler two names means it will be picked up as a handler for any GET or POST request in the route handling for NextJS
export { handler as GET, handler as POST };
