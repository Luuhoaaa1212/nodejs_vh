const express = require('express')
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;
const route = require('./routes')
const path = require("path");

const app = express()
const port = 3000

app.use(express.static( path.join(__dirname,'public')));

//user middleware
app.use(express.urlencoded({
  extended : true,
}));
app.use(express.json());

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars({
      extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname,"resources\\views"));

//Home , seach, blog, contact

//route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})