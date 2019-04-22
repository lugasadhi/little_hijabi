import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            headerType:'adminHeader',
            footerType:'simple',
         }
    }
    render() { 
        return ( 
            <div className="dashboard">
                Dashboard
            </div>
         );
    }


}
 
export default Dashboard;