import React, { Component } from 'react';
import Doctors from './Doctors';

class DoctorContainer extends Component {
    constructor(){
        super()

        this.state = {
            docs: []
        }
    }
    componentDidMount() {
       const api = "http://localhost:3000/doctors/" 
        fetch(api)
        .then(res => res.json())
        .then( docts  => {
            this.setState({docs: docts})
        })
    }
    render() {
        console.log(this.state.docs);
        return (
            <div>
                <Doctors docs={this.state.docs}/>
                
                <p>Hello</p>
            </div>
        );
    }
}

export default DoctorContainer;