import { defineStore } from "pinia";
import { ref } from "vue";
import { userLoggedFetch } from "@/apis/user";
import { IuserLogged } from "@/interfaces/userInterface";

export const useUserLoggedStore = defineStore("user-logged", () => {
    const userLoggedData = ref<IuserLogged | null>(null);

    const userLogged = async () => {
        try {
          const response = await userLoggedFetch();
          userLoggedData.value  = response.data;
          return response;
        } catch (error: any) {
          throw error;
        }
      };
      

    return { userLoggedData, userLogged };
})