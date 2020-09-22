import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

        if (!this.state.email || !this.state.password) {
            alert('Please enter all fields')
            this.props.history.push('/login');
        }
        else {
            axios.post('/api/user/login', this.state)
                .then(response => {
                    if (response.status === 200) {
                        this.props.history.push('/home')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    render() {
        const { email, password } = this.state
        document.body.style = "background: black;";

        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <div className="card-header text-center text-white">
                            <h1>Login</h1>
                        </div>
                        <div className="card card-body">
                            <form onSubmit={this.submitHandler}>
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
                                        placeholder="Enter Password (min 6 chars)"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-block"
                                    style={{ background: "#000000", color: "#ffffff" }}
                                >
                                    Login
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
        )
    }
}

export default withRouter(login);
