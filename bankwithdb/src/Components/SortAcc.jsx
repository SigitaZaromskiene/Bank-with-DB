import { useState, useContext, useEffect } from "react";
import { Global } from "./Global";

function SortAcc() {
  const { setList, list } = useContext(Global);

  const [sorted, setSorted] = useState("");

  useEffect(() => {
    if (sorted === "surname") {
      setList((li) =>
        [...li].sort((a, b) => a.surname.localeCompare(b.surname))
      );
    }
    if (sorted === "name") {
      setList((li) => [...li].sort((a, b) => a.name.localeCompare(b.name)));
    }

    if (sorted === "sum") {
      setList((li) => [...li].sort((a, b) => b.sum - a.sum));
    }
  }, [sorted]);

  return (
    <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
      <option>Sort</option>
      <option value="name">Name</option>
      <option value="surname">Surname</option>
      <option value="sum">Sum</option>
    </select>
  );
}

export default SortAcc;
