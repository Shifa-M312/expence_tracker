import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

function Transactions() {
  return (
    <div>

      <h2>Transactions</h2>

      <SearchBar />

      <Card title="Zomato" amount="250" />
      <Card title="Uber" amount="400" />

    </div>
  );
}

export default Transactions;