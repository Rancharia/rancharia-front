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
    console.error("Error:", error);
    return error.response?.data || error;
  }
};

export const ProductFetch = async () => {
  try {
    const response = await api.get("product/all", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    console.log("resposta:", response);
    return response.data;
  } catch (error: any) {
    console.error("Error", error);
    return error.response?.data || error;
  }
};
