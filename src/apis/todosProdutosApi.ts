import api from "@/boot/axiosConfig";

export const todosProdutosFetch = async () => {
  try {
    const response = await api.get("product/all", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    console.log("resposta", response);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return error.response?.data || error;
  }
};
