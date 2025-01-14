import React from "react";

const Infocard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-16 p-8 bg-gray-100">
      {/* Open Hours */}
      <div className="w-80 text-center bg-white shadow-md rounded-lg border border-gray-300">
        <div className="flex justify-center items-center gap-2 bg-gray-100 p-4 rounded-t-lg border-b">
          <span className="text-2xl text-gray-700">
            <i className="fas fa-clock"></i>
          </span>
          <h3 className="text-lg font-semibold">Open Hours</h3>
        </div>
        <div className="p-6">
          <p className="text-lg font-medium">Saturday – Friday</p>
          <p className="text-gray-600">12:01 PM – 11:00 PM</p>
        </div>
      </div>

      {/* Online Reservations */}
      <div className="w-80 text-center bg-white shadow-md rounded-lg border border-gray-300">
        <div className="flex justify-center items-center gap-2 bg-gray-100 p-4 rounded-t-lg border-b">
          <span className="text-2xl text-gray-700">
            <i className="fas fa-calendar-check"></i>
          </span>
          <h3 className="text-lg font-semibold">Make Online Reservations</h3>
        </div>
        <div className="p-6">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
