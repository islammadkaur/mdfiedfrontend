import React, { Component } from 'react';
import Results from './Results'

class ResultsCon extends Component {
    constructor() {
        super();
        this.state = {
            clinics: []
        }
    }
    componentDidMount() {
        const getClinics = 'http://localhost:3000/clinics/'
        fetch(getClinics)
          .then(res => res.json())
          .then(data => this.setState({clinics: data}));
    }
    render() {
      const clinics = this.state.clinics
    //   console.log(clinics);
        return (
            <div>
                <Results clinic={clinics} />
            </div>
        );
    }
}

export default ResultsCon;