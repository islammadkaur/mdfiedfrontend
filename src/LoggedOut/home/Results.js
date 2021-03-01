import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class Results extends Component {
    constructor() {
        super();
        this.state = {
            clinics: []
        }
    }
    componentDidMount() {
        const getClinics = ''
        fetch('url')
          .then(res => res.json())
          .then(data => console.log(data));
    }
    render() {
        return (
            <div>
                <Table striped bordered hover style={{width: '70%', marginLeft: '15%', marginTop: '5%', backgroundColor: '#fff'}}>
  <thead>
    <tr>
      <th>1111</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1111</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>1111</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>1111</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
            </div>
        );
    }
}

export default Results;