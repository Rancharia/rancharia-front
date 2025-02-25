<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="medium" @click="cancel">Cancelar</ion-button>
        </ion-buttons>
        <ion-title>teste de modal</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="confirm" :strong="true">Confirmar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-input
          label-placement="stacked"
          label="Enter your name"
          v-model="name"
          placeholder="Your name"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-input
          label-placement="stacked"
          label="Enter your email"
          v-model="email"
          placeholder="Your email"
        ></ion-input>
      </ion-item>
      <div>{{ name }} - {{ email }}</div>
    </ion-content>
  </template>
  
  <script setup>
    import {
      IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonInput, modalController,
    } from '@ionic/vue';
    import { ref } from 'vue';
  
    const name = ref('');
    const email = ref('');
  
    const cancel = () => modalController.dismiss(null, 'cancel');

    const confirm = () => {
      modalController.dismiss({
        name: name.value,
        email: email.value
      }, 'confirm');
    };
  </script>
  