import { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.scss";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="navbar__menu-bars">
            <FaIcons.FaBars onClick={toggleSidebar} />
          </Link>
        </div>

        <nav className={`sidebar ${sidebarOpen ? "sidebar--active" : ""}`}>
          <ul className="sidebar__items" onClick={toggleSidebar}>
            <li className="sidebar__toggle">
              <Link to="#" className="navbar__menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => (
              <li key={index} className="sidebar__item">
                <Link to={item.path} className="sidebar__item-link">
                  {item.icon}
                  <span className="sidebar__item-text">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
