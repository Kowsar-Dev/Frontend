import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]); //  store API data here

  const getData = async () => {
    try {
      const response = await axios.get("https://live-backend-production-a906.up.railway.app/api/user/getall");
      setData(response.data); //  update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect runs once after the component loads
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4">
      {data.map((elem) => (
        <div key={elem.id} className="mb-4 p-2 rounded shadow-sm">
          <img
            src={elem.profile_pic}
            alt={elem.author}
            className="w-48 h-48 object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">{elem.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
