<template>
    <div class="option">
        <ion-icon :icon="iconOption" class="icon"></ion-icon>
        <p>{{ DescricaoOpcao }}</p>
    </div>
</template>

<script setup>

defineProps({
    iconOption:{
        required: true
    },
    DescricaoOpcao:{
        type: String,
        required: true
    }
})
</script>

<style scoped>
.option {
    cursor: pointer;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 29px;
    font-weight: 600;
    color: #CE821D;
    width: 202px;
    height: 157px;
    border-radius: 32px;
    border: 4px solid #CE821D;
}

.option p {
    margin: 0;
}

.icon{
    color: #CE821D;
    width: 51px;
    height: 55px;
}
</style>