import { useContext } from "react";
import { Global } from "./Global";

function BlockBtn({ li, setBlocked, blocked }) {
  const { setBlockList } = useContext(Global);
  const blockHandler = () => {
    setBlocked((prev) => !prev);
    setBlockList(li);
  };
  return (
    <button className="small-btn" onClick={blockHandler}>
      {blocked === true ? "Unblock" : "Block"}
    </button>
  );
}

export default BlockBtn;
