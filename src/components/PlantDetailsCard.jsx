import React from 'react';
import { useNavigate } from 'react-router';

const PlantDetailsCard = ({ plant }) => {
  const navigate = useNavigate();

  const {
    _id,
    photo,
    plant_name,
    category,
    frequency,
    description,
    care_level,
    health_status,
    last_watered_data,
    next_watering_data,
  } = plant;



  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-green-700 font-semibold hover:underline"
      >
        &larr; Back
      </button>

      <div className="relative bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-transparent hover:border-green-300 transition duration-300">
        <div className="md:w-1/2 bg-gradient-to-tr from-green-100 to-green-200 flex items-center justify-center p-4">
          <img
            src={photo}
            alt={plant_name}
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="p-8 flex-1 bg-white">
          <h2 className="text-4xl font-extrabold text-green-800 mb-1">{plant_name}</h2>
          <p className="text-sm text-gray-500 italic mb-4">{category}</p>

          <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
            <Info label="Care Level" value={care_level} />
            <Info label="Watering Frequency" value={frequency} />
            <Info label="Health Status" value={health_status} />
            <Info label="Last Watered" value={last_watered_data} />
            <Info label="Next Watering" value={next_watering_data} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200">
    <span className="font-semibold text-green-700">{label}: </span>
    <span>{value}</span>
  </div>
);

export default PlantDetailsCard;
