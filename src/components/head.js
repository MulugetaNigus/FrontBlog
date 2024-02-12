import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategory } from "../features/Category/Category";

// icnos
import { TbCategoryPlus } from "react-icons/tb";

function Tophead({ setCategiryBlog, CategiryBlog }) {
  // to hold the category changes
  // const [category, setcategory] = useState("All");
  // use dispatch to upgrade the values of category part of our blog post

  return (
    <>
      <div className="row d-flex flex-row mt-4 m-1">
        <p className="fs-6 text-muted">
          {" "}
          <span className="fs-4">
            <TbCategoryPlus />
          </span>{" "}
          Choose Catagories:{" "}
          <span className="text-danger fw-bold">{setCategiryBlog}</span>{" "}
        </p>
        <div className="col-md-12 d-flex flex-row align-items-center gap-1 mb-2">
          <button className="btn btn-dark px-5 p-1 rounded">All</button>
          <select
            name="select"
            id="select"
            className="form-select border border-dark"
            onChange={
              (change) => {
              setCategiryBlog(change.target.value);
            }}
            value={CategiryBlog}
          >
            <option value="Select Category">Select Category</option>
            <option value="Tech">Tech</option>
            <option value="Informational">Informational</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="AI">AI</option>
            <option value="Crypto Currency">Crypto Currency</option>
          </select>
        </div>
        {/* <div className="col-md-6 d-flex flex-row align-items-center mb-2">
          <h6 className="fs-5 text-muted me-3">Sort By: </h6>
          <select name="select" id="select" className="form-select form-select-lg border border-dark">
            <option value="latest">latest</option>
            <option value="Old">Old</option>
            <option value="NotlatestNotOld">Not latest Not Old</option>
          </select>
        </div> */}
      </div>
    </>
  );
}

export default Tophead;
