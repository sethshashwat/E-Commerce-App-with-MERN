import React from "react";

function welcome() {
  document.body.style = "background: black;";

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card-header text-center text-white">
            <h1>My MI</h1>
          </div>
          <div className="card card-body text-center">
            <p className="lead">Create an account or login</p>
            <a
              href="/register"
              className="btn btn-block mb-2"
              style={{ background: "#000000", color: "#ffffff" }}
            >
              Register
            </a>
            <a
              href="/login"
              className="btn btn-block"
              style={{ background: "#000000", color: "#ffffff" }}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default welcome;
