import React, { useState } from "react";
import logo from "../Assets/favicon.ico";
import { Link, useNavigate } from "react-router-dom";
import { RiRegisteredLine } from "react-icons/ri";

// firebase auth
import { auth } from "../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function AuthUser() {
  // states to store user info
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [loadingState, setloadingState] = useState(false);

  // used to navigate to another page
  const navigate = useNavigate();

  const handleRegUser = async () => {
    try {
      if (!email) {
        setemailError(true);
      } else if (!password) {
        setpasswordError(true);
      } else {
        setloadingState(true);
        await createUserWithEmailAndPassword(auth, email, password)
          .then((reslut) => {
            console.log(reslut.user.email);
            localStorage.setItem("BlogUser", reslut.user.email);
            navigate("/LogIn");
            setloadingState(false);
            window.localStorage.setItem("AuthenticatedUser", true);
          })
          .catch((err) => {
            console.log(err.message);
            alert("email already in used !");
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="row m-3 mt-5">
        <div
          className="col-md-8 mx-auto d-flex flex-column border border-secondary rounded p-3 shadow-lg border-opacity-50"
          id="bgs"
        >
          <div className="logo mx-auto">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <div className="regorlog mx-auto my-3">
            <p className="display-3 text-light text-decoration-underline">
              Register
            </p>
          </div>
          <label
            htmlFor="email"
            className="text-light"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              alignContent: "start",
            }}
          >
            Email
          </label>
          <input
            type="email"
            className="form-control form-control-lg bg-info bg-opacity-25 text-light border border-info border-opacity-50"
            placeholder="Your Email..."
            onChange={(change) => setemail(change.target.value)}
          />
          {emailError && (
            <p className="text-danger ms-1 fw-normal">
              email is required filed !{" "}
            </p>
          )}
          <label htmlFor="password" className="text-light mt-2">
            Password
          </label>
          <input
            type="password"
            className="form-control form-control-lg bg-info bg-opacity-25 text-light border border-info border-opacity-50"
            placeholder="Your Password..."
            onChange={(change) => setpassword(change.target.value)}
          />
          {passwordError && (
            <p className="text-danger ms-1 fw-normal">
              password is required filed !{" "}
            </p>
          )}
          <button
            className="text-dark btn btn-primary w-100 btn-lg my-3"
            onClick={handleRegUser}
          >
            <RiRegisteredLine /> {loadingState ? "Please Wait..." : "Register"}
          </button>
          <Link to="/login">Already have an account LogIn Here.</Link>
        </div>
      </div>
    </>
  );
}

export default AuthUser;
