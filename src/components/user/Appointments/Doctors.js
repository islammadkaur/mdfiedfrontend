import React, { Component } from 'react';

class Doctors extends Component {

    render(event) {
         const docs = this.props.docs.map(doc =>  { 

                 
       return <div style={{padding: '3%', borderStyle: 'solid'}}> 
          <div style={{float:'left', borderRightStyle: 'solid'}} >
              <img src={doc.image} alt={''} style={{height: '200px', width: '200px'}}></img>
              <h2>Dr. {doc.first_name} {doc.last_name}</h2>
              <p>Specialty: {doc.specialties.map(p => p.name)}</p>
              <p>Gender: {doc.gender}</p>
          </div>
          <div style={{height:'auto', marginLeft: "10%"}}>
              <p>Monday: {doc.mondays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
              <p>Tuesday: {doc.tuesdays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
              <p>Wednesday: {doc.wednesdays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
              <p>Thursday: {doc.thursdays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
              <p>Friday: {doc.fridays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
              <p>Saturday: {doc.saturdays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
              <p>Sunday: {doc.sundays.map(p => p.available ? `${p.start < 12 ? `${p.start}am`: `${p.start}pm`}-${p.end < 12 ? `${p.end}am`: `${p.end - 12}pm`}` : 'N/A')} </p>
          </div>
      </div>   
    })

        return (
            <div>
                <div>
                    <p>Gender: 
                    <select onChange={(event) => this.props.gen(event)} style={{marginLeft: '1%'}}>
                        <option value="All" selected={true}>No preference</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </p>
                    <p>Specialty:  
                        <select onChange={(event) => this.props.spec(event)} style={{marginLeft: '1%'}}>
                            <option value="All" selected={true}>No preference</option>
                            <option value="Male">Male</option>
                            <option value="Allergy and immunology">Allergy and immunology</option>
                        </select>
                    </p>
                </div>

                {docs}
            </div>
        );
    }
}

export default Doctors;