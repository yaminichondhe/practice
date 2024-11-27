import React from "react";
import "./Tlog.css";

const Clgreg = ({ togglePopup }) => {
  return (
    <div className="T_popup">
      <div className="T_form-container">
        {/* Close button to hide the popup */}
        <div className="T_close-button" onClick={togglePopup}>×</div>

        <form>
          <input type="text" name="college_name" placeholder="Enter College Name" required />
          <input type="text" name="college_code" placeholder="Enter College Code" required />
          <input type="text" name="course_name" placeholder="Enter Course Name" required />
          <input type="text" name="branch_name" placeholder="Enter Department/Branch" required />
          <input type="number" name="year" placeholder="Enter Year" required />
          <input type="text" name="division" placeholder="Enter Division" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Clgreg;
