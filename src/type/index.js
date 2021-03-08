
import React, { Component } from 'react';
import NavBar from '../LoggedOut/home/NavBar';
import LoggedNavBar from '../components/user/NavBar';
import InsuranceContainer from '../LoggedOut/home/InsuranceContainer';
import SpecialtiesContainer from '../LoggedOut/home/SpecialtiesContainer';
import HomeContainer from '../LoggedOut/home/HomeContainer';
import {Route, Switch, withRouter} from 'react-router-dom';
import {currentUser} from '../actions/userActions'
import {connect} from 'react-redux'
import Dashboard from '../components/user/Logged In/UserDashContainer/Dashboard'
import SignIn from '../components/user/SignIn'

class Index extends Component {

    componentDidMount() {
      const tkn = localStorage.getItem("jwt_token")

      if (!tkn) {
          localStorage.removeItem("jwt_token")
        } 
      else {
        fetch('http://localhost:3000/api/v1/current_user', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${tkn}`
            }
        })
        .then(response => response.json())
        .then(obj => {
            this.props.currentUser(obj.user)
        })
      }
    }

    handleIns = (url) => {
      this.props.history.push('/insurances')
    }

    render() {
      const tkn = localStorage.getItem("jwt_token")

      return (
        <div>
            {tkn ? <LoggedNavBar /> : <NavBar ins={this.handleIns} /> }
             <Switch>
              <Route path="/user" component={SignIn} />
              {tkn ? <Route exact path="/user" component={Dashboard} /> : <Route exact path="/" component={HomeContainer} />}
              <Route exact path="/insurances" component={InsuranceContainer} />
              <Route  exact path="/specialties" component={SpecialtiesContainer} />
            </Switch>
        </div>
        )
      }
    }

const mapDispatchToProps = {
    currentUser: currentUser,
}

export default connect(null, mapDispatchToProps)(withRouter(Index));