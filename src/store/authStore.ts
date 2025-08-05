import { defineStore } from "pinia";
import { ref } from "vue";
import { ILogin } from "@/interfaces/loginInterface";
import { login, logout } from "../apis/authApi";

export const useAuthStore = defineStore("auth-store", () => {
  const token = ref<string | null>(null);

  const userLogin = async (formLoginData: ILogin) => {
    try {
      const response = await login(formLoginData);
      token.value = `${response.token_type} ${response.access_token}`;
      localStorage.setItem("token", token.value);
      return response;
    } catch (error: any) {
      throw error;
    }
  };

 const userLogout = async () => {
       try{
        const response = await logout()
        return response
       }
       catch (error: any) {
        return error.response?.data || error
       }
    }
    
  return { userLogin, userLogout };
});