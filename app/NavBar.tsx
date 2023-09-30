import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        My Logo
      </Link>
      <Link href="/users">Users</Link>
      {/* Next-auth generates the page for auth/signin automatically */}
      <Link href="/api/auth/signin">Log in</Link>
    </div>
  );
};

export default NavBar;
