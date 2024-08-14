// import React from "react";
// import { CiSettings } from "react-icons/ci";
// import { FaUpload } from "react-icons/fa";
// import { FaTableCells } from "react-icons/fa6";
// const Herosection = () => {
//   return (
//     <div className="flex gap-6 items-center h-[60px] border-b-2 border border-b-slate-400  ">
//       <div className="h-[30px] w-[13%]">
//         <input
//           type="datetime-local"
//           id="Test_DatetimeLocal"
//           className="block w-full p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
//         />
//       </div>
//       <div className="w-[56%]">
//         Total:{10} Pending:{2} Complete:{8}
//       </div>
//       <div className="mx-4 bg-slate-100 flex  justify-center items-center gap-3 ml-2 hover:bg-slate-200 hover  hover:cursor-pointer transition duration-1000 ease-in hover:font-extralight ">
//         <div>
//           <FaUpload />
//         </div>
//         <p> Upload Patient List</p>
//       </div>
//       <div className="bg-slate-100 flex gap-2 justify-center items-center  hover:bg-slate-200 hover  hover:cursor-pointer transition duration-1000 ease-in hover:font-light">
//         <div>
//           <FaTableCells />
//         </div>
//         <p>View Reports</p>
//       </div>
//       <div className="flex items-center ml-5 bg-slate-200">
//         <CiSettings />
//       </div>
//     </div>
//   );
// };

// export default Herosection;

import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaUpload } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import SettingModal from "../settingModal/settingModal";
const Herosection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSettingsClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative flex gap-6 items-center h-[60px] border-b-2 border border-b-slate-400  ">
      <div className="h-[30px] w-[13%]">
        <input
          type="datetime-local"
          id="Test_DatetimeLocal"
          className="block w-full p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
        />
      </div>
      <div className="w-[56%]">
        Total:{10} Pending:{2} Complete:{8}
      </div>
      <div className="mx-4 bg-slate-100 flex  justify-center items-center gap-3 ml-2 hover:bg-slate-200 hover  hover:cursor-pointer transition duration-1000 ease-in hover:font-extralight ">
        <div>
          <FaUpload />
        </div>
        <p> Upload Patient List</p>
      </div>
      <div className="bg-slate-100 flex gap-2 justify-center items-center  hover:bg-slate-200 hover  hover:cursor-pointer transition duration-1000 ease-in hover:font-light">
        <div>
          <FaTableCells />
        </div>
        <p>View Reports</p>
      </div>
      <div
        className="flex items-center ml-5 bg-slate-200 cursor-pointer"
        onClick={handleSettingsClick}
      >
        <CiSettings />
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-full"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on click inside
          >
            <h2 className="text-lg font-bold mb-4">Settings</h2>
            {<SettingModal />}
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Herosection;
