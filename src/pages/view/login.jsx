import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class Login extends Component {
     constructor(props){
         super(props);

         this.state={
            headerType:'none',
            footerType:'simple'
         };

         $(document).ready(function(){
            $('.login-page').height($(window).height());
         });
         
     }


    render() { 
        this.changeHeaderFooterType();


        return ( 
            <div className="login-page">
                <div className="row h-100">
                    <div className="col-md-7 col-lg-8 lgn-left d-md-block d-none">
                    </div>
                    <div className="col-md-5 col-lg-4 lgn-right d-flex align-items-center">
                        <div className="mr-3 ml-3">
                            <Link to="/" className=" logo">
                                <img className="img-fluid" src="../images/static/littlehijabihor.png" alt="logo"/>
                            </Link>
                            <div>
                                {/* <form>
                                    <div className="form-group row">
                                        <div className="col-sm-10">
                                            <input type="text"  className="form-control-plaintext" id="staticEmail" value="email@example.com" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword" placeHolder="Password" />
                                        </div>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }


    changeHeaderFooterType(){
        this.props.changeHeaderType(this.state.headerType);
        this.props.changeFooterType(this.state.footerType);
    }

}
 
export default Login;