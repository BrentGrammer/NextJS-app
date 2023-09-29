# NestJS Routing

Routing in NextJS is based on the file system.
Based on convention, not configuration.

#### Note on difference between old/new router

- With the new router not all files placed in a route folder are accessible (old router - all files were accessible via the url). Instead you get a 404 page now.

### Creating a new route:

- Create a folder in the `app/` folder, for example `users/`
- Add a `page.tsx` file in the `app/users/` folder.

  - This will render a component that shows when the user is at the location: `/users`
  - can use `rafce` shortcut with the ES7+ extension to quickly make a component

### Nested Routes

-
