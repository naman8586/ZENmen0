import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="text-center mb-12">
        <p className="text-gray-600 text-lg mb-2">8 Million+ Physician Ratings & Reviews</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Find Your Doctor Near You
        </h1>
        <p className="text-gray-600 mb-8">
          Search for doctors by name, hospital, or city
        </p>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for a doctor, hospital, or city..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
          />
          <FontAwesomeIcon
            icon={faLocationDot}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Doctor;
