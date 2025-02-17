import {artistArray} from "../../frontend/src/assets/database/artists.js";
import {songsArray} from "../../frontend/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistsObj) => {
    const newArtistsObj = { ...currentArtistsObj }
    delete newArtistsObj.id

    return newArtistsObj
})

const newSongsArray = songsArray.map((currentSongsObj) => {
    const newSongsObj = { ...currentSongsObj}
    delete newSongsObj.id

    return newSongsObj
}) 

const responseSongs = await db.collection('songs').insertMany(newSongsArray)
const responseArtists = await db.collection('artists').insertMany(newArtistArray)

console.log(responseSongs)
console.log(responseArtists)
// console.log(songsArray)