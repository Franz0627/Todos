const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// process.stdout.write("\033c");
app.use("/api", require("./routes/todo")(app));


module.exports = app;
