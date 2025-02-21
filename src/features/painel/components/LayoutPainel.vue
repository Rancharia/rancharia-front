<template>
    <ion-page>
        <ion-content>
            <HeaderPainel />
            <DescricaoUser />
                <router-view></router-view>
            <FooterPainel />
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonContent, IonPage } from "@ionic/vue";
import HeaderPainel from "../components/HeaderPainel.vue";
import DescricaoUser from "./DescricaoUser.vue";
import FooterPainel from "./FooterPainel.vue";
</script>