import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Transactions() {

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
      alert("Please login first");
      navigate("/login");
    }
  }, []);

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold">
        Transactions Page
      </h1>

      <p className="mt-4">
        Here you can manage your expenses and income.
      </p>

    </div>
  );
}

export default Transactions;