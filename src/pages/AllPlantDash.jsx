import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import PlantCard from "../components/PlantCard";

const AllPlantDash = () => {
  const loadedPlants = useLoaderData();
  const [plants, setPlants] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [searchText, setSearchText] = useState("");
  const [viewMode, setViewMode] = useState("card"); // for large devices only

  useEffect(() => {
    let filteredPlants = [...loadedPlants];

    // Search
    if (searchText.trim() !== "") {
      filteredPlants = filteredPlants.filter((plant) =>
        plant.plant_name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Sort
    if (sortOption === "care_level") {
      const carePriority = { easy: 0, moderate: 1, hard: 2, difficult: 3 };
      filteredPlants.sort(
        (a, b) => carePriority[a.care_level] - carePriority[b.care_level]
      );
    }

    setPlants(filteredPlants);
  }, [loadedPlants, sortOption, searchText]);

  return (
    <div>
      <h2 className="text-2xl mt-5 text-green-600 text-center font-bold">
        Here All Plants Data are showing
      </h2>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 mt-8">
        {/* Search Centered */}
        <div className="w-full md:w-1/2 flex justify-center">
          <input
            type="text"
            placeholder="Search by plant name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered w-full max-w-md"
          />
        </div>

        {/* Sort & View Toggle */}
        <div className="flex items-center gap-4">
          <div>
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

          {/* View Toggle - Only for large screens */}
          <div className="hidden md:flex items-center gap-2">
            <label className="font-semibold">View:</label>
            <button
              className={`btn btn-sm ${
                viewMode === "table" ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => setViewMode("table")}
            >
              Table
            </button>
            <button
              className={`btn btn-sm ${
                viewMode === "card" ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => setViewMode("card")}
            >
              Card
            </button>
          </div>
        </div>
      </div>

      {/* Table Layout - Only on large screens + if table view selected */}
      {viewMode === "table" && (
        <div className="hidden sm:block px-4 mt-10">
          <table className="table">
            <thead>
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
      )}

      {/* Card Layout - Always for small device, or if selected on large */}
      <div
        className={`px-4 mt-10 gap-5 ${
          viewMode === "card" ? "grid sm:grid-cols-3 lg:grid-cols-4" : ""
        } ${viewMode !== "card" ? "sm:hidden" : ""}`}
      >
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
              <span className="font-normal">Watering Frequency:</span>{" "}
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

export default AllPlantDash;
