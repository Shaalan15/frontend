// importing react
import React, { useState, useEffect } from 'react';
// import motion
import { motion } from 'framer-motion';
// importing the icons
import "@fortawesome/fontawesome-free/css/all.min.css";
// importing link from router-dom
import { Link } from 'react-router-dom';
// importing styled
import styled from 'styled-components';
// importing css
import './ActionsBarBottom.css';

const StyledLink = styled(Link)`
  margin-right: 0.5rem;
  border-radius: 1.25rem;
  border: 0;
  font-size: 1rem;
  transition: all 0.1s ease-in-out;
  color: black;
  text-decoration: none;

  &:hover, &:focus {
    background-color: black;
    color: white;
  }

  &:last-child {
    margin-right: 0;
  }
`;

// This is going to be a floating toolbar in the user profiles page. Notice that here we use
// fontawesome icons (styled a lil ugly sometimes)
function ActionsBarBottom(props)
{
    // States for determining whether or not action bar should show. When scrolling down,
    // it should disappear. Hence, we need to figure out the current Y position, and previous
    // one
    const [shouldShowActions, setShouldShowActions] = useState(false);
    const [lastYPos, setLastYPos] = useState(0);

    // Every time we scroll, we handle it by showing the actions basically
    // We also clean up on mount or when previous effect wears off
    useEffect(() => {

        // Function for handling scroll
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;

            // Show when current y position higher than previous - scrolling up
            setShouldShowActions(isScrollingUp);
            setLastYPos(yPos);
        }

        window.addEventListener("scroll", handleScroll, false);

        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [lastYPos]);


    return(
        <motion.div className="actionsBarBottom" 
        initial={{ opacity: 1 }}
        animate={{ opacity: shouldShowActions ? 1 : 0 }}
        transition={{ opacity: { duration: 0.2 } }}
        >

            <button>
                <StyledLink to='/' ><span className="fas fa-home" /></StyledLink>
            </button>
            <button>
                <StyledLink to='/user' ><span className="fas fa-user" /></StyledLink>
            </button>
            <button>
                <StyledLink to='/art-gallery' ><span className="fas fa-store" /></StyledLink>
            </button>


        </motion.div>
    );
}

export default ActionsBarBottom;