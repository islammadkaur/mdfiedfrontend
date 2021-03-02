import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import NavBar from '../components/user/NavBar'
import SignIn from '../components/user/SignIn'
import Dashboard from '../loggedin/Dashboard'
import SignUp from '../components/user/SignUp'
import UserEditForm from '../components/user/UserEditForm'
import {connect} from 'react-redux'
import {currentUser} from '../actions/userActions'

class UserApp extends React.Component {

  componentDidMount(){
    const tkn = localStorage.getItem("jwt_token")
    const fetchUser = () => {
      if (!tkn || !this.props.currentUser) {
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
    fetchUser()
    console.log("something");
  }

  render(){

    return (
        <div className="App">
        <NavBar />
          <Switch>
            <Route exact path="/user" component={SignIn} />
            <Route exact path="/user/signup" component={SignUp} />
            <Route exact path="/user/dashboard" component={Dashboard} />
            <Route exact path="/user/edit" component={UserEditForm} /> */}

          </Switch>
        </div>
    );
  }
}

const mapDispatchToProps = {
  currentUser: currentUser,
}

export default connect(null, mapDispatchToProps)(withRouter(UserApp));
