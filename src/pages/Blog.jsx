import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Take Care of Indoor Plants",
      description:
        "Indoor plants brighten up your space and purify the air. Learn how to water, repot, and maintain them properly for healthy growth.",
      image:
        "https://i.ibb.co/ch9DzBXq/low-maintenance-plants.png",
      date: "June 15, 2025",
    },
    {
      id: 2,
      title: "Top 5 Low Maintenance Plants for Beginners",
      description:
        "If you're new to gardening, start with easy plants like Snake Plant, ZZ Plant, or Pothos. They require very little care and still look great!",
      image:
        "https://i.ibb.co/YFzVTCVC/Allure-Beginner-Houseplants.jpg",
      date: "June 10, 2025",
    },
    {
      id: 3,
      title: "Best Watering Practices for Houseplants",
      description:
        "Overwatering is the #1 killer of houseplants. Know how often to water and how to check soil moisture the right way.",
      image:
        "https://i.ibb.co/svp9R3nv/how-to-water-houseplants-5651236-primary-3aa1e5b5021640ee96184b6755caa964.jpg",
      date: "June 1, 2025",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-base-100 py-5 px-4 md:px-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-green-500">
          🌿 Plant Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="card bg-base-200 shadow-xl">
              <figure>
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl text-green-600">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="text-base-content mt-2">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
