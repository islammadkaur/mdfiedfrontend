import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


const SpecialtyList = (props) => {
    const ins = props.specialties.map(p => <ListGroup variant="flush">
    <ListGroup.Item style={{textAlign: 'center', borderStyle: 'solid'}}>{p.name}</ListGroup.Item>
  </ListGroup>)
    return (
        <div style={{marginTop: "5%"}}>
            <h2 style={{textDecoration: 'underline'}}>Medical Specialties</h2>
            {ins}
        </div>
    );
};

export default SpecialtyList;