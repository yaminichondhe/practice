import React, { useState } from "react";
import "./Tlog.css";


const Tlog = () => {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="T_container">
      <div className="T_form-container">
        <h2>{isRegister ? "Register" : "Login"}</h2>
        {isRegister ? (
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
        ) : (
          <form>
            <input type="email" placeholder="Email" required />
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

export default Tlog;
