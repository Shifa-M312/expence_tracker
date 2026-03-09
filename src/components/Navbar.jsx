import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const loggedIn = localStorage.getItem("loggedIn");
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">

      <h2 className="text-xl font-bold">
        Expense Tracker
      </h2>

      <div className="flex gap-6 items-center">

        <Link to="/" className="hover:underline">
          Home
        </Link>

        <Link to="/transactions" className="hover:underline">
          Transactions
        </Link>

        {!loggedIn ? (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-yellow-400 text-black px-4 py-1 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <span className="text-sm">
              Welcome, {user}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;