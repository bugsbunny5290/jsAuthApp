const express = require("express");

const expressLayouts = require("express-ejs-layouts");

const mongoose = require("mongoose");

const passport = require("passport");

const flash = require("connect-flash");

const session = require("express-session");

const db = require("./config/keys").mongoURI;

require("./config/passport")(passport);
const { forwardAuthenticated } = require('./config/auth');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const app = express();

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//BodyParser

app.use(express.urlencoded({ extended: false }));

//session middleware
app.use(
  session({
    secret: "keyboard dog",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

//connect flash

app.use(flash());

//Global vars

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
