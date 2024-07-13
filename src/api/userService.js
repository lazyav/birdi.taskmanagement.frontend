import api from "./api";

const register = async (userName, password, confirmPassword) => {
  return api.post("/user/register", {
    userName,
    password,
    confirmPassword,
  });
};

const login = async (userName, password) => {
  let result = await api.post("/user/login", {
    userName,
    password,
  });
  return result.data;
};

export { register, login };
