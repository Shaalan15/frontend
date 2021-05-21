import React from 'react'
import Holder from './ProductHolder'
function Grids(props)
{
    return(
        <div className="App end-of-page">
          
<div class="art-row">
  <div><Holder link="./product-1" productlabel="product-1"/></div>
  <div><Holder link="./product-2" productlabel="product-2"/></div>
  <div><Holder link="./product-3" productlabel="product-3"/></div>
</div>
<div class="art-row">
  <div><Holder link="./product-4" productlabel="product-4"/></div>
  <div><Holder link="./product-5" productlabel="product-5"/></div>
  <div><Holder link="./product-4" productlabel="product-2"/></div>
</div>

        </div>
    );
}

export default Grids;