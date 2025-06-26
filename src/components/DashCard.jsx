import React from "react";
import { Tooltip } from "react-tooltip";

const DashCard = ({ plant }) => {
  const {
    _id,
    photo,
    plant_name,
    category,
    next_watering_data,
    care_level,
  } = plant;

  return (
    <div className="bg-base-100 border border-base-300 rounded-lg shadow-md p-3 h-[220px] overflow-hidden flex flex-col justify-between">
      <img
        src={photo}
        alt={plant_name}
        className="w-full h-[80px] object-cover rounded-md mb-2"
      />
      <h2 className="text-md font-bold text-primary truncate">{plant_name}</h2>
      <p
        className="text-sm"
        data-tooltip-id="categoryTip"
        data-tooltip-content="Plant category"
      >
        🌱 <span className="font-semibold">Category:</span> {category}
      </p>
      <p
        className="text-sm"
        data-tooltip-id="careTip"
        data-tooltip-content="Care level"
      >
        💧 <span className="font-semibold">Care:</span> {care_level}
      </p>
      <p className="text-sm">
        🕒 <span className="font-semibold">Next:</span> {next_watering_data}
      </p>

      {/* Tooltips */}
      <Tooltip id="categoryTip" />
      <Tooltip id="careTip" />
    </div>
  );
};

export default DashCard;
