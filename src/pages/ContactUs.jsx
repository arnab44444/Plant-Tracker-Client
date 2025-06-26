import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For demo purpose:
    setStatus("Thank you for contacting us. We will get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-md shadow-md my-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-500">
          Contact Us
        </h1>

        <p className="mb-6 text-center">
          Have questions or want to get in touch? Fill out the form below or
          email us directly at{" "}
          <a
            href="mailto:arnabbiswas661@gmail.com"
            className="text-indigo-300 underline"
          >
            arnabbiswas661@gmail.com
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full input input-bordered"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full input input-bordered"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Subject</label>
            <input
              required
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full input input-bordered"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              required
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full textarea textarea-bordered"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-indigo w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-6 text-green-600 font-semibold text-center">
            {status}
          </p>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
