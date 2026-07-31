import api from "../lib/axois.js";

export const createTask = async (task) => {
  const { data } = await api.post("/", task);
  return data;
};

export const getAllTask = async () => {
  const { data } = await api.get("/");
  return data;
};

export const delTask = async (id) => {
  const { data } = await api.delete(`/${id}`, id);
  return data;
};

export const updateTask = async (id, completed) => {
  const { data } = await api.patch(`/${id}`, { completed });
  return data;
};

export const updateTaskText = async (id, updateTaskData) => {
  const { data } = await api.patch(`/${id}`, { text: updateTaskData.text });
  return data;
};
