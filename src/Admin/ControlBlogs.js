import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUpdateID } from "../features/IDForUpdate/IDForUpdate";
import { useNavigate } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
// http request tool
import axios from "axios";

function ControlBlogs() {
  // response data handler states
  const [BlogData, setBlogData] = useState([]);
  // to store a single ID
  const [SinglID, setSinglID] = useState("");

  // use useEffect to load the all blog title
  useEffect(() => {
    const GetBlog = async () => {
      await axios
        .get("http://localhost:5000/api/v1")
        .then((result) => {
          console.log(result.data);
          setBlogData(result.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    GetBlog();
  }, []);

  // delete the blog by looking its title
  const handleDeleteBlog = async (id) => {
    const UserPermission = window.confirm("Do You Want To Delete ?");
    if(UserPermission){
      await axios
      .delete(`http://localhost:5000/api/v1/${id}`)
      .then(() => {
        alert("Blog Deleted Successfully !");
      })
      .catch((err) => {
        console.log(err.message);
      });
    }else{
      window.location.reload()
    }
  };

  // dynamic color
  const [DynamicColor, setDynamicColor] = useState("black");
  const Colors = ["red", "green", "black", "aqua", "gold"];
  setInterval(() => {
    const RandomColorGen = Math.floor(Math.random() * Colors.length);
    setDynamicColor(Colors[RandomColorGen]);
    // alert(DynamicColor)
  }, 2000);

  // for routing
  const navigate = useNavigate();
  // redux-toolkit
  const dispatch = useDispatch();

  const handleUpdateBlog = (id) => {
    dispatch(getUpdateID(id));
    navigate("/UpdateBlog");
  };

  return (
    <>
      <div className="row mt-3">
        <div className="d-flex flex-row mb-1 align-items-center justify-content-center">
          <p
            className="h2 text-dark fw-light p-3 rounded"
            style={{ textDecoration: "none", textUnderlineOffset: "10px" }}
          >
            <span className="text-warning small">
              <GrUpdate />{" "}
            </span>{" "}
            Update Your Blog Only By Its Title.
          </p>
        </div>
        {BlogData?.length ? (
          BlogData.map((Blog) => (
            <div
              key={Blog._id}
              className="col-md-10 my-1 bg-dark mx-auto border border-dark rounded p-5 d-flex flex-row align-items-center justify-content-center"
            >
              <div className="col-md-8">
                <h4 className="text-info">{Blog.title}</h4>
              </div>
              <div className="col-md-4 gap-3 d-flex flex-row align-items-center justify-content-center">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => handleUpdateBlog(Blog._id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-lg"
                  onClick={() => handleDeleteBlog(Blog._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div
            className="fetchError d-flex flex-row align-items-center justify-content-center mt-5 mx-auto"
            id="LoadingState"
          >
            <p className="h5" style={{ color: DynamicColor && DynamicColor }}>
              Loading...
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default ControlBlogs;
