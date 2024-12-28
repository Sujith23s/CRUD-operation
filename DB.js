const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

let database;

async function Getdatabase(){
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
    database = client.db("library");

    if(!database){
        console.log("Database id not connected");
    }

    return database;
}

module.exports = {
    Getdatabase,
    ObjectId
}