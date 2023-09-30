import React from "react";
import { Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import '../style/taskbar.css';
import {TaskbarActionsData} from "../data/TaskbarActionsData";

const Taskbar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-vertical">
      {TaskbarActionsData.map(data => (
        <NavLink href={data.linkTo}>
          {data.icon}
          <span>{data.title}</span>
        </NavLink>
      ))}
    </Navbar>
  );
};

export default Taskbar;
