import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OverView from "./Overview";
import { useState } from "react";
import AuthContext from "./AuthContext";

function App() {
  const auth = useState();

  return (
    <AuthContext.Provider value={auth}>
      <div className="App">
        <header className="App-header"></header>
        <body>
          <Router>
            <Routes>
              <Route path="/" element={<OverView />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </body>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
