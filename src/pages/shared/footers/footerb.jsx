import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import getRouteHandlerBaseUrl from '../../../assets/js/get-route-handler-base-url'


class Footerb extends Component {
    componentWillMount() {
		this._baseUrl = getRouteHandlerBaseUrl(this.props)
    }
    
    constructor(props) {
        super(props);
        this.state = { 
            footerDesc:"Sebuah tempat dimana anak-anak tuli menemukan makna dirinya melalui proses pembelajaran Illahi,Alam,dan homeschooling (family involved)",
            contactUs:[
                {
                    address:"Bekasi Timur",
                    contact:[
                        {
                            name:"tel",
                            address:"+62 899-9059-848"
                        },{
                            name:"email",
                            address:"eamil@xx.cc"
                        },{
                            name:"whatsApp",
                            address:"+62 899-9059-848"
                        },{
                            name:"telegram",
                            address:"m.me/thelittlehijabi"
                        }
                    ]
                }
            ],
            sosmed:[
                {
                    name:'facebook',
                    address:'http://facebook/',
                    icon:'fa fa-facebook'
                }, {
                    name:'twitter',
                    address:'http://twitter/',
                    icon:'fa fa-twitter'
                }, {
                    name:'instagram',
                    address:'http://instagram/',
                    icon:'fa fa-instagram'
                }, {
                    name:'telegram',
                    address:'http://telegram/',
                    icon:'fa fa-telegram'
                }, {
                    name:'youtube',
                    address:'http://youtube/',
                    icon:'fa fa-youtube'
                }
            ]
        }
    }
    render() { 
        return ( 
            <div className="footer-static"> 
                <div className="container">
                    <div className="row">
                        <div className="d-none d-md-block col-md-6">
                            <div className="footer-img">
                                <Link to="/">
                                    <img src={this._baseUrl +'/images/static/littlehijabihor.png'} alt="footer-logo" className="footer-lg" />
                                </Link>
                            </div>
                            <div className="footer-logo-text">
                                <p>{this.state.footerDesc}</p>
                            </div>
                            <div className="footer-cpy">
                                <small className="d-block cpyrgth">© {new Date().getFullYear()} Little Hijabi Homeschooling.</small>
                                <small className="d-block cpyrgth">All rights reserved. Lugas Adhi Prasetyo</small>
                            </div>
                            <div className="footer-developer">
                                <small>Web Design <i className="fa fa-heart-o"></i> Lugas Adhi Prasetyo</small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3>Contact Me @</h3>
                            <div className="footer-contact">
                            {this.state.contactUs.map(cc => 
                                    (
                                        <div className="contact-detail">
                                            <h4>{cc.address}</h4>
                                            {cc.contact.map(dd=>(
                                                <div className="contacts row">
                                                    <div className="col-6 cntc-ttl text-capitalize">{dd.name}</div>
                                                    <div className="col-6 cntc-addrs">{dd.address}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-sosmed">
                    {this.state.sosmed.map(cc => (
                        <a href={cc.address} target="_blank" className={cc.name}><i className={cc.icon}></i></a>
                    ))}
                </div>
            </div>
         );
    }
}


 
export default Footerb;