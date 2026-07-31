import axios from 'axios';

const API_URL = 'https://api.example.com/chat'; // Replace with your actual API endpoint

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(API_URL, { message });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const fetchMessages = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};