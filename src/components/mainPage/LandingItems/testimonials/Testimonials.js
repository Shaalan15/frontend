// importing react
import React, { useEffect } from 'react';
// importing motion
import { motion } from 'framer-motion';
// importing to know when in frame
import { useInView } from 'react-intersection-observer';
// importing the cards
import Cards from './Cards';
// importing images
import Octopus from '../../../../assets/images/testimonialImages/octopus.png';
import TeddyBear from '../../../../assets/images/testimonialImages/teddyBear.png';

// Just for the initial
const initialContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};

function Testimonials(props){

    const { ref, inView } = useInView({ threshold: 0.3 });

    useEffect(() => {
        console.log("use effect hook, inView = ", inView);
    }, [inView])
    
    // We're making 3 cards, basically, where hovering on each shows some text
    return(
        <motion.div className="containsAll"
            variants={initialContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            ref={ref}>

            <Cards Title="Big Bad Ted" Content="Decent service. Very simple. Draw image, open, post. Told cubs about it." ImageURL={TeddyBear} />
            <Cards Title="OctoBoy" Content="[intelligble underwater noises]" ImageURL={Octopus} />

        </motion.div>
    );

}

export default Testimonials;

