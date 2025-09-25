import React, { useState } from "react";
import "../style/auth.css";

function Login() {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className={`container ${signIn ? "" : "right-panel-active"}`}>
      {/* Sign Up */}
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="Child Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />

          <select className="role-select">
            <option value="">Select Role</option>
            <option value="parent">Parent</option>
            <option value="sibling">Sibling</option>
            <option value="guardian">Guardian</option>
            <option value="teacher">Teacher</option>
          </select>

          <input type="date" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      {/* Sign In */}
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#"  onClick={(e) => {
        e.preventDefault();
        alert("Password reset instructions have been sent to your email.");
      }}>Forgot your password?</a>
          <button type="button">Sign In</button>
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
  );
}

export default Login;
