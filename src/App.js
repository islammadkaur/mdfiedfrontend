import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer'
import LoggedInFooter from './components/LoggedInFooter'
import LoggedOut from './type/index'
import DocApp from './type/DocApp'
import UserApp from './type/UserApp'
import ErrorPage from './type/ErrorPage'
import {connect} from 'react-redux'
import {currentUser} from './actions/userActions'
import {currentDoctor} from './actions/doctorActions'
import DateForm from './components/clock/dateform'

class App extends React.Component {
  componentDidMount() {
    const tkn = localStorage.getItem("jwt_token")
      if (tkn && this.props.currentUser && window.location.pathname === '/') {
          this.props.history.push('/user/dashboard')
      }
      else if (tkn && this.props.currentUser && window.location.pathname === '/user') {
          this.props.history.push('/user/dashboard')
      }
      else if (tkn && this.props.currentUser && window.location.pathname === '/user/') {
          this.props.history.push('/user/dashboard')
      }
      else if (tkn && this.props.currentUser && window.location.pathname === '/user/signup') {
          this.props.history.push('/user/dashboard')
      }
      else if (tkn && this.props.currentUser && window.location.pathname === '/user/signup/') {
          this.props.history.push('/user/dashboard')
      }
      else if (this.props.currentDoctor && window.location.pathname === '/md'){
        this.props.history.push('/md/dashboard')
      }
  }

  render(){
    const tkn = localStorage.getItem("jwt_token")
    
    return (
        <div className="App">
          {/* <DateForm /> */}
            <Switch>
            <Route path="/user" component={UserApp} />
            <Route path="/md" component={DocApp} />
            <Route path="/" component={LoggedOut} />            
            <Route component={ErrorPage} />
            </Switch>
          {tkn ? <LoggedInFooter /> : <Footer/>}
        </div>
    );
  }
}

const mapDispatchToProps = {
  currentUser: currentUser,
  currentDoctor: currentDoctor
}

export default connect(null, mapDispatchToProps)(withRouter(App));