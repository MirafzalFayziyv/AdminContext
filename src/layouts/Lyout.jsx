import React from "react";
import { Outlet } from "react-router-dom";
import LayoutNavbar from "./LayoutNavbar";

export default function Lyout() {
  return (
    <div>
      <LayoutNavbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
