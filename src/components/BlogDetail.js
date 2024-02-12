import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import mongoose from "mongoose";
import DefualtImg from "../Assets/default-image.jpg";

// date-fns
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

// redux
import { useSelector } from "react-redux";

// icons
import { LuPenLine } from "react-icons/lu";
import { IoTime } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { MdInsertComment } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

// loading gif
import loadingState from "../Assets/icegif-1260.gif";
import Footer from "./Footer";

function BlogDetail() {
  // states to store detail blog list
  const [DetailBlog, setDetailBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = useSelector((state) => state.DetailID);

  useEffect(() => {
    // window.localStorage.setItem("dislikes", false);
    // window.localStorage.setItem("likes", false);
    setLoading(true);
    const getDetail = async () => {
      try {
        if (mongoose.Types.ObjectId.isValid(id.value)) {
          const response = await axios.get(
            `http://localhost:5000/api/v1/${id.value}`
          );
          setDetailBlog(response.data);
          console.log(response.data);
          setLoading(false);
        } else {
          console.error("Invalid ID:", id);
          setLoading(false);
          // Handle the invalid ID in a user-friendly way, e.g., display an error message to the user
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        // Handle the error in a user-friendly way, e.g., display an error message to the user
      }
    };
    // invokig the main function inside useEffect
    getDetail();
  }, []);

  // like functionality
  // const handleaddLike = async (id) => {
  //   setIsLikeClicked(true)
  //   // const newdisLikeCount = disLike - 1;
  //   const newLikeCount = Like + 1;
  //   if (
      // window.localStorage.getItem("dislikes") === true &&
      // window.localStorage.getItem("likes") === true
  //   ) {
  //     // return alert("You Are Neither Like or dislike This Post !");
  //     await axios
  //       .put(`http://localhost:5000/api/v1/dislike/${id}`, {
  //         like: newLikeCount,
  //       })
  //       .then(() => {
  //         setLikeEffect2(true);
  //         window.localStorage.setItem("dislikes", false);
  //         window.localStorage.setItem("likes", true);
  //         setLikeEffect1(false);
  //         setIsLikeClicked(false);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   } else {
  //     alert("you are already like this post");
  //   }
  // };

  // const handleminusLike = async (id) => {
  //   setIsDisLikeClicked(true)
  //   window.localStorage.setItem("dislikes", false);
  //   window.localStorage.setItem("likes", false);
  //   // const newdisLikeCount = disLike - 1;
  //   const newLikeCount = Like - 1;
  //   if (
  //     window.localStorage.getItem("dislike") &&
  //     window.localStorage.getItem("likes")
  //   ) {
  //     // return alert("You Are Neither Like or dislike This Post !");
  //     await axios
  //       .put(`http://localhost:5000/api/v1/dislike/${id}`, {
  //         like: newLikeCount,
  //       })
  //       .then(() => {
  //         setLikeEffect2(true);
  //         window.localStorage.setItem("dislikes", true);
  //         window.localStorage.setItem("likes", false);
  //         setLikeEffect1(false);
  //         setIsDisLikeClicked(false);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   } else {
  //     alert("you are already dislike this post");
  //   }
  // };

  return (
    <>
      <Nav />
      {loading ? (
        <div className="row m-1 mt-5">
          <div className="col-md-8 mx-auto rounded border border-light border-opacity-25 mb-5">
            <div className="row">
              <div
                className="col-md-12"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <img
                  src={loadingState}
                  alt="loading"
                  className="img-fluid"
                  style={{ width: "150px" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row mt-5">
          {/* {DetailBlog &&
          DetailBlog.map((DBlog) => ( */}
          <div className="col-md-8 mx-auto rounded border border-light border-opacity-25 mb-5">
            <div className="row">
              {/* <div
                className="col-md-12"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              > */}

              <p className="fs-6 fw-bold text-center">
                <span>
                  <IoTime /> Posted Date :
                </span>{" "}
                {DetailBlog.createdAt}
                {/* {formatDistanceToNow(DetailBlog.createdAt , { addSuffix: "true" })} */}
              </p>

              <img
                src={BlogDetail.image ? BlogDetail.image : DefualtImg}
                alt="photo"
                className="img-fluid mx-auto rounded w-75"
              />
              {/* </div> */}
            </div>
            <div className="mainContent m-2">
              {" "}
              <p className="display-6 mt-3 fw-bold text-dark"
              style={{ textDecoration: "underline" , textUnderlineOffset: "8px" }}
              >
                {" "}
                {/* <span className="fs-3">
                          <LuPenLine />
                        </span>{" "} */}
                {DetailBlog.title}
              </p>
              <p
                className="h5 text-dark fw-bold my-3"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap"
                  // overflowX: "scroll",
                }}
              >
                {DetailBlog.innerblog}
              </p>
              <p className="fw-normal bg-secondary bg-opacity-25 p-3 rounded">
                <FaUserEdit /> Ceated By : {DetailBlog.postedby}
              </p>
            </div>
            <hr />
            {/* <div className="row m-1 row-cols-1 d-flex flex-row align-items-center justify-content-between">
              <li className="small mb-3">
                if you get valuable thing, give it a like{" "}
                <span className="text-primary fw-bold">
                  <SlLike />
                </span>{" "}
              </li>
              {/* <div className="col-md-6 d-flex flex-row align-items-start justify-content-start">
                {/* <span className="h5 text-dark">
                  {DetailBlog.like}{" "}
                  <button className="btn btn-primary text-dark">Like</button>
                </span> */}
                {/* <button
                  className="btn btn-light btn-lg border border-warning border-opacity-25 p-2 me-5 px-3"
                  onClick={() => handleaddLike(DetailBlog._id)}
                  style={{ backgroundColor: LikeEffect1 ? "gold" : "" }}
                >
                  <span style={{ color: LikeEffect1 ? "green" : "" }}>
                    <SlLike />
                    &nbsp;&nbsp;&nbsp;{DetailBlog.like}{" "}
                  </span>
                </button> */}

                {/* {LikeEffect1 && ( */}
                {/* <button
                  className="btn btn-light btn-lg border border-warning border-opacity-25 p-2 px-3"
                  onClick={() => handleminusLike(DetailBlog._id)}
                  style={{ backgroundColor: LikeEffect2 ? "gold" : "" }}
                >
                  <span style={{ color: LikeEffect2 ? "green" : "" }}>
                    <SlDislike />
                    &nbsp;&nbsp;&nbsp;{DetailBlog.dislike}{" "}
                  </span>
                </button> */}
                {/* )} */}
                {/* <button type="button" class="btn btn-primary position-relative">
                  Like
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {DetailBlog.like}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button> */}
              {/* </div> */}
              {/* <div className="col-md-6 d-flex ">
                <Link to="/HomePage">
                  <button className="btn btn-link mb-3">Back To Home</button>
                </Link>
              </div> */}
            {/* </div> */}
            {/* <div className="row m-1 mt-3">
              <div className="col-md-8">
                <h3 className="">
                  Comments <GoCommentDiscussion />
                </h3>
                <hr className="text-dark" />
                <code className="bg-secondary bg-opacity-25 p-2 rounded ">
                  from : {DetailBlog.postedby}
                </code>
                <h6
                  className="my-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={DetailBlog.postedby + " Comment's"}
                >
                  <span>
                    <MdInsertComment />{" "}
                  </span>
                  {DetailBlog.comments}
                </h6>
              </div>
            </div> */}
          </div>
          {/* ))} */}
        </div>
      )}

      {/* modal */}
      {/* <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12 bg-light bg-opacity-25 mx-auto border border-light border-opacity-50 p-3 rounded">
              <label htmlFor="comment" className="text-primary">
                Comment
              </label>
              <textarea
                name="messg"
                id="mssg"
                cols="30"
                rows="5"
                className="form-control"
                placeholder="Enter your comment here..."
                onChange={(e) => setcomment(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button
                className="btn btn-primary btn-lg w-100 my-2"
                onClick={() => handleInnerCommentPublished(DetailBlog._id)}
              >
                Publish
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal> */}

      {/* footer */}
      <Footer />
    </>
  );
}

export default BlogDetail;
