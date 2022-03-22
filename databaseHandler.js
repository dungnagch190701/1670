const {MongoClient,ObjectId} = require('mongodb');

const URL = 'mongodb+srv://dungna0912:naz69abc@cluster0.vuqmk.mongodb.net/test';
const DATABASE_NAME = "GCH0803DB"

async function insertObject(collectionName,objectToInsert){
    const dbo = await getDB();
    const newObject = await dbo.collection(collectionName).insertOne(objectToInsert);
    console.log("Gia tri id moi duoc insert la: ", newObject.insertedId.toHexString());
}

async function getDB() {
    const client = await MongoClient.connect(URL);
    const dbo = client.db(DATABASE_NAME);
    return dbo;
}


module.exports = {insertObject}