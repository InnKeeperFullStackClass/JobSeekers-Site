// db.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export async function connectToDatabase() {
  const client = new MongoClient(uri, options);
  await client.connect();
  return client;
}
