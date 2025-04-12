import { defineStore } from "pinia";
import { ref } from "vue";
import { todosProdutosFetch } from "@/apis/TodosProdutosApi";

export const useTodosProdutosStore = defineStore("todos-produtos", () => {
    const todosProdutos = ref([]);
    
    const getTodosProdutos = async () => {
        try {
        const response = await todosProdutosFetch();
        todosProdutos.value = response
        return response;
        } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        throw error;
        }
    };
    return { todosProdutos, getTodosProdutos };
})