import React from 'react';
import '../Assets/bg.css';

function ProductInfo(props)
{
    return(
        <div>
          <div className="artstart">
          <h2>{props.description}</h2>
          <h3>{props.price}</h3>
          <h4>{props.associatedUsername}</h4>
          </div>
        </div>
    );
}

export default ProductInfo;