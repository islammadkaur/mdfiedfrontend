import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {signInDoctor} from '../actions/doctorActions'
import {Spring} from 'react-spring/renderprops';

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import Logo from '../images/Logo.png'
// import Logo from '../images/Moneytree.png'


class DocSignIn extends React.Component {
    state = {
        email: "",
        password: "",
        error: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDoctorSignup = () => {
        this.props.history.push('/md/signup')
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/api/v1/docauth', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(obj => {
            if (obj.error){
                this.setState({
                    error: obj.error
                })
            } else {
               localStorage.setItem("jwt_token", obj.token)
               this.props.signInDoctor(obj.doctor)
               this.props.history.push("/md/dashboard")
            } 
        })       
    }

    render(){
        return(
            <div className="sign-in-div">
                <Card>

                <Container fluid>
                <div className="row g-0">
                    


                                <Col className="text-center">
                                <Card.Body>
                                    <Card.Title><h2 style={{textDecoration: 'underline'}}>Medical Doctor Login</h2>
                                    <Spring config={{friction: 100}}
                                    from={{ opacity: 0 }}
                                    to={{ opacity: 1 }}>
                                    {props => 
                                    <div style={props}>
                                    </div>
                                    }
                                    </Spring>
                                    </Card.Title>
                                    <Card.Text>
                                    <Form onSubmit={this.handleSubmit} >
                                    <Form.Group controlId="formBasicEmail">
                                        <h3>Email Address</h3>
                                        {this.state.error ? <p className="error" style={{color: "red"}}>{this.state.error}</p> : null}
                                        <Form.Control style={{width: '70%', marginLeft: '15%'}} type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <h3>Password</h3>
                                        <Form.Control style={{width: '70%', marginLeft: '15%'}} type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" width="100px" >
                                        Sign In
                                    </Button>
                                    <Button variant="primary" type="submit" width="100px" onClick={this.handleDoctorSignup}>
                                        Sign Up
                                    </Button>
                                    </Form>
                                    {/* <Button variant="primary" type="submit" width="100px" onClick={this.handleDoctorSignup}>
                                        Sign Up
                                    </Button> */}
                                    </Card.Text>
                                </Card.Body>
                                </Col>
                                </div>
                            </Container>
                        </Card>


            </div>
        )
    }
}

const mapDispatchToProps = {
    signInDoctor: signInDoctor
}

export default connect(null, mapDispatchToProps)(DocSignIn)