import img from "../img/no-photo.jpg";
import SmallBtn from "./SmallBtn";

function AccList() {
  return (
    <div className="accounts-list-container">
      <li>
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
            <p>Vardas</p>
            <p>Pavarde</p>
          </div>
          <div>
            <img src={img} alt="face" />
          </div>
        </div>
        <div className="delete-block">
          <SmallBtn text="Delete"></SmallBtn>
          <SmallBtn text="Block"></SmallBtn>
        </div>
        <div>
          <SmallBtn text="Add"></SmallBtn>
          <input className="sum-input" type="number"></input>
          <SmallBtn text="Withdraw"></SmallBtn>
        </div>
        <div>
          <div
            style={{
              width: "150px",
              color: "white",
              fontSize: "24px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            555&euro;
          </div>
        </div>
      </li>
      <li>Dienas</li>
    </div>
  );
}

export default AccList;
