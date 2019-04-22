import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../../assets/css/headera.scss';
import getRouteHandlerBaseUrl from '../../../assets/js/get-route-handler-base-url'

class Headera extends Component {
    
    componentWillMount() {
        this._baseUrl = getRouteHandlerBaseUrl();
	}

    constructor(props) {
        super(props);
        this.state={
            menuActive:false,
            menuInfoActive:false,
            menuCallActive:false,
            menuPlaceActive:false,
            menuItem:[
                {
                    image:'/images/static/menu01.jpg',
                    title:'Sekolah',
                    submenu:[
                        {
                            title:'Pesan Kepala Sekolah',
                            link:'/pesan-kepala-sekolah'
                        },{
                            title:'Lingkungan',
                            link:'/'
                        },  {
                            title:'Sejarah',
                            link:'/'
                        },{
                            title:'Pengumuman',
                            link:'/'
                        },{
                            title:'Berita',
                            link:'/'
                        }
                    ]
                },
                {
                    image:'/images/static/menu02.jpg',
                    title:'Keluarga',
                    submenu:[
                        {
                            title:'Guru',
                            link:'/'
                        }, {
                            title:'Siswa',
                            link:'/'
                        },  {
                            title:'Keluarga Lain',
                            link:'/'
                        }
                    ]
                },
                {
                    image:'/images/static/menu03.jpg',
                    title:'Pembelajaran',
                    submenu:[
                        {
                            title:'Fasilitas',
                            link:'/'
                        },  {
                            title:'Group Belajar',
                            link:'/'
                        }
                    ]
                },
                {
                    image:'/images/static/menu04.jpg',
                    title:'Pendaftaran',
                    submenu:[
                        {
                            title:'Cara Daftar',
                            link:'/'
                        }, {
                            title:'Form Pendaftaran',
                            link:'/'
                        }
                    ]
                },
                {
                    image:'/images/static/menu01.jpg',
                    title:'Komunitas & Ekstrakulikuler',
                    submenu:[
                        {
                            title:'Tuli',
                            link:'/'
                        }
                    ]
                }
            ],
            quickInfoMenu:[
                {
                    title:'Campus Tours',
                    link:'/campus-tours'
                },{
                    title:'Enrolments',
                    link:'/enrolment'
                },{
                    title:'Employment',
                    link:'/employment'
                },{
                    title:'Location',
                    link:'/location'
                },{
                    title:'Term Dates',
                    link:'/term-date'
                },{
                    title:'Transport',
                    link:'/transport'
                },{
                    title:'Uniforms',
                    link:'/uniforms'
                }
            ],
            callUsMenu:[{
                name:"main school",
                address:"xxxxxxxx",
                other:[
                    {
                        name:"telp.",
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
            }],
            placeMenu:[{
                id: 'mnsch',
                name:"main school",
                gmap:"https://maps.google.com/maps?q=little%20hijabi&t=&z=13&ie=UTF8&iwloc=&output=embed",
                address:"Bekasi Timur",
            }]
        }
        
    }

    

    render() { 
        return ( 
            <div id="header-a">
                <div className="header">
                    <nav className={this.classTopMenuBar('page-header navbar fixed-top')}>
                        <div className="d-flex justify-content-end align-items-center w-100">
                            <Link to="/" className="navbar-brand" onClick={()=>this.onClickLeftMenuClose() || this.closeMenu()}>
                                <img src={this._baseUrl + "/images/static/littlehijabi.png"} alt="logo"/>
                            </Link>
                            <Link to="#" onClick={()=>this.menuClick()} className="explr menu-item">
                                JELAJAH 
                                <span className="icon-menus">
                                    <i></i>
                                    <i></i>
                                </span>
                            </Link>
                        </div>
                        <div className={this.classTopMenuBar('menu-link')} >
                            <Link to="#"  className="menu-item" onClick={()=>this.menuInfoClick()} >INFO CEPAT <i className="fa fa-info"></i> </Link>
                            <Link to="#"  className="menu-item" onClick={()=>this.menuCallClick()} >HUBUNGI KAMI <i className="fa fa-phone"></i></Link>
                            <Link to="#"  className="menu-item" onClick={()=>this.menuPlaceClick()} >TEMPAT KAMI <i className="fa fa-map-signs"></i></Link>
                            <Link to="/login"  className="menu-item" onClick={()=>this.onClickLeftMenuClose()} > <i className="fa fa-user"></i></Link>
                        </div>
                    </nav>
                </div>
                <div className="menu-bar">
                   {this.randerMenu()}
                </div>
                <div className="left-menu quick-menu" >
                   {this.randerQuickMenu()}
                </div>
                <div className="left-menu call-menu" >
                   {this.randerCallMenu()}
                </div>
                <div className="left-menu place-menu" >
                   {this.randerPlaceMenu()}
                </div>
                <div className="click-filter" onClick={()=>this.onClickLeftMenuClose()} ></div>
            </div> 
         );
    }

    randerMenu(){
        return (
            <div className="d-flex flex-wrap h-lg-100">
                {this.state.menuItem.map(cc => 
                    (<div className="col-lg col-md-6 item-mn">
                        <div className="img-mn">
                            <img src={this._baseUrl+cc.image} alt="menulogo-1"/>
                            <div className="filter-mn"></div>
                        </div>
                        <div className="countainer-mn">
                            <div>
                                <h3 className="title-mn">{cc.title}</h3>
                                <div className="content-mn">
                                    <h3 className="title-mn-lnk">{cc.title}</h3>
                                    <div className="mn-link">
                                        {cc.submenu.map( dd => <Link to={this._baseUrl+"/pages/"+dd.link} onClick={()=>this.closeMenu()}>{dd.title}</Link>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                ) }
            </div>
        )
    }

    randerQuickMenu(){
        return (
            <div className="d-flex flex-wrap h-lg-100">
                <div className="item-menu">
                    {this.state.quickInfoMenu.map(cc => 
                        (
                            <Link to={'/pages'+cc.link} onClick={()=>this.onClickLeftMenuClose()}>{cc.title}</Link>
                        )
                    ) }
                </div>
            </div>
        )
    }

    randerCallMenu(){
        return (
            <div className="h-lg-100">
                <h3 className="title text-white">Call Us</h3>
                <div className="callus">
                    {this.state.callUsMenu.map(cc => 
                        (
                            <div className="mb-4 ">
                                <div className="text-capitalize  ttl">{cc.name} {cc.address}</div>
                                {cc.other.map(dd => (
                                    <div className="row dtl">
                                        <div className="col-lg-4 col-md-6 text-capitalize">
                                            {dd.name}
                                        </div>
                                        <div className="col-lg-8 col-md-6 font-weight-light">
                                            {dd.address}
                                        </div>
                                    </div>
                                    )
                                )}
                            </div>
                        )
                    ) }
                </div>
                <div className="contact-me">
                    <Link to="contact-us"  onClick={()=>this.onClickLeftMenuClose()} >Contact Us</Link>
                </div>
            </div>
        )
    }

    randerPlaceMenu(){
        return (
            <div className="h-lg-100">
                <h3 className="title text-white mb-4">Visit Us</h3>
                <div className="visitus">
                    {this.state.placeMenu.map(cc => 
                        (
                            <div className="mb-4 ">
                                <div className="name">{cc.name}</div>
                                <div className="addrs">{cc.address}</div>
                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <iframe 
                                        width="330" 
                                        height="150"  
                                        src={cc.gmap} frameBorder="0" scrolling="no" marginHeight="0"
                                        marginWidth="0"></iframe>
                                    </div>
                                </div>
                                <div className="detail">
                                    <Link to={'detail/'+cc.id}  onClick={()=>this.onClickLeftMenuClose()} >Detail</Link>
                                </div>
                            </div>
                        )
                    ) }
                </div>
                
            </div>
        )
    }


    menuClick=()=>{
        this.setState({menuActive: !this.state.menuActive});
        this.closeQuickMenu();
        this.closeCallMenu();
        this.closePlaceMenu();
    }

    closeMenu=()=>{
        this.setState({menuActive: false});
    }
    classTopMenuBar=(id)=>{
        if(this.state.menuActive || 
            this.state.menuInfoActive ||
            this.state.menuCallActive ||
            this.state.menuPlaceActive){return id+" active";}
        else{return id;}
    }

    classMenuBar=(id)=>{
        if(this.state.menuActive){return id+" active";}
        else{return id;}
    }


    //quick
    menuInfoClick=()=>{
        this.setState({menuInfoActive: !this.state.menuInfoActive});
        this.closeMenu();
        this.closeCallMenu();
        this.closePlaceMenu();

    }
    closeQuickMenu=()=>{
        this.setState({menuInfoActive: false});
    }
    classQuickMenuBar=(id)=>{
        if(this.state.menuInfoActive){return id+" active";}
        else{return id;}
    }


    //call
    menuCallClick=()=>{
        this.setState({menuCallActive: !this.state.menuCallActive});
        this.closeMenu();
        this.closeQuickMenu();
        this.closePlaceMenu();

    }
    closeCallMenu=()=>{
        this.setState({menuCallActive: false});
    }
    classCallMenuBar=(id)=>{
        if(this.state.menuCallActive){return id+" active";}
        else{return id;}
    }


    //place
    menuPlaceClick=()=>{
        this.setState({menuPlaceActive: !this.state.menuPlaceActive});
        this.closeMenu();
        this.closeQuickMenu();
        this.closeCallMenu();
    }
    closePlaceMenu=()=>{
        this.setState({menuPlaceActive: false});
    }
    classPlaceMenuBar=(id)=>{
        if(this.state.menuPlaceActive){return id+" active";}
        else{return id;}
    }

    onClickLeftMenuClose=()=>{
        this.closeQuickMenu();
        this.closeCallMenu();
        this.closePlaceMenu();
    }


}
 
export default Headera;