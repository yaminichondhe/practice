import React, { useState } from "react";
import "./Tlog.css";

const Slog = ({ togglePopup }) => {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="T_popup">
      <div className="T_form-container">
        <div className="T_close-button" onClick={togglePopup}>×</div>
        <h2>{isRegister ? "Register" : "Login"}</h2>
        {isRegister ? (
          <form>
            <input type="text" placeholder="Enter Username" required />
            <input type="email" placeholder="Enter Password" required />
            <input type="password" placeholder="Enter College Code" required />
            <input type="password" placeholder="Enter Department Code" required />
            <input type="password" placeholder="Enter contact number" required />
            <button type="submit">Register</button>
          </form>
        ) : (
          <form>
            <input type="email" placeholder="Enter Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        )}
        <p>
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="T_toggle-link" onClick={toggleForm}>
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Slog;
