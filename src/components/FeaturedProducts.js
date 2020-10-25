import React from 'react';
import SingleProduct from './singleProduct';
import {Link} from 'react-router-dom';


export default function featuredProducts(props){
        return(
            <div id="featured">
                <div className="featured">
                <h1>Featured Products</h1>
                <Link to='/products' className="viewall">View All</Link>
                </div>
                <div className="container">
                {props.products.map((item)=>(
                    item.featured == true && <SingleProduct product={item} addCart={props.addCart}/> 
                ))}
               </div>
             

            </div>
        )
    }



