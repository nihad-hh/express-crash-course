const express = require("express");
const path = require("path"); //node.js path module
const logger = require("./middleware/logger");
const exphbs = require("express-handlebars");
const app = express();
const members = require("./Members");

// Init middleware
// app.use(logger);

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>")
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Handlebars Middleware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // now we can use url encoded data

// Homepage Route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Member App",
    members,
  });
});

// Set a static folder
app.use(express.static(path.join(__dirname, "public"))); // use is used for setting the middleware

// Members api routes
app.use("/api/members", require("./routes/api/members"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started"));
