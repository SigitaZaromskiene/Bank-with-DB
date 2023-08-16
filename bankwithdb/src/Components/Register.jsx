function Register() {
  return (
    <div className="form-register">
      <form>
        <p>Please register</p>
        <div>
          <label>Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="number"></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input type="number"></input>
        </div>
      </form>
    </div>
  );
}

export default Register;
