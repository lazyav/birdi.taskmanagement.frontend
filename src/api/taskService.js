import api from "./api";
import timeout from "./timeout";

const getAllTasks = async () => {
  await timeout(1500);
  return await api.get("/task/all");
};

const deleteTask = async (taskId) => {
  await timeout(1500);
  return await api.delete(`/task/${taskId}`);
};

const editTask = async (task) => {
  await timeout(1500);
  return await api.put(`/task/edit`, task);
};
const addTask = async (task) => {
  await timeout(1500);
  return await api.post(`/task`, task);
};

const getTask = async (id) => {
  await timeout(1500);
  return await api.get(`/task/${id}`);
};

const getTaskStatusues = async () => {
  await timeout(1500);
  return await api.get(`/task/taskstatuses`);
};

export {
  getAllTasks,
  deleteTask,
  editTask,
  getTask,
  getTaskStatusues,
  addTask,
};
