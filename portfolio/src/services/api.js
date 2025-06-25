import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://portfolio-2-ke1o.onrender.com';

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/contact`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    // Axios automatically throws for HTTP error status codes (4xx, 5xx)
    throw error;
  }
};