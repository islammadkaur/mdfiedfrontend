import React from 'react';
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {Spring} from 'react-spring/renderprops';

class DoctorDashboard extends React.Component {

    render(){
        return(

            <Spring config={{friction: 10}}
            from={{ opacity: .5 }}
            to={{ opacity: 1 }}>
            {props => 
            <div className="dashboard" style={props} >
                <Container fluid>
                <Row>
                    {}
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
        currentDoctor: state.currentDoctor
    }
}

export default connect(mapStateToProps, null)(DoctorDashboard)