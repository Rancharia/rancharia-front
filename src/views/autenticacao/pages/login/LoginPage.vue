<template>
  <AtnInput
    label="Prestador de serviço"
    icon="user"
    placeholder="CPF ou e-mail"
    v-model="user"
    expand="block"
  />
  <AtnInput
    v-model="senha"
    label="Senha"
    icon="user"
    placeholder="Insira sua senha"
    expand="block"
  />
  <AtnButton
    @click="router.push('/painel/inicio')"
    class="botao-acesso"
    expand="block"
    >Acessar</AtnButton
  >
  {{ senha }}
</template>

<script setup>
import { AtnButton } from "atena-core";
import { AtnInput } from "atena-core";
import { useRouter } from "vue-router";
import { ref } from "vue";

const senha = ref("");
const user = ref("");
const router = useRouter();
</script>

<style src="./login.css"></style>
