import React from 'react';



export default function CartItem(props){
        return(
            <div>
                <div className="cart-items">
                   <div className="cart-img"> <img src={props.item.image} /></div>
                   <div className="cart-details"> <h4>{props.item.name}</h4>
                    <h4 className="price"> <i class="fa fa-usd" aria-hidden="true"></i> {props.item.price}</h4>
                 <div className="quantity">  <button onClick={()=>props.increaseQuantity(props.item.id)}><i class="fa fa-plus" aria-hidden="true"></i></button> 
                 <h4>{props.item.quantity}</h4> 
                 <button onClick={()=>props.decreaseQuantity(props.item.id)}><i class="fa fa-minus" aria-hidden="true"></i></button> </div>
                    </div>
                    <div className="cart-delete"><button onClick={()=>props.deleteItem(props.item.id)}> <i class="fa fa-minus-circle" aria-hidden="true"></i> Remove </button> </div>
                    <div className="cart-item-total">
                        <h4>total= <i class="fa fa-usd" aria-hidden="true"></i> {props.item.total }</h4>
                    </div>    
                    </div>
            </div>
        )
    }