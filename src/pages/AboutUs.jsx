import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
    <Navbar></Navbar>
        <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-md shadow-md mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-500">
        About Us
      </h1>

      <p className="text-lg leading-relaxed mb-4">
        Welcome to our Green Nest app! We are passionate about helping plant
        lovers care for their green friends effectively. Our mission is to
        provide you with an easy-to-use platform to track, manage, and nurture
        your plants with the right care and watering schedules.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Whether you are a beginner or an expert gardener, our app offers
        features tailored to help you keep your plants healthy and thriving.
        From tracking watering frequency to monitoring health status, we aim to
        simplify your gardening experience.
      </p>

      <p className="text-lg leading-relaxed">
        Thank you for trusting us with your plants. Let’s grow together!
      </p>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        <p className="text-md">
          Arnab Biswas - Founder & Developer & Designer <br />
          Joytu Biswas - Marketing
        </p>
      </div>
    </div>

    <Footer></Footer>
    </div>
  );
};

export default AboutUs;
