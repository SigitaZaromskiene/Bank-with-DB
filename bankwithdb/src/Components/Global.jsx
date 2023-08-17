import { createContext } from "react";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (createData === null) {
      return;
    }
    setLastUpdate(Date.now());
  }, [createData]);

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
      }}
    >
      {children}
    </Global.Provider>
  );
};
