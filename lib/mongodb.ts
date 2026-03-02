import { MongoClient, Db } from 'mongodb'

const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient> | null = null

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

function getClientPromise(): Promise<MongoClient> {
  if (clientPromise) return clientPromise

  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not set')
  }

  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }

  return clientPromise
}

export default getClientPromise

export async function getDatabase(): Promise<Db> {
  const client = await getClientPromise()
  return client.db()
}

export async function closeConnection(): Promise<void> {
  const client = await getClientPromise()
  await client.close()
}
