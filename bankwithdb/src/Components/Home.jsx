import building from "../img/building.jpg";

function Home() {
  return (
    <div className="home-container">
      <img src={building} alt="Bank building" />
      <div className="home-summary">
        <div className="home-summ">Accounts number:</div>
        <div className="home-summ">Total sum: </div>
        <div className="home-summ">Avarge sum:</div>
      </div>
    </div>
  );
}

export default Home;
