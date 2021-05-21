// importing react
import React from 'react';
// importing motion
import { motion } from 'framer-motion';

// Making the function
function HoverImages(props){
    return(
        <div className={props.className}>
            <motion.img src={props.imageSource}
                style={props.style}
                alt={props.className}
                variants={props.imageVariant}
                initial="rest"
                animate="show"
                whileHover="hover" />
        </div>
    );
}

export default HoverImages;