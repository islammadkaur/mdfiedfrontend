import React, { Component } from 'react';
import SpecialtyList from './SpecialtyList'

class SpecialtiesContainer extends Component {
    constructor() {
        super()
        this.state = {
            specialties: []
        }
    }
    
    componentDidMount() {
        const sp = "http://localhost:3000/specialties/"
        fetch(sp)
        .then(res => res.json())
        .then(specialties => {
            this.setState({specialties: specialties})
        })
    }
    render() {
        const specialties = this.state.specialties
        return (
            <div>
                <SpecialtyList specialties={specialties}/>
            </div>
        );
    }
}

export default SpecialtiesContainer;