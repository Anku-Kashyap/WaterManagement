import React from "react";
import "./Instant.css";
import Dropdown from "react-bootstrap/Dropdown";

function Instant() {
  return (
    <>
      <div className="main-area">
        <div className="dropdown-area">
          <div className="division">
            <label for="division">Division :-</label>
            <select name="division" id="division">
              <option value="KAHRAKMAFF">KAHRAKMAFF</option>
              <option value="PRATITNAGAR">PRATITNAGAR</option>
              <option value="NATHUAWALA">NATHUAWALA</option>
            </select>
          </div>
          <div className="station">
            <label for="station">Station Name :-</label>
            <select name="station" id="station">
              <option value="1 - Office">1 - Office</option>
              <option value="2 - Guljar Farm">2 - Guljar Farm</option>
              <option value="3 - Chopra Farm">3 - Chopra Farm</option>
              <option value="4 - Khadri">4 - Khadri</option>
              <option value="5 - Kusumkhera-1">5 - Kusumkhera-1</option>
              <option value="6 - Kusumkhera-2">6 - Kusumkhera-2</option>
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
                <td>0.0</td>
              </tr>
              <tr>
                <td>Voltage (Y-B)</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Voltage (B-R)</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Current (R-Phase)</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Current (Y-Phase)</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Current (Y-Phase)</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Current (B-Phase)</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Frequency</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Power Factor</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Power (K.W.)</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Energy (Kwh)</td>
                <td>0.0</td>
              </tr>
            </table>
          </div>
          <div className="Tubewell-status">
            <table id="electrical">
              <caption>TubeWell Status</caption>
              <tr>
                <td>Operating Mode</td>
                <td>Manual</td>
              </tr>
              <tr>
                <td>Power on Hours</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Pump Status</td>
                <td>OFF</td>
              </tr>
              <tr>
                <td>Pump Run Hours</td>
                <td>0</td>
              </tr>
            </table>
          </div>
          <div className="TW">
            <table id="electrical">
              <caption>TW Operating Parameter's</caption>
              <tr>
                <td>Maximum voltage</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Minimum voltage</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Maximum current</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Minimum current</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Unbalance in currenT</td>
                <td>0.0</td>
              </tr>
            </table>
          </div>
          <div className="Schedule">
            <table id="Schedule">
              <caption>Tubewell Operating Schedule</caption>
              <tr>
                <td>1st On Time</td>
                <td>0.0</td>
                <td>1st Off Time</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>2nd On Time</td>
                <td>0.0</td>
                <td>2nd Off Time</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>3rd On Time</td>
                <td>0.0</td>
                <td>3rd Off Time</td>
                <td>0.0</td>
              </tr>
            </table>
          </div>
          <div className="Process">
            <table id="Process">
              <caption>Process Data</caption>
              <tr>
                <td>Pump Discharge (m3/h)</td>
                <td>0.0</td>
                <td>Pump Total Discharge Today (m3)</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Tank Discharge (m3/h)</td>
                <td>0.0</td>
                <td>Tank Total Discharge Today (m3)</td>
                <td>0.0</td>
              </tr>
            </table>
          </div>
          <div className="Event">
            <table id="Event">
              <tr>
                <td>Event/Fault Window</td>
                <td>0.0</td>
              </tr>
            </table>
          </div>
          <span className="data-point1">0.0</span>
          <span className="data-point2">0.0</span>
          <span className="data-point3">0.0</span>
        </div>
      </div>
    </>
  );
}

export default Instant;
