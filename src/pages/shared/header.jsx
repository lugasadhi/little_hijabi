import React, { Component } from 'react';
import Headera from './headers/headera';
import Headerb from './headers/headerb';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFlushed: false
        };
    }
    state = { 
        headerType:"usualHeader",
     }

     onChangeHeader=(ssd)=>{
         this.setState({headerType: ssd})
     }

    setHeader(){
        if(this.props.headerType === "usualHeader"){
            return ( 
                <Headera ></Headera>
            )
        }
        else if(this.props.headerType === "adminHeader"){
            return <Headerb></Headerb>
        }else{
            return <div></div>
        }
    }

    menuClick=()=>{
        this.setState({menuActive: !this.state.menuActive});
    }

    classMenuBar=(id)=>{
        if(this.state.menuActive){
            return id+" active";
        }else{
            return id;
        }
    }


    render() {
        return ( 
            <div>
                {this.setHeader()}
            </div>
        );
    }
}
 
export default Header;