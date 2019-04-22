import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import getRouteHandlerBaseUrl from '../../../assets/js/get-route-handler-base-url'

class Headerb extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount() {
        this._baseUrl = getRouteHandlerBaseUrl();
	}
    render() { 
        return ( 
            <div className="haeder-admin">
                <div className="menu">
                    <div className="Lft">
                        <div className="btn-mn">
                            <Link to="#">
                                <i className="fa fa-bars"></i>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <img src={this._baseUrl+"/images/static/littlehijabi.png"} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="profile-dtl">
                        <h5>asdasdasds</h5>
                        <small>admin</small>
                    </div>
                </div>
                <div className="sidebar">
                    <Link to="#"><i className="fa fa-long-arrow-left"></i></Link>
                    <ul>
                        <li>
                            <Link to="#">sssss</Link>
                        </li>
                        <li>
                            <Link to="#">sssss</Link>
                        </li>
                        <li>
                            <Link to="#">sssss</Link>
                        </li>
                        <li>
                            <Link to="#">sssss</Link>
                        </li>
                        <li>
                            <Link to="#">sssss</Link>
                        </li>
                        
                    </ul>
                </div>
            </div> 
         );
    }
}
 
export default Headerb;