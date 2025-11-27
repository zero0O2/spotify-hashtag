import express from "express"
import cors from "cors"
import { db } from "./connect.js";
import path from "path"
//oi
const app = express()
const PORT = 3001

const __dirname = path.resolve()

app.use(cors())
// app.use(express.json())

app.get('/api/', (request,response) => {
    response.send('Hello World!')
})

app.get("/api/artists", async (request,response) => {
    response.send(await db.collection("artists").find({}).toArray())
})

app.get("/api/songs", async (request,response) => {
    response.send(await db.collection("songs").find({}).toArray())
})

app.use(express.static(path.join(__dirname,'../frontend/dist')))

app.get("*", async (request,response) => {
    response.sendFile(path.join(__dirname,'../frontend/dist/index.html'))
})

app.listen(PORT , () => {
console.log(`servidor estar escutando na porta ${PORT}`)
})