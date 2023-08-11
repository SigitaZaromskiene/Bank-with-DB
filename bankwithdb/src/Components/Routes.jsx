import Home from "./Home";
import Accounts from "./Accounts";
import Login from "./Login";
import Register from "./Register";
import { useContext } from "react";
import { Global } from "./Global";

function Routes() {
  const { route } = useContext(Global);

  switch (route) {
    case "home":
      return <Home />;
    case "accounts":
      return <Accounts />;
    case "login":
      return <Login />;
    case "register":
      return <Register />;
    default:
      return null;
  }
}

export default Routes;
