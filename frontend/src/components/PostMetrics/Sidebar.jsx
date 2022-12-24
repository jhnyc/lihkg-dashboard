import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoLogoGithub } from "react-icons/io5";
import { RiFolderDownloadFill } from "react-icons/ri";
import Logo from "../../assets/LIHKG_logo.png";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Sidebar(props) {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleOpenOrClose = () => {
    setIsOpen(!isOpen);
    props.sidebarState(!isOpen);
  };

  React.useEffect(() => {
    function getWidth() {
      console.log(window.innerWidth);
      if (window.innerWidth < 1000) {
        setIsOpen(false);
        props.sidebarState(false);
      }
    }
    window.addEventListener("resize", getWidth);
  });

  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <div className="upper__container">
          <div
            className="sidebar-toggle-container"
            style={{ justifyContent: isOpen ? "flex-end" : "center" }}
          >
            <button id="toggle" onClick={toggleOpenOrClose}>
              <AiOutlineMenu />
            </button>{" "}
          </div>
          <div className="brand">
            <a href="http://lihkg.com" target="_blank">
              <img src={Logo} alt="" />
            </a>{" "}
          </div>{" "}
          <div className="links">
            <ul>
              <li
                id={location.pathname == "/" ? "active" : ""}
                style={{ justifyContent: isOpen ? "" : "center" }}
              >
                {/* <IoChatbubbleEllipsesSharp /> */}{" "}
                <Link to="/">
                  <IoChatbubbleEllipsesSharp />
                  <span style={{ display: isOpen ? "" : "none" }}>
                    Post Insights{" "}
                  </span>{" "}
                </Link>{" "}
              </li>{" "}
              <li
                id={location.pathname == "/usermetrics" ? "active" : ""}
                style={{ justifyContent: isOpen ? "" : "center" }}
              >
                <Link to="/usermetrics">
                  <FaUsers />
                  <span style={{ display: isOpen ? "" : "none" }}>
                    User Insights{" "}
                  </span>{" "}
                </Link>{" "}
              </li>{" "}
              <li
                id={location.pathname == "/download" ? "active" : ""}
                style={{ justifyContent: isOpen ? "" : "center" }}
              >
                <Link to="/download">
                  <RiFolderDownloadFill />
                  <span style={{ display: isOpen ? "" : "none" }}>
                    {" "}
                    Download{" "}
                  </span>{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="bottom__container">
          <a href="https://github.com/jhnyc/lihkg-dashboard" target="_blank">
            <IoLogoGithub />
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
