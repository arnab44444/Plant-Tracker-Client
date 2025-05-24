const PlantCareTips = () => {
  const tips = [
    {
      title: "Water Wisely",
      description: "Overwatering is worse than underwatering. Check soil moisture before watering."
    },
    {
      title: "Right Light",
      description: "Place your plant where it gets the light it needs—sunny for succulents, shady for ferns."
    },
    {
      title: "Clean the Leaves",
      description: "Wipe leaves with a damp cloth to remove dust and help the plant breathe."
    },
    {
      title: "Use Drainage Pots",
      description: "Make sure your pot has a hole at the bottom so extra water can drain out."
    },
    {
      title: "Rotate Your Plants",
      description: "Turn your plants occasionally so all sides get equal light and grow evenly."
    },
    {
      title: "Watch for Pests",
      description: "Check for insects or spots on leaves, and treat with natural pest control if needed."
    }
  ];

  return (
    <section className="my-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-6">Plant Care Tips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="card bg-base-100 shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
            <div className="card-body">
              <h3 className="card-title text-green-600">{tip.title}</h3>
              <p className="text-sm ">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareTips;