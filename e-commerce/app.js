const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const db = require("./models/db.js");

require("./routes/category.routes.js")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
