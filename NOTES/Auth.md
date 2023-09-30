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