require("./models/Users");
require("./services/passport");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");

const app = express();

app.use(bodyParser.json());

mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV == "production") {
  //express will serve our prod assets like main.js or main,css file

  app.use(express.static("client/build"));

  //express will serve the html file
  //if it does not recognise the route

  const path = require("path");

  console.log(
    "path is :::",
    path.resolve(__dirname),
    path.resolve("client/build")
  );

  app.get("/", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("running on: ", PORT);
});
