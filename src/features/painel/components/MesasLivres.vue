<template>
    <div class="pedido-aberto">
        <h1>
            {{ numerodaMesa }}
        </h1>
    </div>
</template>

<script setup>
defineProps({
    numerodaMesa:{
        required: true,
        type: String,
    }
})
</script>

<style scoped>
.pedido-aberto{
    background-color: #6E6E6C;
    width: 109px;
    height: 109px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.pedido-aberto h1{
    margin: 0;
    font-weight: 300;
    font-size: 35px;
    color: white;
}

</style>