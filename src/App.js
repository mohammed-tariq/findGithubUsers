import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import FeaturedProducts from './components/FeaturedProducts';
import Products from './components/products';
import ProductDetail from './components/productDetail';
import Cart from './components/cart';
import Login from './components/login';
import HomeInfo from'./components/homeinfo';
import About from './components/about';
import Footer from './components/footer';


class App extends React.Component{
constructor()
{
  super();
  this.state={
    products:[
      {
        pid: 1 ,
        product_name: "Samsung Galaxy A31 (Prism Black, 128-6 GB)",
        price: 300,
        company: "Samsung",
        description:"The Samsung Galaxy A31 smartphone is one worth flaunting around. It comes with a host of enviable features, such as its quad-camera setup (48 MP main + 8 MP ultra-wide-angle camera + 5 MP macro camera + 5 MP depth camera), 20 MP front camera, and a large Infinity-U display. Oh, that’s not all, its stylish geometric design with a glossy finish will make everyone take a glance at your phone.",
        featured: true,
        image: { url: "/images/product-1.jpeg" }
      },{
        pid: 2 ,
        product_name: "Noise ColorFit Pro 2 Smartwatch (Blue Strap)",
        price: 60,
        company: "Noise",
        description:"The ColorFit Pro 2 from Noise is a smartwatch that flaunts a stylish new design that features a gorgeous 3.3 cm (1.3) full-touch colour display. It also has interesting health and activity tracking features. It can track activities through nine sports modes. With the ColorFit Pro 2 smartwatch, you can receive notifications for calls, texts and social media and also control the music playback on your smartphone. Apart from getting notifications, you can read text messages and social media messages. The 10-day battery life ensures you only have to stop to charge the battery a few times a month.",
        featured: false,
        image: { url: "/images/product-2.jpeg" }
      },{
        pid: 3 ,
        product_name: "HP 15q APU Dual Core A9 ",
        price: 459,
        company: "HP",
        description:"(4 GB/1 TB HDD/Windows 10 Home) 15q-dy0007AU Laptop  (15.6 inch, Jet Black, 2.18 kg)",
        featured: true,
        image: { url: "/images/product-3.jpeg" } 
      },{
        pid: 4 ,
        product_name: "Zebronics Bluetooth Speaker  (Black)",
        price: 35,
        company: "Zebronics",
        description:"If music keeps you going then make it loud, clear, and exciting with the Zebronics BT3440 RUCF Bluetooth Laptop/Desktop Speaker. This impressive audio device features a Glossy Design, Multi-connectivity Options, and a Front Firing Woofer with RGB Lights to enjoy immersive audio with party-like setup at home.",
        featured: false,
        image: { url: "/images/product-4.jpeg" }
      },{
        pid: 5 ,
        product_name: "Sony Bravia(32 inch) HD Ready LED TV",
        price: 535,
        company: "Sony",
        description:"This Sony TV features many Indian Languages, which you can choose from. Once you do so, it will communicate in your selected language, making it easy for you to use it. When you’re in the mood for music, you can easily switch between radio stations using the TV remote. You can store up to 30 FM stations so that you can easily play your favourites.",
        featured: true,
        image: { url: "/images/product-5.jpeg" }
      },{
        pid: 6 ,
        product_name: "Quantum Wireless Keyboard Mouse Cordless",
        price: 12,
        company: "Quantum",
        description:"Keyboard : Adopt 2.4G- 2.4835G wireless radio frequency technology. 2.4G wireless timely hopping technology. 2.4G wireless transmission can reach 10 meters barrier-free working distance. No need to code, plug and play Ultra-thin keyboard buttons, sensitive reaction, muted design and great hand feel.  Mouse :  Adopt 2.4G- 2.4835G wireless radio frequency technology. 2.4G wireless timely hopping technology..... 2.4G wireless transmission can reach 10 meters barrier-free working distance. .....Multiple auto dormancy function, unplug receiver or shutdown, etc, the mouse, keyboard, can get into deep dormancy quickly and save batteries well.",
        featured: false,
        image: { url: "/images/product-6.jpeg" }
      },{
        pid: 7 ,
        product_name: "Sony Camera with 55-210 mm Zoom Lenses",
        price: 799,
        company: "Sony",
        description:"Featuring a 24.2-megapixel Exmor CMOS image sensor and the BIONZ X image processor, this mirrorless camera from Sony offers low-noise performance to ensure that your images are crystal clear. It also takes advantage of the AF Tracking Technology, so you can even click pictures of moving objects without any hassle.",
        featured: true,
        image: { url: "/images/product-7.jpeg" }
      },{
        pid: 8 ,
        product_name: "JBL Extra Bass Bluetooth Headset (Blue, Wireless)",
        price: 29,
        company: "JBL",
        description:"Shake a leg, headbang, or groove to your favorite songs without disturbing others with the JBL T450 BT Bluetooth Headset. This mobile accessory features a Flat and Foldable Design, Bluetooth Connectivity, and JBL Pure Bass Sound for an immersive aural experience wherever you go.",
        featured: false,
        image: { url: "/images/product-8.jpeg" }
      },{
        pid: 9 ,
        product_name: "Noise Shots Bluetooth Headset (Matte Black)",
        price: 18,
        company: "Noise",
        description:"Detangling wires can be extremely frustrating. So, do not frustrate yourself for such menial reasons, and gift yourself this wireless headset by Noise. The earbuds are ergonomic, and thereby, they are comfortable to wear. The headset also provides crystal-clear sound and solid bass, which can accentuate your listening experience. Also, it is water-resistant, as it has an IPX5 rating.",
        featured: false,
        image: { url: "/images/product-9.jpeg" }
      }
  ],
  cart_quantity:0,
  cart:[],
  tot_amount:0,
  }
}

addCart=(id)=>
{
  let flag=1;
  this.state.products.map((item)=>
  {
    if(id===item.pid)
    {
      if(this.state.cart.length<1)
      {
        const obj={id:item.pid,price:item.price,image:item.image.url,name:item.product_name,quantity:1,total:item.price}
        let newarr=[...this.state.cart,obj];
        this.setState({cart:newarr});
      }
      else
      {
        this.state.cart.map((item)=>
        {
          if(id==item.id)
          {
            item.quantity=item.quantity+1;
            item.total=item.quantity * item.price;
            flag=0;
          }
        })
        if(flag)                                                        // I cant use else becasue it should be outside the loop
        {
          const obj={id:item.pid,price:item.price,image:item.image.url,name:item.product_name,quantity:1,total:item.price}
          let newarr=[...this.state.cart,obj];
          this.setState({cart:newarr});
        }
      }
    }
  }
  )

  this.setState({cart_quantity:this.state.cart_quantity+1});
}

totalAmount=()=>{
  let tot=0;
  this.state.cart.map((item)=>{
    tot=tot+ item.total;
  })
  this.setState({tot_amount:tot});
}

increaseQuantity=(id)=>{
this.state.cart.map((item)=>
{
  if(id==item.id)
  {
    item.quantity=item.quantity+1;
    item.total=item.quantity * item.price; 
  }
})
this.totalAmount();
this.setState({cart_quantity:this.state.cart_quantity+1});

}

decreaseQuantity=(id)=>{
        this.state.cart.map((item)=>
        {
          if(id==item.id)
          {
            if(item.quantity>1){
            item.quantity=item.quantity-1;
            item.total=item.quantity * item.price; 
            this.totalAmount();
            this.setState({cart_quantity:this.state.cart_quantity-1});
            }
          }
         })
      
  }  

