import React, { useState, useEffect } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Form = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isPasswordValid===false) {
      // Display an error message or handle an invalid password here
      toast.error("Password Incorrect");
    }
    else{
      toast.success("Login Successfully");
      setEmail("");
      setPassword("");
      handleLogin();
      navigate("/");
    }
    // Fields clear
   
  };

  // Define the password regex for strong password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

  useEffect(() => {
    const isValid = passwordRegex.test(password);
    console.log(password);
    setIsPasswordValid(isValid);
  }, [password]);

  return (
    <div className="hello-container">
      <div className="form-container login">
        <h2>Log-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={isPasswordValid ? "valid" : "invalid"}
            />
            {isPasswordValid===false && (
              <p className="invalid-feedback">
                Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.
              </p>
            )}
          </div>
          <button className="button1" type="submit">
            Log-In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;