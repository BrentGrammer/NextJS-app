# Fetching Data

- on client side components you can use React Query or useEffect etc., but that could cost an extra trip to the backend (you request the JS bundle and then make another network call to get data)
- On server components you don't need useState necessarily and can use apis like fetch in the node runtime.

Ex:

```javascript
// make the component async to use await with fetch..
const UsersPage = async () => {
  // because we are in a server component, we can use fetch here
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
```
