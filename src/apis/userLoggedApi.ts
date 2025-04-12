import api from "@/boot/axiosConfig";

export const userLoggedFetch = async () => {
  try {
    const response = await api.get("/user", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    console.log("userLoggedFetch response", response);
    return response;
  } catch (error: any) {
    console.error("Erro na função userLoggedFetch:", error);
    return error;
  }
};
