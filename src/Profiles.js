import React from "react";
import Profile from "./Profile";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import NoChoice from "./NoChoice";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/t">t</Link>
        </li>
        <li>
          <Link to="/profiles/homer">homer</Link>
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
