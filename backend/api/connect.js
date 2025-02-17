
import { MongoClient } from "mongodb"

const URI = "mongodb+srv://zero0o2:1234@cluster0.56ibv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotify")
// const songCollection = await db.collection("songs").find({}).toArray()

