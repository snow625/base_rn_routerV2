import axios from "axios";

const baseURL = "https://react-native-back-routerv2.onrender.com/api";

const instance = axios.create({
  baseURL,
});

const setToken = (token = "") => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

const register = async (value) => {
  const { data } = await instance.post("/users/signup", value);
  if (data?.token) {
    setToken(data?.token);
  }
  return data;
};

const login = async (value) => {
  const { data } = await instance.post("/users/login", value);
  if (data?.token) {
    setToken(data?.token);
  }
  return data;
};

const getCurrent = async (token) => {
  setToken(token);
  try {
    const { data } = await instance.get("/users/current");
    setToken(data.token);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

const logout = async () => {
  try {
    await instance.get("/users/logout");
    setToken("");
    return true;
  } catch (error) {
    throw error;
  }
};

export const auth = { login, getCurrent, logout, register };
