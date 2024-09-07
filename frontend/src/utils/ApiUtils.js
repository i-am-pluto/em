import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const USERS_URL = `${BASE_URL}/users`;
const EVENTS_URL = `${BASE_URL}/events`;
const ADMIN_URL = `${BASE_URL}/admin`;

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${USERS_URL}/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Error logging in or registering user:', error);
        throw error;
    }
};

export const registerForEvent = async (userId, eventId) => {
    try {
        const response = await axios.post(`${USERS_URL}/${userId}/register`, {
            eventId,
        });
        return response.data;
    } catch (error) {
        console.error('Error registering for event:', error);
        throw error;
    }
};

export const unregisterFromEvent = async (userId, eventId) => {
    try {
        const response = await axios.post(`${USERS_URL}/${userId}/unregister`, {
            eventId,
        });
        return response.data;
    } catch (error) {
        console.error('Error unregistering from event:', error);
        throw error;
    }
};

export const getAllEvents = async () => {
    try {
        const response = await axios.get(EVENTS_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching all events:', error);
        throw error;
    }
};

export const filterEventsByMonthYear = async (month, year) => {
    try {
        const response = await axios.get(`${EVENTS_URL}/filter`, {
            params: {
                month,
                year,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error filtering events by month and year:', error);
        throw error;
    }
};

export const getEventById = async (eventId) => {
    try {
        const response = await axios.get(`${EVENTS_URL}/${eventId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        throw error;
    }
};

export const addEvent = async (eventData) => {
    try {
        const response = await axios.post(`${ADMIN_URL}/add`, eventData);
        return response.data;
    } catch (error) {
        console.error('Error adding new event:', error);
        throw error;
    }
};

export const removeEvent = async (eventId) => {
    try {
        const response = await axios.delete(`${ADMIN_URL}/remove/${eventId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing event:', error);
        throw error;
    }
};

export const getRegisteredEvents = async (userId) => {
    try {
        const response = await axios.get(`${USERS_URL}/${userId}/events`);
        return response.data.events; // Returning the events array from the response
    } catch (error) {
        console.error('Error fetching registered events:', error);
        throw error;
    }
};