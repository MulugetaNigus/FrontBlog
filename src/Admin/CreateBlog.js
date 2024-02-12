import React, { useState } from "react";
import axios from "axios";

// icons
import { PiSubtitlesThin } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";
import { TbBrandBlogger } from "react-icons/tb";
import { BiLogoBlogger } from "react-icons/bi";
import { BsSendCheck } from "react-icons/bs";

// form validation packages

function CreateBlog() {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [postedby, setauther] = useState("");
  const [homeblog, sethomeblog] = useState("");
  const [innerblog, setinnerblog] = useState("");
  const [mainerror, setmainerror] = useState(false)
  const [waitwhilepublished , setwaitwhilepublished] = useState(false);

  // all error handler state
  const [titleError, settitleError] = useState(false);
  const [imageError, setimageError] = useState(false);
  const [categoryError, setcategoryError] = useState(false);
  const [postedbyError, setpostedbyError] = useState(false);
  const [homeblogError, sethomeblogError] = useState(false);
  const [innerblogError, setinnerblogError] = useState(false);

  // to post the blog
  const handlePostBlog = async () => {
    // to test our file
    // console.log(image.name);

    // loading while the data published
    setwaitwhilepublished(true);

    // to control our input more closedly
    if (!title) {
      settitleError(true);
    } else if (!image) {
      setimageError(true);
    } else if (!category) {
      setcategoryError(true);
    } else if (!postedby) {
      setpostedbyError(true);
    } else if (!homeblogError) {
      sethomeblogError(true);
    } else if (!innerblogError) {
      setinnerblogError(true);
    }

    try {
      // make an object for our data
      const ReadyToPost = {
        title,
        // image: image.name,
        image,
        category,
        postedby,
        homeblog,
        innerblog,
      };
      if (title || image || category || postedby || homeblog || innerblog) {
        await axios
          .post("http://localhost:5000/api/v1", ReadyToPost)
          .then((result) => {
            alert("Blog Published !");
            window.location.reload();
            setwaitwhilepublished(false);
            // to check everything work
            console.log(result);
          })
          .catch((err) => {
            setmainerror(true);
            setmainerror(err.message);
            console.log(err.message);
          });
      } else {
        setmainerror(true);
        setmainerror("all fileds are must be filled out");
        setwaitwhilepublished(false);
        // alert("all fileds are must be filled out");
      }
    } catch (error) {
      setmainerror(true);
      setmainerror(error.message);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="row my-5">
        <div className="col-md-11 bg-info bg-opacity-25 mx-auto border border-info border-opacity-25 p-3 rounded">
          <p className="text-center h1 bg-dark text-light fw-light rounded p-2 w-100 bg-opacity-25">
          <span className="display-4">  <TbBrandBlogger /> </span>Create a New <span className="fw-bold text-success">Blog</span>
          </p>
          {mainerror && (
            <p className="text-center justify-content-center d-flex flex-row justify align-items-center bg-danger text-light rounded p-1">
              Error: {mainerror}
            </p>
          )}
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
              />
              {titleError && (
                <p className="text-danger fw-bold bg-danger bg-opacity-50 text-dark rounded p-2 my-1">
                  Title fileds must be filled out !
                </p>
              )}
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
              />
              {imageError && (
                <p className="text-danger fw-bold bg-danger bg-opacity-50 text-dark rounded p-2 my-1">
                  image fileds must be filled out !
                </p>
              )}
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
              >
                    <option value="Select The Categories" selected disabled>
                      Select The Categories
                    </option>
                    <option value="Tech">Tech</option>
                    <option value="AI">AI</option>
                    <option value="Informational">Informational</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Cluod Computing">Cluod Computing</option>
                    <option value="Chat-gpt">Chat-gpt</option>
                  </select>
              {categoryError && (
                <p className="text-danger fw-bold bg-danger bg-opacity-50 text-dark rounded p-2 my-1">
                  category fileds must be filled out !
                </p>
              )}
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
              />
              {postedbyError && (
                <p className="text-danger fw-bold bg-danger bg-opacity-50 text-dark rounded p-2 my-1">
                  auther fileds must be filled out !
                </p>
              )}
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
                />
                {homeblogError && (
                  <p className="text-danger fw-bold bg-danger bg-opacity-50 text-dark rounded p-2 my-1">
                    home blog fileds must be filled out !
                  </p>
                )}
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
                />
                {innerblogError && (
                  <p className="text-danger fw-bold bg-danger bg-opacity-50 text-dark rounded p-2 my-1">
                    inner blog fileds must be filled out !
                  </p>
                )}
              </div>
            </div>
            <div className="d-flex flex-row align-items-start justify-content-start">
              <button
                className="btn btn-primary btn-lg my-3 px-5"
                onClick={handlePostBlog}
              >{waitwhilepublished
                ?
                "Please Wait..."
                :
                "Publish"
              }
                {/* <span className="fs-2"> */}
                 {" "} <BsSendCheck />
                {/* </span> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
