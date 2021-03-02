
import React, { Component } from 'react';
import NavBar from './NavBar';
import InsuranceContainer from './InsuranceContainer';
import SpecialtiesContainer from './SpecialtiesContainer';
import HomeContainer from './HomeContainer';
import {Route} from 'react-router-dom';
import {currentUser} from '../actions/userActions'
import {connect} from 'react-redux'



class Index extends Component {
    componentDidMount() {
        console.log('index');
        const tkn = localStorage.getItem("jwt_token")
      if (!tkn) {
          localStorage.removeItem("jwt_token")
          this.props.history.push("/user")
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
            this.props.history.push('/user/dashboard')
        })
      }
    }
    render() {
        return (
            <div>
             <NavBar />
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/insurances" component={InsuranceContainer} />
            <Route exact path="/specialties" component={SpecialtiesContainer} />
            </div>
        );
    }
}
const mapDispatchToProps = {
    currentUser: currentUser,
  }

  export default connect(null, mapDispatchToProps)(Index)