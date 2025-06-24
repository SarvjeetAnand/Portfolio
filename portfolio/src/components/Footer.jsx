import React from 'react'

export default function Footer({isDark}) {
  return (
    <footer className={`py-8 border-t ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Sarvjeet Kumar Anand.
          </p>
        </div>
      </footer>
  )
}