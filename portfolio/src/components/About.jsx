import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Skill from './pages/Skill';
import Education from './pages/Education';
import AdditionalSkill from './pages/AdditionalSkill';
import Experience from './pages/Experience';
import Project from './pages/Project';

export default function About({scrollToSection, isDark, isVisible}) {
    return (
        <section id="about" className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail className="text-blue-500" size={20} />
                                    <span>sarvjeet31072002@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="text-blue-500" size={20} />
                                    <span>+91 6205340146</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="text-blue-500" size={20} />
                                    <span>Gurugram, India</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Github className="text-blue-500" size={20} />
                                    <a href='https://github.com/SarvjeetAnand' className='hover:text-blue-500'>Github</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Linkedin className="text-blue-500" size={20} />
                                    <a href='https://www.linkedin.com/in/sarvjeet31/' className='hover:text-blue-500'>Linkedin</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-center mb-6">About</h3>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                                As a Full Stack Developer, I am proficient in both front-end and back-end technologies, allowing me to build and maintain complete web applications. On the front end, I work with languages like HTML, CSS, JavaScript, and frameworks such as ReactJS or Angular to create engaging, responsive user interfaces. On the back end, I am skilled in server-side languages such as Node.js or Python, and databases like MySQL or MongoDB, ensuring smooth data handling and server communication.
                            </p>
                        </div>
                    </div>

                    {/* Skills */}
                    <Skill isDark={isDark} />

                    {/* Detailed Skills with Collapse */}
                    <AdditionalSkill isDark={isDark} />

                    {/* Experience */}
                    <Experience isDark={isDark} />

                    {/* Education */}
                    <Education isDark={isDark} />

                    {/* Projects */}
                    <Project scrollToSection={scrollToSection} isVisible={isVisible} isDark={isDark}/>
                </div>
            </div>
        </section>
    )
}