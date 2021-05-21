// Importing react
import React, { useState, useEffect } from 'react';
// Importing the styles
import styled from 'styled-components';
// Importing the LoginForm
import LoginForm from './LoginForm';
// Importing motion
import { motion } from 'framer-motion';

// Container for the box
const FullContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// Making the box style
const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

// container with backdrop and the content
const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

// Making the backdrop
const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(68deg);
    top: -290px;
    left: -70px;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg, 
        rgba(241, 196, 15, 1) 20%, 
        rgba(243, 172, 18, 1) 100%
    );
`;

// Making the header container
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

// Styles for the header
const HeaderText = styled.h2`
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

// Styles for the smaller text
const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`;

// For what would be inside as forms and so
const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8rem;
`;

// Variants for the different styles for when we switch between different states
const backdropVariants = {
    // For the expanded state, when we're switching
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    // For the normal collapsed state
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
};

// Transition when expanding, changing it to modify the framer-motion settings
const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30
};

// Just for the initial
const initialContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};

function AccountBox(props)
{
    // States for expanded or collapsed backdrop
    const [isExpanded, setExpanded] = useState(false);

    // Toggle between states, or animations. Trigger this when login successful
    const playExpandingAnimation = () => {
        // Initially, expand down when link clicked
        setExpanded(true);
        // Play until a certain timeout
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    }

    return(
        <FullContainer
        variants={initialContainer}
        initial="hidden"
        animate="show"
        >
            <BoxContainer>

                <TopContainer>
                    <BackDrop 
                    variants = {backdropVariants}
                    initial={false}
                    animate={isExpanded ? "expanded" : "collapsed"} 
                    transition={expandingTransition} />
                    <HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>Back</HeaderText>
                        <SmallText>Please sign-in to continue!</SmallText>
                    </HeaderContainer>
                </TopContainer>

                <InnerContainer>
                    <LoginForm />
                </InnerContainer>

            </BoxContainer>
        </FullContainer>
    );   
}

export default AccountBox;