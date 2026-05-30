import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getPriorityNotifications = async () => {
  const response = await API.get(
    "/priority-notifications"
  );

  return response.data;
};