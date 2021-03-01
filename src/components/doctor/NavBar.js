import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {signOutDoctor} from '../../actions/doctorActions'
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
        this.props.history.push("/md/signup")
    }

    handleSignIn = () => {
        this.props.history.push("/md")
    }

    handleSignOut = () => {
        localStorage.removeItem("jwt_token")
        this.props.SignOutDoctor()
        this.props.history.push("/md")
    }

    handleDoctorShowCard = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    handleDoctorUpdateForm = () => {
        this.setState({ showModal: !this.state.showModal })
        this.props.history.push('/md/edit')
    }

    handleDeleteDoctor = () => {
        let id = this.props.currentDoctor.id
        fetch(`http://localhost:3000/doctors/${id}`, {method: "DELETE"})
        .then(response=> response.json())
        .then(() => {
            this.setState({ showModal: !this.state.showModal })
            this.props.SignOutDoctor()
            this.props.history.push('/md')
        })
    }

    handleHome = () => {
        const tkn = localStorage.getItem("jwt_token")
        tkn ? this.props.history.push('/md/dashboard') : this.props.history.push('/')
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
                        {this.props.currentDoctor ?
                        <div className="text-right">    
                        <DropdownButton
                        menuAlign="right"
                        variant="light"
                        title={<PersonCircle/>}
                        drop="down"
                        size="md"
                        id="dropdown-menu-align-right"
                        >
                        <Dropdown.Item eventKey="1" onClick={this.handleDoctorShowCard}>Account</Dropdown.Item>
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



                {/* MODAL THAT SHOWS ALL THE CURRENT Doctor INFORMATION */}
                {this.props.currentDoctor ?
                <Modal show={this.state.showModal} dialogClassName="user-view" size="lg">
                    <Modal.Header closeButton onClick={() => this.handleDoctorShowCard()}>
                    <Modal.Title>{<PersonBoundingBox/>}  Your Information </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Form>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder={this.props.currentDoctor.first_name} readOnly plaintext/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder={this.props.currentDoctor.last_name} readOnly plaintext/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="text" placeholder={this.props.currentDoctor.date_of_birth} readOnly plaintext/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder={this.props.currentDoctor.email} readOnly plaintext/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder={this.props.currentDoctor.address} readOnly plaintext />
                        </Form.Group>


                </Form.Row>

                </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleDoctorShowCard()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.handleDoctorUpdateForm()}>
                        Edit Information
                    </Button>
                    <Button variant="danger" onClick={() => this.handleDeleteDoctor()}>
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
        currentDoctor: state.currentDoctor,
    }
}

const mapDispatchToProps = {
    SignOutDoctor: signOutDoctor,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))