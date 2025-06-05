<template>
  <form @submit.prevent>
    <ion-item lines="none" id="campo-item">
      <ion-icon :icon="person" class="icon"></ion-icon>
      <ion-input
        v-model="userLogin.username"
        id="ion-input-login"
        placeholder="Cpf ou e-mail"
      ></ion-input>
    </ion-item>
    <ion-item lines="none" id="campo-item">
          <ion-icon :icon="person" class="icon"></ion-icon>
      <ion-input
      type="password"
        v-model="userLogin.password"
        id="ion-input-login"
        placeholder="Senha"
      ></ion-input>
    </ion-item>
    <ion-button @click="fetchLogin" id="ion-button">Acessar</ion-button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "vue-router";
import { useUserLoggedStore } from "@/store/userLoggedStore";
import { IonItem, IonInput, IonButton, IonIcon } from "@ionic/vue";
import { person } from "ionicons/icons";

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
