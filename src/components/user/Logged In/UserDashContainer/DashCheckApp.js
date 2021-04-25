import React from 'react';
import DoctorContainer from '../../Appointments/DoctorContainer'

const DashCheckApp = (props) => {
    return (
        <div style={{margin: '2%'}}>
            <button style={{borderStyle: 'solid', backgroundColor:'#4284ed', width:'380px', height:'380px', color: 'white', fontSize: '26px', borderRadius: '100px'}}>Manage Appointments</button>
        </div>
    );
};

export default DashCheckApp;