import React from 'react';

const Doctors = (props) => {
    const docs = props.docs.map(doc => 
        <div style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%', borderStyle: 'solid'}}> 
        <h2>Dr. {doc.first_name} {doc.last_name}</h2>

        <p>Specialty: {doc.specialties.map(p => p.name)}</p>
        <p>Monday: {doc.mondays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
        <p>Tuesday: {doc.tuesdays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
        <p>Wednesday: {doc.wednesdays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
        <p>Thursday: {doc.thursdays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
        <p>Friday: {doc.fridays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
        <p>Saturday: {doc.saturdays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
        <p>Sunday: {doc.sundays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
        <p>Gender: {doc.gender}</p>
        
        <img src={doc.image} alt={''} style={{height: '200px', width: '200px'}}></img>
    </div>
    )
    // debugger
    return (
        <div>
            {docs}
        </div>
    );
};

export default Doctors;