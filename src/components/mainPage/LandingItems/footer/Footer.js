// import React
import React from 'react';
// Importing styles
import styled from 'styled-components';
// import icons
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { Youtube } from '@styled-icons/boxicons-logos/Youtube';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';

// Fix these later
const TwitterIcon = styled(Twitter)`
    color: white;
    width: 50px;
    height: 50px;

    &:hover {
        transform: scale(2);
        color: #1DA1F2;
    }
`;

const FacebookIcon = styled(Facebook)`
    color: white;
    width: 50px;
    height: 50px;

    &:hover {
        transform: scale(2);
        color:	#3b5998;
    }
`;

const YoutubeIcon = styled(Youtube)`
    color: white;
    width: 50px;
    height: 50px;

    &:hover {
        transform: scale(2);
        color: #FF0000;
    }
`;

const InstagramIcon = styled(Instagram)`
    color: white;
    width: 50px;
    height: 50px;
    
    &:hover {
        transform: scale(2);
         color: #C13584;
    }
`;

// This is the same footer as was in the other file (not React)
function Footer(props)
{
    return(
        <section class="bottomFooter">
            <footer>
                <div class="footer-content">
                    <ul class="social-links">
                        <li class="social-icon-twitter"><a href="#"><TwitterIcon /></a></li>
                        <li class="social-icon-facebook"><a href="#"><FacebookIcon /></a></li>
                        <li class="social-icon-youtube"><a href="#"><YoutubeIcon /></a></li>
                        <li class="social-icon-insta"><a href="#"><InstagramIcon /></a></li>
                    </ul>
                </div>
            </footer>
        </section>
    );
}

export default Footer;