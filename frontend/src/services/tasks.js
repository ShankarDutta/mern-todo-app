import api from "../lib/axois.js";

export const createTask = async (task) => {
  const { data } = await api.post("/", task);
  return data;
};
