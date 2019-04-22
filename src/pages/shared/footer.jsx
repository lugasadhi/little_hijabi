import React, { Component } from 'react';
import Footera from './footers/footera';
import Footerb from './footers/footerb';

class Footer extends Component {
    state = {  }
    constructor(props){
        super(props);
        this.state={
            footerType:"",
        }
    }

    onChangeFooter=(ssd)=>{
        this.setState({footerType: ssd})
    }

    setFooter(){
        if(this.props.footerType === "simple"){
            return ( 
                <Footera key="footerA"></Footera>
            )
        }else{
            return ( 
                <Footerb key="footerB"></Footerb>
            )
        }
    }



    render() { 
        return ( 
            <footer>
                {this.setFooter()}
            </footer>
         );
    }
}
 
export default Footer;