import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {signInUser} from '../../actions/userActions'
import {Spring} from 'react-spring/renderprops';

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import Logo from '../images/Logo.png'
// import Logo from '../images/Moneytree.png'


class SignIn extends React.Component {
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
    
    handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/api/v1/auth', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(userObj => {
            if (userObj.error){
                this.setState({
                    error: userObj.error
                })
            } else {
               localStorage.setItem("jwt_token", userObj.token)
               this.props.signInUser(userObj.user)
               this.props.history.push("/user/dashboard")
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
                                    <Card.Title>
                                    <Spring config={{friction: 100}}
                                    from={{ opacity: 0 }}
                                    to={{ opacity: 1 }}>
                                    {props => 
                                    <div style={props}>
                                    {/* <h1>Mdfied</h1> */}
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
                                    </Form>
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
    signInUser: signInUser
}

export default connect(null, mapDispatchToProps)(SignIn)