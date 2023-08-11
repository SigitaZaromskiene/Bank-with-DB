import { useContext } from "react";
import { Global } from "./Global";

function Nav() {
  const { setRoute, route } = useContext(Global);
  return (
    <nav>
      <div className="nav-left">
        <p>BANK</p>
        <div className="nav-li-flex">
          <li
            className={route === "home" ? "nav-active" : null}
            onClick={() => setRoute("home")}
          >
            Home
          </li>
          <li
            className={route === "accounts" ? "nav-active" : null}
            onClick={() => setRoute("accounts")}
          >
            Accounts
          </li>
        </div>
      </div>
      <div className="nav-li-flex">
        <li
          className={route === "login" ? "nav-active" : null}
          onClick={() => setRoute("login")}
        >
          Login
        </li>
        <li
          className={route === "register" ? "nav-active" : null}
          onClick={() => setRoute("register")}
        >
          Register
        </li>
      </div>
    </nav>
  );
}

export default Nav;
