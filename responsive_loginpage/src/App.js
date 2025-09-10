import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailStep from "./components/EmailStep";
import PasswordStep from "./components/PasswordStep";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailStep />} />
        <Route path="/password" element={<PasswordStep />} />
      </Routes>
    </Router>
  );
}

export default App;
