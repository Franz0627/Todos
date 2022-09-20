const {connectToDB} = require("./helpers/database");

const app = require("./app");

var server = require("http").createServer(app);
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Running on port ${port}`));
server.timeout = 720000;

// process.stdout.write("\033c");
connectToDB();

