import "./App.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OverView from "./Overview";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthenticationContext from "./AuthenticationContext";
import AuthenticationDispatchContext from "./AuthenticationDispatchContext";

function App() {
  const [userCredential, setUserCredential] = useState({
    accessToken: undefined,
  });

  //state observer from the firebase docs
  //https://firebase.google.com/docs/auth/web/start

  useEffect(() => {
    console.log(userCredential);
  }, [userCredential]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log(user);
        setUserCredential(user);
      } else {
        // User is signed out
        setUserCredential({
          accessToken: undefined,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <AuthenticationContext.Provider value={userCredential}>
        <AuthenticationDispatchContext.Provider value={setUserCredential}>
          <Router>
            <Routes>
              <Route path="/" element={<OverView />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </AuthenticationDispatchContext.Provider>
      </AuthenticationContext.Provider>
    </div>
  );
}

export default App;
