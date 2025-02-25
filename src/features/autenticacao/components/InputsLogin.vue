<template>
    <div class="container-input">
      <label class="Label-login" for="">{{ NomeLabel }}</label>
      <div class="input">
        <ion-icon :icon="person" class="icon"></ion-icon>
        <input
          class="input-login"
          :placeholder="NomePlaceholder"
          @input="$emit('update:valorInput', $event.target.value)"
          :value="valorInput"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { IonIcon } from "@ionic/vue";
  import { person } from "ionicons/icons";
  
  defineProps({
    NomeLabel: {
      type: String,
      required: true,
    },
    NomePlaceholder: {
      type: String,
      required: true,
    },
    valorInput:{
      required: true,
      type: String
    },
  });
  
  defineEmits(['update:valorInput'])
  </script>
  
  <style scoped>
  .input {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F3F3F3;
    border-radius: 15px;
    padding: 15px;
    width: 100%;
  }
  .icon {
    width: 18px;
    height: 19px;
    margin-right: 10px;
  }
  .input-login {
    outline: none;
    border: none;
    width: 100%;
    font-size: 10px;
    height: 20px;
    font-family: Poppins;
    background-color: transparent;
  }
  .input-login::placeholder {
    color: #6E6E6C;
    font-size: 10px;
    font-weight: 300;
    opacity: 1;
  }
  .Label-login {
    font-size: 12px;
    font-family: "Poppins";
    font-weight: 600;
    color: var(--primary);
  }
  .container-input {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  </style>
  