import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState(null);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPicture(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !picture) {
      return setMessage("⚠️ Please fill all fields and select an image.");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("pic", picture);

    try {
      const res = await axios.post(
        "https://live-backend-production-a906.up.railway.app/api/user/create",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage("✅ User created successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setPicture(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      setMessage("❌ Error creating user!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 rounded-lg p-2 transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 rounded-lg p-2 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 rounded-lg p-2 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 p-2 rounded-lg file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer transition-all"
            />
          </div>

          {preview && (
            <div className="flex justify-center mt-3">
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-sm"
              />
            </div>
          )}

          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition-all duration-300"
          >
            Create Account
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              message.includes("✅")
                ? "text-green-600"
                : message.includes("⚠️")
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