  deleteItem=(id)=>{
    let newquantity;
    const newCart= this.state.cart.filter((item)=>
    {
      if(item.id==id){
        newquantity= item.quantity;
      }
      return item.id!==id
    })
    this.setState({cart:newCart},()=>
    {
      this.totalAmount();
    });
    this.setState({cart_quantity:this.state.cart_quantity - newquantity});
  
  }

  deleteAll=()=>{
    this.setState({cart:[]});
    this.setState({cart_quantity:0});
    this.totalAmount();
  }



render(){
  return(
    <Router>
      <div>
      
      <Navbar cart={this.state.cart_quantity} />
      
      <Switch>
        <Route exact path="/aboutUs" component={About} />
      <Route exact path="/" render= 
        {
          (props)=>(
            <>
            <div className="home">
                <div className="home-content">
                    <div className="welcome"> <h2>Welcome to</h2> <h1>My E-commerce.</h1> </div>
                    <p>Life is short, Buy the things you LOVE. Happy Shopping</p>
                    <div className="welcome-btn">
                    <a href="#featured" className="explore-btn">Explore</a>
                      <Link to="/aboutUs" className="about-btn" >About Us</Link>
                    </div>
              </div>
            </div>
              <HomeInfo />
              <div className="home2">
      <FeaturedProducts products={this.state.products} addCart={this.addCart}/>
      </div>
      </>
          )}
        />
        <Route exact path="/products" render= {
          (props)=>(
            <>
    <Products products={this.state.products} addCart={this.addCart}/>
    </> 
    )} />
    <Route exact path="/productDetail/:id" render= {
          (props)=>(
            <>
    <ProductDetail products={this.state.products} {...props} addCart={this.addCart}/>
    </> 
    )} />
    <Route exact path="/cart" render= {
          (props)=>(
            <>
    <Cart cart={this.state.cart} total={this.totalAmount} tot_amount={this.state.tot_amount} 
    increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} 
    deleteAll={this.deleteAll}  deleteItem={this.deleteItem}/>
    </> 
    )} />
    <Route exact path="/login" render={
      (props)=>(
        <>
        <Login clearAll={this.deleteAll} />
       </>
      )
    } />
    </Switch>
    </div>
    <Footer />
    </Router>
  )
}
}

export default App;