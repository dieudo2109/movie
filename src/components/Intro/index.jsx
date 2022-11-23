import React from 'react';
import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from "react-icons/vsc";
import './Intro.scss'
function Intro() {
    return (
        <div className="Intro">
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                volume={0}
                muted={false}
                url="https://vimeo.com/273686020"
                className="Intro_video"
            />
            <div className="Intro_info">
                <h1 className="heading">Netflix The Rain</h1>
                <p className="overview"> " Netflix released The Rain’s official trailer, and it provides a more substantial look at the series’ primary villain and the terrain that siblings Simone (Alba August) and Rasmus (Lucas Lynggaard Tønnesen) must navigate."</p>
            </div>
            <VscMute className="Intro_volum" />
        </div>
    )
}

export default Intro