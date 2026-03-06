import Card from "../components/Card";

function Home() {
  return (
    <div>

      <h2>Dashboard</h2>

      <Card title="Food" amount="500" />
      <Card title="Transport" amount="300" />
      <Card title="Bills" amount="1200" />

    </div>
  );
}

export default Home;