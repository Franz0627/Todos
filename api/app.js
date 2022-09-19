const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectToDB } = require("./helpers/database");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(bodyParser.json());
var server = require("http").createServer(app);
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Running on port ${port}`));
server.timeout = 720000;

// process.stdout.write("\033c");
app.use("/api", require("./routes/todo")(app));

connectToDB();



