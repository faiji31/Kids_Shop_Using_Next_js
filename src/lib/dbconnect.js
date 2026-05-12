import { MongoClient, ServerApiVersion } from 'mongodb';

// For development without MongoDB, use a simple in-memory mock
const USE_MOCK_DB = true; // Force mock DB for now

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.DBNAME || 'kids_shop';

const collections = {
  PRODUCTS: "products",
  USERS: "users",
};

// Mock database for development
let mockData = {
  users: [],
  products: []
};

class MockCollection {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  async findOne(query) {
    const data = mockData[this.collectionName] || [];
    return data.find(item => {
      return Object.keys(query).every(key => item[key] === query[key]);
    }) || null;
  }

  async insertOne(doc) {
    const data = mockData[this.collectionName] || [];
    const newDoc = { ...doc, _id: Date.now().toString() };
    data.push(newDoc);
    mockData[this.collectionName] = data;
    return { acknowledged: true, insertedId: newDoc._id };
  }

  async find(query = {}) {
    const data = mockData[this.collectionName] || [];
    let results = [...data];

    // Simple query filtering
    if (query && Object.keys(query).length > 0) {
      results = results.filter(item => {
        return Object.keys(query).every(key => item[key] === query[key]);
      });
    }

    return {
      toArray: async () => results,
      [Symbol.asyncIterator]: async function* () {
        for (const item of results) {
          yield item;
        }
      }
    };
  }
}

let client;
let db;

const connectDB = async () => {
  if (USE_MOCK_DB) {
    console.log("Using mock database for development");
    return {
      collection: (name) => new MockCollection(name)
    };
  }

  if (!client) {
    try {
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      await client.connect();
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw error;
    }
  }

  // Always return the database, creating it if needed
  if (!db) {
    db = client.db(dbName);
  }

  return db;
};

export const dbconnect = async (collectionName) => {
  const database = await connectDB();
  return database.collection(collectionName);
};

export const Collections = collections;