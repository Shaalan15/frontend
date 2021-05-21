// Importing react
import React, { useEffect } from 'react';
// Importing motion
import { motion } from 'framer-motion';
// importing to know when in frame
import { useInView } from 'react-intersection-observer';
// Importing the ball
import BallBounce from './BallBounce';
// Importing link from router dom
import { Link } from 'react-router-dom';

// Just for the initial
const initialContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};


function SignUp(props)
{
    const { ref, inView } = useInView({ threshold: 0.3 });

    useEffect(() => {
        console.log("use effect hook, inView = ", inView);
    }, [inView])

    return(
        // Here, we use the bootstrap grids to organize things
        <motion.div class="container"
        variants={initialContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        ref={ref}
        >
            <div class="row">
                <div class="col-sm-8 firstColumn">
                    <div className="text">
                        <motion.h2 className="signupHeader">
                            Sign Up Now
                        </motion.h2>
                    </div>
                    <div className="button">
                        <Link to='/register'><button class="signButton">LET'S A GO!</button></Link>
                    </div>
                </div>
                <div class="col-sm-4">
                    <BallBounce />
                </div>
            </div>
        </motion.div>
    );
}

export default SignUp;