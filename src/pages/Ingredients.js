import DataGridTable from "../components/DataGridTable";

function Ingredients() {
  const endpoint =
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
  return (
    <div>
      <DataGridTable endpoint={endpoint}></DataGridTable>
    </div>
  );
}

export default Ingredients;
