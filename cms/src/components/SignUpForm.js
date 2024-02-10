import React, { useState, useEffect } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Form = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    if (isPasswordValid === false) {
      toast.success("Password Incorrect");
    } else {
      // Fields clear
      setEmail("");
      setPassword("");
      setName("");
      setUsername("");
      handleLogin();
      toast.success("Signup successfully");
      navigate("/login");
    }
  };

  // Define the password regex for strong password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

  useEffect(() => {
     
      
     const isValid = passwordRegex.test(password.trim());
     setIsPasswordValid(isValid);
    
  }, [password]);

  return (
    <div className="hello-container">
      <div className="form-container">
        <h2>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
              className={isPasswordValid === true ? "valid" : "invalid"}
            />
            {isPasswordValid === false && (
              <p className="invalid-feedback">
                Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.
              </p>
            )}
          </div>
          <button className="button1" type="submit">
            Sign-Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
