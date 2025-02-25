<template>
    <div class="opcao-redirecionamento">
      <ion-icon class="icon-redirecionamento" :icon="IconProps"></ion-icon>
      <p>{{ nomeDaRota }}</p>
    </div>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";

defineProps({
    IconProps:{
        required: true,
        type: String,
    },
    nomeDaRota:{
        required: true,
        type: String,
    }
})
</script>

<style scoped>
.opcao-redirecionamento{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    cursor: pointer;
}
.opcao-redirecionamento p{
    font-size: 12px;
    font-family: Poppins, Arial;
    margin: 0;
}
.icon-redirecionamento{
    color: #CE821D;
}
</style>