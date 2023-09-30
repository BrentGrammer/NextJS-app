# Prisma

- ORM used for MySQL in this project

### Setup

#### Prerequisites

- You need a database installed and setup - MySQL, PostgreSQL etc.
- Remember the root password you enter during setup to use in the connection string with Prisma

- `npm i prisma`
- `npx prisma init`
  - this creates a prisma folder and .env with a connection string (default)
    - [consult docs for url strings](https://www.prisma.io/docs/reference/database-reference/connection-urls) - use this to configure for your database engine
- Go to the prisma/schema.prisma file to configure the provider and url if needed (should be from the .env file)

### Setup models

- go to prisma/schema.prisma to define models
  - can set the name of the field, the type and options like defaults or autoincrementing ids etc.

```prisma
model User {
  id        Int     @id @default(autoincrement())
  email     String  @unique
  name      String
  followers Int     @default(0)
  isActive  Boolean @default(true)
}
```

- Run migrations: `npx prisma migrate dev`

### Migrations

- As schema changes you need to run migrations
- migrations are used to keep the database schema in sync with the prisma schema
- run `npx prisma migrate dev` - for relational
- run `npx prisma db push` - for mongo or nosql dbs
- This will create a migrations folder (you can name the first one "Initial" when prompted)
- Whenever you make a change to the model or schema you need to run a migration and name it something meaningful

- Now you can setup a connection with your Db GUI (Data Grip, DBeaver etc.)
