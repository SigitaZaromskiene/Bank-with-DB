import { useContext, useEffect, useCallback } from "react";
import { Global } from "./Global";

function Filter() {
  const { setFiltered, list } = useContext(Global);

  const onChange = (event) => {
    const value = event.target.value;
    optionsHandler(value);
  };

  const optionsHandler = useCallback(
    (value) => {
      let filteredList = list;

      console.log(filteredList);

      if (value === "all") {
        filteredList = list.filter(
          ({ sum }) => sum < 0 || sum > 0 || sum === 0
        );
      }

      if (value === "blocked") {
        filteredList = list.filter(({ blocked }) => blocked === "1");
      }

      if (value === "empty") {
        filteredList = list.filter(({ sum }) => sum === 0);
      }
      if (value === "with") {
        filteredList = list.filter(({ sum }) => sum > 0);
      }

      setFiltered(filteredList);
    },
    [list]
  );

  useEffect(() => {
    optionsHandler();
  }, [optionsHandler]);

  return (
    <select onChange={onChange}>
      <option>Filter</option>
      <option value="all">All accounts</option>
      <option value="blocked">Blocked accounts</option>
      <option value="empty">Empty accounts</option>
      <option value="with">Accounts with balance</option>
    </select>
  );
}

export default Filter;
