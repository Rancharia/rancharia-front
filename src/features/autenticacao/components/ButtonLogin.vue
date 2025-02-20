<template>
    <button class="BotaoLogin">{{ NomeBotao }}</button>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  defineProps({
    NomeBotao: {
      type: String,
      required: true,
    },
  });
  </script>
  <style scoped>
  .BotaoLogin {
    margin-top: 14px;
    background-color: var(--secondary);
    width: 100%;
    height: 47px;
    color: white;
    border-radius: 30px;
    margin-bottom: 26px;
    font-family: "Poppins", Arial;
    font-size: 12px;
  }
  </style>
  