import React from 'react'

export default function Experience({isDark}) {

  const experiences = [
    {
      title: 'Junior Developer',
      company: 'Arrka Infosec Pvt. Ltd.',
      period: 'Sep. 2023 - June 2024',
      description: 'Led the development of the Arrka Privacy Management Platform (APMP), automating security and privacy compliance processes.Engineered responsive web interfaces using JavaScript, React, and Tailwind CSS, and integrated front-end with back-end using PHP and AJAX.Collaborated with cross-functional teams to translate requirements into technical specifications, ensuring alignment with business needs. Conducted testing, debugging, and performance monitoring to enhance system reliability and user experience, while adhering to coding best practices and maintaining comprehensive documentation.'
    },
  ];

  return (
    <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-bold text-blue-500">{exp.title}</h4>
                      <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                    <h5 className="text-lg font-semibold mb-2">{exp.company}</h5>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
  )
}