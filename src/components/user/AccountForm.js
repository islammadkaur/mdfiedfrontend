import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import { addAccount } from '../../actions/accountActions';
import AccountsImg from '../../images/Accounts.png'
class AccountForm extends React.Component {
    state = {
        name: "",
        category: "",
        balance: "",
        error: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBalanceChange = (e) => {
        this.setState({
            [e.target.name]: parseFloat(e.target.value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/accounts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name, 
                category: this.state.category, 
                balance: this.state.balance, 
                user_id: this.props.currentUser.id
            })
        })
        .then(response => response.json())
        .then(newAcc => {
            if (newAcc.error){
                this.setState({
                    error: newAcc.error
                })
            } else {
            this.props.addAccount(newAcc)
            this.props.history.push('/accounts')
            }
        })
    }

    render(){
        return(
            <div className="account-form shadow-lg rounded">

                    {this.state.error ?
                    <Alert className="alert" variant="danger" onClose={() => this.setState({error: ''})} dismissible>
                        <Alert.Heading>Oops! Something went wrong!</Alert.Heading>
                        <ul>
                            {this.state.error.map(message => {
                                return <li>{message}</li>
                            })}
                        </ul>
                    </Alert>
                    : null}

                <h2>New Account</h2>
                <Form onSubmit={this.handleSubmit} >
                <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name"  placeholder="Bank, lender, etc." value={this.state.name} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" value={this.state.category} onChange={this.handleInputChange} >
                        <option>Select</option>
                        <option>Checking</option>
                        <option>Savings</option>
                        <option>Cash</option>
                        <option>Investments</option>
                        <option>Loan</option>
                        <option>Credit Card</option>
                        <option>Mortgage</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridBalance">
                    <Form.Label>Balance</Form.Label>
                    <Form.Control type="number" name="balance" placeholder="$" value={this.state.balance} onChange={this.handleBalanceChange} />
                 </Form.Group>
                </Form.Row>
                <div>
                <img className="account-from-image" alt="" src={AccountsImg}>
                </img>
                </div>
                <Button onClick={() => this.props.history.push('/accounts')}>Cancel</Button>
                <Button type="submit" variant="success">Add Account</Button>
    

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
    addAccount: addAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm)