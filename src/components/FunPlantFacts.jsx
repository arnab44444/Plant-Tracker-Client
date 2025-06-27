const FunPlantFacts = () => {
  const funFacts = [
    "Aloe Vera can survive weeks without water and still look fresh.",
    "Snake Plants release oxygen at night, making them great for bedrooms.",
    "Lavender is not only pretty but can reduce stress and help sleep.",
    "Ferns like humidity—perfect for bathrooms or kitchens.",
    "Spider Plants are safe for pets and help clean indoor air.",
    "Peace Lilies can bloom even in low light—nature's miracle!"
  ];

  return (
    <section className="my-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-400 mb-6">Fun Plant Facts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {funFacts.map((fact, index) => (
          <div key={index} className="card bg-base-100 shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
            <div className="card-body">
              <h3 className="card-title text-green-600">Fact #{index + 1}</h3>
              <p className="text-sm ">{fact}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunPlantFacts;