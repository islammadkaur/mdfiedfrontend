import React, { Component } from 'react';
import {connect} from 'react-redux'



class ErrorPage extends Component {

    render() {
        return (
            <div style={{ marginTop: '22%'}}>
                <h1 style={{color: 'black', fontSize: '80px', backgroundColor:'red', width:'60%', marginLeft:'20%'}}>404 - Page not found</h1>
            </div>
        );
    }
}



export default connect(null, null)(ErrorPage) ;