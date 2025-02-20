<template>
    <p class="aviso">{{ descricaoAviso }}</p>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  defineProps({
    descricaoAviso: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style>
  .aviso {
    font-size: 14px;
    margin: 0;
    display: block;
    text-align: center;
    font-family: "Poppins", Arial;
    color: #FF2200;
  }
  </style>
  