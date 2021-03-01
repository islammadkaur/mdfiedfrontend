import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {signOutUser} from '../../actions/userActions'
// import {signOutDoctor} from '../../actions/doctorActions'
import {PersonCircle, PersonBoundingBox} from 'react-bootstrap-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
// import { currentDoctor } from '../actions/doctorActions';

class NavBar extends React.Component {
    constructor(){
        super();
        this.state = {
            showModal : false
        }
    }

    handleSignUp = () => {
        this.props.history.push("/user/signup")
    }

    handleSignIn = () => {
        this.props.history.push("/user")
    }

    handleSignOut = () => {
        localStorage.removeItem("jwt_token")
        this.props.SignOutUser()
        this.props.history.push("/user")
    }

    handleUserShowCard = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    handleUserUpdateForm = () => {
        this.setState({ showModal: !this.state.showModal })
        this.props.history.push('/user/edit')
    }
    
    handleDeleteUser = () => {
        let id = this.props.currentUser.id
        fetch(`http://localhost:3000/users/${id}`, {method: "DELETE"})
        .then(response=> response.json())
        .then(() => {
            this.setState({ showModal: !this.state.showModal })
            this.props.SignOutUser()
            this.props.history.push('/user')
        })
    }
    
    handleHome = () => {
        const tkn = localStorage.getItem("jwt_token")
        tkn ? this.props.history.push('/user/dashboard') : this.props.history.push('/')
    }

    render(){

        return(
            <div className="nav-div">
                <Navbar collapseOnSelect style={{backgroundColor: '#3471eb', height: 80}} fixed="top">

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                <Container fluid>
                    {/* <Col lg={4}><h5 className="nav-date">{moment().format('MMM Do, YYYY')}</h5></Col> */}

                    <Col lg={4}>
                        <div className="text-left" >
                        <Navbar.Brand style={{color: "#fff"}}><Link onClick={this.handleHome} style={{textDecoration: 'none', color: 'white'}}>Mdfied</Link>
                            </Navbar.Brand>
                        </div>
                    </Col>

                    <Col lg={4}>        
                        {this.props.currentUser ?
                        <div className="text-right">    
                        <DropdownButton
                        menuAlign="right"
                        variant="light"
                        title={<PersonCircle/>}
                        drop="down"
                        size="md"
                        id="dropdown-menu-align-right"
                        >
                        <Dropdown.Item eventKey="1" onClick={this.handleUserShowCard}>Account</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4" onClick={this.handleSignOut}>Sign Out</Dropdown.Item>
                        </DropdownButton>
                        </div>
                            :
                            <div className="text-right" >
                        <Button variant="info" style={{backgroundColor: '#f5f5f5', borderColor: '#fff'}} onClick={this.handleSignIn}>Sign In</Button>
                        <Button variant="info" style={{backgroundColor: '#f5f5f5', borderColor: '#fff'}} onClick={this.handleSignUp}>Sign Up</Button>
                        
                        </div>
                    }</Col>
                </Container>
                </Navbar.Collapse>
                </Navbar>



                {/* MODAL THAT SHOWS ALL THE CURRENT USER INFORMATION */}
                {this.props.currentUser ?
                <Modal show={this.state.showModal} dialogClassName="user-view" size="lg">
                    <Modal.Header closeButton onClick={() => this.handleUserShowCard()}>
                    <Modal.Title>{<PersonBoundingBox/>}  Your Information </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Form>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder={this.props.currentUser.first_name} readOnly plaintext/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder={this.props.currentUser.last_name} readOnly plaintext/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="text" placeholder={this.props.currentUser.date_of_birth} readOnly plaintext/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder={this.props.currentUser.email} readOnly plaintext/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder={this.props.currentUser.address} readOnly plaintext />
                        </Form.Group>

                        {/* <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder={this.props.currentUser.address_two} readOnly plaintext/>
                        </Form.Group> */}
                </Form.Row>

                <Form.Row>
                        {/* <Form.Group as={Col} controlId="formGridCity">
                         <Form.Label>City</Form.Label>
                         <Form.Control placeholder={this.props.currentUser.city} readOnly plaintext/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                         <Form.Label>State</Form.Label>
                         <Form.Control placeholder={this.props.currentUser.state} readOnly plaintext/>
                        </Form.Group> */}
                        {/* <Form.Group as={Col} controlId="formGridCity">
                         <Form.Label>Zip</Form.Label>
                         <Form.Control placeholder={this.props.currentUser.zipcode} readOnly plaintext/>
                        </Form.Group> */}
                </Form.Row>

                </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleUserShowCard()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.handleUserUpdateForm()}>
                        Edit Information
                    </Button>
                    <Button variant="danger" onClick={() => this.handleDeleteUser()}>
                        Delete Account
                    </Button>
                    </Modal.Footer>
                </Modal>
                : null}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = {
    SignOutUser: signOutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))