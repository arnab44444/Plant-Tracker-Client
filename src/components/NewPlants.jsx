import React from "react";
import { Link } from "react-router";

const NewPlants = ({ plant }) => {
  const { _id, photo, plant_name } = plant;
  return (
    <div className="card bg-base-100 w-96 h-90 shadow-sm">
      <figure>
        <img src={photo} alt="Shoes" className="h-50 w-90 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{plant_name}</h2>

        <Link to={`/plant-details/${_id}`}>
          <button className="btn btn-primary w-full">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default NewPlants;
