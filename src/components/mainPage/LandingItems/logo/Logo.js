// Importing react
import React from 'react';
// Importing styled components
import styled from "styled-components";
// Importing the image
import USLogo from "../../../../assets/images/bunny.png"

// Styling the wrapper for the logo
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
`;

// Styling the actual logo, as well as its container
const LogoImg = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;

    img {
        background: transparent;
        width: 100%;
        height: 100%;
    }
`;

// Styling the information next to the logo
const LogoText = styled.h2`
    text-transform: uppercase;
    background: transparent;
    font-size: 3rem;
    font-weight: bold;
    margin-left: 4px;
    padding-top: 8px;
    color: black;
`;

// Creating logo
function Logo(props) {
    return(
        // First we make the wrapper
        <LogoWrapper>
            {/* Inside the wrapper we'll have the image, then the text */}
            <LogoImg><img src={USLogo} alt="US. logo"/></LogoImg>
            <LogoText>US.</LogoText>
        </LogoWrapper>
    );
}

export default Logo;
