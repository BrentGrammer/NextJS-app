// next-auth provides middleware to check session and redirect to login
import middleware from "next-auth/middleware";

export default middleware;

export const config = {
  matcher: ["/dashboard/:path*"],
};
