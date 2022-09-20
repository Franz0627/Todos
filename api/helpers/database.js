const mongoose = require("mongoose");

const url = "mongodb+srv://todo:todo0627@todo.x8pjcaw.mongodb.net/?retryWrites=true&w=majority";
// const url = "mongodb://localhost:27017";

const connectToDB = async() => {
     await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("Database connected!")).catch(err => console.log(err));
};

module.exports = {
    connectToDB,
};
  