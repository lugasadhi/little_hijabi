import React, { Component } from 'react';

class Footera extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="footer-simple">
                <div className="d-flex justify-content-center">
                    <small className="copyright">
                        {new Date().getFullYear()} © Copyright The little Hijabi Homeschooling 
                    </small>
                </div>
            </div>
        );
    }
}
 
export default Footera;