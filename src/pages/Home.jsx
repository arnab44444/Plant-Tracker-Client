import React from "react";
import NewPlants from "../components/NewPlants";
import { useLoaderData } from "react-router";
import Gallery from "../components/Gallery";
import FunPlantFacts from "../components/FunPlantFacts";
import AboutWebsite from "../components/AboutWebsite";
import PlantCareTips from "../components/PlantCareTips";

const Home = () => {
  const plants = useLoaderData();
  console.log(plants);

  

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Header */}
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mt-6 mb-10 text-green-500">
        New Plants
      </h1>

      {/* New Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {plants?.map((plant) => (
          <NewPlants key={plant._id} plant={plant} />
        ))}
      </div>

      {/* Gallery Section */}
      <section className="mb-16">
        <Gallery />
      </section>

      {/* Plant Care Tips Section */}
      <section className="mb-16">
        <PlantCareTips />
      </section>

      {/* Fun Facts Section */}
      <section className="mb-16">
        <FunPlantFacts />
      </section>

      

      {/* About Website Section */}
      <section className="mb-16">
        <AboutWebsite />
      </section>
    </div>
  );
};

export default Home;

// final commit