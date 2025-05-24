import React from 'react';

const eventImages = [
  'https://i.ibb.co/SDvMdn0X/SPR-variegated-peace-lily-domino-7097188-hero-A-422d7faa152d42d3a4030ff8a2a33768.jpg',
  'https://i.ibb.co/ZpyBbh8Y/Snake-Plant.jpg',
  'https://i.ibb.co/m5Pzyd0H/hello-hello-plants-adiantum-Adiantum-aethiopicum-maidenhair-fern-potted.jpg',
  'https://i.ibb.co/qLXYTWrX/Sensational-Lavender-12.jpg',
  'https://i.ibb.co/n8zyQHKY/Crassula-ovata-700.jpg',
  'https://i.ibb.co/RT2x5D0H/Blog-8-3.jpg',
  'https://i.ibb.co/qMw3XGrJ/Foxtail-Fern-Foliage-24155-1707488373.jpg',
  'https://i.ibb.co/gLWrPQxV/shutterstock-1662182848-min.jpg',
  'https://i.ibb.co/GQKbrV7J/aloe-vera-Getty-Images-1473547826-Header-1024x575.jpg',
  'https://i.ibb.co/8JCyk3x/r4j-Hh-HZk9-V9sh5jqs6p-M7-W-1200-80.jpg',
];

const Gallery = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-green-500 text-center mb-8">Plants Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {eventImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
