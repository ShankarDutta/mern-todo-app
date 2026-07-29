import { create } from "axios";

const api = create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1/tasks`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
