import React from 'react';
import Alert from './alert';

class Login extends React.Component{

    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            password:"",
            alert:null,
            payment:false,
        }
    }

    login=()=>{
        document.querySelector(".login").style.display="block";
        document.querySelector(".register").style.display="none";

    }

    register=()=>{
        document.querySelector(".login").style.display="none";
        document.querySelector(".register").style.display="block";

    }

    onNameChange=(e)=>{
        this.setState({name:e.target.value})

    }
    onEmailChange=(e)=>{
        this.setState({email:e.target.value})

    }
    onPassChange=(e)=>{
        this.setState({password:e.target.value})

    }

    alertmsg=(symbol,msg,color)=>{
        this.setState({alert:{symbol:symbol,msg:msg,color:color}});
        setTimeout(()=>{
            this.setState({alert:null});
        },3000)

    }

    registerSubmit=(e)=>{
        e.preventDefault();
        if(this.state.name == "" || this.state.email == "" ||this.state.password==""){
            this.alertmsg("fa-exclamation-triangle","Enter all the fields","warning");
        }
        else
        {
            let user = JSON.parse(localStorage.getItem(this.state.email));
            if(user){
                this.alertmsg("fa-user-times","User is Already registered","danger");     
                this.setState({name:"", email:"",password:"" })
            }
            else{
                localStorage.setItem(this.state.email, JSON.stringify(this.state));
                this.setState({name:"", email:"",password:"" });
                this.alertmsg("fa-check-circle","User Successfully registered","success");   

            }
        }
    }

    loginSubmit=(e)=>{
        e.preventDefault();
        if(this.state.email == "" ||this.state.password==""){
            this.alertmsg("fa-exclamation-triangle","Enter All the fields","warning");     
        }
        else
        {
            let user = JSON.parse(localStorage.getItem(this.state.email));
            if(user){
                if(user.password == this.state.password){
                    this.alertmsg("fa-check-circle","User Successfully logged","success");   
                    this.setState({name:"", email:"",password:"" })
                   setTimeout(()=>{
                    this.setState({payemnt:true});
                    this.props.clearAll();
                   },1500) 

                }
                else{
                    this.alertmsg("fa-user-times","Incorrect Password","danger");
                    this.setState({name:"",password:"" })

                }
            }
            else{
                this.alertmsg("fa-user-times","User is not registered","danger");
                this.setState({name:"", email:"",password:"" })

            }
        }

        
    }


    render(){
        return(
            <div className="login-page">
                {this.state.alert && <Alert alert={this.state.alert}/> }

                { !this.state.payemnt ? <div class="login-container">
                <div className="register">
                        <h4> <i class="fa fa-user-plus" aria-hidden="true"> </i> Register</h4>
                    <form onSubmit={this.registerSubmit}>
                    <label for="name" >Enter Name *</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.onNameChange}></input>
                    <label for="email">Enter Email Id *</label>
                    <input type="email" id="email" value={this.state.email} onChange={this.onEmailChange}></input>
                    <label for="password">Enter your Password *</label>
                    <input type="password" id="password" value={this.state.password} onChange={this.onPassChange}></input>
                    <input type="submit" className="formsubmit" value="Register" ></input>
                    </form>
                    <p>Already have an account ? <span className="formlink" onClick={this.login}>Login</span></p>
                </div>
                <div className="login">
                    <h4> <i class="fa fa-sign-in" aria-hidden="true"> </i> Login</h4>
                    <form onSubmit={this.loginSubmit}>
                    <label for="email-re">Enter Email Id *</label>
                    <input type="email" id="email-re" name="email-re" value={this.state.email} onChange={this.onEmailChange}></input>
                    <label for="password-re">Enter your Password *</label>
                    <input type="password" id="password-re" name="password-re" value={this.state.password} onChange={this.onPassChange}></input>
                    <input type="submit" className="formsubmit" value="Login"></input>
                    </form>
                    <p>Dont have an account ? <span className="formlink" onClick={this.register}>Register</span></p>
                </div>
                   
                </div> :
                <div className="paymentDone">
                    <h1> <i class="fa fa-check-square-o" aria-hidden="true"></i> Order Successfully placed </h1>
                </div>
    }
            </div>
        
        )
    }
}

export default Login;