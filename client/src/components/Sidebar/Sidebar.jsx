import React from "react";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { BiMoviePlay } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { GiMailbox } from "react-icons/gi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import "./sidebar.css";
import { getToken } from "../../redux/users/usersAction";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [userLog, setUserLog] = useState({
    userState: false,
    userAdmin: {},
    userData: {},
  });
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  useEffect(() => {
    const x = getToken();
    if (x.msg) {
      return setUserLog(false);
    } else {
      const decoded = jwt_decode(x);
      setUserLog({
        userState: true,
        userData: decoded,
        userAdmin: decoded.user ? decoded.user.userType : "",
      });
    }
  }, []);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div>
          <Link to="#" className="menu-bars">
            <GiHamburgerMenu onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#">
                <IoMdClose />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/">
                <BiCameraMovie />
                <span>Cines</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/">
                <BiMoviePlay />
                <span>Estrenos</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/">
                <MdLocalMovies />
                <span>Todas las peliculas</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/">
                <AiOutlineHome />
                <span>Cine en casa</span>
              </Link>
            </li>
            {userLog ? (
              <li className="nav-text">
                <Link to="/">
                  <BiLogOut />
                  <span
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Log out
                  </span>
                </Link>
              </li>
            ) : (
              <li className="nav-text">
                <Link to="/login">
                  <BiLogIn />
                  <span>Login</span>
                </Link>
              </li>
            )}
            <li className="nav-text">
              <Link to="/">
                <AiOutlineMail />
                <span>Contacto</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/">
                <BsBook />
                <span>Terminos y condiciones</span>
              </Link>
            </li>
            {/* <li className="nav-text">
              <Link to="/">
                <GiMailbox />
                <span>Buzon de quejas y sugerencias</span>
              </Link>
            </li> */}
            {userLog.userAdmin === "admin" ? (
              <li className="nav-text">
                <Link to="/admin">
                  <MdOutlineAdminPanelSettings />
                  <span>Admin</span>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;
