import { useEffect, useContext } from "react";
import { Global } from "./Global";

function ErrorMsg({ errorMsg }) {
  const { setErrorMsg } = useContext(Global);

  useEffect(() => {
    setTimeout(() => setErrorMsg(null), 2000);
  }, []);

  return (
    <div className="error-msg-container">
      <p className="error-msg">{errorMsg}</p>
    </div>
  );
}

export default ErrorMsg;
