// importing react
import React, { useState, useEffect } from 'react';
// importing motion
import { motion } from 'framer-motion';
// importing styles
import styled from 'styled-components';
// import css
import './Jukebox.css';
// import the song
import LostOnes from '../../assets/images/userGalleryImages/lost_ones.mp3';
// importing the image
import LostOnesImage from '../../assets/images/userGalleryImages/wishYouCared.jpg';

function Jukebox(props)
{
    // Same as in ActionsBarBottom, show only when scrolling up
    const [shouldShowActions, setShouldShowActions] = useState(false);
    const [lastYPos, setLastYPos] = useState(0);

    useEffect(() => {

        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;

            setShouldShowActions(isScrollingUp);
            setLastYPos(yPos);
        }

        window.addEventListener("scroll", handleScroll, false);

        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [lastYPos]);

    return (
        <motion.div className="mainJukeboxParent"
            initial={{ opacity: 1 }}
            animate={{ opacity: shouldShowActions ? 1 : 0 }}
            transition={{ opacity: { duration: 0.2 } }}
        >
            <div className="insideImageWrapper">
                <img className="jukeImage" src={LostOnesImage} alt="" />
            </div>

            <div className="insideJukeWrapper">
                {/* Note that since we're using the default audio playback whatever, it's gonna look ugly as hell
                on firefox, but that's okay because I'm way too tired to be changing it rn */}
                <audio className="jukeAudio" controls src={LostOnes} />
            </div>

        </motion.div>
    );
}

export default Jukebox;