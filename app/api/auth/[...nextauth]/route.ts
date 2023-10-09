import NextAuth from "next-auth/next";
import { authOptions } from "../authOptions";

const handler = NextAuth(authOptions);

// giving handler two names means it will be picked up as a handler for any GET or POST request in the route handling for NextJS
export { handler as GET, handler as POST };
