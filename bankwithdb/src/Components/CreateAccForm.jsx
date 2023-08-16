import img from "../img/no-photo.jpg";
import SmallBtn from "./SmallBtn";

function CreateAccountForm() {
  return (
    <div className="border">
      <form className="create-account-form">
        <div className="account-form-left">
          <div className="name-surname">
            <label>Name</label>
            <input></input>
          </div>
          <div className="name-surname">
            <label>Surname</label>
            <input></input>
          </div>
        </div>
        <div className="photo-container">
          <label>Photo</label>
          <input className="photo-input" type="file"></input>
          <div>
            <img src={img} alt="no-pict" />
          </div>
        </div>
      </form>
      <div>
        <SmallBtn text="Create"></SmallBtn>
      </div>
    </div>
  );
}

export default CreateAccountForm;
