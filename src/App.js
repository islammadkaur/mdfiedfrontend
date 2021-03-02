import React from 'react';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer'
import LoggedInFooter from './components/LoggedInFooter'
import LoggedOut from './LoggedOut/index'
import DocApp from './type/DocApp'
import UserApp from './type/UserApp'
import {connect} from 'react-redux'
import {currentUser} from './actions/userActions'
import {currentDoctor} from './actions/doctorActions'


class App extends React.Component {

  render(){
    const tkn = localStorage.getItem("jwt_token")
    return (
        <div className="App">
            <Route path="/" component={LoggedOut} />
            <Route path="/user" component={UserApp} />
            <Route path="/md" component={DocApp} />
          { tkn ? <LoggedInFooter /> : <Footer/>}
        </div>
    );
  }
}

const mapDispatchToProps = {
  currentUser: currentUser,
  currentDoctor: currentDoctor
}

export default connect(null, mapDispatchToProps)(withRouter(App));
