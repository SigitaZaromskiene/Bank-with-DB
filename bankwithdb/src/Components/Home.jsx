import building from "../img/building.jpg";
import { useContext, useEffect, useState } from "react";
import { Global } from "./Global";
import axios from "axios";

const URL = "http://localhost:3005/home";

function Home() {
  const { setMessage, lastUpdate } = useContext(Global);

  const [homeInfo, setHomeInfo] = useState(null);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setHomeInfo(res.data);
      })
      .catch((err) => setMessage(err.message));
  }, [lastUpdate]);

  const totalSumHandler = () => {
    if (homeInfo === null) {
      return;
    }
    return homeInfo.reduce((acc, curr) => acc + Number(curr.sum), 0);
  };

  const avarageSumHandler = () => {
    if (homeInfo === null) {
      return;
    }
    const sum = homeInfo.reduce((acc, curr) => acc + Number(curr.sum), 0);
    return Number(sum / homeInfo.length).toFixed(2, 0);
  };

  const listsLength = () => {
    if (homeInfo === null) {
      return;
    }
    return homeInfo.length;
  };
  return (
    <div className="home-container">
      <img src={building} alt="Bank building" />
      <div className="home-summary">
        <div className="home-summ">Accounts number: {listsLength()}</div>
        <div className="home-summ">Total sum: {totalSumHandler()} &euro;</div>
        <div className="home-summ">Avarge sum: {avarageSumHandler()}&euro;</div>
      </div>
    </div>
  );
}

export default Home;
