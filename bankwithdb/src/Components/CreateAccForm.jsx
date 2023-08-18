import img from "../img/no-photo.jpg";
import SmallBtn from "./SmallBtn";
import { useState, useContext, useEffect } from "react";
import { Global } from "./Global";
import ErrorMsg from "./ErrorMsg";
import axios from "axios";
import { useFile } from "./useFile";

const URL = "http://localhost:3005/accounts";

function CreateAccountForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [imgs, setImg] = useState("");

  const {
    setCreateData,
    createData,
    setErrorMsg,
    errorMsg,
    setCreateAccResponse,
    setList,
  } = useContext(Global);

  const [file, readFile, remImage] = useFile();

  const createAccHandler = (e) => {
    e.preventDefault();
    if (!name || !surname) {
      setErrorMsg("Please fill all details");
    }

    if (name.length < 3 || surname.length < 3) {
      setErrorMsg("Name or surname is too short");
    }

    setCreateData({
      name,
      surname,
      img: file,
      blocked: 0,
      sum: 0,
      showList: true,
      file,
    });

    setName("");
    setSurname("");
    remImage("");
  };

  useEffect(() => {
    if (createData === null) {
      return;
    }
    axios
      .post(URL, createData, { withCredentials: true })
      .then((res) => setCreateAccResponse(res.data))
      .catch((err) => setErrorMsg(err.message));
  }, [createData]);

  return (
    <div className="border">
      <form className="create-account-form">
        <div className="account-form-left">
          <div className="name-surname">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="name-surname">
            <label>Surname</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="photo-container">
          <label>Photo</label>
          <input
            className="photo-input"
            type="file"
            value={imgs}
            onChange={readFile}
          ></input>
          {file ? (
            <div>
              <img src={file} alt="pict" />
            </div>
          ) : (
            <img src={img} alt="no-pict" />
          )}
        </div>
      </form>
      <div>
        <SmallBtn text="Create" action={createAccHandler}></SmallBtn>
      </div>
      {errorMsg ? <ErrorMsg errorMsg={errorMsg}></ErrorMsg> : null}
    </div>
  );
}

export default CreateAccountForm;
