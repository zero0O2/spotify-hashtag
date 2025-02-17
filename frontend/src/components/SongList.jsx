import React from "react"
import SongItem from "./SongItem"
import { useState } from "react"

const SongList = ({songsArray}) => {
    const [items , setItens] = useState(5)
    
    return (
        <div className="song-list">
            {songsArray.filter((currentValue,index) => index < items)
            .map((currentsongObj,index) => (
                <SongItem {...currentsongObj} index={index} key={index}/>
            ))}

            <p className="song-list__see-more" onClick={() => {
                setItens(items + 5)
            }}>Ver mais</p>
        </div>
    )
}

export default SongList