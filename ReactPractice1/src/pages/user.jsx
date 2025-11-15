import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

export default function User() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://live-backend-production-a906.up.railway.app/api/user/getall"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleView = (id) => {
    navigate(`/profile/${id}`); // ✅ navigate with dynamic id
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        👥 All Registered Users
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-blue-600 text-lg font-medium animate-pulse">
            Loading users...
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-5 flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 mb-4">
                <img
                  src={user.profile_pic || "https://via.placeholder.com/100"}
                  alt={user.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-blue-100 shadow-sm"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 capitalize">
                {user.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{user.email}</p>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleView(user.id)} // ✅ pass ID dynamically
                  className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-200"
                >
                  View
                </button>
                <button
                  className="px-4 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && data.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No users found 😔
        </p>
      )}
    </div>
  );
}
