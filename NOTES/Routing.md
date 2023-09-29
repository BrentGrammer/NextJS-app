# NestJS Routing

Routing in NextJS is based on the file system.
Based on convention, not configuration.

#### Note on difference between old/new router

- With the new router not all files placed in a route folder are accessible (old router - all files were accessible via the url). Instead you get a 404 page now.

### Creating a new route:

- Create a folder in the `app/` folder, for example `users/`
- Add a `page.tsx` file in the `app/users/` folder.
  - **You need to name the component in the folder `page.tsx`**
  - This will render a component that shows when the user is at the location: `/users`
  - can use `rafce` shortcut with the ES7+ extension to quickly make a component
- **NOTE**: a component is not publicly accessible via routing unless there is a `page.tsx` file in the folder!

### Nested Routes

- Add a subfolder to a route folder
- create another `page.tsx` in the subfolder and export a component that renders when the user is at that location: `routefolder/subfolder` ex: `users/new`

## Navigation

**Do not use <a> tags for navigating - this reloads a lot of assets**

### Client Side navigation using Link

- the Link component comes with NextJS from the next/link lib

```javascript
import Link from "next/link";

<Link href="/users">My Link</Link>;
```

- Clicking on a Link will only have requests for downloading the content of the page, not all repetitive parts of the app/assets again.
