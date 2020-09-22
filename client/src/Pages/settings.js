import React from "react";

function settings() {
  document.body.style = "background: black;";

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card-header text-center text-white">
            <h1>Settings</h1>
          </div>
          <div className="card card-body text-center">
            <a
              href="/register"
              className="btn btn-block mb-2"
              style={{ background: "#000000", color: "#ffffff" }}
            >
              Create New Account
            </a>
            <a
              href="/updateinfo"
              className="btn btn-block mb-2"
              style={{ background: "#000000", color: "#ffffff" }}
            >
              Update Your Account
            </a>
            <a
              href="/deleteaccount"
              className="btn btn-block"
              style={{ background: "#000000", color: "#ffffff" }}
            >
              Delete Your Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default settings;
