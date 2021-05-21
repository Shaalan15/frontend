// importing react
import React from 'react';
// importing motion
import { motion } from 'framer-motion';

// Main animation variant for the parent container
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1
    }
};

// The main motion is done in CSS because framer-motion documentation with translation gives
// me a headache
// Code from: https://www.youtube.com/watch?v=MnMxRkX7DvU&t=17s&ab_channel=OnlineTutorials
function Cards(props){
    return(
        // Entire card Wrapper
        <motion.div className="cardPart"
        variants={container}
        initial="hidden"
        animate="visible">

            {/* Text inside card */}
            <div className="textInCard">
                <h2>{props.Title}</h2>
                <p>{props.Content}</p>
            </div>

            {/* Image of card */}
            <motion.img 
            src={props.ImageURL}/>

        </motion.div>
    );
}

export default Cards;