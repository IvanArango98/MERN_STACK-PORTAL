const mongoose = require("mongoose");

//const init = "mongodb:"
// const host = "localhost";
// const port = "27017";
// const db = "PaginaWeb1";

const host = "cluster0.grznw.mongodb.net";
const user = "HRADMIN";
const pass = "admin";
const db = "PaginaWeb1";



exports.mongoConnect = () => 
{
    // const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    const mongoStringConnection = `mongodb+srv://${user}:${pass}@${host}/${db}?retryWrites=true&w=majority`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error",console.error.bind(console,"mongodb connection error"));
}