// importing React
import React, { useState } from 'react';
// importing motion
import { motion } from 'framer-motion';
// importing styled
import styled from 'styled-components';
// importing the close icon
import CloseIcon from '@material-ui/icons/Close';
// importing actions bar
import ActionsBarBottom from './ActionsBarBottom';
// importing the little jukebox
import Jukebox from './Jukebox';
// importing IndividualImages
import Img1 from '../../assets/images/userGalleryImages/img1.jpg';
import Img2 from '../../assets/images/userGalleryImages/img2.jpg';
import Img3 from '../../assets/images/userGalleryImages/img3.jpg';
import Img4 from '../../assets/images/userGalleryImages/img4.jpg';
import Img5 from '../../assets/images/userGalleryImages/img5.jpg';
import Img6 from '../../assets/images/userGalleryImages/img6.jpg';
import Img7 from '../../assets/images/userGalleryImages/img7.jpg';
import Img8 from '../../assets/images/userGalleryImages/img8.jpg';
import Img9 from '../../assets/images/userGalleryImages/img9.jpg';
import Img10 from '../../assets/images/userGalleryImages/img10.jpg';
import Img11 from '../../assets/images/userGalleryImages/img11.jpg';
import Img12 from '../../assets/images/userGalleryImages/img12.jpg';
// importing the css
import './UserGallery.css';
// importing Link
import { Link } from 'react-router-dom';
// importing the icons
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProfileMainContent = styled(motion.div)`
    width: 80%;
    margin-left: 16%;
    background-color: #fff;
    min-height: 100vh;
    display: grid;
`;

const StyledLinkUser = styled(Link)`
    color: #000;
    text-decoration: none;
    font-size: 1.05vh;
    font-weight: 500;
    text-transform: uppercase;
`;

const StyledLinkUserIcon = styled(Link)`
    color: #000;
    font-size: 1.05vh;

    &:not(:last-child) {
        margin-right: 1.05vh;
    }
`;

// Just for the initial
const initialContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1,
        transition: {
            delay: 2.3
        } }
};

function UserGallery(props) {
    let imageData = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 6,
            imgSrc: Img6
        },
        {
            id: 7,
            imgSrc: Img7
        },
        {
            id: 8,
            imgSrc: Img8
        },
        {
            id: 9,
            imgSrc: Img9
        },
        {
            id: 10,
            imgSrc: Img10
        },
        {
            id: 11,
            imgSrc: Img11
        },
        {
            id: 12,
            imgSrc: Img12
        },
        {
            id: 13,
            imgSrc: Img1
        },
        {
            id: 14,
            imgSrc: Img2
        },
        {
            id: 15,
            imgSrc: Img3
        },
        {
            id: 16,
            imgSrc: Img4
        },
        {
            id: 17,
            imgSrc: Img5
        },
        {
            id: 18,
            imgSrc: Img6
        },
        {
            id: 19,
            imgSrc: Img7
        },
        {
            id: 20,
            imgSrc: Img8
        },
        {
            id: 21,
            imgSrc: Img9
        },
        {
            id: 22,
            imgSrc: Img10
        },
        {
            id: 23,
            imgSrc: Img11
        },
        {
            id: 24,
            imgSrc: Img12
        }
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <ProfileMainContent
        >

            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>

            <motion.div className="gallery"
                variants={initialContainer}
                initial="hidden"
                animate="show">

                {imageData.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                            <div class="details">
                                <h2>The <span>Title</span></h2>
                                <p>Hey this is not my art don't kill me</p>
                                <div className="moreDetails">
                                    <StyledLinkUser to='/product/id'>Read<span className="linkUserSpan">More</span></StyledLinkUser>
                                    <div class="iconLinks">
                                        <StyledLinkUserIcon to='/'><span className="fas fa-heart" /></StyledLinkUserIcon>
                                        <StyledLinkUserIcon to='/'><span className="fas fa-eye" /></StyledLinkUserIcon>
                                        <StyledLinkUserIcon to='/'><span className="fas fa-share" /></StyledLinkUserIcon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </motion.div>

            <ActionsBarBottom />

            <Jukebox />

        </ProfileMainContent>
    );
}

export default UserGallery;