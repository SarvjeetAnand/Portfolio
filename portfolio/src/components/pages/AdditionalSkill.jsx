import { React, useState } from 'react'
import { Code, Palette, Globe, ChevronDown, ChevronUp } from 'lucide-react';

export default function AdditionalSkill({isDark}) {
    const [expandedSkillCategories, setExpandedSkillCategories] = useState({});
    const toggleSkillCategory = (category) => {
        setExpandedSkillCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };


    const skillCategories = [
        {
            category: 'Additional Skills',
            icon: Code,
            color: 'from-color-500 to-color-600',
            skills: [
                { name: 'Java', level: 65, icon: Code },
                { name: 'C&C++', level: 80, icon: Code },
                { name: 'HTML', level: 95, icon: Code },
                { name: 'CSS', level: 80, icon: Palette },
                { name: 'Tailwind', level: 88, icon: Palette },
                { name: 'Bootstrap', level: 90, icon: Palette },
                { name: 'jQuery', level: 75, icon: Code },
                { name: 'Redux', level: 65, icon: Code },
                { name: 'Git', level: 85, icon: Code },
                { name: 'AJAX', level: 75, icon: Globe },
                { name: 'DSA', level: 80, icon: Code },
                { name: 'TCP/IP', level: 80, icon: Globe },
            ],
        }
    ];



    return (
        <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Detailed Skills & Expertise</h3>
            <div className="space-y-6">
                {skillCategories.map((category) => (
                    <div
                        key={category.category}
                        className={`rounded-xl overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                        {/* Category Header */}
                        <button
                            onClick={() => toggleSkillCategory(category.category)}
                            className={`w-full p-6 flex items-center justify-between hover:bg-opacity-80 transition-all duration-300 bg-gradient-to-r ${category.color}`}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <category.icon className="text-blue-600 dark:text-white" size={24} />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-xl font-bold text-gray-600 dark:text-white">
                                        {category.category}
                                    </h4>
                                    <p className="text-blue-400 dark:text-white/80 text-sm">
                                        {category.skills.length} skills
                                    </p>
                                </div>
                            </div>
                            <div className="text-blue-600 dark:text-white">
                                {expandedSkillCategories[category.category] ? (
                                    <ChevronUp size={24} />
                                ) : (
                                    <ChevronDown size={24} />
                                )}
                            </div>
                        </button>

                        {/* Collapsible Content */}
                        <div
                            className={`transition-all duration-500 ease-in-out ${expandedSkillCategories[category.category]
                                ? 'max-h-[1000px] opacity-100'
                                : 'max-h-0 opacity-0'
                                } overflow-hidden`}
                        >
                            {/* Scrollable wrapper - vertical scroll on mobile, grid on larger screens */}
                            <div className="w-full overflow-y-auto max-h-[400px] md:overflow-y-visible md:max-h-none">
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4 px-4 pb-4">
                                    {category.skills.map((skill, index) => (
                                        <div
                                            key={skill.name}
                                            className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'
                                                } hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="flex items-center mb-4">
                                                <skill.icon className="text-blue-500 mr-3" size={24} />
                                                <span className="font-semibold text-sm">{skill.name}</span>
                                            </div>
                                            <div className="w-full bg-gray-400 dark:bg-gray-600 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">
                                                {skill.level}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}