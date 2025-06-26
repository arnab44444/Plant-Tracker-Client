const AboutWebsite = () => {
  return (
    <section className="my-12 px-4 max-w-7xl mx-auto">
              <h2 className="my-5 text-center text-2xl sm:text-3xl font-bold text-green-700">About This Website</h2>

      <div className="card bg-base-100 shadow-md border border-gray-200">
        <div className="card-body">
          <p className="text-sm sm:text-base mt-2">
            Welcome to <span className="font-semibold text-green-600">Green Nest</span>! This website helps you keep track of your plant collection with ease. You can add new plants, view watering schedules, monitor plant health, and get helpful tips to take care of your green friends.
          </p>
          <p className="text-sm sm:text-base mt-2">
            Whether you're a beginner or a plant lover, Plant Tracker keeps everything organized so your plants stay happy and healthy!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutWebsite;