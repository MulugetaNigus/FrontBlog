import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import mongoose from "mongoose";
import { useNavigate } from "react-router-dom";

// icons
import { PiSubtitlesThin } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";
import { TbBrandBlogger } from "react-icons/tb";
import { BiLogoBlogger } from "react-icons/bi";
import { BsSendCheck } from "react-icons/bs";

// form validation packages

function UpdateBlog() {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [postedby, setauther] = useState("");
  const [homeblog, sethomeblog] = useState("");
  const [innerblog, setinnerblog] = useState("");
  const [waitwhilepublished, setwaitwhilepublished] = useState(false);

  // fetch redux-toolkit value using useSelector Hooks
  const id = useSelector((state) => state.UpdateID.value);
  //   get a single blog by its id
  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/api/v1/${id}`);
        settitle(result.data.title);
        setimage(result.data.image);
        setcategory(result.data.category);
        setauther(result.data.postedby);
        sethomeblog(result.data.homeblog);
        setinnerblog(result.data.innerblog);
      } catch (error) {
        console.log(error.message);
      }
    };

    getSingleBlog();
  }, [id]);

  // navigation make simple when you are using react-router-dom
  const navigate = useNavigate();
  // to update the blog
  const handleUpdateBlog = async () => {
    // Check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return alert("Invalid ID!");
    }

    setwaitwhilepublished(true);

    // Create the object to send the updated data
    const ReadyToUpdate = {
      image,
      title,
      homeblog,
      innerblog,
      postedby,
      category,
    };
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/${id}`,
        ReadyToUpdate
      );
      response && alert("Blog Updated Successfully !");
      setwaitwhilepublished(false);
      navigate("/DeleteandUpdateBlogs");
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
      setwaitwhilepublished(false);
    }
  };

  return (
    <>
      <div className="row my-5">
        <div className="col-md-11 bg-info bg-opacity-25 mx-auto border border-info border-opacity-25 p-3 rounded">
          <p className="text-center h1 bg-dark text-light fw-light rounded p-2 w-100 bg-opacity-25">
            <span className="display-4">
              {" "}
              <TbBrandBlogger />{" "}
            </span>
            Updating a <span className="fw-bold text-success">Blog</span>
          </p>
          <hr />
          <div className="row">
            {/* first phase */}
            <div className="col-md-6 mb-3">
              <label htmlFor="title" className="text-dark h5">
                <span className="fs-2">
                  <PiSubtitlesThin />
                </span>{" "}
                Title
              </label>
              <input
                type="text"
                className="form-control form-control-lg border border-info border-opacity-50 bg-light bg-opacity-25"
                placeholder="Blog Title"
                onChange={(e) => settitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="title" className="text-dark h5">
                <span className="fs-2">
                  <CiImageOn />
                </span>{" "}
                Image
              </label>
              <input
                type="url"
                className="form-control form-control-lg border border-info border-opacity-50 bg-light bg-opacity-25"
                onChange={(e) => setimage(e.target.value)}
                placeholder="Enter Image Url"
                value={image}
              />
            </div>
            {/* second phase */}
            <div className="col-md-6 mb-3">
              <label htmlFor="title" className="text-dark h5">
                <span className="fs-2">
                  <TbCategoryPlus />
                </span>{" "}
                Catagory
              </label>
              {/* <input type="text" className='form-control form-control-lg border border-success' placeholder='Blog Category' /> */}
              <select
                name="category"
                id="category"
                className="form-control form-control-lg border border-info border-opacity-50 bg-light bg-opacity-25"
                onChange={(e) => setcategory(e.target.value)}
                value={category}
              >
                <option value="Select The Categories">
                  Select The Categories
                </option>
                <option value="Tech">Tech</option>
                <option value="AI">AI</option>
                <option value="Informational">Informational</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Cluod Computing">Cluod Computing</option>
                <option value="Chat-gpt">Chat-gpt</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="title" className="text-dark h5">
                <span className="fs-2">
                  <FiUserPlus />
                </span>{" "}
                Auther
              </label>
              <input
                type="text"
                className="form-control form-control-lg border border-info border-opacity-50 bg-light bg-opacity-25"
                placeholder="John Dela.."
                onChange={(e) => setauther(e.target.value)}
                value={postedby}
              />
            </div>
            {/* third phase */}
            <div className="row">
              <div className="col-md-12 mb-3">
                <label htmlFor="title" className="text-dark h5">
                  <span className="fs-2">
                    <TbBrandBlogger />
                  </span>{" "}
                  Home Blog (recomanded letter: 120 )
                </label>
                <textarea
                  name="homeblog"
                  id="homeblog"
                  cols="30"
                  rows="5"
                  className="form-control border border-info border-opacity-50 bg-light bg-opacity-25"
                  placeholder="Artificial intelligence (AI) refers to the simulation or approximation of human intelligence in machines."
                  onChange={(e) => sethomeblog(e.target.value)}
                  value={homeblog}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="title" className="text-dark h5">
                  <span className="fs-2">
                    <BiLogoBlogger />
                  </span>{" "}
                  Detail Blog
                </label>
                <textarea
                  name="homeblog"
                  id="homeblog"
                  cols="30"
                  rows="15"
                  className="form-control border border-info border-opacity-50 bg-light bg-opacity-25"
                  placeholder="Artificial intelligence (AI) refers to the simulation or approximation of human intelligence in machines. The goals of artificial intelligence include computer-enhanced learning, reasoning, and perception. AI is being used today across different industries from finance to healthcare."
                  onChange={(e) => setinnerblog(e.target.value)}
                  value={innerblog}
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-start justify-content-start">
              <button
                className="btn btn-primary btn-lg my-3 px-5"
                onClick={() => handleUpdateBlog()}
              >
                {waitwhilepublished ? "Please Wait..." : "Update"}
                {/* <span className="fs-2"> */} <BsSendCheck />
                {/* </span> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateBlog;
