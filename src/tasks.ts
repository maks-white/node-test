
// # NodeJS Test Task
// The main goal of the task is to show your skills in the best way possible.

// - Everything will be run on terminal, no UI is needed.

// You should implement a nodeJS server API communicating with this:
// https://randomuser.me/api/

// 1. Create a typescript nodejs application with express and mongoose.
// 2. Sign up for trail account in https://www.mongodb.com/, create a db, connect to nodejs
// 3. Create User Model (name, gender, email = unique, picture, password, removed).

// 4. Create APIs:
// 	Important: (Password must be encrypted)

// * GET http://localhost:3000/api/users/generate – this will fetch the details 	from https://randomuser.me/api/ and insert to user model.
// * GET http://localhost:3000/api/users – get list of users (not removed)
// * POST http://localhost:3000/api/users/login – Body will be {email, password}. It have to return success status if it match, and error status if it is wrong.
// * PUT http://localhost:3000/api/users/{userId} – update user by Id
// * DELETE http://localhost:3000/api/users/{userId} – remove user by Id (set 	removed to true)


// # Finished? Checklist
// - Used classes, controllers, services and interfaces
// - Used typescript
// - Used correct error handlings
// - Project can be build and run properly (npm start)


// Note: Do not expose password in any api


// - Used devDependencies








