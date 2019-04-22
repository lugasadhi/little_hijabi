import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            headerType:"usualHeader",
            footerType:"static",
            topImage:"../images/static/login-pic.jpg",
            detail:{
                    title : "ini title",
                    content : [
                        {
                            subtitle:"subtitle",
                            content:"<p>jembut</p>",
                            image:"../images/static/menu01.jpg"
                        }, {
                            subtitle:"dd",
                            content:"<p>ss</p>",
                            image:"../images/static/menu02.jpg"
                        }
                    ],
                }
         };

         console.log(this.props);
         
    }


    render() { 
        this.changeHeaderFooterType();
        return (  
            <div className="pages-page">
                <div className="top-headers">
                    <div className="bg-images">
                        <img src={this.state.topImage} alt="top-image" className="w-100" />
                        <div className="image-fiter" style={{background: 'url(../video/gridtile.png)'}}></div>
                    </div>
                    <h2 className="Title">
                        {this.state.detail.title}
                    </h2>
                </div>
                <div className="content-under">
                    <div className="container">
                    {this.state.detail.content.map(cc => 
                        (
                            <div className="contact-detail">
                                <div>
                                    <h4 className="text-capitalize">{cc.subtitle}</h4>
                                    <div className="content" dangerouslySetInnerHTML={{__html: cc.content}}></div>
                                </div>
                                <div>
                                    <img src={cc.image} alt={"img-"+cc.subtitle} className="w-100"/>
                                </div>
                            </div>
                        )
                    ) }
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
 
export default Pages;