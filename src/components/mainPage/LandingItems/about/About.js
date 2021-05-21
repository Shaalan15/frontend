// importing react
import React, { useEffect } from 'react';
// importing motion
import { motion, useAnimation } from 'framer-motion';
import IndividualImage from '../firstLandingLazy/IndividualImage';
import HoverImage from '../firstLandingLazy/HoverImages'
// importing hook to know when in frame
import { useInView } from 'react-intersection-observer';
// importing the images
import Tablet from '../../../../assets/images/aboutImagesResized/tablet.png';
import TabletPen from '../../../../assets/images/aboutImagesResized/tabletPen.png';
import BackgroundPaper from '../../../../assets/images/aboutImagesResized/backgroundPaper.png';
import FrontPaper from '../../../../assets/images/aboutImagesResized/frontPaper.png';

// Just for the initial
const initialContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};

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

// Animation variant for children
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


// Animation variant for paper objects
const hoverItem = {
    rest: {
        y: 0,
        opacity: 0,
        scale: 0
    },
    show: {
        opacity: 1,
        scale: 1
    },
    hover: {
        rotate: -7,
        y: -20,
        x: -30,
        scale: 1.2,
        transition: {
            duration: 0.4,
            type: "tween",
        }
    }
};

// Making the function
function About(props){
    
    const {ref, inView} = useInView({ threshold: 0.5 });

    useEffect(() => {
        console.log("use effect hook, inView = ", inView);
    }, [inView])

    return (
        // Div that holds everything, shows only if in view
        <motion.div className="bigBoy"
            variants={initialContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            ref={ref}
        >
            <motion.div className="allGroups"
            variants={container}
            initial="hidden"
            animate="visible">
                
                {/* This is the only hoverable part, the main text */}
                <HoverImage className="paper" imageVariant={hoverItem} imageSource={FrontPaper} style = {{ "z-index": "10" }}/>

                <IndividualImage className="tablet" imageVariant={item} imageSource={Tablet} style= {{ "z-index": "0" }} />
                <IndividualImage className="tabletPen" imageVariant={item} imageSource={TabletPen} style={{ "z-index": "0" }} />
                <IndividualImage className="backPaper" imageVariant={item} imageSource={BackgroundPaper} style={{ "z-index": "0" }} />

                {/* Tablet components text */}
                <motion.h2 className="headerText"
                    variants={item}>
                    About Us
                </motion.h2>

            </motion.div>
        </motion.div>
    );
}

export default About;