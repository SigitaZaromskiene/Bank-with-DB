import SmallBtn from "./SmallBtn";
import { useState, useContext, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";
import EditModal from "./EditModal";

const URL = "http://localhost:3005/accounts";

function AddWithdrawMoney({ li }) {
  const [inputSum, setInputSum] = useState("");

  const {
    setEditListSum,
    editListSum,
    setLastUpdate,
    setErrorMsg,
    setEditSumModal,
    editSumModal,
  } = useContext(Global);

  const addMoneyHandler = () => {
    if (inputSum >= 1000) {
      setEditSumModal(li);
      return;
    } else {
      setEditListSum({
        id: li.id,
        sum: Number(li.sum) + Number(inputSum),
      });
      setInputSum("");
    }
  };

  const withdrawMoneyHandler = () => {
    if (inputSum > li.sum) {
      setErrorMsg("Not enough money");
      setInputSum("");
      return;
    }

    setEditListSum({
      id: li.id,
      sum: Number(li.sum) - Number(inputSum),
    });
    setInputSum("");
  };

  useEffect(() => {
    if (editListSum === null) {
      return;
    }
    axios
      .put(
        URL + "/" + editListSum.id,
        { sum: editListSum.sum },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        setLastUpdate(Date.now());
      });
  }, [editListSum]);

  return (
    <div>
      {" "}
      <SmallBtn text="Add" action={addMoneyHandler}></SmallBtn>
      <input
        className="sum-input"
        type="number"
        value={inputSum}
        onChange={(e) => setInputSum(e.target.value)}
      ></input>
      <SmallBtn text="Withdraw" action={withdrawMoneyHandler}></SmallBtn>
      {editSumModal && editSumModal.id === li.id ? (
        <EditModal
          inputSum={inputSum}
          setInputSum={setInputSum}
          li={li}
        ></EditModal>
      ) : null}
    </div>
  );
}

export default AddWithdrawMoney;
