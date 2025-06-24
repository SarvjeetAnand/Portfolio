import React, { useState, useEffect } from 'react';
import './App.css';
import Portfolio from './components/Portfolio';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate initial loading (you can replace this with actual data fetching)
    const initializeApp = async () => {
      try {
        // Add any initialization logic here
        // For example: fetching user data, checking authentication, etc.
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate loading
        setLoading(false);
      } catch (err) {
        setError('Failed to load the portfolio. Please refresh the page.');
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Loading component
  const LoadingScreen = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Loading Portfolio</h2>
        <p className="text-gray-500">Please wait while we prepare everything...</p>
      </div>
    </div>
  );

  // Error component
  const ErrorScreen = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-red-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );

  // Render loading screen
  if (loading) {
    return <LoadingScreen />;
  }

  // Render error screen
  if (error) {
    return <ErrorScreen />;
  }

  // Render main portfolio
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;