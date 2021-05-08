import React, { Component } from 'react';
import Doctors from './Doctors';

class DoctorContainer extends Component {
    constructor(){
        super()

        this.state = {
            docs: [],
            gender: [],
            specialty: ''
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

        const handleGender = (event) => {
            this.setState({ gender: event.currentTarget.value})
        }
        const handleSpecialty = (event) => {
            this.setState({ specialty: event.currentTarget.value})
        }

            const docs = this.state.docs
            const spec = docs.filter(doc => doc.specialties)  

            const genfilter = this.state.docs.filter(p => p.gender === this.state.gender)
            const docfilter = this.state.docs

            console.log(spec.map(p => p.specialties));

        return (
            <div>
                <Doctors docs={docfilter} gen={handleGender} spec={handleSpecialty}/>
            </div>
        );
    }
}

export default DoctorContainer;