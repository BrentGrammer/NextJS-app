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
```
