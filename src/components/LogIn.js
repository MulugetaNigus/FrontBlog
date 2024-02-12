import React , {useState}from "react";
import logo from "../Assets/favicon.ico";
import { Link , useNavigate} from "react-router-dom";
import { CiLogin } from "react-icons/ci";

// firebase packages
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase";

function LogIn() {
  // states to store user info
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loadingState , setloadingState] = useState(false);

  // used for going to another page
  const navigate = useNavigate();   

  const handleLogUser = async () => {
    setloadingState(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((reslut) => {
         console.log(reslut);
         localStorage.setItem("BlogUser" , reslut.user.email);
         navigate("/HomePage");
         setloadingState(true);
      })
      .catch((err) => {
        if(!err){
            console.log("Success LogIn");
        }else{
            const alert = window.confirm("User Not Found, Register First To LogIn !")
            // alert("User Not Found, Register First To LogIn !");
            if(alert){
               navigate('/Register');
            }else{
               navigate('/login');
            }
        }
        // console.log(err.message);
      });
  };
  return (
    <>
      <div className="row m-3 mt-5">
        <div className="col-md-8 mx-auto d-flex flex-column border border-secondary rounded p-3 shadow-lg border-opacity-50" id="bgs">
          <div className="logo mx-auto">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <div className="regorlog mx-auto my-3">
            <p className="display-3 text-light text-decoration-underline">LogIn</p>
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
            onChange={ (change) => setemail(change.target.value)}
          />
          <label htmlFor="password" className="text-light mt-2">
            Password
          </label>
          <input
            type="password"
            className="form-control form-control-lg bg-info bg-opacity-25 text-light border border-info border-opacity-50"
            placeholder="Your Password..."
            onChange={ (change) => setpassword(change.target.value)}
          />
          <button
            className="text-dark btn btn-primary w-100 btn-lg my-3"
            onClick={handleLogUser}
          ><CiLogin /> {" "}
            {loadingState
            ?
            "Please Wait..."
            :
            "LogIn"
          }
          </button>
          <Link to="/Register">Don't have an account Register Here.</Link>
        </div>
      </div>
    </>
  );
}

export default LogIn;
