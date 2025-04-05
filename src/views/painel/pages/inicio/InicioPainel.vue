<template>
    <div class="container-principal-painel">
        <div class="opcoes-painel">
        <OpcaoPainel @click="router.push('pedidos')" DescricaoOpcao="Pedidos" :iconOption="create" />
        <OpcaoPainel @click="router.push('produtos')" DescricaoOpcao="Produtos" :iconOption="fastFood" />
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

</script>

<style src="./iniciopainel.css"></style>