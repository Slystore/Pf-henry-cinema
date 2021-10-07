import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { IconContext } from 'react-icons';
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom";
import SidebarData from "./sidebarData"
import "./sidebar.css"




function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div>
                    <Link to='#' className='menu-bars'>
                        <GiHamburgerMenu onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#'  >
                                < IoMdClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
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