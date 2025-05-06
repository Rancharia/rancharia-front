import { defineStore } from "pinia";
import { IProduto } from "@/interfaces/produtoInterface";
import { ref } from "vue";
import { showProduct } from "@/apis/allProducts";

export const useShowProductStore = defineStore("show-product", () => {
  const productShown = ref<IProduto | null>(null);

  const useShowProduct = async ( id: number ): Promise<IProduto> => {
    try {
      const response = await showProduct(id);
      productShown.value = response;
      return response;
    } catch (error: any) {
      console.error("Error:", error);
      throw error;
    }
  };

  return {
    productShown,
    useShowProduct,
  };
});
