import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux'
import {updateUser} from '../../actions/userActions'

class UserEditForm extends React.Component {
    state = {
        first_name: this.props.currentUser.first_name,
        last_name: this.props.currentUser.last_name,
        date_of_birth: this.props.currentUser.date_of_birth,
        email: this.props.currentUser.email,
        address: this.props.currentUser.address,
        city: this.props.currentUser.city,
        state: this.props.currentUser.state,
        zipcode: this.props.currentUser.zipcode,
        error: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let id = this.props.currentUser.id
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                date_of_birth: this.state.date_of_birth,
                email: this.state.email,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode
            })
        })
        .then(response => response.json())
        .then(updatedUserObj => {
            if (updatedUserObj.error){
                this.setState({
                    error: updatedUserObj.error
                })
            } else {
               this.props.updateUser(updatedUserObj)
               this.props.history.push("/user/dashboard")
            } 
        })
    }

    render(){   
        return(
            <div className="user-update-form" >
                <Form onSubmit={this.handleSubmit} >
                    <h1>Update your information</h1><br></br>
                    {this.state.error ? <p className="error">{this.state.error} </p> : null}
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="first_name" name="first_name" placeholder={this.state.first_name} value={this.state.first_name} readOnly/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="last_name" name="last_name" placeholder={this.state.last_name} value={this.state.last_name} readOnly/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDOB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" name="date_of_birth" placeholder={this.state.date_of_birth} value={this.state.date_of_birth} readOnly />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" name="address" value={this.state.address} onChange={this.handleInputChange} />
                        <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                        </Form.Text>
                    </Form.Group>
                    

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control name="city" value={this.state.city} onChange={this.handleInputChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" name="state" value={this.state.state} onChange={this.handleInputChange} >
                            <option>Select</option>
                            <option>AL</option>
                            <option>AK</option>
                            <option>AZ</option>
                            <option>AR</option>
                            <option>CA</option>
                            <option>CO</option>
                            <option>CT</option>
                            <option>DE</option>
                            <option>DC</option>
                            <option>FL</option>
                            <option>GA</option>
                            <option>HI</option>
                            <option>ID</option>
                            <option>IL</option>
                            <option>IN</option>
                            <option>IA</option>
                            <option>KS</option>
                            <option>KY</option>
                            <option>LA</option>
                            <option>ME</option>
                            <option>MD</option>
                            <option>MA</option>
                            <option>MI</option>
                            <option>MN</option>
                            <option>MS</option>
                            <option>MO</option>
                            <option>MT</option>
                            <option>NE</option>
                            <option>NV</option>
                            <option>NH</option>
                            <option>NJ</option>
                            <option>NM</option>
                            <option>NY</option>
                            <option>NC</option>
                            <option>ND</option>
                            <option>OH</option>
                            <option>OK</option>
                            <option>OR</option>
                            <option>PA</option>
                            <option>PR</option>
                            <option>RI</option>
                            <option>SC</option>
                            <option>SD</option>
                            <option>TN</option>
                            <option>TX</option>
                            <option>UT</option>
                            <option>VT</option>
                            <option>VA</option>
                            <option>WA</option>
                            <option>WV</option>
                            <option>WI</option>
                            <option>WY</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control name="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAvgIncome">
                        <Form.Label>Average Monthly Income</Form.Label>
                        <Form.Control type="number" placeholder="Approx. monthly income" name="avg_monthly_income" value={this.state.avg_monthly_income} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Button onClick={() => {this.props.history.push('/dashboard')}}>Back</Button>
                    <Button variant="success" type="submit" onClick={this.handleSubmit}>Update Information</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = {
    updateUser: updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm)