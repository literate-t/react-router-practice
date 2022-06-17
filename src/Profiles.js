import React from "react";
import Profile from "./Profile";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import NoChoice from "./NoChoice";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/t"
            style={({ isActive }) =>
              isActive ? { color: "white", background: "black" } : null
            }
          >
            t
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/homer"
            style={({ isActive }) =>
              isActive ? { color: "red", background: "blue" } : null
            }
          >
            homer
          </NavLink>
        </li>
      </ul>
      <Outlet />

      <Routes>
        <Route path="" element={<NoChoice />} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Profiles;
