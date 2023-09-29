# NextJS Course Part 1 Mosh

- Github with starter project (finished): https://github.com/mosh-hamedani/next-course

- Forun for questions:https://forum.codewithmosh.com/

## NextJS overview

- A Framework built on top of the React.js library
- comes bundled with builtin router, compiler, nodejs runtime to execute JavaScript on a server/non-browser
- With NextJS you can write both backend and frontend code.
  - no need to maintain two separate projects
- SSR: render components on the server and send the content to the client.
  - Faster
  - More SEO friendly
- Static Site Generation - pre-render static pages for fast serving

### Prereqs:

- Node (16+)
- Extensions:
- ES7+ React/Redux/React-Native
- JavaScript and TypeScript Nightly
- Tailwind CSS Intellisense by tailwind css

### Create a NextJS app:

- In a terminal run: `npx create-next-app@{version}`
  - '13.4' is the version for the course.
  - answer the questions prompted - **NextJS usually do NOT use `src` directory, so you usually want to select NO for that question.**
  - Router: there are two routers - the new App Router and legacy Pages Router, use the new router.
  - Select NO to not customize the default import alias.

### Start in Development:

- CD into the project folder created by npx create-next-app and run: `npm run dev`

### Project Structure

#### App Folder

- The `app/` folder is the container for the routing system.
- NextJS Router is based on the folder file structure
- `layout.tsx` file represents common layout for pages.
  - the children in this component are replaced dynamically at runtime based on user's location
- `page.tsx` represents the home page.
- `globals.css` has app wide styles
-
