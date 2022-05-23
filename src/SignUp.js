import { useState } from "react";
const SignUp = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");

  function handleSignUp() {
    console.log(user, pass, confPass);
  }

  return (
    <div className="sign-up-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <label htmlFor="user">
          Username
          <input
            id="user"
            value={user}
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <label htmlFor="pass">
          Password
          <input
            id="pass"
            value={pass}
            placeholder="Password"
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <label htmlFor="confPass">
          Confirm Password
          <input
            id="confPass"
            value={confPass}
            placeholder="Confirm password"
            type="password"
            onChange={(e) => setConfPass(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
