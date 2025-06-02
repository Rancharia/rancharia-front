import { logout } from "@/apis/authApi"
import { defineStore } from "pinia"

export const useLogoutStore = defineStore("logout", () => {
    const userLogout = async () => {
       try{
        const response = await logout()
        return response
       }
       catch (error: any) {
        return error.response?.data || error
       }
    }
    
    return { userLogout }
})