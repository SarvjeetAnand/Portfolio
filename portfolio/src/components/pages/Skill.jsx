import React from 'react'
import { Code, Database, Globe } from 'lucide-react';


export default function Skill({isDark}) {

    const skills = [
        { name: 'JavaScript', level: 90, icon: Code },
        { name: 'Python', level: 95, icon: Code },
        { name: 'React', level: 85, icon: Code },
        { name: 'Node.js', level: 80, icon: Database },
        { name: 'MongoDB', level: 70, icon: Database },
        { name: 'SQL', level: 70, icon: Database },
        { name: 'Express.js', level: 82, icon: Globe },
        { name: 'JWT', level: 75, icon: Globe },

    ];
    return (
        <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Key Skills</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center mb-4">
                            <skill.icon className="text-blue-500 mr-3" size={24} />
                            <span className="font-semibold">{skill.name}</span>
                        </div>
                        <div className={`w-full bg-gray-400 dark:bg-gray-600 rounded-full h-2`}>
                            <div
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">{skill.level}%</span>
                    </div>
                ))}
            </div>
        </div>
    )
}