import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const { id } = useParams(); // ✅ get ID from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const res = await axios.get(
        `https://live-backend-production-a906.up.railway.app/api/user/profile/${id}`
      );
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-blue-600 text-lg font-medium">
        Loading profile...
      </div>
    );

  if (!user)
    return (
      <div className="text-center mt-20 text-gray-600">User not found 😢</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center border border-gray-100">
        <img
          src={user.profile_pic || "https://via.placeholder.com/150"}
          alt={user.name}
          className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-100 shadow-sm"
        />
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          {user.name}
        </h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}
