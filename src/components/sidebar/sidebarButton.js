import React from "react";
import "./sidebarButton.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

export default function SidebarButton(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  const isActive = location.pathname === props.to;

  const btnClass = isActive ? "btn-body active" : "btn-body";
  return (
    <Link to={props.to}>
      <div
        className={btnClass}
        onClick={props.title === "Sign Out" ? handleSignOut : undefined}
      >
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {props.icon}
          <p className="btn-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}
