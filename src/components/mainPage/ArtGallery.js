// Importing NavBar
import NavBar from './LandingItems/navbar/NavBar';
// Importing Footer 
import Footer from './LandingItems/footer/Footer';
import ProductListing from '../misc/ProductPages/ProductListing';
import React, {useEffect, useState} from "react";
import ProductInfo from '../misc/ProductPages/ProductInfo.js';
// Importing the css
import './LandingItems/navbar/NavBar.css'
import './LandingItems/testimonials/Cards.css'
import './LandingItems/footer/Footer.css'
// Importing motion
import { motion } from 'framer-motion'
// Importing styles
import styled from 'styled-components';
import '../misc/Assets/bg.css'
const Margin = styled.div`
    height: 90vh;
`;


function Paintings(){
    const [paintings, setpaintings] = useState([{
        title: '',
        description:'',
        price: '',
        color: '',
        productImage: '',
        associatedUsername: ''
    }])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/product/`).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setpaintings(jsonRes));
    })
    

    return <div>
        <h1>Art Gallery</h1>
        {paintings.map(painting =>
        <div className="art-piece">
            <ProductListing 
            productImage={painting.productImage} 
            title={painting.title}
            />
            <div className="artstart" hidden>
                <h2>{painting.description}</h2>
                <h3>{painting.price}</h3>
                <h4>{painting.associatedUsername}</h4>
            </div>
            
            </div>
        )}

    </div>
}

export default Paintings;