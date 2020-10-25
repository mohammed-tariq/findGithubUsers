import React from 'react';
import {Link} from 'react-router-dom'

class ProductDetail extends React.Component{
    constructor(){
        super();
        this.state={
            product:null,
        }
    }

    componentDidMount(){
        this.props.products.map((item)=>{
            if(item.pid==this.props.match.params.id){
                this.setState({product:{item}});
            }

        })
        
    }


    render(){
        return(
           
           <div className="productDetail-main">
               <div className="goback"><Link to="/products" className="gobacklink"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back</Link></div>
           { this.state.product!==null && <div className="productDetail">
                <div className="product-img">
                    <img src={this.state.product.item.image.url} /> 
                </div>
                <div className="product-info">
                    <h2>{this.state.product.item.product_name}</h2>
                    <h4>Company: {this.state.product.item.company}</h4>
                    <h3 className="price"> Price:  <i class="fa fa-usd" aria-hidden="true"></i> {this.state.product.item.price}</h3>
                    <h3>Description: </h3>  <p>{this.state.product.item.description}</p>
                    <input type="button" value="ADD TO CART" onClick={()=>this.props.addCart(this.state.product.item.pid)} className="add-btn" />
                </div>
            </div>
           }

           </div>
           )
    }
}

export default ProductDetail;