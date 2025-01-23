import React, { useState } from "react";
import Logo from "/KU-CMS.webp";
import { Link, useNavigate } from "react-router-dom";
import "./LoginStyles.css";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(""); // Track the selected user type
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError("Please enter your credentials.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8000/kucms/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.detail || "Something went wrong. Please try again later.");
        return;
      }
  
      const data = await response.json();
  
      // Check if the response contains the expected keys
      if (!data.access || !data.refresh) {
        setError("Invalid login credentials or unexpected response format.");
        return;
      }
  
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
  
      console.log("Login successful");
  
      // Navigate based on user type from the backend response
      if (userType === "faculty") {
        navigate(`/faculty/dashboard`);
      } else if (userType === "student") {
        navigate(`/student/dashboard`);
      } else {
        setError("Please select a user type.");
      }
    } catch (err) {
      setError("Something went wrong during login. Please try again.");
      console.error(err);
    }
  };
  


  const handleFacultyToggle = () => {
    setUserType("faculty"); // Set the user type to "faculty"
    setError(null); // Clear any previous errors
    const container = document.getElementById("container");
    container.classList.add("active"); // Switch to faculty form
  };

  const handleStudentToggle = () => {
    setUserType("student"); // Set the user type to "student"
    setError(null); // Clear any previous errors
    const container = document.getElementById("container");
    container.classList.remove("active"); // Switch to student form
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-h-[100px] loginContainer" id="container">
        {/* Faculty Login Form */}
        <div className="form-container sign-up">
          <form onSubmit={handleLogin}>
            <img src={Logo} alt="KU-CMS" className="logo" />
            <h2>Faculty Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error" style={{ color: "red" }}>{error}</p>}
            <div className="button-group">
              <button type="submit">Login</button>
              
            </div>
          </form>
        </div>

        {/* Student Login Form */}
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <img src={Logo} alt="KU-CMS" className="logo" />
            <h2>Student Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error" style={{ color: "red" }}>{error}</p>}
            <div className="button-group">
              <button type="submit">Login</button>
              
            </div>
          </form>
        </div>

        {/* Toggle Panels */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h2>Are you a student?</h2>
              <p>
                Login to your student account to access your courses and
                assignments.
              </p>
              <button onClick={handleStudentToggle}>Login as Student</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h2>Are you a Faculty?</h2>
              <p>
                Login to your faculty account to manage your classes and
                students.
              </p>
              <button onClick={handleFacultyToggle}>Login as Faculty</button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button onClick={handleStudentToggle}>Student Login</button>
          <button onClick={handleFacultyToggle}>Faculty Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
