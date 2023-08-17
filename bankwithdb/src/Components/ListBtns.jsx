import SmallBtn from "./SmallBtn";
import { useContext, useEffect, useState } from "react";
import { Global } from "./Global";
import axios from "axios";
import BlockBtn from "./BlockBtn";
import AddWithdrawMoney from "./AddWithdrawMoney";

const URL = "http://localhost:3005/accounts";

function ListBtns({ li }) {
  const { setDeleteList, deleteList, setLastUpdate, blockList } =
    useContext(Global);

  const [blocked, setBlocked] = useState(false);

  console.log(li);

  useEffect(() => {
    if (deleteList === null) {
      return;
    }
    axios
      .delete(URL + "/" + deleteList.id, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setLastUpdate(Date.now());
      });
  }, [deleteList]);

  return (
    <>
      <div className="delete-block">
        {li.blocked === "1" ? null : (
          <SmallBtn text="Delete" action={() => setDeleteList(li)}></SmallBtn>
        )}
        <BlockBtn li={li} blocked={blocked} setBlocked={setBlocked}></BlockBtn>
      </div>

      {li.blocked === "1" ? null : <AddWithdrawMoney li={li} />}
    </>
  );
}

export default ListBtns;
