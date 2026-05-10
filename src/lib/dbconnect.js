const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
const dbName = process.env.DBNAME;

const collections = {
    PRODUCTS: "products",
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const Collections = collections;
export const dbconnect = (cname) => {
  return client.db(dbName).collection(cname);
}