<template>
  <AtnInput
    label="Prestador de serviço"
    v-model="senha"
    icon="user"
    placeholder="CPF ou e-mail"
    expand="block"
  />
  <AtnInput
    label="Senha"
    v-model="user"
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
