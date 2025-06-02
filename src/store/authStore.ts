import { defineStore } from "pinia";
import { ref } from "vue";
import { ILogin } from "@/interfaces/loginInterface";
import { login } from "../apis/authApi";

export const useAuthStore = defineStore("auth-store", () => {
  const token = ref<string | null>(null);

  const userLogin = async (formLoginData: ILogin) => {
    try {
      const response = await login(formLoginData);
      token.value = `${response.token_type} ${response.access_token}`;
      localStorage.setItem("token", token.value);
      console.log(token.value);
      return response;
    } catch (error: any) {
      console.error("Erro ao fazer login:", error.message);
      throw error;
    }
  };

  return { token, userLogin };
});