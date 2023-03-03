import React from "react";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="main-area">
        <div className="home-btn-group">
          <Link to="/second">
            <button>Instantaneous</button>
          </Link>
          <Link to="/first">
            <button>Zone wise pressure</button>
          </Link>
          <Link to="/third">
            <button>Log of Pressure</button>
          </Link>
          <Link to="/four">
            <button>LogBook</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
