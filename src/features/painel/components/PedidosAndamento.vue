<template>
    <div class="pedido-aberto">
        <h1>
           {{ numeroDoPedido }}
        </h1>
    </div>
</template>

<script setup>


defineProps({
    numeroDoPedido:{
        required: true,
        type: String,
    }
})
</script>

<style scoped>
.pedido-aberto{
    background-color: #CE821D;
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

.pedido-aberto:hover{
    background-color: #B97213;
}

</style>