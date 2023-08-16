import img from "../img/no-photo.jpg";
import { useEffect, useContext, useState } from "react";
import { Global } from "./Global";
import ListBtns from "./ListBtns";
import axios from "axios";

const URL = "http://localhost:3005/accounts";
const IMG = "http://localhost:3005/img/";

function AccList() {
  const { setList, setErrorMsg, list, lastUpdate } = useContext(Global);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setList(res.data))
      .catch((err) => setErrorMsg(err.message));
  }, [lastUpdate]);

  return (
    <div className="accounts-list-container">
      {list
        ? list.map((li) => (
            <li key={li.id}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>{li.name}</p>
                  <p>{li.surname}</p>
                </div>
                <div>
                  {li.img ? (
                    <img src={IMG + li.img} alt="face" />
                  ) : (
                    <img src={img} alt="nophoto" />
                  )}
                </div>
              </div>
              <ListBtns />
              <div
                style={{
                  width: "150px",
                  color: "white",
                  fontSize: "24px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {li.sum.toFixed(2, 0)} &euro;
              </div>
            </li>
          ))
        : null}
    </div>
  );
}

export default AccList;
