import React from "react";
import { Link, Route, Routes } from "react-router-dom";
export default function About() {
  return (
    <>
      <h1>About us</h1>
      <ul>
        <li>
          <Link to="/about">Contacts</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
      </ul>
      <Routes>
        <Route index element={<>99890 341 3214 23 4</>} />
        <Route path="*" element={<>404</>} />

        <Route path="team" element={  <>
              <ul>
                <li>Mirafzal</li>
                <li>Az</li>
                <li>MUha</li>
              </ul>
            </>
          } />
      </Routes>
    </>
  );
}
