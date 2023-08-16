import SmallBtn from "./SmallBtn";

function ListBtns() {
  return (
    <>
      <div className="delete-block">
        <SmallBtn text="Delete"></SmallBtn>
        <SmallBtn text="Block"></SmallBtn>
      </div>
      <div>
        <SmallBtn text="Add"></SmallBtn>
        <input className="sum-input" type="number"></input>
        <SmallBtn text="Withdraw"></SmallBtn>
      </div>
      <div></div>
    </>
  );
}

export default ListBtns;
