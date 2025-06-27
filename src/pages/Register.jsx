import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Register = () => {
  const [nameError, setNameError] = useState("");
  const { createUser, setUser, updateUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    if (name.length < 4) {
      toast.error("Name should be more than 4 characters");
      return;
    } else {
      setNameError("");
    }

    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Registered successfully");

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setUser(user);
            toast.error(error.message || "Update profile failed");
          });

        navigate("/");
      })
      .catch((error) => {
        setNameError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="card w-full max-w-sm bg-white shadow-xl p-6 rounded-xl border border-green-100"
      >
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Register now!
        </h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <label className="label text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Name"
          />

          <label className="label text-sm font-semibold text-gray-700">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            className="input input-bordered w-full"
            placeholder="Photo URL"
          />

          <label className="label text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Email"
          />

          <label className="label text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            minLength={8}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be at least 8 characters and include number, lowercase and uppercase letters"
            className="input input-bordered w-full"
            placeholder="Password"
          />

          {/* Show name error */}
          {nameError && (
            <p className="text-xs text-red-600 text-center">{nameError}</p>
          )}

          <button type="submit" className="btn btn-success w-full mt-4">
            Register
          </button>

          <p className="font-semibold text-center pt-5">
            Already have an account? Please{" "}
            <Link className="text-blue-600" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
