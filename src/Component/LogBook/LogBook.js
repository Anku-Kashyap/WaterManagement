import React from "react";
import "./LogBook.css";

function LogBook() {
  return (
    <div className="main-area">
      <div className="logBook">
        <form>
          <label for="division">Division :-</label>
          <select name="division" id="division">
            <option value="KAHRAKMAFF">KAHRAKMAFF</option>
            <option value="PRATITNAGAR">PRATITNAGAR</option>
            <option value="NATHUAWALA">NATHUAWALA</option>
          </select>
          <label id="station" for="station">Station :-</label>
          <select id="station">
            <option value="KAHRAKMAFF">KAHRAKMAFF</option>
            <option value="PRATITNAGAR">PRATITNAGAR</option>
            <option value="NATHUAWALA">NATHUAWALA</option>
          </select>
          <label for="birthday">From:</label>
          <input type="date" id="date" name="date" />
          <label for="birthday">To:</label>
          <input type="date" id="date" name="date" />
          {/* <select name="Tubewell" id="division">
            <option value="KAHRAKMAFF">Tubewell</option>
            <option value="PRATITNAGAR">PRATITNAGAR</option>
          </select> */}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> Hourly</label>
          <button class="button">
            <span>SUBMIT </span>
          </button>
          <button class="button">
            <span>Export to Excel </span>
          </button>
          <button class="button">
            <span>Instantaneous at a glace </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogBook;
