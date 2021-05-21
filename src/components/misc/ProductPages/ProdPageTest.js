import React from 'react'
import { Link } from 'react-router-dom';
import ProductComponent from './Productcomp';


function Product(props)
{
    return(
        <div>
            <ProductComponent title={props.title} />
        </div>
    );
}

export default Product;