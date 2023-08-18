import { Global } from "./Global";
import { useContext } from "react";

function AccSummary() {
  const { list } = useContext(Global);

  const totalLength = () => {
    if (list === null) {
      return;
    }
    return list.length;
  };

  const totalSumHandler = () => {
    if (list === null) {
      return;
    }
    return list.reduce((acc, curr) => acc + Number(curr.sum), 0);
  };

  const withoutImg = () => {
    if (list === null) {
      return;
    }
    return list.filter((li) => li.img === null).length;
  };

  const emptyBalance = () => {
    if (list === null) {
      return;
    }
    return list.filter((li) => li.sum === 0).length;
  };

  const negativeBalance = () => {
    if (list === null) {
      return;
    }
    return list.filter((li) => li.sum < 0).length;
  };

  const positiveBalance = () => {
    if (list === null) {
      return;
    }
    return list.filter((li) => li.sum > 0).length;
  };

  return (
    <div className="acc-summary-container">
      <div className="summary-container">Clients number: {totalLength()}</div>
      <div className="summary-container">
        Total sum: {totalSumHandler()} &euro;
      </div>
      <div className="summary-container">
        Clients without img: {withoutImg()}{" "}
      </div>
      <div className="summary-container">
        Clients with empty balance: {emptyBalance()}
      </div>
      <div className="summary-container">
        Clients with negative balance: {negativeBalance()}
      </div>
      <div className="summary-container">
        Clients with positive balance: {positiveBalance()}
      </div>
    </div>
  );
}

export default AccSummary;
