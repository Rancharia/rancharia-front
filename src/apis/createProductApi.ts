import api from "@/boot/axiosConfig";
import { IProduto } from "@/interfaces/produtoInterface";

export const createProductFetch = async (produto: IProduto) => {
  try {
    const response = await api.post("/product", produto, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    return response
  } catch (error: any) {
    return error.response?.data || error;
  }
};
