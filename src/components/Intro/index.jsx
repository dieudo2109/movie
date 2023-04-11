import React from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { VscMute, VscUnmute } from "react-icons/vsc";
import './Intro.scss'
function Intro() {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <div className="Intro">
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/736856638"
                className="Intro_video"
            />
            <div className="Intro_info">
                <h1 className="heading">Netflix VeNom</h1>
                <p className="overview"> "
                    Netflix released the official trailer for VeNom, Brock attempting to rebuild his career by interviewing the murderous Cletus Kasady, who became the host of the Carnage, a Venom-like alien being."</p>
            </div>
            {isMuted ? (
                <VscMute
                    className="Intro_volum"
                    onClick={() => setIsMuted((prev) => !prev)}
                />
            ) : (
                <VscUnmute
                    className="Intro_volum"
                    onClick={() => setIsMuted((prev) => !prev)}
                />
            )}
        </div>
    )
}

export default Intro