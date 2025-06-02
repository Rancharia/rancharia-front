import { defineStore } from "pinia";
import { IProduto } from "@/interfaces/produtoInterface";
import { ref } from "vue";
import { editProduct } from "@/apis/allProducts";

export const useEditProductStore = defineStore("edit-product", () => {
  const editedProduct = ref<IProduto | null>(null);

  const editarProdutos = async (produto: IProduto, id: number): Promise<IProduto> => {
    try {
      const response = await editProduct(produto, id);
      console.log("Editou:", response);

      editedProduct.value = response;

      return response;
    } catch (error: any) {
      console.error("Error ao editar produto:", error);
      throw error;
    }
  };

  return {
    editedProduct,
    editarProdutos,
  };
});
