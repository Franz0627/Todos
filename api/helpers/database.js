const mongoose = require("mongoose");

const url = "mongodb+srv://todo:todo0627@todo.x8pjcaw.mongodb.net/?retryWrites=true&w=majority";
// const url = "mongodb://localhost:27017";

const connectToDB = async () => {
    let db = mongoose.connection;
    db.on("error", () => {
        console.error.bind(console, "connection error:");
    });
    db.once("open", (err) => {
        if (err) {
        console.error(err);
        } else {
        // console.log("Connected to MongoDB ");
        }
    });
    db.on("close", () => {
        console.log("Connection closed");
    });
    db.on("reconnect", () => {
        console.log("Reconnected");
    });
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = {
    connectToDB,
};
  