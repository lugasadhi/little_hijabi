import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/view/page404.scss';
import getRouteHandlerBaseUrl from '../../assets/js/get-route-handler-base-url'

class Page404 extends Component {
    state = { 
        headerType:'usualHeader'
     }
    
    componentWillMount() {
		this._baseUrl = getRouteHandlerBaseUrl(this.props)
    }

    render() { 
        this.props.changeHeaderType(this.state.headerType);
        return ( 
            <div id="page404" className="container">
                <div className="row align-items-center">
                    <div  className="col-md-6 d-none d-md-flex justify-content-end ">
                        <img src={this._baseUrl+"/images/static/littlehijabi.png"} alt="logo"/>
                    </div>
                    <div className="col-md-6">
                        <h2>OOPS! PAGE NOT FOUND</h2>
                        <p>
                            You must have picked the wrong door because I haven't been able to lay my eye on the page you've been searching for.
                        </p>

                        <Link to="/" className="btn btn-primary ">Back to Home</Link>

                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default Page404;