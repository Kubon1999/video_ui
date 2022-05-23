import app from "./firebase";

const OverView = () => {
  return (
    <div>
      <h1> overview page </h1>
      <button onClick={() => app.auth().signOut()}>sign out</button>
    </div>
  );
};

export default OverView;
