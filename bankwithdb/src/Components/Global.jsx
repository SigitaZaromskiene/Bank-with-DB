import { createContext } from "react";
import { useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [errorMsg, setErrorMsg] = useState("");

  const [responseAccResponse, setCreateAccResponse] = useState(null);
  const [accList, setAccList] = useState(null);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        accList,
        setAccList,
        errorMsg,
        setErrorMsg,

        setCreateAccResponse,
      }}
    >
      {children}
    </Global.Provider>
  );
};
