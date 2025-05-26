<template>
  <form @submit.prevent>
    <ion-item lines="none" class="campo-item">
      <ion-icon name="logo-ionic" slot="start"></ion-icon>
      <ion-input
        v-model="userLogin.username"
        class="ion-input"
        placeholder="Cpf ou e-mail"
      ></ion-input>
    </ion-item>
    <ion-item lines="none" class="campo-item">
      <ion-icon name="logo-ionic" slot="start"></ion-icon>
      <ion-input
      type="password"
        v-model="userLogin.password"
        class="ion-input"
        placeholder="Senha"
      ></ion-input>
    </ion-item>

    <ion-button @click="fetchLogin" class="ion-button">Acessar</ion-button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "vue-router";
import { useUserLoggedStore } from "@/store/userLoggedStore";

const router = useRouter();

const userLogin = ref({
  username: "",
  password: "",
});

const fetchLogin = async () => {
  try {
    await useAuthStore().userLogin(userLogin.value);
    await useUserLoggedStore().userLogged();
    router.push({ name: "inicio" });
  } catch (error) {
    console.log("Falha no login:", error);
  }
};
</script>

<style src="./login.css"></style>
