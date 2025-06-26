import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaHome,
  FaBox,
  FaHistory,
  FaMapMarkedAlt,
  FaUserEdit,
} from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  // Active link style helper
  const activeClass = "bg-indigo-100 text-indigo-700 font-semibold rounded-md";

  return (
    <div className="drawer  lg:drawer-open min-h-screen">
      {/* Drawer toggle checkbox */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      
      {/* Main content area */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <Navbar />

        {/* Mobile navbar for drawer toggle */}
        <div className="navbar bg-green-500  lg:hidden shadow-md">
          <div className="flex-none">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
              aria-label="Open sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 text-xl font-bold">Dashboard</div>
        </div>

        {/* Render nested routes */}
        <main className="p-6 bg-base-100 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side bg-green-500 border-r border-gray-300">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <nav className="menu p-4 w-72 text-base-content flex flex-col gap-3">
          <div className="mb-6 px-4">
            <h2 className="text-2xl font-bold text-green-800">Green Nest</h2>
            <p className="text-sm text-gray-500 mt-1">
              Logged in as <span className="font-semibold">{user?.displayName}</span>
            </p>
          </div>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 hover:bg-indigo-50 hover:text-black rounded-md ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/dashboard/add-plants"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md flex items-center gap-3 hover:bg-indigo-50 hover:text-black ${
                isActive ? activeClass : ""
              }`
            }
          >
            Add Plants
          </NavLink>

          <NavLink
            to={`/dashboard/my-plants/${user?.email}`}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md flex items-center gap-3 hover:bg-indigo-50 hover:text-black ${
                isActive ? activeClass : ""
              }`
            }
          >
            My Plants
          </NavLink>

          {/* Uncomment & customize below links when needed */}
          {/* 
          <NavLink
            to="/dashboard/myParcels"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md flex items-center gap-3 hover:bg-indigo-50 ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaBox /> My Parcels
          </NavLink>

          <NavLink
            to="/dashboard/paymentHistory"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md flex items-center gap-3 hover:bg-indigo-50 ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaHistory /> Payment History
          </NavLink>

          <NavLink
            to="/dashboard/track"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md flex items-center gap-3 hover:bg-indigo-50 ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaMapMarkedAlt /> Track a Package
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md flex items-center gap-3 hover:bg-indigo-50 ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaUserEdit /> Update Profile
          </NavLink> 
          */}
        </nav>
      </div>
    </div>
  );
};

export default DashboardLayout;
