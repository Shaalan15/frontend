// Importing react
import React, { useState, useEffect } from "react";
// Importing MediaQuery
import { useMediaQuery } from "react-responsive";
// Importing styled to be able to style the page
import styled from "styled-components";
// Importing the logo
import Logo from "../logo/Logo";
// Importing the links
import NavLinks from "./NavLinks.js";
// Importing the search bar
import SearchBar from './SearchBar.js';
// Importing the sizes
import { DeviceSize } from '../responsive/DeviceSize';
// Importing the smaller navigation links
import HamNavLinks from "./HamNavLinks";

// ---------------------------- Stylizing the navbar using styled-components

// Main Wrapper for Navbar
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1920px;
    height: 6rem;
    align-items: center;
    padding: 0 1.5 rem;
    z-index: 9999;
    border-bottom: 2px solid rgba(255,255,255,.05);
    margin-left: 50px;
    margin-right: 50px;
    position: relative;
    background-color: transparent;
`;

// NavBar is separated into left, center and right

// Left side of Navbar
const LeftSide = styled.div`
    display: flex;
    position: relative;
    background-color: transparent;
`;

// Center of Navbar
// Flex is a way to define how much each portion is gonna take of the size given to it
const Center = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: transparent;
`;

// Right side of Navbar
const RightSide = styled.div`
    display: flex;
    position: relative;
    background-color: transparent;
`;

// ---------------------------- Creating the NavBar function/component
function NavBar(props) {
    // To change to hamburger when smaller than specific size
    const isSmaller = useMediaQuery({ maxWidth: DeviceSize.smaller });
    
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['navbar navbar-expand-lg'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    // Setting the return value, or the component
    return(
        // Note that rather than going insane trying to create responsive width-changing, we use the bootstrap navbar container here so that we can inherit the 
        // responsiveness of the container-fluid and I don't have to go on 10 websites posting the same "how do i remove window scrollin!!!! help!!" question :)
        <nav className={navbarClasses.join(" ")} style={{ "z-index": "9999" }}>
            <div className="container-fluid">
                <Wrapper>
                    {/* For the left side, we want to import the Logo component */}
                    <LeftSide>
                        <Logo />
                    </LeftSide>

                    <Center>
                        {/* For the middle, we want to add the different links */}
                        {/* If smaller, hide search bar */}
                        {!isSmaller && <NavLinks />}
                    </Center>

                    <RightSide>
                        {/* If smaller, hide search bar */}
                        {!isSmaller && <SearchBar />}
                        {/* If smaller, render smaller navbar */}
                        {isSmaller && <HamNavLinks />}
                    </RightSide>
                </Wrapper>
            </div>
        </nav>
    );
}

export default NavBar;