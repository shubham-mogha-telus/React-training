import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    console.log("response----", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
