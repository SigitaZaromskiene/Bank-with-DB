import AccSummary from "./AccSummary";
import CreateAccountForm from "./CreateAccForm";
import AccList from "./AccList";
import SmallBtn from "./SmallBtn";
import Filter from "./Filter";
import SortAcc from "./SortAcc";

function Accounts() {
  return (
    <div className="accounts-container">
      <AccSummary />
      <CreateAccountForm />
      <AccList />
      <div className="filter-sort-container">
        <Filter></Filter>
        <SortAcc></SortAcc>
        <SmallBtn text="Pay taxes"></SmallBtn>
      </div>
    </div>
  );
}

export default Accounts;
