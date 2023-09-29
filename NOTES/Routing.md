# NestJS Routing

Routing in NextJS is based on the file system.
Based on convention, not configuration.

#### Note on difference between old/new router

- With the new router not all files placed in a route folder are accessible (old router - all files were accessible via the url). Instead you get a 404 page now.

### Special Files

- `page.tsx` - for making component publically accessible
- `layout.tsx` - defines common layout
- `loading.tsx` - showing loading UI components
- `route.tsx` - creating APIs
- `not-found.tsx` - show custom errors
- `error.tsx` - show general and custom error pages

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

### Dynamic Routing

- use square brackets in a nested folder to create a route parameter
  - `[id]/` under `users/` would make a route parameter for users/:id
  - make the usual `page.tsx` file to export the component in the folder (`users/[id]`)
- The route parameter will be available in the component as a prop under the `params` property:

```javascript
// users/[id]/page.tsx
interface Props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailPage {id}</div>;
};
```

#### Double Nested Routes (dynamic params)

- If you need deeper nested dynamic routing, add another folder under the dynamic route folder with the same convention, but use a different parameter name
- All of the parameters in the heirarchy for the nested routes will be in the params property

```javascript
// users/[id]/photos/[photoId]/page.tsx
// this component renders for the route: /users/:id/photos/:id
interface Props {
  params: { id: number, photoId: number };
}
// note that we have both id and photoId (even though id is the dynamic param in the parent folder)
const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      Photo Page
      {id} {photoId}
    </div>
  );
};
```
