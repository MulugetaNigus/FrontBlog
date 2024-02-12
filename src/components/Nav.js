import 'bootstrap/dist/css/bootstrap.min.css'
import { RiRobot2Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'

function Navigation() {

  // used for naviagte in to different pages
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/LogIn");
  }

  const LogInUser = localStorage.getItem("BlogUser");
  return (
        <div className="row rounded d-flex justify-content-between bg-warning bg-opacity-25 p-3">
          <div className="col-md-9">
             <h2 className='text-dark' id='logoName'> <span className='display-4 text-dark'><RiRobot2Line /></span> HTS_<span className='text-danger'>Angles<sub>.com</sub></span></h2>
          </div>
          <div className="col-md-3 d-flex flex-row align-items-center gap-1">
             {/* <img src={profilePic} alt="profile pictute" style={{width: "50px" , borderRadius: "50px"}} /> */}
             {/* <h6 className='mt-2'>HI : </h6> */}
             <h6 className='text-dark mt-2 border border-secondary py-2 px-1 rounded bg-secondary bg-opacity-25 border-opacity-25'>{LogInUser ? LogInUser : "Unknown User"}</h6>
            {" "}|{" "}<button className='btn btn-outline-danger' onClick={handleLogOut}>LogOut <FiLogOut /></button>
          </div>
        </div>
  );
}

export default Navigation;