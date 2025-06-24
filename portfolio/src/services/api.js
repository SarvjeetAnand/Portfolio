const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const sendContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};