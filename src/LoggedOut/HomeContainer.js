import React, { Component } from 'react';
import SearchBar from './home/SearchBar'
import Title from './home/Title'
import Results from './home/Results'

class HomeContainer extends Component {
    render() {
        return (
            <div style={{marginTop: '6%'}}>
                <Title />
                <SearchBar />
                <Results />
            </div>
        );
    }
}

export default HomeContainer;