import AccSummary from "./AccSummary";
import CreateAccountForm from "./CreateAccForm";
import AccList from "./AccList";
import SmallBtn from "./SmallBtn";
import Filter from "./Filter";
import SortAcc from "./SortAcc";
import { useContext, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";

const URL = "http://localhost:3005/accounts";

function Accounts() {
  const { setLastUpdate, setList, list } = useContext(Global);

  function payTaxHandler() {
    if (list === null) {
      return;
    }
    const sumUpdate = list.map((li) => {
      axios
        .put(
          URL + "/" + li.id,
          { blocked: li.blocked, sum: li.sum - 5 },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
          setLastUpdate(Date.now());
        });

      return li.sum - 5;
    });
    setList(sumUpdate);
  }

  return (
    <div className="accounts-container">
      <AccSummary />
      <CreateAccountForm />
      <AccList />
      <div className="filter-sort-container">
        <Filter></Filter>
        <SortAcc></SortAcc>
        <SmallBtn text="Pay taxes" action={payTaxHandler}></SmallBtn>
      </div>
    </div>
  );
}

export default Accounts;
