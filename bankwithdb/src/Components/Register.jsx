import { useState, useContext } from "react";
import SmallBtn from "./SmallBtn";
import axios from "axios";
import { Global } from "./Global";
import ErrorMsg from "./ErrorMsg";

const URL = "http://localhost:3005/register";

function Register() {
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const [psw1, setPsw1] = useState("");

  const [registerInfo, setRegisterInfo] = useState(null);

  const { setErrorMsg, errorMsg, setRoute } = useContext(Global);

  const registerHandler = (e) => {
    e.preventDefault();
    if (!name || !psw) {
      setErrorMsg("Please fill all details");
      return;
    }

    if (psw1 !== psw) {
      setErrorMsg("Passwors dissmatch");
      return;
    }

    setRegisterInfo({
      name,
      psw,
    });

    axios
      .post(URL, { name, psw }, { withCredentials: true })
      .then((res) => console.log(res))
      .catch((err) => setErrorMsg(err.message));

    setName("");
    setPsw("");
    setPsw1("");
    setRoute("login");
  };
  return (
    <div className="form-register">
      <form>
        {errorMsg ? (
          <ErrorMsg errorMsg={errorMsg}></ErrorMsg>
        ) : (
          <p>Please register</p>
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
        <div>
          <label>Repeat Password</label>
          <input
            type="number"
            value={psw1}
            onChange={(e) => setPsw1(e.target.value)}
          ></input>
        </div>
        <SmallBtn text="Register" action={registerHandler}></SmallBtn>
      </form>
    </div>
  );
}

export default Register;
