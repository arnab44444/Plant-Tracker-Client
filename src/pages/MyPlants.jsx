import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import MyPlantCard from "../components/MyPlantCard";
import { Link } from "react-router";

const MyPlants = () => {
  const initialPlants = useLoaderData();
  const [plants, setPlants] = useState(initialPlants);

  

  return (
    <div>
      <Navbar />

      {plants.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-error mb-4">
            No plants added yet.
          </h2>
          <p className="text-base-content mb-4">
            Go back to the All Plants section and add your  plants.
          </p>
          <Link to="/add-plants">
            <button className="btn btn-primary">Go to Add Plants</button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {plants.map((plant) => (
            <MyPlantCard
              key={plant._id}
              plants={plants}
              setPlants={setPlants}
              plant={plant}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MyPlants;
