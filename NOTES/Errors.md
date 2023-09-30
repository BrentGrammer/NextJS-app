# Error Handling

## Not Found pages
- You can add a `not-found.tsx` page at the `/app` level which will show automatically when an unknown route occurs
- You can use `notFound()` NextJS method from the `next/navigation` package to show not found page in components
  - By default this uses the not-found.tsx page defined in `/app/` folder, but if you want a custom not found page, just make a new `not-found.tsx` file in folder of the route you want to use `notFound()` in.
```javascript
import { notFound } from "next/navigation";

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound(); // will use app/not-found.tsx or not-found.tsx in same folder if present.

  return <div>content</div>;
};
```