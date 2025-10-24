import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from './config';

// CSS is embedded directly inside the component using a <style> tag.
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  /* --- Global Styles --- */
  body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background-color: #f0f2f5;
  }

  * {
    box-sizing: border-box;
  }

  /* --- Page Layout --- */
  .auth-page-split {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
  }

  /* --- Main Container --- */
  .auth-container-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      max-width: 900px;
      min-height: 600px;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      overflow: hidden;
  }

  /* --- Form Section (Left Side) --- */
  .form-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 50px;
  }

  .form-section h1 {
      font-size: 28px;
      font-weight: 700;
      margin: 0 0 10px;
      color: #1a202c;
  }

  .form-section p {
      color: #718096;
      margin: 0 0 30px;
      font-size: 14px;
  }
  
  .form-section form {
    width: 100%;
  }

  .form-section input,
  .form-section select {
      width: 100%;
      padding: 12px 15px;
      margin-bottom: 15px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background-color: #f7fafc;
      font-size: 14px;
      font-family: 'Poppins', sans-serif;
      transition: all 0.3s ease;
  }

  .form-section input:focus,
  .form-section select:focus {
      outline: none;
      border-color: #4a5568;
      box-shadow: 0 0 0 3px rgba(74, 85, 104, 0.15);
  }

  .form-section button {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 8px;
      background: #2d3748;
      color: white;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 10px;
  }

  .form-section button:hover {
      background-color: #1a202c;
  }

  .form-section .forgot-password {
      display: block;
      width: fit-content;
      margin-left: auto;
      font-size: 13px;
      color: #4a5568;
      text-decoration: none;
      margin-top: -5px;
      margin-bottom: 20px;
  }
  
  .form-section .toggle-view {
      margin-top: 25px;
      font-size: 14px;
      color: #4a5568;
      text-align: center;
  }

  .form-section .toggle-view span {
      color: #2d3748;
      font-weight: 600;
      cursor: pointer;
  }

  /* --- Image Section (Right Side) --- */
  .image-section {
      background-color: #e2e8f0;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .image-section img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  /* --- Error Message --- */
  .form-section .error-message {
      color: #d93025;
      font-size: 14px;
      text-align: left;
      margin: -10px 0 15px;
      font-weight: 500;
  }

  /* --- Responsive Design --- */
  @media (max-width: 900px) {
      .auth-container-split {
          grid-template-columns: 1fr;
      }
      .image-section {
          display: none; /* Hide image on smaller screens */
      }
      .form-section {
        padding: 40px;
      }
  }
`;


function Login() {
  const navigate = useNavigate(); 
  const [isLoginView, setIsLoginView] = useState(true);

  // Form state for signup
  const [signupData, setSignupData] = useState({
    childname: "",
    email: "",
    phonenumber: "",
    role: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  // Form state for login
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

  // --- Form Submission Logic ---

  // Signup submit
  const handleSignup = async () => {
    setError(""); // Clear any previous errors
    const { password, confirmPassword } = signupData;

    if (!password || !confirmPassword) {
      setError("Please fill out all password fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password.length > 16) {
      setError("Password cannot exceed 16 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");
      alert("Signup successful! You can now login.");
      setIsLoginView(true); // switch to login view
    } catch (err) {
      setError(err.message);
    }
  };

  // Login submit
  const handleLogin = async () => {
  setError("");
  try {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    localStorage.setItem("token", data.token);
    
    // ✅ ADD THIS LINE - Redirect to home after login
    navigate('/home');
    
  } catch (err) {
    setError(err.message);
  }
};

  return (
    <>
      <style>{styles}</style>
      <div className="auth-page-split">
        <div className="auth-container-split">
            {isLoginView ? (
              /* --- Sign In --- */
              <div className="form-section">
                <h1>Welcome Back!</h1>
                <p>Please enter your details to sign in.</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} />
                  <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} />
                  <a href="#" className="forgot-password">Forgot password?</a>
                  {error && <p className="error-message">{error}</p>}
                  <button type="button" onClick={handleLogin}>Sign In</button>
                  <p className="toggle-view">
                    Don't have an account?{" "}
                    <span onClick={() => { setIsLoginView(false); setError(""); }}>
                      Sign Up
                    </span>
                  </p>
                </form>
              </div>
            ) : (
              /* --- Sign Up --- */
              <div className="form-section">
                <h1>Create an Account</h1>
                <p>Join us! It's quick and easy.</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" name="childname" placeholder="Child Name" value={signupData.childname} onChange={handleSignupChange} />
                  <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} />
                  <input type="tel" name="phonenumber" placeholder="Phone Number" value={signupData.phonenumber} onChange={handleSignupChange} />
                  <select name="role" value={signupData.role} onChange={handleSignupChange} >
                    <option value="">Select Role</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="guardian">Guardian</option>
                    <option value="teacher">Teacher</option>
                  </select>
                  <input type="date" name="dob" value={signupData.dob} onChange={handleSignupChange} />
                  <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} />
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" value={signupData.confirmPassword} onChange={handleSignupChange} />
                  {error && <p className="error-message">{error}</p>}
                  <button type="button" onClick={handleSignup}>Sign Up</button>
                  <p className="toggle-view">
                    Already have an account?{" "}
                    <span onClick={() => { setIsLoginView(true); setError(""); }}>
                      Sign In
                    </span>
                  </p>
                </form>
              </div>
            )}
           <div className="image-section">
             <img src="https://placehold.co/600x800/e2e8f0/2d3748?text=EduKids" alt="Educational illustration" />
           </div>
        </div>
      </div>
    </>
  );
}

export default Login;

