<template>
    <div class="container-principal-painel">
        <div class="opcoes-painel">
        <OpcaoPainel :iconOption="create" />
        <OpcaoPainel :iconOption="fastFood" />
        <OpcaoPainel :iconOption="person" />
        <OpcaoPainel :iconOption="grid" />
    </div>
    </div>
</template>

<script setup>
import { create, fastFood, person, grid } from 'ionicons/icons';
import OpcaoPainel from '../../components/OpcaoPainel.vue';

</script>

<style src="/src/features/painel/pages/Inicio/iniciopainel.css"></style>