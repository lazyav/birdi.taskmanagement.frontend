import api from "./api";

const register = async (userName, password, confirmPassword) => {
  let result = api.post("/user/register", {
    userName,
    password,
    confirmPassword,
  });
  return (await result).data;
};

const login = async (userName, password) => {
  let result = await api.post("/user/login", {
    userName,
    password,
  });
  return result.data;
};

export { register, login };
