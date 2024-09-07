import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <section className="bg-gray-200 py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Users Say</h2>
        <Slider {...settings} className="px-4">
         
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105">
            <p className="italic text-lg mb-4 text-gray-700">
              "This platform has made a significant difference in my mental health journey. The support and resources are top-notch."
            </p>
            <p className="font-semibold text-lg text-gray-900">John Doe</p>
            <p className="text-gray-600">Software Engineer</p>
          </div>
         
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105">
            <p className="italic text-lg mb-4 text-gray-700">
              "Invaluable resources and a supportive community—highly recommend! It's a game-changer for anyone seeking help."
            </p>
            <p className="font-semibold text-lg text-gray-900">Jane Smith</p>
            <p className="text-gray-600">Content Creator</p>
          </div>
      
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105">
            <p className="italic text-lg mb-4 text-gray-700">
              "The expert advice and personalized support have been incredibly beneficial. This platform truly cares about its users."
            </p>
            <p className="font-semibold text-lg text-gray-900">Alice Johnson</p>
            <p className="text-gray-600">Freelance Writer</p>
          </div>
         
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105">
            <p className="italic text-lg mb-4 text-gray-700">
              "An amazing platform with a wealth of information and a compassionate community. I feel more confident in my journey."
            </p>
            <p className="font-semibold text-lg text-gray-900">Robert Brown</p>
            <p className="text-gray-600">Digital Marketer</p>
          </div>
       
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105">
            <p className="italic text-lg mb-4 text-gray-700">
              "The user interface is friendly, and the customer support is exceptional. Highly recommend for anyone looking to improve their well-being."
            </p>
            <p className="font-semibold text-lg text-gray-900">Emily Davis</p>
            <p className="text-gray-600">Product Manager</p>
          </div>
      
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105">
            <p className="italic text-lg mb-4 text-gray-700">
              "A fantastic resource with easy-to-understand information. I’ve gained valuable insights and support through this platform."
            </p>
            <p className="font-semibold text-lg text-gray-900">Michael Wilson</p>
            <p className="text-gray-600">Entrepreneur</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
