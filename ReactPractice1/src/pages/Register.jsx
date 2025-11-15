import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://live-backend-production-a906.up.railway.app/api/user/register",
        { name, email, password }
      );
      setMessage("✅ User registered successfully!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage("❌ Registration failed. Try again!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-blue-100 transition-all hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create an Account ✨
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <label className="text-gray-700 font-medium mb-1 block">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-1 block">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-1 block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg transition-transform transform hover:-translate-y-1 hover:shadow-md"
          >
            Register
          </button>
        </form>

        {message && (
          <p
            className={`mt-5 text-center font-medium ${
              message.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
