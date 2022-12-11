var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("milana_h");
database.dropDatabase()
database = client.db("milana_h");
const muzk = database.collection("muzk");
const result = await muzk.insertOne({name:"Хаметова"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
