import api from "../boot/axiosConfig";
import { ILogin } from "../interfaces/userInterface";

export const login = async (formLoginData: ILogin) => {
  try {
    const response = await api.post("/login", formLoginData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};
