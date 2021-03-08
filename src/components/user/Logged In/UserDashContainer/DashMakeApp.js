import React, { Component } from 'react';
class DashMakeApp extends Component {   
    render() {
        return (
        <div style={{margin: '2%'}}>
            <button onClick={() => this.props.makeApt()} style={{borderStyle: 'solid', backgroundColor:'#4284ed', width:'380px', height:'380px', color: 'white', fontSize: '26px', borderRadius: '100px'}}>Create An Apppointment</button>
        </div>
        );
    }
}

export default DashMakeApp;