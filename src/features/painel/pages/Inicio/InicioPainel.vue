<template>
    <div class="container-principal-painel">
        <div class="opcoes-painel">
        <OpcaoPainel @click="irParaPedidos" DescricaoOpcao="Pedidos" :iconOption="create" />
        <OpcaoPainel DescricaoOpcao="Produtos" :iconOption="fastFood" />
        <OpcaoPainel DescricaoOpcao="Clientes" :iconOption="person" />
        <OpcaoPainel DescricaoOpcao="Estoque" :iconOption="grid" />
    </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { create, fastFood, person, grid } from 'ionicons/icons';
import OpcaoPainel from '../../components/OpcaoPainel.vue';

const router = useRouter()
const irParaPedidos = () => {
    router.push({ name: "pedidos" })
}
</script>

<style src="/src/features/painel/pages/Inicio/iniciopainel.css"></style>