import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DashCard from "../components/DashCard";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [allPlants, setAllPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    // Fetch all plants
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => setAllPlants(data));

    // Fetch user's plants
    fetch(`http://localhost:3000/plants?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyPlants(data));
  }, [user?.email]);

  return (
    <div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6">
          Welcome to Dashboard, {user?.displayName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="card bg-base-200 shadow-xl p-4">
            <h3 className="text-xl font-semibold">Total Plants</h3>
            <p className="text-3xl text-indigo-300">{allPlants.length}</p>
          </div>
          <div className="card bg-base-200 shadow-xl p-4">
            <h3 className="text-xl font-semibold">My Plants</h3>
            <p className="text-3xl text-indigo-300">{myPlants.length}</p>
          </div>
          <div className="card bg-base-200 shadow-xl p-4">
            <h3 className="text-xl font-semibold">User Info</h3>
            <p>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
          </div>
        </div>
      </div>

      {/* My Plants section */}
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
    </div>
  );
};

export default DashboardHome;
