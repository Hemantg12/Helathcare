import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaUserFriends,
  FaPhoneAlt,
  FaSearch,
  FaUser,
  FaBars,
  FaPlusCircle,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    if (!showProfile) {
      // Prevent background from scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Allow background to scroll
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header className="bg-cyan-600 text-white p-4 flex justify-between items-center relative">
      <div className="flex items-center">
        <div className="flex items-center mr-8">
          <FaPlusCircle className="text-green-500 text-2xl" />
          <span className="text-2xl font-bold ml-2">HealthPlix</span>
        </div>
        <nav className="flex">
          <ul className="flex list-none p-0">
            <li className="mr-8 flex items-center">
              <FaCalendarAlt className="text-white mr-2" />
              <Link>Appointments</Link>
            </li>
            <li className="mr-8 flex items-center">
              <FaUserFriends className="text-white mr-2" />
              <Link>Consultations</Link>
            </li>
            <li className="mr-8">
              <Link>
                <select className="bg-cyan-600 text-white">
                  <option hidden selected disabled>
                    Options
                  </option>
                  <option>Preferences</option>
                  <option value="">Rx Groups</option>
                  <option value="">Custom templates</option>
                  <option value="">Prescription templates</option>
                  <option value="">Medicines Ignored</option>
                  <option value="">Complaints remembered</option>
                  <option value="">Diagnosis remembered</option>
                  <option value="">Notes remembered</option>
                  <option value="">Medicines Library</option>
                  <option value="">Medicines Database</option>
                  <option value="">Custom Translation</option>
                  <option value="">Chat</option>
                </select>
              </Link>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-white mr-2" />
              <Link>Online Consultations</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-x-2">
        <FaUser className="text-white mr-2" />
        <input
          type="text"
          placeholder="Search patient "
          className="input input-bordered input-sm input-secondary w-full max-w-xs text-black"
        />
        <FaSearch className="text-white mr-4 size-7" />
        <FaBars className="text-white mr-4 size-7" />
        <CgProfile
          className="mx-5 size-9 cursor-pointer"
          onClick={handleProfileClick}
        />
        {showProfile && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

            {/* Profile Modal */}
            <div className="fixed top-12 right-0 bg-white rounded-lg shadow-lg p-6 w-64 bg-gradient-to-r from-blue-500 to-blue-700 text-white z-50">
              <div className="flex items-center mb-4">
                <CgProfile className="text-4xl mr-4 cursor-pointer text-white" />
                <div className="leading-tight">
                  <h2 className="text-xl font-bold">Dr Pankaj Magar</h2>
                  <h3 className="text-sm font-semibold">Role: Doctor</h3>
                </div>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/profile"
                    className="block bg-blue-600 hover:bg-blue-800 text-white text-center py-2 px-4 rounded transition duration-200 ease-in-out"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="block bg-blue-600 hover:bg-blue-800 text-white text-center py-2 px-4 rounded transition duration-200 ease-in-out"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block bg-red-600 hover:bg-red-800 text-white text-center py-2 px-4 rounded transition duration-200 ease-in-out"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
