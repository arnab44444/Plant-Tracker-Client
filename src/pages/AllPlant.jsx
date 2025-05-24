import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import PlantCard from "../components/PlantCard";

const AllPlant = () => {
  const loadedPlants = useLoaderData();
  const [plants, setPlants] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    if (sortOption === "") {
      setPlants(loadedPlants);
    } 
    else {
      const carePriority = { easy: 0, moderate: 1, hard: 2 ,difficult:3};
      const sorted = [...loadedPlants].sort((a, b) => {
        return carePriority[a.care_level] - carePriority[b.care_level];
      });
      setPlants(sorted);
    }
  }, [loadedPlants, sortOption]);

  return (
    <div>
      <Navbar />

      {/* Sort Dropdown */}
      <div className="flex justify-center px-4 mt-6">
        <label className="mr-2 font-semibold">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="select select-bordered w-40"
        >
          <option value="">Default</option>
          <option value="care_level">Care Level</option>
        </select>
      </div>

      {/* Table Layout for Medium and Large Screens */}
      <div className="hidden sm:block px-4 mt-10 ">
        <table className="table ">
          <thead className="">
            <tr>
              <th>Picture</th>
              <th>Plant Name</th>
              <th>Category</th>
              <th>Care Level</th>
              <th>Watering Frequency</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <PlantCard key={plant._id} plant={plant} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Layout for Small Screens */}
      <div className="sm:hidden px-4 mt-10 space-y-5">
        {plants.map((plant) => (
          <div
            key={plant._id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm bg-base-100"
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={plant.photo}
                alt={plant.plant_name}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{plant.plant_name}</h2>
                <p className="text-sm text-gray-500">{plant.category}</p>
              </div>
            </div>
            <p>
              <span className="font-semibold">Watering Frequency:</span>{" "}
              {plant.frequency}
            </p>

            <p>
              <span className="font-semibold">Care Level:</span>{" "}
              {plant.care_level}
            </p>

            <div className="mt-3">
              <a href={`/plant-details/${plant._id}`}>
                <button className="btn btn-primary w-full">View Details</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AllPlant;
