<template>
    <header class="header-connectOn">
        <ion-icon @click="ExecutarMenuLateral" :icon="menu" class="menu icon"></ion-icon>
        <img class="logo-header" src="../../../../public/RanchariaLogoPetro.png" alt="">
        <div class="icones-direita">
            <ion-icon :icon="notifications" class="icon sino"></ion-icon>
            <ion-icon :icon="person" class="icon person"></ion-icon>
        </div>
    </header>
</template>

<script setup>
import { defineProps } from 'vue';
import { IonIcon } from '@ionic/vue';
import { person, menu, notifications } from 'ionicons/icons';

defineProps({
    ExecutarMenuLateral:{
        type: Function,
        required: true
    }
})

</script>
<style scoped>
.header-connectOn{
    z-index: 2;
    padding: 0px 40px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    background-color: #F3F3F3;
    height: 57px;
}

.logo-header{
    width: 170px;
    height: 36px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}

.icon{
    cursor: pointer;
    color: var(--primary);
}
.person{
    width: 30px;
    height: 32px;
}
.sino {
    width: 30px;
    height: 26px;
}
.menu{
    width: 29px;
    height: 18px;
}
.icones-direita{
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 20px;
}
</style>