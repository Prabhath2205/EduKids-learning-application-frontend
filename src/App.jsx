import React, { useState } from "react";
import Login from "./pages/login.jsx";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
