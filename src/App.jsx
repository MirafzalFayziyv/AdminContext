import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "./App.scss";
import Lyout from "./layouts/Lyout";
import NotPage from "./pages/NotPage";
import SinglePage from "./pages/SinglePage";
import { AuthProvider } from "./provider/AuthProvider";
import Login from "./pages/Login";
import RequireAuth from "./provider/RequireAuth";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Lyout />}>
          <Route index element={<Main />} />
          <Route path="/blog" element={<RequireAuth> <Blog /></RequireAuth>} />
          <Route path="/blog/:id" element={<SinglePage />} />
          <Route path="/about/*" element={<RequireAuth><About /></RequireAuth> } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
