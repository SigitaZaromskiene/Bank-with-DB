import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:3005/login";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [errorMsg, setErrorMsg] = useState("");

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [createAccResponse, setCreateAccResponse] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [list, setList] = useState(null);
  const [deleteList, setDeleteList] = useState(null);
  const [blockList, setBlockList] = useState(null);
  const [editListSum, setEditListSum] = useState(null);
  const [editSumModal, setEditSumModal] = useState(null);

  const [filtered, setFiltered] = useState([]);

  const [logged, setLogged] = useState(false);
  const [loggedUserName, setLoggedUserName] = useState(null);

  useEffect(() => {
    if (createData === null) {
      return;
    }
    setLastUpdate(Date.now());
  }, [createData]);

  useEffect(() => {
    axios
      .get(URL, { withCredentials: true })
      .then((res) => {
        if (res.data.status === "ok") {
          setLogged(true);
          setLoggedUserName(res.data.name);
          setRoute("accounts");
        } else {
          setLogged(false);
        }
      })
      .catch((err) => setErrorMsg(err.message));
  }, []);
  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        createData,
        setCreateData,
        errorMsg,
        setErrorMsg,
        createAccResponse,
        setCreateAccResponse,
        list,
        setList,
        lastUpdate,
        setLastUpdate,
        deleteList,
        setDeleteList,
        setBlockList,
        blockList,
        setEditListSum,
        editListSum,
        setEditSumModal,
        editSumModal,
        filtered,
        setFiltered,
        setLogged,
        logged,
        loggedUserName,
        setLoggedUserName,
      }}
    >
      {children}
    </Global.Provider>
  );
};
