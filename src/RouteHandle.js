import { useContext } from "react";
import { Route } from "react-router";
import AuthContextProvider from "./AuthContextProvider";

const RouteHandle = () => {
  const { currentUser } = useContext(AuthContextProvider);
  return <h1> ergergeg</h1>;
};

export default RouteHandle;
