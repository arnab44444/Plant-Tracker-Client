import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

const AddPlants = () => {
  const handleAddPlants = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    const newPlant = Object.fromEntries(formData.entries());
    console.log(newPlant);

    // send coffee data to the db

    fetch("https://plant-tracker-server.vercel.app/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after getting plants to db", data);

        if (data.insertedId) {
          console.log("added successfully.");

          Swal.fire({
            title: "Plants added successfully!",
            icon: "success",
            draggable: true,
          });

          form.reset()
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-4 bg-gray-300">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-3xl font-bold text-green-500">Add PLants</h1>
          <p>
            Plants are essential for life as they produce the oxygen we need to
            breathe. They also provide us with food, medicine, and shelter,
            supporting both humans and animals. Moreover, plants help maintain
            the balance of nature by purifying the air and controlling climate.
          </p>
        </div>

        {/* <form onSubmit={handleAddCoffee}> */}

        <form onSubmit={handleAddPlants}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                required
                className="input w-full"
                placeholder="Photo URL"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Plant Name</label>
              <input
                type="text"
                name="plant_name"
                required
                className="input w-full"
                placeholder="Plant Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <input
                type="text"
                name="category"
                required
                className="input w-full"
                placeholder="Category"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Care Level</label>
              <input
                type="text"
                name="care_level"
                required
                className="input w-full"
                placeholder="Care Level"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Watering Frequency</label>
              <input
                type="text"
                name="frequency"
                required
                className="input w-full"
                placeholder="Watering Frequency"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Last Watered Data</label>
              <input
                type="text"
                name="last_watered_data"
                required
                className="input w-full"
                placeholder="Last Watered Data<"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Next Watering Data</label>
              <input
                type="text"
                name="next_watering_data"
                required
                className="input w-full"
                placeholder="Next Watering Data"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Health Status</label>
              <input
                type="text"
                name="health_status"
                required
                className="input w-full"
                placeholder="Health Status"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">User Email</label>
              <input
                type="text"
                name="email"
                // defaultValue={email}
                required
                className="input w-full"
                placeholder="Email"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">User Name</label>
              <input
                type="text"
                name="username"
                required
                className="input w-full"
                placeholder="User Name"
              />
            </fieldset>
          </div>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              required
              className="input w-full"
              placeholder="Quantity Name"
            />
          </fieldset>

          <input
            type="submit"
            className="btn w-full bg-green-500 hover:bg-green-800 hover:text-white"
            value="Add Plant"
          />
        </form>
      </div>
      );
      <Footer></Footer>
    </div>
  );
};

export default AddPlants;

// form

// add feature