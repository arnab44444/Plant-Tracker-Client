import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { _id, photo, plant_name, category, frequency, care_level } = plant;

  return (
    <>
      {/* Table row for medium and large screens */}
      <tr className="hidden sm:table-row">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-10 h-10 md:w-12 md:h-12">
                <img src={photo} alt="Plant" className="object-cover" />
              </div>
            </div>
          </div>
        </td>
        <td className="font-semibold text-green-400 ">{plant_name}</td>
        <td className="capitalize">{category}</td>
        <td className="text-left">{care_level}</td>

        <td className="text-left">{frequency}</td>
        <td>
          <Link to={`/plant-details/${_id}`}>
            <button className="btn btn-sm md:btn-md bg-green-500 hover:bg-green-700">
              View Details
            </button>
          </Link>
        </td>
      </tr>

      {/* Card for small screens */}
      {/* <div className="sm:hidden border-b border-gray-300 p-4">
        <div className="flex items-center gap-3 mb-2">
          <img
            className="h-12 w-12 rounded-2xl object-cover"
            src={photo}
            alt={plant_name}
          />
          <span className="font-semibold text-lg">{plant_name}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="font-semibold">Category:</span>
          <span>{category}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="font-semibold">Frequency:</span>
          <span>{frequency}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="font-semibold">Care Level:</span>
          <span>{care_level}</span>
        </div>
        <div className="flex justify-center mt-2">
          <Link to={`/plant-details/${_id}`} className="w-full">
            <button className="btn btn-primary w-full">View Details</button>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default PlantCard;
