// importing react
import React from 'react';
// importing motion
import { motion } from 'framer-motion';
// importing lazy-load
import LazyLoad from 'react-lazyload';

function IndividualImage(props) {
    return(
        <div className={props.className}>

            <LazyLoad 
            once={true}
            placeholder={props.placeHolder}>

                <motion.img src={props.imageSource}
                    style={props.style}
                    alt={props.className}
                    variants={props.imageVariant} />

            </LazyLoad>

        </div>
    );
}

export default IndividualImage;