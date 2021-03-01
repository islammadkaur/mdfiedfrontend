import React, { Component } from 'react';
import InsuranceList from './InsuranceList'

class InsuranceContainer extends Component {
    constructor() {
        super()
        this.state = {
            ins: []
        }
    }
    
    componentDidMount() {
        const ins = "http://localhost:3000/insurances/"
        fetch(ins)
        .then(res => res.json())
        .then(insurObj => {
            this.setState({ins: insurObj})
        })
    }
    render() {
        const insurance = this.state.ins
        // console.log(insurance);
        return (
            <div>
                <InsuranceList ins={insurance}/>
            </div>
        );
    }
}

export default InsuranceContainer;