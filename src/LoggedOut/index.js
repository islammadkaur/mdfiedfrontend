import React from 'react';
import NavBar from './NavBar';
import InsuranceContainer from './InsuranceContainer';
import SpecialtiesContainer from './SpecialtiesContainer';
import HomeContainer from './HomeContainer';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

const Index = () => {
    return (
        <div>
            <NavBar />
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/insurances" component={InsuranceContainer} />
            <Route exact path="/specialties" component={SpecialtiesContainer} />
        </div>
    );
};

export default (withRouter(Index));;