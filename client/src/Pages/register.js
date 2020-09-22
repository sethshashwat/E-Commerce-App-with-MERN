import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        
        if (!this.state.name || !this.state.email || !this.state.password || !this.state.password2) {
            alert('Please enter all fields')
            this.props.history.push('/register');
        }
        else if (this.state.password !== this.state.password2) {
            alert('Passwords do not match');
            this.props.history.push('/register');
        }
        else {
            alert('New User Registered');
            axios.post('/api/user/register', this.state)
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
        const { name, email, password, password2 } = this.state
        document.body.style = "background: black;";
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <div className="card-header text-center text-white">
                            <h1>Register</h1>
                        </div>
                        <div className="card card-body mb-5">
                            <form id="registerForm" onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        className="form-control"
                                        placeholder="Enter Name"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
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
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        name="password"
                                        className="form-control"
                                        placeholder="Create Password (min 6 chars)"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password2">Confirm Password</label>
                                    <input
                                        type="password"
                                        value={password2}
                                        name="password2"
                                        className="form-control"
                                        placeholder="Confirm Password (min 6 chars)"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <button
                                    id="register"
                                    type="submit"
                                    className="btn btn-block "
                                    style={{ background: "#000000", color: "#ffffff" }}
                                >
                                    Register
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

export default withRouter(register);