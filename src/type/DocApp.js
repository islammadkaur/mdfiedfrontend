import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import DocSignIn from '../components/doctor/DocSignIn'
import DocSignUp from '../components/doctor/DocSignUp'
import NavBar from '../components/doctor/NavBar'
import DoctorDashboard from '../components/doctor/loggedin/DoctorContainer/DoctorDashboard'
import {connect} from 'react-redux'
import {currentDoctor} from '../actions/doctorActions'

class DocApp extends React.Component {

  componentDidMount(){
    const tkn = localStorage.getItem("jwt_token")
// console.log('doc app');
    const fetchDoctor = () => {
        if (!tkn || !this.props.currentDoctor) {
            localStorage.removeItem("jwt_token")
            // this.props.history.push("/md")
          } 
        else {
        fetch('http://localhost:3000/api/v1/current_doctor', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${tkn}`
            }
        })
        .then(response => response.json())
        .then(obj => {
            this.props.currentDoctor(obj.doctor)
        })
    }
    
}
    fetchDoctor();
}

  render(){
    const tkn = localStorage.getItem("jwt_token")

    return (
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/md" component={DocSignIn} />
            <Route exact path="/md/signup" component={DocSignUp} />
            {tkn ? <Route exact path="/md/dashboard" component={DoctorDashboard} /> : <Route exact path="/md" component={DocSignIn} />}
          </Switch>
        </div>
    );
  }
}

const mapDispatchToProps = {
  currentDoctor: currentDoctor
}

export default connect(null, mapDispatchToProps)(withRouter(DocApp));
