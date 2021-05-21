import React from 'react'
import { Link } from 'react-router-dom';
import '../../../App.css'

function ProductListing(props)
{
    return(
        <div>
          <img className="product-holder" src={props.productImage}/>
          <h1 className="artstart">{props.title}</h1>
          </div>
    );
}

export default ProductListing;