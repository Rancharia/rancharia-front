import api from "@/boot/axiosConfig";
import { IProduto } from "@/interfaces/produtoInterface";

export const criarProduto = async (produto: IProduto) => {
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

export const listaProdutos = async () => {
  try {
    const response = await api.get("product/all", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response?.data || error;
  }
};

export const editProduct = async (produto: IProduto, id: number) => {
  try {
    const response = await api.put(`/product/edit/${id}`, produto, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response?.data || error;
  }
}

export const showProduct = async ( id: number) => {
  try {
    const response = await api.get(`/product/show/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response?.data || error;
  }
}