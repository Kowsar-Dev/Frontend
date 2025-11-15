import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
      <h1 className="font-bold text-xl">My Website</h1>
      <div className="flex gap-4">
        <Link to="/" > Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/create">Create ID</Link>
         
      </div>
    </nav>
  );
}
