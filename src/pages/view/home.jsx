import React, { Component } from 'react';
import $ from 'jquery';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            headerType:'usualHeader',
            footerType:'',
            principleSpeak:{
                title:"Prakata Kepala Sekolah",
                content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut augue at ligula fringilla consectetur. Proin blandit risus non nisl ullamcorper luctus sit amet non sem. Morbi et commodo urna. Vivamus a neque quam. Vestibulum luctus rhoncus nunc vel posuere. Integer lacinia dui vitae mauris varius pharetra nec vitae nibh. </p>",
                image:"../images/static/teacher-list-03-524x574_c.png"
            },
            about:{
                title:"Tentang",
                content:"<p>The Little Hijabi sebuah tempat dimana anak-anak tuli menemukan makna dirinya melalui proses pembelajaran Illahi,Alam,dan homeschooling (family involved)</p>",
                image:"../images/static/menu01.png"
            },
            awards:[
                {
                    descript:"Best Presentation of Sign Bilingual Method to help Deaf Literacy Skill's improvement in International Student conference ",
                    place:"University of Victoria, Melbourne in 2011"
                },
                {
                    descript:"Best Presentation of Qur'an application in sign language in First International Global Deaf Muslim Conference",
                    place:"Qatar in November 2013"
                },
            ],
            program:[
                {
                   name:"Kelas Tuli" 
                },{
                    name:"kelas Autis dan Down Syndrome"
                },{
                    name:"kesulitan belajar dan ADHD"
                }
            ],
            teachers:[
                {
                    img:"../images/static/teacher-list-01-524x574_c.png",
                    name:"aaa",
                    desc:"aaaa"
                },{
                    img:"../images/static/teacher-list-02-524x574_c.png",
                    name:"bbb",
                    desc:"aabbbaa"
                },{
                    img:"../images/static/teacher-list-03-524x574_c.png",
                    name:"ccc",
                    desc:"aacccaa"
                }
            ]
        }

        $(document).ready(function(){
            $('.top-headers').height($(window).height());
        });
    }
    
    render() { 
        this.changeHeaderFooterType();
        return (
            <div className="home-page">
                <div className="top-headers">
                    <div className="bg-video">
                        <video autoPlay muted loop id="myVideo">
                            <source src="../video/home.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                        <div className="video-fiter" style={{background: 'url(../video/gridtile.png)'}}></div>
                    </div>
                    <div className="bigas">
                        
                    </div>
                </div>
                <div className="cloud" style={{background: 'url(../images/static/fog.png)'}}>
                </div>
                <div className="container mt-3 ">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={this.state.principleSpeak.image} alt="principle" className="w-100 image"/>
                        </div>
                        <div className="col-md-6">
                            <h5>{this.state.principleSpeak.title}</h5>
                            <div className="content" dangerouslySetInnerHTML={{__html: this.state.principleSpeak.content}}>
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
 
export default Home;