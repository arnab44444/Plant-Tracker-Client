import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const NewPlants = ({ plant }) => {
  const { _id, photo, plant_name } = plant;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="card w-80 sm:w-96 bg-green-50 shadow-lg rounded-xl transition-all duration-300"
    >
      <figure className="h-56 overflow-hidden rounded-t-xl">
        <img
          src={photo}
          alt={plant_name}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body px-5 py-4">
        <h2 className="card-title text-xl font-bold text-green-700 mb-3">
          {plant_name}
        </h2>

        <Link to={`/plant-details/${_id}`}>
          <button className="btn bg-green-500 w-full">View Details</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NewPlants;
