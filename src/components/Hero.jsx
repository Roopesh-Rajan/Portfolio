import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-100 to-gray-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm Roopesh Rajan
            </h1>
            <h2 className="text-2xl text-gray-700 mb-6">
              MERN Stack Developer | B.Tech in Mechanical Engineering
            </h2>
            <p className="text-gray-600 mb-8">
              Passionate about creating impactful web applications and bridging the gap between
              mechanical engineering and web development.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/dp.jpg"
              alt="Coding workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;