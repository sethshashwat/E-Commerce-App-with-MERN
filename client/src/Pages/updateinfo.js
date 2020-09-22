import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class updateinfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email1: '',
            email: '',
            name: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()

        if (!this.state.email1 || !this.state.email || !this.state.name || !this.state.password) {
            alert('Please enter all fields')
            this.props.history.push('/updateinfo');
        }
        else {
            alert('User Updated')
            axios.post('/api/user/updateinfo', this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            this.props.history.push('/login');
        }
    }

    render() {
        const { email1, email, name, password } = this.state
        document.body.style = "background: black;";

        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <div className="card-header text-center text-white">
                            <h1>Update Your Account</h1>
                        </div>
                        <div className="card card-body mb-5">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="email1">Existing Email</label>
                                    <input
                                        type="email"
                                        value={email1}
                                        name="email1"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Set New Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Set New Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter Name"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Set New Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-block"
                                    style={{ background: "#000000", color: "#ffffff" }}
                                >
                                    Apply Changes
              </button>
                            </form>
                            <p className="lead mt-4">
                                Have An Account?{" "}
                                <u>
                                    <b>
                                        <a href="/login" style={{ color: "#000000" }}>
                                            Login
                  </a>{" "}
                                    </b>{" "}
                                </u>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(updateinfo);
