import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import NavBar from '../components/user/NavBar'
import SignIn from '../components/user/SignIn'
import Dashboard from '../components/user/Logged In/UserDashContainer/Dashboard'
import SignUp from '../components/user/SignUp'
import UserEditForm from '../components/user/UserEditForm'
import {connect} from 'react-redux'
import {currentUser} from '../actions/userActions'
import SearchBar from '../components/user/Logged In/UserDashContainer/SearchBar'


class UserApp extends React.Component {

  componentDidMount(){
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
        })
      }
  }

  render(){
    const tkn = localStorage.getItem("jwt_token")


    return (
        <div className="App">
        <NavBar />
          <Switch>
            <Route path="/user/signup" component={SignUp} />
            {tkn ? <Route exact path="/user/dashboard" component={Dashboard} /> : <Route path="/user" component={SignIn} /> }
            <Route path="/user/dashboard/new-appointment" component={SearchBar} />
            <Route path="/user/edit" component={UserEditForm} /> 
          </Switch>
        </div>
    );
  }
}

const mapDispatchToProps = {
  currentUser: currentUser,
}

export default connect(null, mapDispatchToProps)(withRouter(UserApp));
