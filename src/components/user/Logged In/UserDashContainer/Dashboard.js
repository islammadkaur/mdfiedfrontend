import React from 'react';
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import DashMakeApp from './DashMakeApp'
import DashCheckApp from './DashCheckApp'
import DashAccount from './DashAccount'

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

    handleMakeAppointment = (url) => {
        this.props.history.push('/user/dashboard/new-appointment')
    }
      
    render(){
        return(
            <div className="dashboard">
                <nav style={{backgroundColor: 'white', width: '100%', padding: '20px'}}><h4>Hello {this.state.first_name}, what would you like to do today?</h4></nav>
                <Container fluid>
                    <Row style={{marginLeft: '10%', marginTop: '7%', marginRight: '10%'}}>
                        <DashMakeApp makeApt={this.handleMakeAppointment} />
                        <DashCheckApp />
                        <DashAccount />
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