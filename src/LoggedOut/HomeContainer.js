import React, { Component } from 'react';
import SearchBar from './home/SearchBar'
import Title from './home/Title'
import ResultsCon from './home/ResultsCon'

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

export default HomeContainer;