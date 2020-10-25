import React from 'react';

export default function homeInfo(){
    return(
        <div className="Home-info-main">
        <div className="Home-info">
                <div>
                  <i class="fa fa-truck fa-4x" aria-hidden="true"></i>
                  <h3>Free Shipping</h3>
                  <p>We provide free shipping for our products world wide. You can get the products at exact price without any extra charges </p>
                </div>
                <div>
                <i class="fa fa-check-square-o fa-4x" aria-hidden="true"></i>
                  <h3>Handpicked Products</h3>
                  <p>Our Team provides handpicked products from all over the globe so that our customers enjoy amazing products with a single click </p>
                </div>
                <div>
                  <i class="fa fa-undo fa-4x" aria-hidden="true"></i>
                  <h3>30 Day Return Policy</h3>
                  <p>We assure that you will love our handpicked products. If doesn't satisfy you, you can return it within 30 days. No Question Asked</p>
                  </div>
        </div>
        </div>
    )
}