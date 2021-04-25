import React from 'react';

const Doctors = (props) => {
    const docs = props.docs.map(doc => 
        <div style={{textAlign:'center', paddingTop: '2%', paddingBottom: '2%', borderStyle: 'solid'}}> 
        <h2>Dr. {doc.first_name} {doc.last_name}</h2>
        <p>Specialty: {doc.specialties.map(p => p.name)}</p>
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