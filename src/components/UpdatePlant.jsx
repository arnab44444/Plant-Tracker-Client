import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdatePlant = () => {
  const data = useLoaderData();

  console.log(data)

  const [photo,setPhoto] = useState(data?.photo);
  const [plant_name,setPlant_name] = useState(data?.plant_name);
  const [email,setEmail] = useState(data?.email);
  const [username,setUserName] = useState(data?.username);
  const [care_level,setCare_level] = useState(data?.care_level)
  const [category,setCategory] = useState(data?.category)
  const [description,setDescription] = useState(data?.description);
  const [frequency,setFrequency] = useState(data?.frequency);
  const [health_status,setHealth_status] = useState(data?.health_status);
  const [last_watered_data,setLast_watered_data] = useState(data?.last_watered_data);
  const [next_watering_data,setNew_watering_data] = useState(data?.next_watering_data);

  //console.log(photo)

  const handleUpdatePlant = e => {
    e.preventDefault();

    const updatePlant = {
        plant_name : plant_name,
        photo : photo,
        care_level : care_level,
        category : category,
        description : description,
        email : email,
        username : username,
        frequency : frequency,
        health_status : health_status,
        last_watered_data : last_watered_data,
        next_watering_data : next_watering_data
    }

    fetch(`http://localhost:3000/plant/${data?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePlant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log( data)

      if(data?.modifiedCount>0){
        Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'your plant updated  successfully.',
                showConfirmButton: false,
                timer: 1500
            });
      }
  })
  };

    // const form = e.target;

    // const formData = new FormData(form);
    // const updatePlant = Object.fromEntries(formData.entries())
    // console.log(updatePlant)


    // // send  update in db

    // fetch(`http://localhost:3000/plants/${_id}`,{
    //     method : 'PUT',
    //     headers: {
    //         'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify(updatePlant)
    // })
    // .then(res=> res.json())
    // .then(data =>{
    //     console.log(data)

    //     if(data.modifiedCount){
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: 'your plant updated  successfully.',
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     }
    // })

  //};

  return (
    <div>
      <Navbar></Navbar>

      <div className="p-4 bg-gray-300">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-3xl font-bold text-green-500">Update PLants</h1>
        </div>

        <form onSubmit={handleUpdatePlant}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
               // defaultValue={photo}
                value={photo}
               onChange={(e) => setPhoto(e.target.value)}
                className="input w-full"
                placeholder="Photo URL"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Plant Name</label>
              <input
                type="text"
                name="plant_name"
               // defaultValue={plant_name}
               value={plant_name}
               onChange={(e) => setPlant_name(e.target.value)}
                className="input w-full"
                placeholder="Plant Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <input
                type="text"
                name="category"
               // defaultValue={category}
                value={category}
               onChange={(e) => setCategory(e.target.value)}
                className="input w-full"
                placeholder="Category"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Care Level</label>
              <input
                type="text"
                name="care_level"
              //  defaultValue={care_level}
                value={care_level}
               onChange={(e) => setCare_level(e.target.value)}
                className="input w-full"
                placeholder="Care Level"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Watering Frequency</label>
              <input
                type="text"
                name="frequency"
               // defaultValue={frequency}
                value={frequency}
               onChange={(e) => setFrequency(e.target.value)}
                className="input w-full"
                placeholder="Watering Frequency"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Last Watered Data</label>
              <input
                type="text"
                name="last_watered_data"
               // defaultValue={last_watered_data}
                value={last_watered_data}
               onChange={(e) => setLast_watered_data(e.target.value)}
                className="input w-full"
                placeholder="Last Watered Data<"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Next Watering Data</label>
              <input
                type="text"
                name="next_watering_data"
              //  defaultValue={next_watering_data}
                value={next_watering_data}
               onChange={(e) => setNew_watering_data(e.target.value)}
                className="input w-full"
                placeholder="Next Watering Data"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Health Status</label>
              <input
                type="text"
                name="health_status"
              //  defaultValue={health_status}
                value={health_status}
               onChange={(e) => setHealth_status(e.target.value)}
                className="input w-full"
                placeholder="Health Status"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">User Email</label>
              <input
                type="text"
                name="email"
              //  defaultValue={email}
                value={email}
               onChange={(e) => setEmail(e.target.value)}
                className="input w-full"
                placeholder="Email"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">User Name</label>
              <input
                type="text"
                name="username"
              //  defaultValue={username}
                value={username}
               onChange={(e) => setUserName(e.target.value)}
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
              value={description}
               onChange={(e) => setDescription(e.target.value)}
              className="input w-full"
              placeholder="Quantity Name"
            />
          </fieldset>

          <input
            type="submit"
            className="btn w-full bg-green-500 hover:bg-green-800 hover:text-white"
            value="Update Plant"
          />
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default UpdatePlant;
