import React from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
// import ReactTooltip from "react-tooltip";
import { Tooltip } from "react-tooltip";

const MyPlantCard = ({ plant, plants, setPlants }) => {
  const navigate = useNavigate();

  const {
    _id,
    photo,
    plant_name,
    category,
    frequency,
    last_watered_data,
    next_watering_data,
    care_level,
    health_status,
  } = plant;

  const handleDelet = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-tracker-server.vercel.app/del_plant/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your plant has been deleted.",
                icon: "success",
              });
              const remainingPlants = plants.filter((pla) => pla._id !== _id);
              setPlants(remainingPlants);
            }
          });
      }
    });
  };

  return (
    <div className="bg-base-100 text-base-content rounded-lg shadow-md overflow-hidden">
      <img src={photo} alt={plant_name} className="w-full h-100 object-cover" />
      <div className="p-4 space-y-2 bg-gray-500">
        <h2 className="text-xl font-semibold text-base-content">
          {plant_name}
        </h2>
        <p
          className="text-base-content font-semibold"
          data-tooltip-id="categoryTip"
          data-tooltip-content="What type of plant this is"
        >
          Category: <span className="font-normal">{category}</span>
        </p>
        <p
          className="text-base-content font-semibold"
          data-tooltip-id="careTip"
          data-tooltip-content="How difficult it is to care for this plant"
        >
          Care Level: <span className="font-normal">{care_level}</span>
        </p>
        <p className="text-base-content font-semibold">
          Frequency: <span className="font-normal">{frequency}</span>
        </p>
        <p className="text-base-content font-semibold">
          Health: <span className="font-normal">{health_status}</span>
        </p>
        <p className="text-base-content font-semibold">
          Last Watered: <span className="font-normal">{last_watered_data}</span>
        </p>
        <p className="text-base-content font-semibold">
          Next Watering:{" "}
          <span className="font-normal">{next_watering_data}</span>
        </p>

        <div className="flex justify-between mt-4">
          <Link to={`/updatePlant/${_id}`}>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              data-tooltip-id="updateTip"
              data-tooltip-content="Edit plant info"
            >
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelet(_id)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            data-tooltip-id="deleteTip"
            data-tooltip-content="Delete this plant"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Tooltips */}
      <Tooltip id="categoryTip" />
      <Tooltip id="careTip" />
      <Tooltip id="updateTip" />
      <Tooltip id="deleteTip" />
    </div>
  );
};

export default MyPlantCard;
