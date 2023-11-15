import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Library from "./library";
import Feed from "./feed";
import Player from "./player";
import Favorites from "./favorites";
import "./home.css";
import Sidebar from "../components/sidebar";
// import Login from './auth/login'
import SignUp from "./auth/signup";
import Admin from "./admin";

export default function Home() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    setToken(token);
  }, []);

  return !token ? (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  ) : (
    <div className="main-body">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
