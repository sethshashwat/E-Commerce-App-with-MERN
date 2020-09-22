import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class deleteaccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()

        if (!this.state.email) {
            alert('Enter Your Valid E-mail')
            this.props.history.push('/deleteaccount');
        }
        else {
            alert('Account Deleted')
            axios.post('/api/user/deleteaccount', this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            this.props.history.push('/register');
        }
    }

    render() {
        const { email } = this.state
        document.body.style = "background: black;";

        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <div className="card-header text-center text-white">
                            <h1>Delete Your Account</h1>
                        </div>
                        <div className="card card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="email">Enter Your Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Your E-mail"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-block"
                                    style={{ background: "#000000", color: "#ffffff" }}
                                >
                                    Delete My Account
              </button>
                            </form>
                            <p className="lead mt-4">
                                No Account?{" "}
                                <u>
                                    <b>
                                        {" "}
                                        <a href="/register" style={{ color: "#000000" }}>
                                            Register
                  </a>
                                    </b>
                                </u>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(deleteaccount);
