import Card from "../components/Card";
import ExpenseChart from "../components/ExpenseChart";

function Home() {

  const transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expenses;

  return (
    <div className="p-8">

      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="flex gap-6 mb-10">

        <Card title="Balance" amount={balance} />

        <Card title="Income" amount={income} />

        <Card title="Expenses" amount={expenses} />

      </div>

      <ExpenseChart transactions={transactions} />

    </div>
  );
}

export default Home;