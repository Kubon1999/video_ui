import logo from "./logo.svg";
import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;
