import { useState, useContext, useEffect } from "react";
import SmallBtn from "./SmallBtn";
import { Global } from "./Global";
import ErrorMsg from "./ErrorMsg";
import axios from "axios";

const URL = "http://localhost:3005/login";

function Login() {
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  const {
    setErrorMsg,
    errorMsg,
    setLogged,
    setRoute,

    setLoggedUserName,
  } = useContext(Global);

  const loginHandler = (e) => {
    e.preventDefault();

    if (!name || !psw) {
      setErrorMsg("Please fill all details");
      return;
    }

    axios.post(URL, { name, psw }, { withCredentials: true }).then((res) => {
      if (res.data.status === "ok") {
        setLogged(true);
        setLoggedUserName(res.data.name);
        setRoute("accounts");
        setName("");
        setPsw("");
      }
    });
  };

  return (
    <div className="form-login">
      <form>
        {errorMsg ? (
          <ErrorMsg errorMsg={errorMsg}></ErrorMsg>
        ) : (
          <p>Please login</p>
        )}

        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="number"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
          ></input>
        </div>
        <SmallBtn text="Register" action={loginHandler}></SmallBtn>
      </form>
    </div>
  );
}

export default Login;
