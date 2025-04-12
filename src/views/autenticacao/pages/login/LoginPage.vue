<template>
  <form @submit.prevent>
    <AtnInput
      label="Prestador de serviço"
      icon="user"
      placeholder="CPF ou e-mail"
      v-model="userLogin.username"
      expand="block"
    />
    <AtnInput
      v-model="userLogin.password"
      label="Senha"
      icon="user"
      placeholder="Insira sua senha"
      expand="block"
      type="password"
    />
    <AtnButton @click="fetchLogin" class="botao-acesso" expand="block"
      >Acessar</AtnButton
    >
  </form>
</template>

<script setup>
import { AtnButton } from "atena-core";
import { AtnInput } from "atena-core";
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
    await useUserLoggedStore().userLogged()
    
    router.push({ name: "inicio" });
  } catch (error) {
    console.log("Falha no login:", error);
  }
};
</script>

<style src="./login.css"></style>
