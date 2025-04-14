import { defineStore } from "pinia";
import { ref } from "vue";
import { todosProdutosFetch } from "@/apis/todosProdutosApi";

export const useProdutoStore = defineStore("produto", () => {
    const produtos = ref([]);
    
    const getProdutos = async () => {
        try {
        const response = await todosProdutosFetch();
        produtos.value = response
        } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        throw error;
        }
    };
    return { produtos, getProdutos };
})