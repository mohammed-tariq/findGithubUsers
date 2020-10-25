import React from 'react';
import CartItem from './cartItem';
import {Link} from 'react-router-dom';

class Cart extends React.Component{

    componentDidMount(){
        this.props.total()
    }

    render(){
        return(
            <div className="cart">
                <div className="cart-bg">

                </div>
                <div className="cart-head">
                    <h1>Your Cart Items</h1>
                    <hr />
                </div>
                    {this.props.cart.length<1  ? 
                    <div className="cart-empty">
                        <h1>Your Cart is Empty</h1>
                        <Link to="/products" className="shopNow">Shop Now</Link>
                    </div>   
                    :
                    <div>
                    {this.props.cart.map((item)=>(
                        <CartItem item={item} deleteItem={this.props.deleteItem} increaseQuantity={this.props.increaseQuantity} decreaseQuantity={this.props.decreaseQuantity}/>
                    ))}
                    <button className="clearall" onClick={this.props.deleteAll}>Clear All</button>
                    <div className="total">
                <h4> Total Amount: <i class="fa fa-usd" aria-hidden="true"></i> {this.props.tot_amount}</h4>
                <h4> Tax: <i class="fa fa-usd" aria-hidden="true"></i> {Math.round(this.props.tot_amount * 0.07)}</h4>
                <h4> Total Amount: <i class="fa fa-usd" aria-hidden="true"></i> {Math.round(this.props.tot_amount + (this.props.tot_amount * 0.07))}</h4>
                </div>
                <Link to="/login" className="checkout">Check Out</Link>
                </div>}

            </div>
        )
    }
}

export default Cart;