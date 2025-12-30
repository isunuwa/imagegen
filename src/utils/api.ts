import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your actual API base URL

export const generateImage = async (prompt: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate`, { prompt });
    return response.data;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};

export const fetchImages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/images`);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};