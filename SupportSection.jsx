import React, { useState } from 'react';

const SupportSection = () => {

  const [selectedRole, setSelectedRole] = useState(null);


  const maleTopics = [
    { title: 'Heart Health', link: '#' },
    { title: 'Mental Wellness', link: '#' },
    { title: 'Prostate Health', link: '#' },
    { title: 'Physical Fitness', link: '#' },
  ];

  const expertTopics = [
    { title: 'Research & Studies', link: '#' },
    { title: 'Medical Resources', link: '#' },
    { title: 'Consultation Tools', link: '#' },
    { title: 'Professional Networking', link: '#' },
  ];

  return (
    <section className="py-10 bg-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How Can We Support You?</h2>
        <p className="text-lg text-gray-600 mb-8">
          We know these issues can be tough to discuss, but you're not alone. Our experts are here to help you find the solutions you need.
        </p>

        <div className="mb-8">
          <button
            className={`py-2 px-6 rounded-lg shadow-md mx-2 ${
              selectedRole === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedRole('male')}
          >
            I'm a Male
          </button>
          <button
            className={`py-2 px-6 rounded-lg shadow-md mx-2 ${
              selectedRole === 'expert' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedRole('expert')}
          >
            I'm an Expert
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedRole === 'male' &&
            maleTopics.map((topic, index) => (
              <div
                key={index}
                className="border-2 border-gray-300 flex flex-col justify-center items-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h1 className="text-xl font-semibold text-gray-800 mb-2">{topic.title}</h1>
                <a href={topic.link} className="text-blue-500 hover:text-blue-600">
                  View Details
                </a>
              </div>
            ))}

          {selectedRole === 'expert' &&
            expertTopics.map((topic, index) => (
              <div
                key={index}
                className="border-2 border-gray-300 flex flex-col justify-center items-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h1 className="text-xl font-semibold text-gray-800 mb-2">{topic.title}</h1>
                <a href={topic.link} className="text-blue-500 hover:text-blue-600">
                  View Details
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
