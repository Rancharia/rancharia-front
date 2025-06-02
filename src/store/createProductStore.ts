import { defineStore } from "pinia";
import { IProduto } from "@/interfaces/produtoInterface";
import { ref } from "vue";
import { createProductFetch } from "@/apis/allProducts";

export const useProductStore = defineStore("product-store", () => {
    const productData = ref<IProduto | null>(null);

    const createProduct = async (product: any) => {
        try {
            const response = await createProductFetch(product)
            console.log(response)
            return response;
        } catch (error: any) {
            console.error("Error:", error.message);
            throw error
        }
    };
    return { productData, createProduct };
})