import React, { useState } from "react";
import "../style/auth.css";

function Login() {
  const [signIn, setSignIn] = useState(true);

  // Form state
  const [signupData, setSignupData] = useState({
    childname: "",
    email: "",
    phonenumber: "",
    role: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle signup input change
  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  // Handle login input change
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Signup submit
  const handleSignup = async () => {
    setError(""); // Clear any previous errors

    const { password, confirmPassword } = signupData;

    // Check for empty password
    if (!password) {
      setError("Password is required.");
      return;
    }

    // Check for max length first
    if (password.length > 16) {
      setError("Password cannot exceed 16 characters.");
      return;
    }

    // Then check for min length
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // All validations passed, proceed with the API call
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          childname: signupData.childname,
          email: signupData.email,
          phonenumber: signupData.phonenumber,
          role: signupData.role,
          dob: signupData.dob,
          password: signupData.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");
      alert("Signup successful! You can now login.");
      setSignIn(true); // switch to login
    } catch (err) {
      setError(err.message);
    }
  };
  // Login submit
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      alert(`Login successful! Welcome ${data.role}`);
      // redirect to dashboard page if needed
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    // 1. Add the main wrapper div with the "auth-page" class
    <div className="auth-page">
      <div className={`container ${signIn ? "" : "right-panel-active"}`}>
        {/* Sign Up */}
        <div className="form-container sign-up-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Create Account</h1>
            <input
              type="text"
              name="childname"
              placeholder="Child Name"
              value={signupData.childname}
              onChange={handleSignupChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleSignupChange}
            />
            <input
              type="tel"
              name="phonenumber"
              placeholder="Phone Number"
              value={signupData.phonenumber}
              onChange={handleSignupChange}
            />
            <select
              name="role"
              className="role-select"
              value={signupData.role}
              onChange={handleSignupChange}
            >
              <option value="">Select Role</option>
              <option value="parent">Parent</option>
              <option value="sibling">Sibling</option>
              <option value="guardian">Guardian</option>
              <option value="teacher">Teacher</option>
            </select>
            <input
              type="date"
              name="dob"
              value={signupData.dob}
              onChange={handleSignupChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleSignupChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
            />
            <button type="button" onClick={handleSignup}>
              Sign Up
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>

        {/* Sign In */}
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Sign in</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Password reset instructions have been sent to your email.");
              }}
            >
              Forgot your password?
            </a>
            <button type="button" onClick={handleLogin}>
              Sign In
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                We’re happy to see you again! Let’s continue exploring fun,
                interactive activities together.
              </p>
              <button className="ghost" onClick={() => setSignIn(true)}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome to EduKids</h1>
              <p>Sign up and explore a world of fun learning for your child</p>
              <button className="ghost" onClick={() => setSignIn(false)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> // 2. Close the wrapper div
  );
}

export default Login;
