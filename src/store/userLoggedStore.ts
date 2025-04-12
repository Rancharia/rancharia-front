import { defineStore } from "pinia";
import { ref } from "vue";
import { userLoggedFetch } from "@/apis/userLoggedApi";
import { IuserLogged } from "@/interfaces/userInterface";

export const useUserLoggedStore = defineStore("user-logged", () => {
    const userLoggedData = ref<IuserLogged | null>(null);

    const userLogged = async () => {
        try {
          const response = await userLoggedFetch();
          console.log("Dados do usuário na store:", response.data);
          userLoggedData.value  = response.data;
          return response;
        } catch (error: any) {
          userLoggedData.value = null;
          throw error;
        }
      };
      

    return { userLoggedData, userLogged };
})