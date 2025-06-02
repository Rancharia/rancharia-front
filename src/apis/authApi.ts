import api from "../boot/axiosConfig";
import { ILogin } from "@/interfaces/loginInterface";

export const login = async (formLoginData: ILogin) => {
  try {
    const response = await api.post("/login", formLoginData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};

export const logout = async () => {
  try {
    const response = await api.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};
