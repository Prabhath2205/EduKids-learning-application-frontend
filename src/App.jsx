import React, { useState } from "react";
import Login from "./pages/login.jsx";
import AlphabetPage from "./pages/alphabets.jsx";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <AlphabetPage/>
    </div>
  );
}

export default App;
