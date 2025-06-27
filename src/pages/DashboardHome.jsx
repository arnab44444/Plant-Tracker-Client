import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DashCard from "../components/DashCard";
import { FaCheckCircle, FaLeaf, FaRegCalendarCheck } from "react-icons/fa";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [allPlants, setAllPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);



  useEffect(() => {
    fetch("https://plant-tracker-server.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => setAllPlants(data));

    fetch(`https://plant-tracker-server.vercel.app/plants?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyPlants(data));
  }, [user?.email]);

  return (
    <div>
      {/* Dashboard Summary */}
      <div className="p-6">
        <h2 className="text-3xl text-center text-green-600 font-bold mb-6">
          Welcome to Dashboard, {user?.displayName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
  {/* Total Plants Card */}
  <div className="card bg-gradient-to-br from-green-100 to-green-200 shadow-md border border-green-300 px-4 py-3 hover:scale-[1.03] transition-transform duration-300">
    <div className="flex items-center gap-3">
      <div className="bg-green-500 p-2 rounded-full shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-green-700">Total Plants</h3>
        <p className="text-xl font-bold text-green-900">{allPlants.length}</p>
      </div>
    </div>
  </div>

  {/* My Plants Card */}
  <div className="card bg-gradient-to-br from-indigo-100 to-indigo-200 shadow-md border border-indigo-300 px-4 py-3 hover:scale-[1.03] transition-transform duration-300">
    <div className="flex items-center gap-3">
      <div className="bg-indigo-500 p-2 rounded-full shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-indigo-700">My Plants</h3>
        <p className="text-xl font-bold text-indigo-900">{myPlants.length}</p>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* My Plants */}
      <div className="p-6">
        <h2 className="text-2xl text-green-500 font-bold text-center my-6">
          🌿 My Plants (Your Garden)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {myPlants.map((plant) => (
            <DashCard key={plant._id} plant={plant} />
          ))}
        </div>
      </div>

      

      {/* 🌱 Planting Tips Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-green-600 text-center my-6">
          🌱 Gardening Tips for You
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Water early in the morning to reduce evaporation.",
            "Use compost to enrich your soil naturally.",
            "Trim dead leaves regularly to boost growth.",
          ].map((tip, index) => (
            <div
              key={index}
              className="bg-lime-100 border border-green-300 rounded-lg p-4 shadow-lg hover:scale-[1.01] transition-all duration-200"
            >
              <h3 className="font-semibold text-green-800 flex items-center gap-2">
                <FaLeaf className="text-green-500" /> Tip {index + 1}
              </h3>
              <p className="text-sm mt-2 text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-green-600 my-6">
          👤 My Profile
        </h2>
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-2xl p-6 flex flex-col sm:flex-row items-center gap-6 border border-green-300">
          <img
            src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
            alt="User"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="flex-1">
            <p className="text-xl font-bold text-green-800">
              {user?.displayName || "Unknown User"}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-medium">Email:</span> {user?.email}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-medium">Account Type:</span> Regular User
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-medium">Member Since:</span> June 2024
            </p>
            <p className="text-sm text-gray-700 mt-1 flex items-center gap-1">
              <span className="font-medium">Status:</span>
              <span className="text-green-600 font-semibold">Verified</span>
              <FaCheckCircle className="text-green-500" />
            </p>
          </div>
        </div>
      </div>

      

      
    </div>
  );
};

export default DashboardHome;
