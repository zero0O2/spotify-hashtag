import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faCirclePlay,faCirclePause , faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef , useEffect} from "react";

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2,'0')
    const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2,'0')
    return `${minutes}:${seconds}`
}
const timeInSeconds = (timeString) => {
    const splitArray = timeString.split(":")
    const minutes = Number(splitArray[0])
    const seconds = Number(splitArray[1])

    return seconds + minutes * 60
}

const Player = ({duration , randomIdFromArtist , randomId2FromArtist, audio}) => {
    console.log(audio)

    const audioPLayer = useRef()
    const progressBar = useRef()
    const [isPlaying , setIsPlaying] = useState(false)
    const [currentTime , setCurrentTime] = useState(formatTime(0))
    const durationInSeconds = timeInSeconds(duration)
    console.log(durationInSeconds)

    const playPause = () => {
        isPlaying ? audioPLayer.current.pause() : audioPLayer.current.play()
        setIsPlaying(!isPlaying)
        // console.log(formatTime(audioPLayer.current.currentTime))
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(isPlaying) 
                setCurrentTime(formatTime(audioPLayer.current.currentTime))
            progressBar.current.style.setProperty(
            "--_progress",
            (audioPLayer.current.currentTime / durationInSeconds) * 100 + "%")
        },1000)

        return () => clearInterval(intervalId)
    },[isPlaying])


    return(
        <div className="player">
            <div className="player__controllers">
                    <Link to={`/song/${randomIdFromArtist}`}>
                    <FontAwesomeIcon className="player__icon" icon={faBackwardStep}/>
                </Link>

                <FontAwesomeIcon className="player__icon player__icon--play " icon={isPlaying ? faCirclePause : faCirclePlay}
                onClick={() => playPause()}/>
                
                <Link to={`/song/${randomId2FromArtist}`}>
                    <FontAwesomeIcon className="player__icon" icon={faForwardStep}/>
                </Link>

            </div>

            <div className="player__progress">
                <p>{currentTime}</p>

                <div className="player__bar">
                    <div ref={progressBar} className="player__bar-progress"></div>
                </div>

                <p>{duration}</p>
            </div>

            <audio ref={audioPLayer} src={audio}></audio>
        </div>
    )
}

export default Player