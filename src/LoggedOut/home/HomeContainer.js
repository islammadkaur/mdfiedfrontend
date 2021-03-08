import React, { Component } from 'react';
import SearchBar from './SearchBar'
import Title from './Title'
import ResultsCon from './ResultsCon'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {currentUser} from '../../actions/userActions'




class HomeContainer extends Component {

    render() {
        return (
            <div style={{marginTop: '6%'}}>
                <Title />
                <SearchBar />
                <ResultsCon />
            </div>
        );
    }
}

const mapDispatchToProps = {
    currentUser: currentUser,
}


// export default HomeContainer;
export default connect(null, mapDispatchToProps)(withRouter(HomeContainer));