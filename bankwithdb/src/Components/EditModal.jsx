import SmallBtn from "./SmallBtn";
import { useContext } from "react";
import { Global } from "./Global";

function EditModal({ inputSum, setInputSum, li }) {
  const { setEditSumModal, setEditListSum } = useContext(Global);

  const cancelModalHandler = () => {
    setEditSumModal(null);
    setInputSum("");
  };

  const addModalMoneyHandler = () => {
    setEditListSum({
      id: li.id,
      sum: Number(li.sum) + Number(inputSum),
    });
    setInputSum("");
    setEditSumModal(null);
  };
  return (
    <div className="error-msg-container">
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "white",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          fontSize: "24px",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <p>Are you sure you want to add {inputSum} &euro;?</p>
        <div
          style={{
            display: "flex",
            fontSize: "18px",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <SmallBtn text="Add" action={addModalMoneyHandler}></SmallBtn>
          <SmallBtn text="Cancel" action={cancelModalHandler}></SmallBtn>
        </div>
      </div>
    </div>
  );
}
export default EditModal;
