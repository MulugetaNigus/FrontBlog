import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DefualtImg from "../Assets/default-image.jpg";
import DefaultImage from "../Assets/loginbg.avif";
import NavigationPlus from "./head";
import { TbCategoryPlus } from "react-icons/tb";


// icons
import { LuPenLine } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { FaUserEdit } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdReadMore } from "react-icons/md";
import { TbBrandBlogger } from "react-icons/tb";
import { RxBarChart } from "react-icons/rx";

// redux-toolkit
import { useDispatch } from "react-redux";
import { getDetailID } from "../features/IDSliceForDetailBlog/id";

// date-fns
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

// redux-toolkit
import { useSelector } from "react-redux";

function MainBlog() {
  // to store all blog post
  const [Blogs, setBlogs] = useState([]);
  const [latestBlogs, setlatestBlogs] = useState([]);
  const [CategiryBlog, setCategiryBlog] = useState([]);
  const [getCategory , setgetCategory] = useState([]);

  // redux
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  // use useEffect to load the all blog title
  useEffect(() => {
    // to get all blog
    const GetBlogs = async () => {
      await axios
        .get("http://localhost:5000/api/v1/")
        .then((result) => {
          // log the result to see our data
          console.log(result.data);
          // store all blogs in our state
          // here lets filter the data
          // if(our category state have a value , compare the hole blog with it it within hoel category)
          // let FilterOut = result.data.map( (cata) => cata.category === CategiryBlog && result.data);
          // console.log(FilterOut);
          console.log(CategiryBlog);
          setBlogs(result.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    // to get all lateast blog
    const GetBlog = async () => {
      await axios
        .get("http://localhost:5000/api/latest")
        .then((result) => {
          // log the result to see our data
          console.log(result.data);
          // store all blogs in our state
          setlatestBlogs(result.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    // get all blog fun
    GetBlogs();
    // get lateast blog fun
    GetBlog();
  }, [categories]);

  // // // get categorized blog posts
  // useEffect(() => {
  //   const GetCatagoricalBlogs = async () => {
  //     await axios
  //       .get(`http://localhost:5000/api/category?category=${CategiryBlog}`)
  //       .then((result) => {
  //         // log the result to see our data
  //         console.log(result.data);
  //         // store all blogs in our state
  //         setCategiryBlog(result.data.category);
  //         setBlogs(result.data);
  //         setgetCategory(result.data)

  //         // to update our states to render the categorical Blog Contents
  //         // setBlogs(result.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };
  //   GetCatagoricalBlogs();
  // }, [CategiryBlog]);

  return (
    <>
      {/* <NavigationPlus setCategiryBlog={setCategiryBlog} CategiryBlog={CategiryBlog} /> */}
      <>
        {/* <div className="row d-flex flex-row mt-4 m-1">
          <p className="fs-6 text-muted">
            {" "}
            <span className="fs-4">
              <TbCategoryPlus />
            </span>{" "}
            Choose Catagories:{" "}
            <span className="text-danger fw-bold">{CategiryBlog}</span>{" "}
          </p>
          <div className="col-md-12 d-flex flex-row align-items-center gap-1 mb-2">
            <button className="btn btn-dark px-5 p-1 rounded">All</button>
            <select
              name="select"
              id="select"
              className="form-select border border-dark"
              onChange={(change) => {
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
        </div> */}
      </>
      {/* head end */}
      <div className="row m-1">
        {/* main blog post here */}
        <div
          className="col-md-8"
          style={{ borderRightStyle: "5px solid gold" }}
        >
          <div className="row mt-3">
            <h4
              className="text-muted ms-3 mb-3"
              style={{ borderLeft: "10px solid #DC3545" }}
            >
              <span className="fs-2">
                <TbBrandBlogger />
              </span>{" "}
              All Posts {CategiryBlog}
            </h4>
            {/* if our redux store have a value, set to category state and render caterogry state here otherwise render all blog state */}
            {/* if(reduxStore === value) {
              {/* CategiryBlog.map( (Blog) => (
                render the rest of the ui
            )) */}
            {Blogs ?  
            (
              Blogs.map((Blog) => (
                <div key={Blog._id} className="col-md-6 mb-3 d-flex">
                  <div
                    className="card"
                    id="cards"
                    style={{ flex: 1, height: "100%", borderRadius: "10px" }}
                  >
                    <img
                      // src={Blog.image ? Blog.image : DefaultImage}
                      src={DefaultImage}
                      // src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg"
                      alt="blog post photo"
                      className="img-fluid card-i postmg-top"
                      style={{
                        height: "250px",
                        objectFit: "cover",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                    <div className="card-footer">
                      <h4 className="text-dark fw-bold">
                        {/* <span className="fs-3">
                          <LuPenLine />
                        </span>{" "} */}
                        {Blog.title}
                      </h4>
                      <p className="text-muted">
                        <span className="fs-3">
                          <LuUser />{" "}
                        </span>
                        {localStorage.getItem("BlogUser")}
                      </p>
                      <hr />
                      <p className="fs-5 text-start text-truncate">
                        {Blog.homeblog}
                      </p>
                      <hr />
                      <p>
                        <span className="fw-bold">
                          {" "}
                          <span className="text-primary fs-5">
                            <FaUserEdit />
                          </span>{" "}
                          Posted By
                        </span>
                        : {Blog.postedby}
                      </p>
                      <p>
                        <span className="fw-bold">
                          {" "}
                          <span className="text-primary fs-5">
                            <IoTime />
                          </span>{" "}
                          Posted Date
                        </span>
                        :{" "}
                        {formatDistanceToNow(Blog.createdAt, {
                          addSuffix: "true",
                        })}
                      </p>
                      <Link to="/BlogDetail">
                        <div
                          className="Readbtn"
                          style={{
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "end",
                            alignContent: "end",
                          }}
                        >
                          <button
                            className="btn btn-primary btn-lg w-100 stretched-link"
                            onClick={() => {
                              dispatch(getDetailID(Blog._id));
                            }}
                          >
                            Read More {/* <span> */}
                            <MdReadMore />
                            {/* </span> */}
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
        {/* letest posts here*/}
        <div className="col-md-4 mt-3">
          <h4
            className="text-muted mb-3"
            style={{ borderLeft: "10px solid #DC3545" }}
          >
            <span className="fs-3 mb-3 ms-2">
              <RxBarChart />{" "}
            </span>
            Latest Posts
          </h4>
          {latestBlogs ? (
            latestBlogs.map((lBlog) => (
              <div
                key={lBlog._id}
                className="card mb-3"
                id="cards"
                style={{ borderRadius: "10px" }}
              >
                <img
                  // src={lBlog.image ? lBlog.image : DefualtImg}
                  src={DefaultImage}
                  // src="https://www.technology-innovators.com/wp-content/uploads/2020/11/What-are-drone-technology-and-types-of-drones-thriving-in-todays-market-min.jpg"
                  alt="blog post photo"
                  className="img-fluid card-img-top"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <div className="card-footer">
                  <h4 className="text-dark fw-bold">
                    {" "}
                    {/* <span className="fs-3">
                          <LuPenLine />
                        </span>{" "} */}
                    {lBlog.title}
                  </h4>
                  <hr />
                  <p className="fs-5 text-start text-truncate">
                    {lBlog.homeblog}
                  </p>
                  <hr />
                  <p>
                    <span className="fw-bold">
                      <span className="text-primary fs-5">
                        <FaUserEdit />
                      </span>{" "}
                      Posted By
                    </span>
                    : {lBlog.postedby}
                  </p>
                  <p>
                    <span className="fw-bold">
                      <span className="text-primary fs-5">
                        <IoTime />
                      </span>{" "}
                      Posted Date
                    </span>
                    :{" "}
                    {formatDistanceToNow(lBlog.createdAt, {
                      addSuffix: "true",
                    })}
                  </p>
                </div>
                <Link to="/BlogDetail">
                  <div
                    className="Readbtn"
                    style={{
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "end",
                      alignContent: "end",
                    }}
                  >
                    <button
                      className="btn btn-primary btn-lg w-100 stretched-link"
                      onClick={() => {
                        dispatch(getDetailID(lBlog._id));
                      }}
                    >
                      Read More {/* <span> */}
                      <MdReadMore />
                      {/* </span> */}
                    </button>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default MainBlog;
