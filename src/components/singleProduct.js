import React from 'react';
import {Link} from 'react-router-dom';




export default function singleProduct(props)
    {
    return(
    <div className="singleProduct">
        <div className="middle-container">
            <div className="middle-info">
                <div className="image">
                <img src={props.product.image.url} />
                </div>
                <div className="name">
                <h4>{props.product.product_name}</h4>
                </div>
                <div>
                <h4 className="price"> <i class="fa fa-usd" aria-hidden="true"></i> {props.product.price}</h4>
                </div>
            </div>
            <div className="middle-btns">
            <Link to={`/productDetail/${props.product.pid}`}>  
            <i class="fa fa-info-circle " aria-hidden="true" > More Info </i>
            </Link>
            <button onClick={()=>props.addCart(props.product.pid)} className="add-cart"><i class="fa fa-cart-plus 2x" aria-hidden="true"> </i> Add to Cart</button>
            </div>
        </div>
    </div>
    )
}


