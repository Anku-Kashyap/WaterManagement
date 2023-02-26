import React from 'react'
import './Home.css'
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
        <div className="btn-group">
          <Link to="/"><button >Instantaneous</button></Link>
          <Link to="/second"><button >Zone wise pressure</button></Link>
          <Link to="/third"><button >Log of Pressure</button></Link>
          <Link to="/fourth"><button >LogBook</button></Link>
        </div>

  )
}

export default Home;
