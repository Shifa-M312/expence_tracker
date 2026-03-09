import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function ExpenseChart({ transactions }) {

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="bg-white p-6 rounded shadow w-96">

      <h2 className="text-lg font-bold mb-4">
        Spending Overview
      </h2>

      <PieChart width={350} height={250}>

        <Pie
          data={data}
          dataKey="value"
          outerRadius={90}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />

      </PieChart>

    </div>
  );
}

export default ExpenseChart;