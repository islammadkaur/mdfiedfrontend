import React from 'react';
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import {currentUser} from '../actions/userActions'

// import AccountsContainer from '../components/user/AccountsContainer'


import {Spring} from 'react-spring/renderprops';

class Dashboard extends React.Component {
    

    render(){
       const state = {
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            date_of_birth: this.props.currentUser.date_of_birth,
            email: this.props.currentUser.email,
            address: this.props.currentUser.address,
            city: this.props.currentUser.city,
            state: this.props.currentUser.state,
            zipcode: this.props.currentUser.zipcode,
            error: ""
        }
        return(

            <Spring config={{friction: 10}}
            from={{ opacity: .5 }}
            to={{ opacity: 1 }}>
            {props => 
            <div className="dashboard" style={props} >
                <Container fluid>
                <Row>
                    Hello {state.first_name},
                </Row>
                <Row>

                </Row>
                </Container>
            </div>
            }
            </Spring>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Dashboard)