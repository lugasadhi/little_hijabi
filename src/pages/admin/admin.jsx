import React, { Component } from 'react';
import {  
    Route,
    Switch
  } from 'react-router-dom';
import Dashboard from './dashboard';

  
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            headerType:'adminHeader',
            footerType:'simple',
         }
    }
    render() { 
        this.changeHeaderFooterType();
        
        return ( 
            <div>
                <p>asdasdasdasdasd</p>
                <Switch>
                    <Route path="/dashboard"  key="Dashboard" exact component={()=>
                        <Dashboard  />
                    }/>
                </Switch>
            </div>
         );
    }


    changeHeaderFooterType(){
        this.props.changeHeaderType(this.state.headerType);
        this.props.changeFooterType(this.state.footerType);
    }
}
 
export default Admin;