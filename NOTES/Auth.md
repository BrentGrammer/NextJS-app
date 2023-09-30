# Auth

## Setup Authentication

- Use Next Auth (future will be Auth.js)
- `npm install next-auth`
- create `/app/api/auth/[...nextauth]`
  - catches all routes for api/auth
- add some variables to .env:
  - NEXTAUTH_URL=your website, ex https://mysite.com or http://localhost:3000 for local dev
  - NEXTAUTH_SECRET=long random string
    - use the command `openssl rand -base64 32` to generate a random string

### Setting up Google Auth:

- see https://members.codewithmosh.com/courses/mastering-next-js-13-with-typescript/lectures/49120447

### Sessions

- Next auth stores a cookie with a jwt called `next-auth-session-token`
  - the value string is a encoded json web token that next auth knows how to decode on the server
  - default expiration is 30 days

#### Accessing the session in the client

- In /app/layout.tsx wrap the components usin Next Auth Session provider (uses context under the hood)
- You need to wrap the session provider in a separate client component since wrapping it in the layout tsx wraps server components.

```javascript
// /app/auth/Provider.tsx
"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

// /app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
          </main>
        </AuthProvider>
      </body>
    </html>
  );

// accessing session on client navbar:
const NavBar = () => {
const { status, data: session } = useSession();

return (
  <div className="flex bg-slate-200 p-5 space-x-3">
    <Link href="/" className="mr-5">
      My Logo
    </Link>
    <Link href="/users">Users</Link>
    {status === "loading" && <Loading />}
    {status === "authenticated" && <div>{session.user!.name}</div>}
    {status === "unauthenticated" && (
      <Link href="/api/auth/signin">Log in</Link>
    )}
  </div>
);
```

#### Accessing session on server

- Use the `getServerSession` function from next-auth package
- you need to pass it the auth options you used for instantiating NextAuth, so make sure to export it as a const.

```javascript
// accessing session in a server component
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

```

### Protecting Routes

- Create a `middleware.ts` file at the top level (adjacent to public and outside of /app/)
- this is a special file NextJS looks for
- You can use middleware to run on every request:

```javascript
// /middleware.ts

/**
 * This gets executed on every request.
 *
 * Note: you can check the user session and redirect, but next-auth already does that for you if you're using that.
 */
export function middleware(request: NextRequest) {
  // pass the route to redirect to and the base url
  return NextResponse.redirect(new URL("/some-page", request.url));
}

// to control which routes to run middleware
// name this config - nextjs looks for this name
export const config = {
  // you can use params like '/users/:id', to do 0 or more use '/users/:id*' this will catch /users/ or /users/1 etc.
  matcher: ["/users"], // path or array of string paths. middleware only runs on these paths
};

// wildcards for path matcher:
// * 0 or more
// + one or more
// ? 0 or one
```
