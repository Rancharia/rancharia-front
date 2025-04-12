import { defineStore } from "pinia";
import { IProduto } from "@/interfaces/produtoInterface";
import { ref } from "vue";
import { createProductFetch } from "@/apis/createProductApi";

export const useProductStore = defineStore("product-store", () => {
    const productData = ref<IProduto | null>(null);

    const createProduct = async (product: any) => {
        try {
            const response = await createProductFetch(product)
            console.log("response", response.data);
            console.log("produto", productData.value);
            return response.data;
        } catch (error: any) {
            console.error("Error creating product:", error.message);
            throw error
        }
    };
    return { productData, createProduct };
})