import { useContext, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";
import SmallBtn from "./SmallBtn";

const URL = "http://localhost:3005/accounts";

function BlockBtn({ li, setBlocked }) {
  const { setBlockList, blockList, setLastUpdate } = useContext(Global);
  const blockHandler = () => {
    setBlocked(true);
    setBlockList({
      id: li.id,
      blocked: 1,
    });
  };

  const unBlockHandler = () => {
    setBlocked(false);
    setBlockList({
      id: li.id,
      blocked: 0,
    });
  };

  useEffect(() => {
    if (blockList === null) {
      return;
    }
    axios
      .put(
        URL + "/" + blockList.id,
        { blocked: blockList.blocked },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        setLastUpdate(Date.now());
      });
  }, [blockList]);

  return (
    <>
      {li.blocked === "1" ? (
        <SmallBtn
          className="small-btn"
          text="Unblock"
          action={unBlockHandler}
        ></SmallBtn>
      ) : (
        <SmallBtn
          className="small-btn"
          text="Block"
          action={blockHandler}
        ></SmallBtn>
      )}
    </>
  );
}

export default BlockBtn;
