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
// import Bowl from '../../../../../public/images/userGalleryImages/'
import Bowl from '../../../../assets/images/heroObjectsResized/bowl.png';
import Box from '../../../../assets/images/heroObjectsResized/box.png';
import Bunny from '../../../../assets/images/heroObjectsResized/bunny.png';
import Cable from '../../../../assets/images/heroObjectsResized/cable.png';
import Chicken from '../../../../assets/images/heroObjectsResized/chicken.png';
import Cup1 from '../../../../assets/images/heroObjectsResized/cup1.png';
import Cup2 from '../../../../assets/images/heroObjectsResized/cup2.png';
import Cup3 from '../../../../assets/images/heroObjectsResized/cup3.png';
import Desk from '../../../../assets/images/heroObjectsResized/desk.png';
import DeskBack from '../../../../assets/images/heroObjectsResized/deskBack.png';
import Figure from '../../../../assets/images/heroObjectsResized/figure.png';
import Games from '../../../../assets/images/heroObjectsResized/games.png';
import Headset from '../../../../assets/images/heroObjectsResized/headset.png';
import Keyboard from '../../../../assets/images/heroObjectsResized/keyboard.png';
import Monitor from '../../../../assets/images/heroObjectsResized/monitor.png';
import Notes from '../../../../assets/images/heroObjectsResized/notes.png';
import Octopus from '../../../../assets/images/heroObjectsResized/octopus.png';
import PencilCase from '../../../../assets/images/heroObjectsResized/pencilCase.png';
import PolaroidUp from '../../../../assets/images/heroObjectsResized/polaroidUp.png';
import Postcard1 from '../../../../assets/images/heroObjectsResized/postcard1.png';
import Postcard2 from '../../../../assets/images/heroObjectsResized/postcard2.png';
import Posters from '../../../../assets/images/heroObjectsResized/posters.png';
import RightBox from '../../../../assets/images/heroObjectsResized/rightBox.png';
import Screen from '../../../../assets/images/heroObjectsResized/screen.png';
import Tablet from '../../../../assets/images/heroObjectsResized/tablet.png';
import TeddyBear from '../../../../assets/images/heroObjectsResized/teddyBear.png';
import SufferingBackground from '../../../../assets/images/heroObjectsResized/sufferingBackground.png';
import SufferingIcon from '../../../../assets/images/heroObjectsResized/sufferingIcon.png';
// importing the blurry
import BowlBlurry from '../../../../assets/images/heroObjectsBlurry/bowlBlurry.png';
import BoxBlurry from '../../../../assets/images/heroObjectsBlurry/boxBlurry.png';
import BunnyBlurry from '../../../../assets/images/heroObjectsBlurry/bunnyBlurry.png';
import CableBlurry from '../../../../assets/images/heroObjectsBlurry/cableBlurry.png';
import ChickenBlurry from '../../../../assets/images/heroObjectsBlurry/chickenBlurry.png';
import Cup1Blurry from '../../../../assets/images/heroObjectsBlurry/cup1Blurry.png';
import Cup2Blurry from '../../../../assets/images/heroObjectsBlurry/cup2Blurry.png';
import Cup3Blurry from '../../../../assets/images/heroObjectsBlurry/cup3Blurry.png';
import DeskBlurry from '../../../../assets/images/heroObjectsBlurry/deskBlurry.png';
import DeskBackBlurry from '../../../../assets/images/heroObjectsBlurry/deskBackBlurry.png';
import FigureBlurry from '../../../../assets/images/heroObjectsBlurry/figureBlurry.png';
import GamesBlurry from '../../../../assets/images/heroObjectsBlurry/gamesBlurry.png';
import HeadsetBlurry from '../../../../assets/images/heroObjectsBlurry/headsetBlurry.png';
import KeyboardBlurry from '../../../../assets/images/heroObjectsBlurry/keyboardBlurry.png';
import MonitorBlurry from '../../../../assets/images/heroObjectsBlurry/monitorBlurry.png';
import NotesBlurry from '../../../../assets/images/heroObjectsBlurry/notesBlurry.png';
import OctopusBlurry from '../../../../assets/images/heroObjectsBlurry/octopusBlurry.png';
import PencilCaseBlurry from '../../../../assets/images/heroObjectsBlurry/pencilCaseBlurry.png';
import PolaroidUpBlurry from '../../../../assets/images/heroObjectsBlurry/polaroidUpBlurry.png';
import PostCard1Blurry from '../../../../assets/images/heroObjectsBlurry/postcard1Blurry.png';
import PostCard2Blurry from '../../../../assets/images/heroObjectsBlurry/postcard2Blurry.png';
import PostersBlurry from '../../../../assets/images/heroObjectsBlurry/postersBlurry.png';
import RightBoxBlurry from '../../../../assets/images/heroObjectsBlurry/rightBoxBlurry.png';
import ScreenBlurry from '../../../../assets/images/heroObjectsBlurry/screenBlurry.png';
import TabletBlurry from '../../../../assets/images/heroObjectsBlurry/tabletBlurry.png';
import TeddyBearBlurry from '../../../../assets/images/heroObjectsBlurry/teddyBearBlurry.png';
import SufferingBackgroundBlurry from '../../../../assets/images/heroObjectsBlurry/sufferingBackgroundBlurry.png';
import SufferingIconBlurry from '../../../../assets/images/heroObjectsBlurry/sufferingIconBlurry.png';

