import { defineStore } from "pinia";
import { IProduto } from "@/interfaces/produtoInterface";
import { ref } from "vue";
import { criarProduto, listaProdutos, editProduct } from "@/apis/allProducts";

export const useProductStore = defineStore("product-store", () => {
    const productData = ref<IProduto | null>(null);
    const editedProduct = ref<IProduto | null>(null);
    const produtos = ref([]);
    
    const createProduct = async (product: any) => {
        try {
            const response = await criarProduto(product)
            return response;
        } catch (error: any) {
            throw error
        }
    };

    const editarProdutos = async (produto: IProduto, id: number): Promise<IProduto> => {
        try {
            const response = await editProduct(produto, id);
            editedProduct.value = response;
            return response;
        } catch (error: any) {
            throw error;
        }
    };

    const fetchProduct = async () => {
        try {
            const response = await listaProdutos();
            produtos.value = response
        } catch (error) {

            throw error;
        }
    };

    return { productData, createProduct, editedProduct, editarProdutos, produtos, fetchProduct };
})