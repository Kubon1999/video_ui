import { useContext } from "react";
import { Route } from "react-router";
import AuthContext from "./AuthContext";

const RouteHandle = () => {
  const { currentUser } = useContext(AuthContext);
  return <h1> ergergeg</h1>;
};

export default RouteHandle;
