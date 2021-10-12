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
import "./sidebar.css";
import { getToken } from "../../redux/users/usersAction";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [userLog, setUserLog] = useState({
    userState: false,
    userData: undefined,
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
      console.log('este es el decode',decoded)
      setUserLog({
        userState: true,
        userData: decoded,
      });
    }
  }, []);

  console.log("esta es la data del user ");

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
            <li className="nav-text">
              <Link to="/admin">
                <GiMailbox />
                <span>Administrador</span>
              </Link>
            </li>

            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {userLog ? (
                    <Link to={item.path2}>
                      {item.icon2}
                      <span>{item.title2}</span>
                    </Link>
                  ) : (
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  )}

                 
                </li>
              );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;