import React from 'react';
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Dashboard extends React.Component {
    
    state = {
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

render(){
        return(
            <div className="dashboard" >
                <Container fluid>
                    <Row>
                        Hello, {this.state.first_name}
                    </Row>
                </Container>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Dashboard)