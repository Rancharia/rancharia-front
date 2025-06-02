import { defineStore } from "pinia";
import { ref } from "vue";
import { ProductFetch } from "@/apis/allProducts";

export const useTodosProdutosStore = defineStore("todos-produtos", () => {
    const todosProdutos = ref([]);
    
    const getTodosProdutos = async () => {
        try {
        const response = await ProductFetch();
        todosProdutos.value = response
        return response;
        } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        throw error;
        }
    };
    return { todosProdutos, getTodosProdutos };
})