import './Misc.css'
import './Assets/products.css'
function ProductHolder(props)
{
    return(
        <div className="App">
            <a href={props.link} target="_blank">
            <div className={props.productlabel} art-piece >            
            </div>
            </a>
        </div>
    );
}

export default ProductHolder;