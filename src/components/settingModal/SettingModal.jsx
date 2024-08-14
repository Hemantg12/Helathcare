import React, { useState } from "react";

function SettingModal() {
  const [consultationFee, setConsultationFee] = useState(700);
  const [slotDuration, setSlotDuration] = useState(20);
  const [freeFollowUp, setFreeFollowUp] = useState(0);
  const [sameTimingsForAllDays, setSameTimingsForAllDays] = useState(false);
  const [timings, setTimings] = useState({
    monday: { morning: "", afternoon: { start: 1800, end: 2000 } },
    tuesday: { morning: "", afternoon: { start: 1800, end: 2000 } },
    wednesday: { morning: "", afternoon: { start: 1800, end: 2000 } },
    thursday: { morning: "", afternoon: { start: 1800, end: 2000 } },
    friday: { morning: "", afternoon: { start: 1800, end: 2000 } },
    saturday: { morning: "", afternoon: { start: 1800, end: 2000 } },
    sunday: { morning: "", afternoon: { start: 1800, end: 2000 } },
  });

  const handleConsultationFeeChange = (e) => {
    setConsultationFee(parseInt(e.target.value, 10));
  };

  const handleSlotDurationChange = (e) => {
    setSlotDuration(parseInt(e.target.value, 10));
  };

  const handleFreeFollowUpChange = (e) => {
    setFreeFollowUp(parseInt(e.target.value, 10));
  };

  const handleSameTimingsForAllDaysChange = (e) => {
    setSameTimingsForAllDays(e.target.checked);
  };

  const handleTimingChange = (day, session, value, type) => {
    setTimings((prevTimings) => ({
      ...prevTimings,
      [day]: {
        ...prevTimings[day],
        [session]: {
          ...prevTimings[day][session],
          [type]: value,
        },
      },
    }));
  };

  const saveConfigurationDetails = () => {
    console.log("Saving configuration details:", {
      consultationFee,
      slotDuration,
      freeFollowUp,
      sameTimingsForAllDays,
      timings,
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-3xl mx-auto mt-10 max-h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Online Consultation Settings
      </h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <label htmlFor="consultationFee" className="font-medium text-lg">
            Consultation Fee:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="consultationFee"
              value={consultationFee}
              onChange={handleConsultationFeeChange}
              className="border rounded-lg px-4 py-2 w-24 text-gray-700"
            />
            <span className="ml-2 text-lg font-semibold">₹</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="slotDuration" className="font-medium text-lg">
            Slot Duration:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="slotDuration"
              value={slotDuration}
              onChange={handleSlotDurationChange}
              className="border rounded-lg px-4 py-2 w-24 text-gray-700"
            />
            <span className="ml-2 text-lg font-semibold">Minutes</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="freeFollowUp" className="font-medium text-lg">
            Free Follow Up:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="freeFollowUp"
              value={freeFollowUp}
              onChange={handleFreeFollowUpChange}
              className="border rounded-lg px-4 py-2 w-24 text-gray-700"
            />
            <span className="ml-2 text-lg font-semibold">Per Day</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
        Consultation Timings
      </h2>

      <div className="mb-6">
        <input
          type="checkbox"
          id="sameTimingsForAllDays"
          checked={sameTimingsForAllDays}
          onChange={handleSameTimingsForAllDaysChange}
          className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor="sameTimingsForAllDays"
          className="font-medium text-lg text-gray-800"
        >
          Same timings for all days
        </label>
      </div>

      <div className="space-y-12">
        {" "}
        {/* Increased gap here */}
        <div className="grid grid-cols-3 gap-6 font-medium text-lg text-gray-700">
          <div>Day</div>
          <div>Morning Session</div>
          <div>Afternoon Session</div>
        </div>
        {Object.keys(timings).map((day) => (
          <div key={day} className="grid grid-cols-3 gap-6 items-center">
            <div className="capitalize font-semibold text-gray-700">{day}</div>
            <div className="flex items-center space-x-6">
              {" "}
              {/* Increased space between inputs */}
              <input
                type="time"
                value={timings[day].morning}
                onChange={(e) =>
                  handleTimingChange(day, "morning", e.target.value, "start")
                }
                className="border rounded-lg px-4 py-2 w-full text-gray-700"
              />
              <span>to</span>
              <input
                type="time"
                value={timings[day].morning}
                onChange={(e) =>
                  handleTimingChange(day, "morning", e.target.value, "end")
                }
                className="border rounded-lg px-4 py-2 w-full text-gray-700 pr-5 m-5"
              />
            </div>
            <div className="flex items-center space-x-6">
              {" "}
              {/* Increased space between inputs */}
              <input
                type="time"
                value={`${timings[day].afternoon.start
                  .toString()
                  .padStart(2, "0")}:${timings[day].afternoon.end
                  .toString()
                  .padStart(2, "0")}`}
                onChange={(e) =>
                  handleTimingChange(
                    day,
                    "afternoon",
                    parseInt(e.target.value.substring(0, 2), 10) * 100 +
                      parseInt(e.target.value.substring(3, 5), 10),
                    "start"
                  )
                }
                className="border rounded-lg px-4 py-2 w-full text-gray-700"
              />
              <span>to</span>
              <input
                type="time"
                value={`${timings[day].afternoon.end
                  .toString()
                  .padStart(2, "0")}:${timings[day].afternoon.end
                  .toString()
                  .padStart(2, "0")}`}
                onChange={(e) =>
                  handleTimingChange(
                    day,
                    "afternoon",
                    parseInt(e.target.value.substring(0, 2), 10) * 100 +
                      parseInt(e.target.value.substring(3, 5), 10),
                    "end"
                  )
                }
                className="border rounded-lg px-4 py-2 w-full text-gray-700"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={saveConfigurationDetails}
        className="bg-blue-600 text-white font-semibold text-lg mt-8 py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Save Configuration Details
      </button>
    </div>
  );
}

export default SettingModal;
