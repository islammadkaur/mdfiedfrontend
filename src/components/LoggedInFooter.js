import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ListGroup from 'react-bootstrap/ListGroup'
import DocSignUp from './DocSignUp'
import DocSignIn from './DocSignIn'
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'
import Nav from 'react-bootstrap/Nav'
import {Linkedin, Github, CameraReelsFill} from 'react-bootstrap-icons'
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class Footer extends React.Component {
    constructor(){
        super();
        this.state = {
            showAbout : false,
            showOther : false,
            type: 'user'
        }
    }

    handleSignIn = () => {
        this.props.history.push("/user")
        this.setState({
            type: 'user'
        })
    }

    handleAboutTeam = () => {
        this.setState({ showAbout: !this.state.showAbout })
    }
    handleDoctorLogin = () => {
        this.props.history.push('/md');
        this.setState({
            type: 'doctor'
        })
    }


    openInNewTab = (url) => {
        let win = window.open(url, '_blank');
        win.focus();
      }

    render(){
        return(
            <div>
                <Switch>
            <Route exact path="/md" component={DocSignIn} />
            <Route exact path="/md/signup" component={DocSignUp} />
            <Route exact path="/user" component={SignIn} />
            <Route exact path="/user/signup" component={SignUp} />

          </Switch>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="bottom">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Container fluid>
 
                <Col lg={1} className="text-center" >
                    {/* <Nav.Link onClick={this.handleAboutTeam}>
                         About
                    </Nav.Link> */}
                </Col>

                <Col lg={1} className="text-center">
                    <Nav>
                        Copyright @2021
                    </Nav>
                </Col>

                <Col lg={1} className="text-center">
                    {/* { this.state.type === "doctor" ? <Nav.Link onClick={this.handleSignIn}>
                        Patient Portal
                    </Nav.Link> : <Nav.Link onClick={this.handleDoctorLogin}>
                        Doctor Portal
                    </Nav.Link>} */}
                </Col>



                
            </Container>
            </Navbar.Collapse>
            </Navbar>

                <Modal show={this.state.showAbout} style={{marginTop: "14%"}} dialogClassName="user-view" size="lg">
                    <Modal.Header closeButton onClick={() => this.handleAboutTeam()}>
                    <Modal.Title>More about me</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <ListGroup.Item>
                        <h1 className="designer-link" onClick={() => this.openInNewTab("https://github.com/islammadkaur")}>
                            Github <Github/>
                        </h1>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <h1 className="designer-link" onClick={() => this.openInNewTab("https://www.linkedin.com/in/islammadkaur/")}>
                            LinkedIn <Linkedin/>
                        </h1>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <h1 className="designer-link">
                            Demo <CameraReelsFill/>
                        </h1>
                        </ListGroup.Item>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleAboutTeam()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showOther} style={{marginTop: "14%"}} dialogClassName="user-view" size="lg">
                    <Modal.Header closeButton onClick={() => this.handleOther()}>
                    <Modal.Title>More about me</Modal.Title>

                    </Modal.Header>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleAboutTeam()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default (withRouter(Footer))