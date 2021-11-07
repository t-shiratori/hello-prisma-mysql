# hello-prisma-mysql
Use mysql with prisma.

## How to use

### 1\. Move to db-server directory
```
cd db-server
```

### 2\. Start the MySQL Server
```
docker-compose up -d
```

### 3\. Move to api-server directory
```
cd api-server
```

### 4\. Set up .env
```
touch .env
```

Define environment variables「DATABASE_URL」
```
# .env

DATABASE_URL="mysql://root:password-root@127.0.0.1:3306/test-db"
```

### 5\. Install modules
```
npm i
```

### 6\. Migrate database with prisma
```
npx prisma migrate dev --name init
```
If successful, it will look like this
```
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": MySQL database "test-db" at "127.0.0.1:3306"

Applying migration `20211107121803_init`

The following migration(s) have been applied:

migrations/
  └─ 20211107121803_init/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (3.4.1) to ./node_modules/@prisma/client in 73ms
```

### 7\. Run prisma
```
npx ts-node index.ts
```

If successful, the console will display
```
[
  {
    id: 1,
    email: 'alice@prisma.io',
    name: 'Alice',
    posts: [
      {
        id: 1,
        createdAt: 2021-11-07T13:58:41.241Z,
        updatedAt: 2021-11-07T13:58:41.243Z,
        title: 'Hello World',
        content: null,
        published: false,
        authorId: 1
      }
    ],
    profile: { id: 1, bio: 'I like turtles', userId: 1 }
  }
]
```

## References: 
- [Start from scratch with relational databases (15 min) | Prisma Docs](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres)