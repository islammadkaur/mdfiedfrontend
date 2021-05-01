import React from 'react';
import DoctorContainer from '../../Appointments/DoctorContainer'


class SearchBar extends React.Component {

    
render() {

        return (
            <div style={{marginTop:'10%'}}>
                <form>
                <input placeholder='Enter city or zip code here...' type="search" style={{fontSize: '25px',width: '70%', height: '50px', borderRadius: 25, marginLeft: '15%', textAlign: 'center'}}  onChange={this.searchUpdated}></input>
                </form>
                <input type="date" />
                <input type="time" placeholder="08:30:00" step="600" />
                <input type="time" placeholder={"18:30:00"} step="600"></input>
                <DoctorContainer />
            </div>
        );
        }
    }  
export default SearchBar       