// Main animation variant for the parent container
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
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
        transition: { delay: 6 }
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

    const { ref, inView } = useInView({ threshold: 0.5 });

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
                <IndividualImage className="deskBack" placeHolder={DeskBackBlurry} imageVariant={item} imageSource={DeskBack} style={{ "z-index": "0" }}/>
                <IndividualImage className="desk" placeHolder={DeskBlurry} imageVariant={item} imageSource={Desk} style={{ "z-index": "0" }}/>
            
            {/* Second group staggered together; notes, teddy, octopus, pencil case, pens, rightBox */}
                <IndividualImage className="notes" placeHolder={NotesBlurry} imageVariant={item} imageSource={Notes} style={{ "z-index": "1" }} />
                <IndividualImage className="teddyBear" placeHolder={TeddyBearBlurry} imageVariant={item} imageSource={TeddyBear} style={{ "z-index": "0" }} />

                {/* HOVERABLE OCTOPUS */}
                <IndividualImage className="octopus" placeHolder={OctopusBlurry} imageVariant={item} imageSource={Octopus} style={{ "z-index": "0" }} />

                <IndividualImage className="pencilCase" placeHolder={PencilCaseBlurry} imageVariant={item} imageSource={PencilCase} style={{ "z-index": "10" }} />
                <IndividualImage className="chicken" placeHolder={ChickenBlurry} imageVariant={item} imageSource={Chicken} style={{ "z-index": "10" }}/>
                <IndividualImage className="cup1" placeHolder={Cup1Blurry} imageVariant={item} imageSource={Cup1} style={{ "z-index": "1" }} />
                <IndividualImage className="cup2" placeHolder={Cup2Blurry} imageVariant={item} imageSource={Cup2} style={{ "z-index": "1" }} />
                <IndividualImage className="cup3" placeHolder={Cup3Blurry} imageVariant={item} imageSource={Cup3} style={{ "z-index": "1" }} />

            {/* Third group staggered together; games, box (both), postcard1 and 2, bowl, statue, bunny */}
                <IndividualImage className="games" placeHolder={GamesBlurry} imageVariant={item} imageSource={Games} style={{ "z-index": "2" }} />
                <IndividualImage className="box" placeHolder={BoxBlurry} imageVariant={item} imageSource={Box} style={{ "z-index": "1" }} />
                <IndividualImage className="postcard1" placeHolder={PostCard1Blurry} imageVariant={item} imageSource={Postcard1} style={{ "z-index": "-1" }} />
                <IndividualImage className="bowl" placeHolder={BowlBlurry} imageVariant={item} imageSource={Bowl} style={{ "z-index": "3" }} />
                <IndividualImage className="postcard2" placeHolder={PostCard2Blurry} imageVariant={item} imageSource={Postcard2} style={{ "z-index": "-1" }} />
                <IndividualImage className="figure" placeHolder={FigureBlurry}imageVariant={item} imageSource={Figure} style={{ "z-index": "0" }} />
                <IndividualImage className="bunny" placeHolder={BunnyBlurry} imageVariant={item} imageSource={Bunny} style={{ "z-index": "0" }} />
                <IndividualImage className="rightBox" placeHolder={RightBoxBlurry} imageVariant={item} imageSource={RightBox} style={{ "z-index": "0" }} />

            {/* Fourth group staggered together; posters, headset, keyboard, polaroidUp */}
                <IndividualImage className="posters" placeHolder={PostersBlurry} imageVariant={item} imageSource={Posters} style={{ "z-index": "-1" }} />
                <IndividualImage className="headset" placeHolder={HeadsetBlurry} imageVariant={item} imageSource={Headset} style={{ "z-index": "1" }} />
                <IndividualImage className="keyboard" placeHolder={KeyboardBlurry} imageVariant={item} imageSource={Keyboard} style={{ "z-index": "0" }} />
                <IndividualImage className="polaroidUp" placeHolder={PolaroidUpBlurry} imageVariant={item} imageSource={PolaroidUp} style={{ "z-index": "-1" }} />

            {/* Fifth group staggered together; cable, tablet, monitor */}
                <IndividualImage className="cable" placeHolder={CableBlurry} imageVariant={item} imageSource={Cable} style={{ "z-index": "-1" }} />
                <IndividualImage className="tablet" placeHolder={TabletBlurry} imageVariant={item} imageSource={Tablet} style={{ "z-index": "0" }} />
                <IndividualImage className="monitor" placeHolder={MonitorBlurry} imageVariant={item} imageSource={Monitor} style={{ "z-index": "0" }} />

            {/* Screen special */}
                <IndividualImage className="screen" placeHolder={ScreenBlurry} imageVariant={item} imageSource={Screen} style={{ "z-index": "0" }} />
                <IndividualImage className="windowsXP" placeHolder={SufferingBackgroundBlurry} imageVariant={item} imageSource={SufferingBackground} style={{ "z-index" : "20" }} />
                <a href="#">
                    <HoverImages className="sufferingIcon" placeHolder={SufferingIconBlurry} imageVariant={hoverItem} imageSource={SufferingIcon} style={{ "z-index": "21" }} />
                </a>

            </div>

        </motion.div>
    );
}

export default Hero;