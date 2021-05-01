import React, { Component } from 'react';
import Doctors from './Doctors';

class DoctorContainer extends Component {
    constructor(){
        super()

        this.state = {
            docs: [],
            gender: []
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
        const docfiltered = this.state.docs.map((doc, index) => {
            return doc.gender === "Male" ? <div key={index} onePig={doc}/> : console.log("Not")
            // let filter =÷ this.state.greased ? <button onClick={this.changeFilter}>Not Greased</button> : <button>Greased</button>
        })
        console.log(docfiltered);
        return (
            <div>
                {/* <Doctors docs={this.props.docfiltered}/> */}
                {docfiltered}
                <p>Hello</p>
            </div>
        );
    }
}

export default DoctorContainer;