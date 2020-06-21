# Login with JWT authentication

<p align="center">
<img src="https://res.cloudinary.com/lorransutter/image/upload/v1592775492/Code_snippets/Login.gif" alt="Login preview"/>
</p>

### :runner: How to run

Set the following environment variables in _.env_ file:

```sh
# ./backend/.env

PORT=5000
PRIVATE_KEY=STRONG_PRIVATE_KEY
MONGODB_URI_DEV="YOUR_PASSWORD"
```

Install dependencies and run the project in two terminals:

```sh
# backend
cd backend
yarn
yarn start

# frontend
cd frontend
yarn
yarn start
```

### :book: Resources and technologies :computer:

1. Backend

   - [Express.js](http://expressjs.com/) - web application framework
   - [Mongoose](https://mongoosejs.com/) - object data modeling (ODM) library for MongoDB and Node.js
   - [Express validator](https://express-validator.github.io/docs/) - middleware to validate data
   - [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - library to perform cryptography
   - [JWT.IO](https://jwt.io/) - JSON Web Tokens to allow, decode, verify and generate JWT
   - [Dotenv](https://www.npmjs.com/package/dotenv) - loads environment variables from a .env file

2. Frontend
   - [ReactJS](https://reactjs.org/) - frontend library
   - [React-cookie](https://www.npmjs.com/package/react-cookie) - cookie interaction for React applications
   - [Axios](https://www.npmjs.com/package/axios) - HTTP requests
