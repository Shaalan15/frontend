// importing react
import React, { useState, useEffect } from 'react';
// importing motion
import { motion } from 'framer-motion';
// importing user products gallery
import UserGallery from './UserGallery';
// importing styled
import styled from 'styled-components';
// importing pics
import ProfilePic from '../../assets/images/userGalleryImages/crisalysSmaller.png';
import Background from '../../assets/images/userGalleryImages/background.jpg';
// importing hook to know when in frame
import { useInView } from 'react-intersection-observer';

const ProfileSideBar = styled(motion.div)`
    width: 20%;
    height: 100vh;
    position: fixed;
    background-color: black;
    position: fixed;
    border-right: 2px solid #fff;
`;

const ProfileSideBarImage = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
`;

const ProfilePictureWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    border-radius: 50%;
    border: 5px solid #fff;
    width: 150px;
    height: 150px;
    top: 43%;
    left: 81%;
    z-index: 100;
`;

const ProfilePictureImage = styled(motion.img)`
    position: absolute;
    clip-path: circle()
    height: 100%;
    width: 100%;
    z-index: 100;
`;

// Just for the initial
const initialContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
};
const otherContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 1
        }
    }
};

function Profile(props)
{
    return (
        <div>

            <ProfileSideBar
                variants={initialContainer}
                initial="hidden"
                animate="show">
                <ProfileSideBarImage src={Background} />
                <ProfilePictureWrapper>
                    <ProfilePictureImage
                        variants={otherContainer}
                        initial="hidden"
                        animate="show" src={ProfilePic}/>
                </ProfilePictureWrapper>

            </ProfileSideBar>

            <UserGallery />

        </div>
    );
}

export default Profile;