import React from "react";
import SupportSection from "../components/SupportSection";
import Testimonial from "../components/Testimonial";
import Signin from "../components/Signin";
import Issues from "../components/Issues";
import Doctor from "../components/Doctor";

const heroImage = "https://via.placeholder.com/1500x600?text=Hero+Image"; 
const featureImage1 = "https://via.placeholder.com/400x300?text=Feature+1"; 
const featureImage2 = "https://via.placeholder.com/400x300?text=Feature+2"; 
const featureImage3 = "https://via.placeholder.com/400x300?text=Feature+3"; 

function MainPage() {
  return (
    <div>
    
      <section className="relative bg-blue-700 text-white py-24 px-6">
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Empower Your Wellness Journey
          </h1>
          <p className="text-lg mb-8">
            Access valuable resources and support for mental and private
            wellness, designed to fit your unique needs.
          </p>
          <a
            href="#get-started"
            className="bg-yellow-500 text-blue-700 py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out text-lg font-semibold"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img
                src={featureImage1}
                alt="Feature 1"
                className="w-full h-48 object-cover mb-6 rounded-t-lg"
              />
              <h3 className="text-2xl font-semibold mb-4">
                Personalized Wellness Plans
              </h3>
              <p>
                Custom plans to meet your wellness goals with tailored support
                and resources.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img
                src={featureImage2}
                alt="Feature 2"
                className="w-full h-48 object-cover mb-6 rounded-t-lg"
              />
              <h3 className="text-2xl font-semibold mb-4">
                Expert Advice & Resources
              </h3>
              <p>
                Access a wealth of expert advice and up-to-date resources to
                guide your wellness journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img
                src={featureImage3}
                alt="Feature 3"
                className="w-full h-48 object-cover mb-6 rounded-t-lg"
              />
              <h3 className="text-2xl font-semibold mb-4">Community Support</h3>
              <p>
                Join a supportive community and connect with others on the same
                path.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SupportSection/>
      <Issues/>
      <Doctor/>
      <Testimonial/>
      <Signin/>
      
    </div>
  );
}

export default MainPage;
