import { Outlet, Link } from "react-router-dom";
import React from 'react';

const Layout = () => {
  return (
    <>
      <section>
        <nav style={{ backgroundColor: "#123524", color: "#f26107", padding: "10px", backgroundImage: "var(--bs-gradient)" }}>
          <div style={{ display: "flex", justifyContent: "space-around",alignItems: "center" }}>
            <h1>Know Your Style</h1>
            <Link style={{ color: "#f26107", textDecoration:"none", fontSize: "20px" }}  to="/">Style it!</Link>
            <Link  style={{ color: "#f26107", textDecoration:"none", fontSize: "20px" }} to="/blogs">Try On!</Link>
            <Link style={{ color: "#f26107", textDecoration:"none", fontSize: "20px" }}  to="/contact">Suggestions</Link>
          </div>
        </nav>
     
      </section>

      <Outlet />
    </>
  );
};

export default Layout;