import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Nike-Clone",
      description: "A full-stack clone of Nike website using MERN stack with user authentication, product management, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Roopesh-Rajan/Nike_Clone.git",
      live: "https://nikeclone-frontenddeploy-git-master-roopesh-rajans-projects.vercel.app/"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/Roopesh-Rajan/ToDOapp.git",
      live: "https://to-do-app-roopesh-rajans-projects.vercel.app/"
    },
    {
      title: "Blog Application",
      description: "A simple blog application with user authentication and CRUD operations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Roopesh-Rajan/blog-backend.git",
      github: "https://github.com/Roopesh-Rajan/blog-frontend.git",
      live: "https://blogdeployfrontend-git-master-roopesh-rajans-projects.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-100 to-gray-400">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
