import React, { useState, useEffect } from "react";
import "./Instant.css";
import { Link } from "react-router-dom";
import JsonData1 from "../Data/KAHRAKMAFF_1-Office.json";
import JsonData2 from "../Data/KAHRAKMAFF_2-GuljarFarm.json";
import JsonData3 from "../Data/KAHRAKMAFF_3-ChopraFarm.json";
import JsonData4 from "../Data/KAHRAKMAFF_4-Khadri.json";
import JsonData5 from "../Data/KAHRAKMAFF_5-Kusumkhera-1.json";
import JsonData6 from "../Data/KAHRAKMAFF_6-Kusumkhera-2.json";
import JsonData7 from "../Data/PRATITNAGAR_1-Zone-1.json";
import JsonData8 from "../Data/PRATITNAGAR_1-Zone-1.json";
import JsonData9 from "../Data/PRATITNAGAR_3-Zone-3(I-Well-I).json";
import JsonData10 from "../Data/PRATITNAGAR_3-Zone-3(I-Well-I).json";
import JsonData11 from "../Data/PRATITNAGAR_4-Zone-4.json";
import JsonData12 from "../Data/PRATITNAGAR_5-Zone-5.json";
import JsonData13 from "../Data/NATHUAWALA_1-Zone-1GujarowaliOffice.json";
import JsonData14 from "../Data/NATHUAWALA_2-Zone-1GaneshVihar.json";
import JsonData15 from "../Data/NATHUAWALA_3-Zone-2Khadar-1.json";
import JsonData16 from "../Data/NATHUAWALA_4-Zone-2Khadar-2.json";
import JsonData17 from "../Data/NATHUAWALA_5-Zone-2DhobalChowk.json";
import JsonData18 from "../Data/NATHUAWALA_6-Zone-3BistAttaChakki.json";
import JsonData19 from "../Data/NATHUAWALA_7-MadhavVihar.json";


