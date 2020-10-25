import React from 'react';
import {Link} from 'react-router-dom';


export default function navbar(props){
    return(
        <nav>
            <div>
            <Link to="/" className="logo">My E-Commerce. </Link>
            </div>
            <div className="pages">
            <Link to="/products" className="navLinks"> Our Products </Link>
            <Link to="/cart" className="navLinks">{props.cart>0? <sup> {props.cart} </sup> : ""} <i class="fa fa-shopping-cart" aria-hidden="true"> </i>  Cart </Link>            
            </div>
        </nav>
    )
}