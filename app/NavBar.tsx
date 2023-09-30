// need to make this a client since useSession accesses next auth context
"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Loading from "./loading";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        My Logo
      </Link>
      <Link href="/users">Users</Link>
      {status === "loading" && <Loading />}
      {/* Next-auth generates the page for auth/signin automatically */}
      {status === "authenticated" && <div>{session.user!.name}</div>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Log in</Link>
      )}
    </div>
  );
};

export default NavBar;
