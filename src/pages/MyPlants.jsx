import React, { useState } from "react";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import MyPlantCard from "../components/MyPlantCard";
import { Link } from "react-router";

const MyPlants = () => {
  const initialPlants = useLoaderData();
  console.log("Initial Plants:", initialPlants);
  const [plants, setPlants] = useState(initialPlants);


  console.log("My Plants:", plants);

  

  return (
    <div>
      

      <h2 className="text-2xl text-green-500 font-bold text-center my-5">This is My Plants Section</h2>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">

        
          {plants?.map((plant) => (
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
