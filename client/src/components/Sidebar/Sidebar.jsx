import React from "react";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
import "./sidebar.css";
import { getToken } from "../../redux/users/usersAction";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [userLog, setUserLog] = useState({
    userState: false,
    userData: undefined,
  });

  useEffect(() => {
    const x = getToken();
    if (x.msg) {
      return setUserLog(false);
    } else {
      const decoded = jwt_decode(x);
      console.log('este es el token',x)
      console.log('este es  el token decoded',decoded)
      setUserLog({
        userState: true,
        userData: decoded,
      });
    }
  }, []);

  console.log('esta es la data del user ',userLog.userData);

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
            {SidebarData.map((item, index) => {
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
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;
