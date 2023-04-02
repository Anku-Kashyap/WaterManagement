import React from "react";
import "./ZoneWise.css";
import { Link } from "react-router-dom";
import JsonData from "../Data/ZoneWiseKahrakmaf.json";
import { useState } from "react";

function ZoneWiseKahrakmaf() {
  const [allValues, setAllValues] = useState({
    tag0: "",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    tag7: "",
    tag8: "",
    tag9: "",
    tag10: "",
    tag11: "",
    tag12: "",
    tag13: "",
  });

  const DisplayData = () =>
    JsonData.map((info) => {
      return (
        <>
          {info.Name === "tag0" ? (allValues.tag0 = info.Value) : null}
          {info.Name === "tag1" ? (allValues.tag1 = info.Value) : null}
          {info.Name === "tag2" ? (allValues.tag2 = info.Value) : null}
          {info.Name === "tag3" ? (allValues.tag3 = info.Value) : null}
          {info.Name === "tag4" ? (allValues.tag4 = info.Value) : null}
          {info.Name === "tag5" ? (allValues.tag5 = info.Value) : null}
          {info.Name === "tag6" ? (allValues.tag6 = info.Value) : null}
          {info.Name === "tag7" ? (allValues.tag7 = info.Value) : null}
          {info.Name === "tag8" ? (allValues.tag8 = info.Value) : null}
          {info.Name === "tag9" ? (allValues.tag9 = info.Value) : null}
          {info.Name === "tag10" ? (allValues.tag10 = info.Value) : null}
          {info.Name === "tag11" ? (allValues.tag11 = info.Value) : null}
          {info.Name === "tag12" ? (allValues.tag12 = info.Value) : null}
          {info.Name === "tag13" ? (allValues.tag13 = info.Value) : null}
        </>
      );
    });

  DisplayData();

  return (
    <div className="header">
      <div className="zone-wise-area">
        <span className="data-point1">{allValues.tag0} m</span>
        <span className="data-point2">{allValues.tag1} m3</span>
        <span className="data-point3">{allValues.tag2} m3/h</span>
        <span className="data-point4">{allValues.tag3} Kg/Cm2</span>
        <span className="data-point5">{allValues.tag4} m</span>
        <span className="data-point6">{allValues.tag5} Kg/Cm2</span>
        <span className="data-point7">{allValues.tag6} Kg/Cm2</span>
        <span className="data-point8">{allValues.tag7} m3/h</span>
        <span className="data-point9">{allValues.tag8} m3</span>
        <span className="data-point10">{allValues.tag9} m</span>
        <span className="data-point11">{allValues.tag10} Kg/Cm2</span>
        <span className="data-point12">{allValues.tag11} Kg/Cm2</span>
        <span className="data-point13">{allValues.tag12} m3/h</span>
        <span className="data-point14">{allValues.tag13} m3</span>

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
          <Link to="/pratitnagar">
            <button>Zonewise pressure of Pratitnagar</button>
          </Link>
          <Link to="/nathuawala">
            <button>Zonewise pressure of Nathuawla</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ZoneWiseKahrakmaf;
