import React from "react";
import "./logWise.css";

function LogWise() {
  return (
    <div className="main-area">
      <div className="logWise">
      <form>
        <label for="division">Division :-</label>
        <select name="division" id="division">
          <option value="KAHRAKMAFF">KAHRAKMAFF</option>
          <option value="PRATITNAGAR">PRATITNAGAR</option>
          <option value="NATHUAWALA">NATHUAWALA</option>
        </select>
          <label for="birthday">Date:</label>
          <input type="date" id="date" name="date" />
          <button class="button"><span>SUBMIT </span></button>
        </form>
      </div>
    </div>
  );
}

export default LogWise;
