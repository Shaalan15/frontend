// importing React
import React from 'react';
// importing motion
import { Frame } from 'framer';

// Making the bouncing ball function
function BallBounce(props)
{
    return(
        <Frame className="bouncyBall"
        style={{
            width: 150,
            height: 150,
            borderRadius: 40,
            background: "#0CF",
            y: 200
         }}
            animate={{ y: 0, rotate: 360, background: "#85F" }}
         transition={{
             delay: 1,
             duration: 2,
             ease: [0.075, 0.82, 0.165, 1],
             repeat: Infinity,
             repeatType: "reverse",
             rotate: {
                delay: 1,
                duration: 2,
                ease: "linear",
                repeat: Infinity
             }
         }}
         />
    );
}

export default BallBounce;