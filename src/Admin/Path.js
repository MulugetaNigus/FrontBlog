import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlinePlaylistRemove } from "react-icons/md";

function Path() {
  return (
    <div className="bg-dark" style={{maxHeight: "0px"}}>

      {/* header part */}
      <div className="row mb-3">
        <div className="col-md-12">
          <p className="text-center text-info h1 bg-success bg-opacity-25 p-3">
            Let's Choose Your Task !
          </p>
        </div>
      </div>

      {/* main section */}
      <div className="row m-2 gap-4">
        <div className="col-md-2"></div>

        <button
          className="col-md-4 rounded border border-light bg-light d-flex flex-column align-items-center justify-content-center shadow-lg"
          style={{ height: "200px"}}
        >
          <span className="fs-1 text-muted"><IoCreateOutline /></span>  
          <Link to="/CreateBlog" className="text-decoration-none">
            <p className="h4 text-info">Create a Blog</p>
          </Link>
        </button>

        <button
          className="col-md-4 rounded border border-light bg-light d-flex flex-column align-items-center justify-content-center shadow-lg"
          style={{ height: "200px" }}
        >
          <span className="fs-1 text-muted"><MdOutlinePlaylistRemove /></span>  
          <Link to="/DeleteandUpdateBlogs" className="text-decoration-none">
            <p className="h4 text-info">Delete and Update a Blog</p>
          </Link>
        </button>

        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Path;
