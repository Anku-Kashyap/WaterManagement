import React from 'react';
import './ZoneWise.css';
import { Outlet, Link } from "react-router-dom";

function ZoneWise() {
  return (
    <div className='zone-wise-area'>
        <span className="data-point1">0.0m</span>
        <span className="data-point2">0.0 m3</span>
        <span className="data-point3">0.0  m3/h</span>
        <span className="data-point4">0.0 Kg/Cm2</span>
        <span className="data-point5">0.0 m</span>
        <span className="data-point6">0.0  Kg/Cm2</span>
        <span className="data-point7">0.0 Kg/Cm2</span>
        <span className="data-point8">0.0 m3/h</span>
        <span className="data-point9">0.0 m3</span>
        <span className="data-point10">0.0 m</span>
        <span className="data-point11">0.0 Kg/Cm2</span>
        <span className="data-point12">0.0 Kg/Cm2</span>
        <span className="data-point13">0.0 m3/h</span>
        <span className="data-point14">0.0 m3</span>

        <div className="zonewise-btn-group">
          <Link to="/second">
            <button>Instantaneous</button>
          </Link>
          <Link to="/">
            <button>Instantaneous at a glance</button>
          </Link>
          <Link to="/third">
            <button>Log of Pressure</button>
          </Link>
          <Link to="/four">
            <button>LogBook</button>
          </Link>
          <Link to="#">
            <button>Zonewise pressure of Pratitnagar</button>
          </Link>
          <Link to="#">
            <button>Zonewise pressure of Nathuawla</button>
          </Link>
        </div>

    </div>
  )
}

export default ZoneWise
