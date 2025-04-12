import api from "@/boot/axiosConfig";
import { IProduto } from "@/interfaces/produtoInterface";

export const createProductFetch = async (produto: IProduto) => {
  try {
    const response = await api.post("/product", produto, {
        headers: {
            Authorization: `${localStorage.getItem("token")}`,
        },
    });
    console.log("response", response);
    return response.data;
  } catch (error: any) {
    console.error("deu erro:", error);
    return error.response?.data || error;
  }
};
