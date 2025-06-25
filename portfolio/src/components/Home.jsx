import React from 'react'
import TypedText from '../components/TypedText';
import img from '../assest/Home.png'

export default function Home({ scrollToSection, isDark, isVisible, ChevronDown }) {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Profile Image */}
                    <div className="relative mb-8 inline-block">
                        <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
                            <div className={`w-full h-full rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center`}>
                                <div><img src={img} alt="" /></div>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-pulse">
                        Sarvjeet Kumar Anand
                    </h1>

                    <h2 className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300">
                        <TypedText strings={['Mern Stack Developer', 'Full Stack Developer', 'Freelancer']} />
                    </h2>

                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        Passionate about creating beautiful, functional web applications that solve real-world problems.
                        I love turning ideas into digital experiences that users enjoy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            Learn More About Me
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 ${isDark ? 'hover:bg-blue-500' : ''
                                }`}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown size={32} className="text-gray-400" />
                </div>
            </div>
        </section>
    )
}