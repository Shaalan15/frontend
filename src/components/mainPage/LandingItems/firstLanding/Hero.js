// importing react
import React, { useEffect } from 'react';
// importing motion
import { motion } from 'framer-motion';
// importing to know when in frame
import { useInView } from 'react-intersection-observer';
// importing the images container
import IndividualImage from './IndividualImage'
import HoverImages from './HoverImages'
// Importing all images from folder of images for desk objects
import Bowl from '../../assets/images/heroObjects2/bowl.png';
import Box from '../../assets/images/heroObjects2/box.png';
import Bunny from '../../assets/images/heroObjects2/bunny.png';
import Cable from '../../assets/images/heroObjects2/cable.png';
import Chicken from '../../assets/images/heroObjects2/chicken.png';
import Cup1 from '../../assets/images/heroObjects2/cup1.png';
import Cup2 from '../../assets/images/heroObjects2/cup2.png';
import Cup3 from '../../assets/images/heroObjects2/cup2.png';
import Desk from '../../assets/images/heroObjects2/desk.png';
import DeskBack from '../../assets/images/heroObjects2/deskBack.png';
import Figure from '../../assets/images/heroObjects2/figure.png';
import Games from '../../assets/images/heroObjects2/games.png';
import Headset from '../../assets/images/heroObjects2/headset.png';
import Keyboard from '../../assets/images/heroObjects2/keyboard.png';
import Monitor from '../../assets/images/heroObjects2/monitor.png';
import Notes from '../../assets/images/heroObjects2/notes.png';
import Octopus from '../../assets/images/heroObjects2/octopus.png';
import PencilCase from '../../assets/images/heroObjects2/pencilCase.png';
import PolaroidUp from '../../assets/images/heroObjects2/polaroidUp.png';
import Postcard1 from '../../assets/images/heroObjects2/postcard1.png';
import Postcard2 from '../../assets/images/heroObjects2/postcard2.png';
import Posters from '../../assets/images/heroObjects2/posters.png';
import RightBox from '../../assets/images/heroObjects2/rightBox.png';
import Screen from '../../assets/images/heroObjects2/screen.png';
import Tablet from '../../assets/images/heroObjects2/tablet.png';
import TeddyBear from '../../assets/images/heroObjects2/teddyBear.png';
import SufferingBackground from '../../assets/images/heroObjects2/sufferingBackground.png';
import SufferingIcon from '../../assets/images/heroObjects2/sufferingIcon.png';
import SufferingIconLeft from '../../assets/images/heroObjects2/sufferingIconLeft.png';


// Main animation variant for the parent container
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.05,
            staggerChildren: 0.05
        }
    }
};

// Animation variant for non-hoverable objects
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

// Animation variant for hoverable objects
const hoverItem = {
    rest: { 
        y: 0,
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: { delay: 7.5 }
    },
    hover: {
        y: -20,
        transition: {
            duration: 0.4,
            type: "tween",
        }
    }
};

// Creating the function for the hero
function Hero(props) {

    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        console.log("use effect hook, inView = ", inView);
    }, [inView])


    return(
        <motion.div className="parentOfAll"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}>

            <div className="allGroups">
            {/* First group staggered together; desk, and deskBack */}
                <IndividualImage className="deskBack" imageVariant={item} imageSource={DeskBack} style={{ "z-index": "0" }}/>
                <IndividualImage className="desk" imageVariant={item} imageSource={Desk} style={{ "z-index": "0" }}/>
            
            {/* Second group staggered together; notes, teddy, octopus, pencil case, pens, rightBox */}
                <IndividualImage className="notes" imageVariant={item} imageSource={Notes} style={{ "z-index": "1" }} />
                <IndividualImage className="teddyBear" imageVariant={item} imageSource={TeddyBear} style={{ "z-index": "0" }} />

                {/* HOVERABLE OCTOPUS */}
                <IndividualImage className="octopus" imageVariant={item} imageSource={Octopus} style={{ "z-index": "0" }} />

                <IndividualImage className="pencilCase" imageVariant={item} imageSource={PencilCase} style={{ "z-index": "10" }} />
                <IndividualImage className="chicken" imageVariant={item} imageSource={Chicken} style={{ "z-index": "10" }}/>
                <IndividualImage className="cup1" imageVariant={item} imageSource={Cup1} style={{ "z-index": "1" }} />
                <IndividualImage className="cup2" imageVariant={item} imageSource={Cup2} style={{ "z-index": "1" }} />
                <IndividualImage className="cup3" imageVariant={item} imageSource={Cup3} style={{ "z-index": "1" }} />

            {/* Third group staggered together; games, box (both), postcard1 and 2, bowl, statue, bunny */}
                <IndividualImage className="games" imageVariant={item} imageSource={Games} style={{ "z-index": "2" }} />
                <IndividualImage className="box" imageVariant={item} imageSource={Box} style={{ "z-index": "1" }} />
                <IndividualImage className="postcard1" imageVariant={item} imageSource={Postcard1} style={{ "z-index": "-1" }} />
                <IndividualImage className="bowl" imageVariant={item} imageSource={Bowl} style={{ "z-index": "3" }} />
                <IndividualImage className="postcard2" imageVariant={item} imageSource={Postcard2} style={{ "z-index": "-1" }} />
                <IndividualImage className="figure" imageVariant={item} imageSource={Figure} style={{ "z-index": "0" }} />
                <IndividualImage className="bunny" imageVariant={item} imageSource={Bunny} style={{ "z-index": "0" }} />
                <IndividualImage className="rightBox" imageVariant={item} imageSource={RightBox} style={{ "z-index": "0" }} />

            {/* Fourth group staggered together; posters, headset, keyboard, polaroidUp */}
                <IndividualImage className="posters" imageVariant={item} imageSource={Posters} style={{ "z-index": "-1" }} />
                <IndividualImage className="headset" imageVariant={item} imageSource={Headset} style={{ "z-index": "1" }} />
                <IndividualImage className="keyboard" imageVariant={item} imageSource={Keyboard} style={{ "z-index": "0" }} />
                <IndividualImage className="polaroidUp" imageVariant={item} imageSource={PolaroidUp} style={{ "z-index": "-1" }} />

            {/* Fifth group staggered together; cable, tablet, monitor */}
                <IndividualImage className="cable" imageVariant={item} imageSource={Cable} style={{ "z-index": "-1" }} />
                <IndividualImage className="tablet" imageVariant={item} imageSource={Tablet} style={{ "z-index": "0" }} />
                <IndividualImage className="monitor" imageVariant={item} imageSource={Monitor} style={{ "z-index": "0" }} />

            {/* Screen special */}
                <IndividualImage className="screen" imageVariant={item} imageSource={Screen} style={{ "z-index": "0" }} />
                <IndividualImage className="windowsXP" imageVariant={item} imageSource={SufferingBackground} style={{ "z-index" : "20" }} />
                <a href="#">
                    <HoverImages className="sufferingIcon" imageVariant={hoverItem} imageSource={SufferingIcon} style={{ "z-index": "21" }} />
                </a>

            </div>

        </motion.div>
    );
}

export default Hero;