function Instant() {
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

    tag10: "set",
    tag11: "",
    tag12: "",
    tag13: "",

    tag14: "",
    tag15: "",
    tag16: "",
    tag17: "",
    tag18: "",

    tag19: "",
    tag20: "",
    tag21: "",
    tag22: "",
    tag23: "",
    tag24: "",

    tag25: "",
    tag26: "",
    tag27: "",
    tag28: "",

    tag29: "",
    tag30: "",
    tag31: "",

    tag32: "",
  });

  const DisplayData = (props) =>
    props.map((info) => {
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

          {info.Name === "tag14" ? (allValues.tag14 = info.Value) : null}
          {info.Name === "tag15" ? (allValues.tag15 = info.Value) : null}
          {info.Name === "tag16" ? (allValues.tag16 = info.Value) : null}
          {info.Name === "tag17" ? (allValues.tag17 = info.Value) : null}
          {info.Name === "tag18" ? (allValues.tag18 = info.Value) : null}

          {info.Name === "tag19" ? (allValues.tag19 = info.Value) : null}
          {info.Name === "tag20" ? (allValues.tag20 = info.Value) : null}
          {info.Name === "tag21" ? (allValues.tag21 = info.Value) : null}
          {info.Name === "tag22" ? (allValues.tag22 = info.Value) : null}
          {info.Name === "tag23" ? (allValues.tag23 = info.Value) : null}
          {info.Name === "tag24" ? (allValues.tag24 = info.Value) : null}

          {info.Name === "tag25" ? (allValues.tag25 = info.Value) : null}
          {info.Name === "tag26" ? (allValues.tag26 = info.Value) : null}
          {info.Name === "tag27" ? (allValues.tag27 = info.Value) : null}
          {info.Name === "tag28" ? (allValues.tag28 = info.Value) : null}

          {info.Name === "tag29" ? (allValues.tag29 = info.Value) : null}

          {info.Name === "tag30" ? (allValues.tag30 = info.Value) : null}
          {info.Name === "tag31" ? (allValues.tag31 = info.Value) : null}
          {info.Name === "tag32" ? (allValues.tag32 = info.Value) : null}
        </>
      );
    });

  const [division, setDivision] = useState("");
  const [station, setStation] = useState("");

  const stationsByDivision = {
    KAHRAKMAFF: [
      "1 - Office",
      "2 - Guljar Farm",
      "3 - Chopra Farm",
      "4 - Khadri",
      "5 - Kusumkhera-1",
      "6 - Kusumkhera-2",
    ],
    PRATITNAGAR: [
      "1-Zone-1",
      "1-Zone-1",
      "3-Zone-3(I-Well-I)",
      "3-Zone-3(I-Well-I)",
      "4-Zone-4",
      "5-Zone-5",
    ],
    NATHUAWALA: [
      "1 - Zone-1 Gujarowali Office",
      "2 - Zone-1 Ganesh Vihar",
      "3 - Zone-2 Khadar-1",
      "4 - Zone-2 Khadar-2",
      "5 - Zone-2 Dhobal Chowk",
      "6 - Zone-3 Bist Atta Chakki",
      "7 - Madhav Vihar",
    ],
  };

  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
    setStation("");
  };

  const divisionOptions = ["KAHRAKMAFF", "PRATITNAGAR", "NATHUAWALA"];
  const stationOptions = division ? stationsByDivision[division] : [];

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (true) {
        case division === "KAHRAKMAFF" && station === "1 - Office":
          DisplayData(JsonData1);
          break;
        case division === "KAHRAKMAFF" && station === "2 - Guljar Farm":
          DisplayData(JsonData2);
          break;
        case division === "KAHRAKMAFF" && station === "3 - Chopra Farm":
          DisplayData(JsonData3);
          break;
        case division === "KAHRAKMAFF" && station === "4 - Khadri":
          DisplayData(JsonData4);
          break;
        case division === "KAHRAKMAFF" && station === "5 - Kusumkhera-1":
          DisplayData(JsonData5);
          break;
        case division === "KAHRAKMAFF" && station === "6 - Kusumkhera-2":
          DisplayData(JsonData6);
          break;

        case division === "PRATITNAGAR" && station === "1-Zone-1":
          DisplayData(JsonData7);
          break;
        case division === "PRATITNAGAR" && station === "1-Zone-1":
          DisplayData(JsonData8);
          break;
        case division === "PRATITNAGAR" && station === "3-Zone-3(I-Well-I)":
          DisplayData(JsonData9);
          break;
        case division === "PRATITNAGAR" && station === "3-Zone-3(I-Well-I)":
          DisplayData(JsonData10);
          break;
        case division === "PRATITNAGAR" && station === "4-Zone-4":
          DisplayData(JsonData11);
          break;
        case division === "PRATITNAGAR" && station === "5-Zone-5":
          DisplayData(JsonData12);
          break;

        case division === "NATHUAWALA" &&
          station === "1 - Zone-1 Gujarowali Office":
          DisplayData(JsonData13);
          break;
        case division === "NATHUAWALA" && station === "2 - Zone-1 Ganesh Vihar":
          DisplayData(JsonData14);
          break;
        case division === "NATHUAWALA" && station === "3 - Zone-2 Khadar-1":
          DisplayData(JsonData15);
          break;
        case division === "NATHUAWALA" && station === "4 - Zone-2 Khadar-2":
          DisplayData(JsonData16);
          break;
        case division === "NATHUAWALA" && station === "5 - Zone-2 Dhobal Chowk":
          DisplayData(JsonData17);
          break;
        case division === "NATHUAWALA" &&
          station === "6 - Zone-3 Bist Atta Chakki":
          DisplayData(JsonData18);
          break;
        case division === "NATHUAWALA" && station === "7 - Madhav Vihar":
          DisplayData(JsonData19);
          break;
      }

      console.log("Function called every 10 seconds");
    }, 10000);

    return () => clearInterval(intervalId);
  }, [station]);

  DisplayData(JsonData1);

  return (
    <>
      <div className="Instant-header">
        <div className="Instant-main-area">
          <div className="Instant-dropdown-area">
            <div className="Instant-division">
              <label for="division">Division :-</label>
              <select value={division} onChange={handleDivisionChange}>
                <option value="">Select Division</option>
                {divisionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="instant-station">
              <label for="station">Station Name :-</label>
              <select
                value={station}
                onChange={(event) => setStation(event.target.value)}
              >
                <option value="">Select Station</option>
                {stationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="last-update">
              <span>Last Data Updated On :- </span>
              <span>Date</span>
            </div>
          </div>
          <div className="instant-area">
            <div className="electrical-data">
              <table id="electrical">
                <caption>Electrical Data</caption>
                <tr>
                  <td>Voltage (R-Y)</td>
                  <td>{allValues.tag0}</td>
                </tr>
                <tr>
                  <td>Voltage (Y-B)</td>
                  <td>{allValues.tag1}</td>
                </tr>
                <tr>
                  <td>Voltage (B-R)</td>
                  <td>{allValues.tag2}</td>
                </tr>
                <tr>
                  <td>Current (R-Phase)</td>
                  <td>{allValues.tag3}</td>
                </tr>
                <tr>
                  <td>Current (Y-Phase)</td>
                  <td>{allValues.tag4}</td>
                </tr>
                <tr>
                  <td>Current (B-Phase)</td>
                  <td>{allValues.tag5}</td>
                </tr>
                <tr>
                  <td>Frequency</td>
                  <td>{allValues.tag6}</td>
                </tr>
                <tr>
                  <td>Power Factor</td>
                  <td>{allValues.tag7}</td>
                </tr>
                <tr>
                  <td>Power (K.W.)</td>
                  <td>{allValues.tag8}</td>
                </tr>
                <tr>
                  <td>Energy (Kwh)</td>
                  <td>{allValues.tag9}</td>
                </tr>
              </table>
            </div>
            <div className="Tubewell-status">
              <table id="electrical">
                <caption>TubeWell Status</caption>
                <tr>
                  <td>Operating Mode</td>
                  <td>{allValues.tag10}</td>
                </tr>
                <tr>
                  <td>Power on Hours</td>
                  <td>{allValues.tag11}</td>
                </tr>
                <tr>
                  <td>Pump Status</td>
                  <td>{allValues.tag12}</td>
                </tr>
                <tr>
                  <td>Pump Run Hours</td>
                  <td>{allValues.tag13}</td>
                </tr>
              </table>
            </div>
            <div className="TW">
              <table id="electrical">
                <caption>TW Operating Parameter's</caption>
                <tr>
                  <td>Maximum voltage</td>
                  <td>{allValues.tag14}</td>
                </tr>
                <tr>
                  <td>Minimum voltage</td>
                  <td>{allValues.tag15}</td>
                </tr>
                <tr>
                  <td>Maximum current</td>
                  <td>{allValues.tag16}</td>
                </tr>
                <tr>
                  <td>Minimum current</td>
                  <td>{allValues.tag17}</td>
                </tr>
                <tr>
                  <td>Unbalance in currenT</td>
                  <td>{allValues.tag18}</td>
                </tr>
              </table>
            </div>
            <div className="Schedule">
              <table id="Schedule">
                <caption>Tubewell Operating Schedule</caption>
                <tr>
                  <td>1st On Time</td>
                  <td>{allValues.tag19}</td>
                  <td>1st Off Time</td>
                  <td>{allValues.tag20}</td>
                </tr>
                <tr>
                  <td>2nd On Time</td>
                  <td>{allValues.tag21}</td>
                  <td>2nd Off Time</td>
                  <td>{allValues.tag22}</td>
                </tr>
                <tr>
                  <td>3rd On Time</td>
                  <td>{allValues.tag23}</td>
                  <td>3rd Off Time</td>
                  <td>{allValues.tag24}</td>
                </tr>
              </table>
            </div>
            <div className="Process">
              <table id="Process">
                <caption>Process Data</caption>
                <tr>
                  <td>Pump Discharge (m3/h)</td>
                  <td>{allValues.tag25}</td>
                  <td>Pump Total Discharge Today (m3)</td>
                  <td>{allValues.tag26}</td>
                </tr>
                <tr>
                  <td>Tank Discharge (m3/h)</td>
                  <td>{allValues.tag27}</td>
                  <td>Tank Total Discharge Today (m3)</td>
                  <td>{allValues.tag28}</td>
                </tr>
              </table>
            </div>
            <div className="Event">
              <table id="Event">
                <tr>
                  <td>Event/Fault Window</td>
                  <td>{allValues.tag29}</td>
                </tr>
              </table>
            </div>
            <span className="instant-data-point1">{allValues.tag30}</span>
            <span className="instant-data-point2">{allValues.tag31}</span>
            <span className="instant-data-point3">{allValues.tag32}</span>
          </div>
          <div className="instant-btn-group">
            <Link to="/">
              <button>Instantaneous at a glance</button>
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
      </div>
    </>
  );
}

export default Instant;
