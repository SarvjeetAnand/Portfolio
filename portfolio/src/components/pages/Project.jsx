import React from 'react'

import { Github, ExternalLink } from 'lucide-react';

export default function Project({isDark, isVisible, scrollToSection}) {

    const projects = [
        {
            title: 'CodeFlow',
            description: 'A full-stack, AI-integrated code converter tool that allows users to visually transform code between programming languages. The platform features a unique drag-and-connect interface built with ReactFlow, enabling users to:',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap', 'ReactFlow',],
            image: '🧑‍💻',
            // liveUrl: 'https://ecommerce-demo.com',
            githubUrl: 'https://github.com/SarvjeetAnand/CodeFlow',
            featured: true
        },
        {
            title: 'Hotel Booking Management App',
            description: 'Developed a full-stack hotel booking management app with distinct admin and user portals using the MERN stack, implementing JWT-based authentication and role-based authorization, and engineered RESTful APIs for room inventory and reservation management with backend validation.',
            technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'CSS3', 'JWT'],
            image: '🏨',
            // liveUrl: 'https://taskmanager-demo.com',
            githubUrl: 'https://github.com/SarvjeetAnand/HotelBookingSystem',
            featured: true
        },
        {
            title: 'Weather Dashboard',
            description: 'Interactive weather dashboard with location-based forecasts, weather maps, and historical data visualization.',
            technologies: ['React.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
            image: '🌤️',
            liveUrl: 'https://66c97c5ce850fc3555446308--sprightly-eclair-f6cbfc.netlify.app/',
            githubUrl: 'https://github.com/SarvjeetAnand/React_WeatherApp',
            featured: false
        },
        {
            title: 'Conference Management System',
            description: 'Developed a full-stack web application to manage conferences, enabling users to register/login, view upcoming events, and submit feedback. Integrated a separate admin panel for managing conference details, user registrations, and moderating feedback. Built secure authentication using JWT and connected both user and admin apps to a shared Express.js backend with MongoDB for data persistence. Designed responsive UI using plain CSS.',
            technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'CSS3', 'JWT'],
            image: '🤝',
            // liveUrl: 'https://social-dashboard-demo.com',
            githubUrl: 'https://github.com/SarvjeetAnand/Conference_Hub',
            featured: false
        },
        {
            title: 'Expense Tracker',
            description: 'Developed a responsive expense management application, featuringexpense/income tracking, budgeting tools, and a data-rich dashboard. Implemented dynamic data visualization with Chart.js, searchable history with CSV export, and a mobile-responsive UI(Bootstrap), supported by a scalable backend with robust CRUD operations.',
            technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Chart.js', 'Bootstrap'],
            image: '💰',
            // liveUrl: 'https://crypto-tracker-demo.com',
            githubUrl: 'https://github.com/SarvjeetAnand/ExpenseTracker',
            featured: true
        },
        {
            title: 'ChatBot',
            description: 'Built a full-stack chatbot application that enables users to query product and supplier information using natural language.',
            technologies: ['React.js', 'Tailwind CSS', 'FastAPI', 'LangGraph', 'MySQL',],
            image: '🤖ིྀ',
            // liveUrl: 'https://recipe-sharing-demo.com',
            githubUrl: 'https://github.com/SarvjeetAnand/ChatBot',
            featured: false
        }
    ];

    return (
        <section id="projects" className="py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        My Projects
                    </h2>

                    {/* Featured Projects */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.filter(project => project.featured).map((project, index) => (
                                <div
                                    key={index}
                                    className={`group relative overflow-hidden rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
                                >
                                    {/* Project Image/Icon */}
                                    <div className={`h-48 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
                                        {project.image}
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <h4 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className={`px-3 py-1 text-xs rounded-full ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Project Links */}
                                        <div className="flex space-x-4">
                                            {/* <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Live Demo</span>
                        </a> */}
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                                            >
                                                <Github size={16} />
                                                <span className="text-sm">Code</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* All Projects */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.filter(project => !project.featured).map((project, index) => (
                                <div
                                    key={index}
                                    className={`group relative overflow-hidden rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102`}
                                >
                                    {/* Project Image/Icon */}
                                    <div className={`h-32 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300`}>
                                        {project.image}
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-4">
                                        <h4 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className={`px-2 py-1 text-xs rounded ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 text-xs text-gray-500">+{project.technologies.length - 3}</span>
                                            )}
                                        </div>

                                        {/* Project Links */}
                                        <div className="flex space-x-3">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-1 text-blue-500 hover:text-blue-600 transition-colors duration-200"
                                            >
                                                <ExternalLink size={14} />
                                                <span className="text-xs">Demo</span>
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                                            >
                                                <Github size={14} />
                                                <span className="text-xs">Code</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Want to see more of my work or collaborate on a project?
                        </p>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            Let's Work Together
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}