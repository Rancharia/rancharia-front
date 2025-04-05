import { defineStore } from "pinia";
import { ref } from "vue";
import { ILogin } from "../interfaces/userInterface";
import { login } from "../apis/authApi";
export const useAuthStore = defineStore("auth-store", () => {
  const user = ref<ILogin | null>(null);

  const userLogin = async (formLoginData: ILogin) => {
    try {
      const response = await login(formLoginData);
      return response;
    } catch (error: any) {
      console.error("Erro ao fazer login:", error.message);
      throw error;
    }
  };

  return { user, userLogin };
});
