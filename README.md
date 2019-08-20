## Authentication sample application
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Authentication sample application](#authentication-sample-application)
  - [Description](#description)
  - [Technologies and packages](#technologies-and-packages)

<!-- /code_chunk_output -->
## Description
This application is a simple authentication application which lets its user create an account via register tab, and then login to access the dashboard.

You are taken to a welcome page which has two options, Register and Login. If you are a new user, you have to register. Register form asks you some basic information and checks if all the fields are filled. The password value is hashed and stored in cloud database (mongodb).

Once you register, you are greeted with a flash message (using connect-flash) that you can login. Log-In form checks if your email and password matches the value stored. Note that password you entered is matched with the hash value stored, it is not at any point being decrypted. bcryptjs is being used to compare values.

To install:

```javascript
git clone https://github.com/bugsbunny5290/jsAuthApp.git
npm install
npm run dev
```

**Check out the demo here:**



## Technologies and packages
* Javascript
* Express
    + express-session
    + express-ejs-layouts
* HTML
* Bootstrap [Theme from Bootswatch(Sktechy)](https://bootswatch.com/sketchy/)
* Layout Engine [EJS](https://ejs.co/)
* [bcryptjs for encryption](https://www.npmjs.com/package/bcryptjs)
* MongoDB
* [Mongoose for mongoDB object modeling](https://mongoosejs.com/)
* [Passportjs as Authentication Middleware](http://www.passportjs.org/)
* [nodemon to watch server](https://nodemon.io/)
* [connect-flash to manage flash messages](https://github.com/jaredhanson/connect-flash) 
