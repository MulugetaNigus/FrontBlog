import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="row mt-5 m-2 p-3">
        <div className="col-md-6 mx-auto border border-secondary border-opacity-25 p-5 rounded shadow-lg">
          <p className="display-1 text-bold text-danger fw-bold text-center">404 !</p>
          <hr />
          <h5 className="text-muted">
            Oopss! The Page You Are Looking For Not Found, May Be Removed
            Permanently Or Back To Home Page Using Below Link !
          </h5>
          <hr />
          <Link to="/HomePage">Back To Home Page</Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
