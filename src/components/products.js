import React from 'react';
import SingleProduct from './singleProduct';


export default function products(props){
        return(
            <div className="products">
                <h2>Our Products</h2>
                <hr />
                <div className="container">
                {props.products.map((product)=>(
                    <SingleProduct product={product} addCart={props.addCart} />
                ))}
            </div>
            </div>
        )
    }