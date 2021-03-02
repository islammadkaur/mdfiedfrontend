import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'


class Results extends Component {
  handleClick = (url) => {
    window.open('/user', "_self");
  }
  render() {
    const tableList = this.props.clinic.map(x =>  
          <tr>
            <td>{x.name}</td>
            <td>{x.address}, {x.city}, {x.state}, {x.zip}</td>
            <td><button style={{borderRadius:30, backgroundColor:'#3486eb', color:'white'}} onClick={() => this.handleClick()}>Sign in to view</button></td>
          </tr>
          )
    return (
      <div>
                  <Table striped bordered hover style={{width: '70%', marginLeft: '15%', marginTop: '2%', marginBottom: '10%', backgroundColor: '#fff', overflow: 'scroll', position: 'relative'}}>
    <thead>
      <tr>
        <th>Clinic</th>
        <th>Address</th>
        <th>Availablity</th>
      </tr>
    </thead>
    <tbody>
  {tableList}
    </tbody>
  </Table>
      </div>
    );
  }
}

export default Results;