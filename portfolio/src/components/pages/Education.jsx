import React from 'react'

export default function Education({isDark}) {

    const education = [
        {
            degree: 'Bachelor of Technology in Computer Science and Engineering',
            school: 'RashtraKavi Ramdhari Singh Dinkar College of Engineering, Begusarai',
            period: '2019 - 2023',
            marks: '7.87 CGPA',
            description: 'Focused on software engineering and web development technologies.'
        },
        {
            degree: 'Higher Secondary',
            school: 'Sri Shankar College, Sasaram',
            period: '2019',
            marks: '77.2%',
            // description: 'Intensive program covering modern web development stack and best practices.'
        }
    ];
    return (
        <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
            <div className="space-y-8">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h4 className="text-xl font-bold text-purple-500">{edu.degree}</h4>
                            <span className="text-gray-500 dark:text-gray-400">{edu.period}</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h5 className="text-lg font-semibold mb-2">{edu.school}</h5>
                            {edu.marks && <span className="text-gray-500 dark:text-gray-400">{edu.marks}</span>}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}