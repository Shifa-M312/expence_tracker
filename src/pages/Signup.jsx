import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const user = { email, password };

    localStorage.setItem("userData", JSON.stringify(user));

    alert("Signup successful");

    navigate("/login");
  };

  return (
    <div className="flex justify-center mt-10">

      <form
        onSubmit={handleSignup}
        className="bg-white p-6 shadow-md rounded w-80"
      >

        <h2 className="text-xl font-bold mb-4">
          Sign Up
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Sign Up
        </button>

      </form>

    </div>
  );
}

export default Signup;