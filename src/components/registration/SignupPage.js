// Importing react
import React from 'react';
// Importing the styles
import styled from 'styled-components';
// Importing the SignupForm
import SignupForm from './SignupForm.js';
// Importing motion
import { motion } from 'framer-motion';

const MainSignupContainer = styled(motion.div)`
    width: 70vw;
    height: 72vh;
    min-width: 1000px;
    min-height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 100px auto;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    border-radius: 10px;
`;

const SignupContentLeft = styled.div`
    border-radius: 10px 0 0 10px;
    position: relative;
    margin: auto;
`;

const SignupContentRight = styled.div`
    border-radius: 0 10px 10px 0;
    position: relative;
    padding: 0 1.8rem;
`;

const SignupFormInnerContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1.5vh;
`;

// Styles for the header
const SignupHeaderText = styled.h2`
    font-size: 100px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

// Styles for the smaller text
const SignupSmallText = styled.h5`
    color: #fff;
    -webkit-text-stroke: 1px rgba(15, 15, 15, 0.2);
    font-weight: 500;
    font-size: 1.5vh;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`;

// container with backdrop and the content
const SignupTopContainer = styled.div`
    width: 100%;
    height: 250px;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

// Making the header container
const SignupHeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
`;


// Making the backdrop
const SignupBackdrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(68deg);
    top: -290px;
    left: -200px;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg, 
        rgba(241, 196, 15, 1) 20%, 
        rgba(243, 172, 18, 1) 100%
    );
`;

// Making the backdrop
const SignupBackdrop2 = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(68deg);
    top: 450px;
    left: 100px;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg, 
        rgba(241, 196, 15, 1) 20%, 
        rgba(243, 172, 18, 1) 100%
    );
`;


// Just for the initial
const initialContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};


function SignUpPage(props) {
    return (
        <MainSignupContainer
            variants={initialContainer}
            initial="hidden"
            animate="show"
        >

            <SignupContentLeft>
                
                <SignupTopContainer>
                    <SignupBackdrop />
                    <SignupHeaderContainer>
                        <SignupHeaderText>Welcome</SignupHeaderText>
                        <SignupHeaderText>Here</SignupHeaderText>
                    </SignupHeaderContainer>
                </SignupTopContainer>

            </SignupContentLeft>

            <SignupContentRight>
                
                <SignupBackdrop2 />

                <SignupFormInnerContainer>
                    <SignupForm />
                </SignupFormInnerContainer>

            </SignupContentRight>

        </MainSignupContainer>
    );
}

export default SignUpPage;