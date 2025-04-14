<template>
  <div @click="openModal" class="card">
    <div class="container">
      <h1 class="titulo-card">
        <span class="titulo-container">Código:</span> {{ codigo }}
      </h1>
    </div>
    <div class="container">
      <h1 class="titulo-card">
        <span class="titulo-container">Nome:</span> {{ name }}
      </h1>
    </div>
    <div class="container">
      <h1 class="titulo-card">
        <span class="titulo-container">Categoria:</span> {{ categoria }}
      </h1>
    </div>
    <div class="container">
      <h1 class="titulo-card">
        <span class="titulo-container">Preço de venda:</span> {{ preco }}
      </h1>
    </div>
    <div class="container-icon">
      <ion-icon class="icon" :icon="searchOutline" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IonIcon } from "@ionic/vue";
import { searchOutline } from "ionicons/icons";
import { modalController } from "@ionic/vue";
import DetalheModal from "./DetalheModal.vue";

const openModal = async () => {
  const modal = await modalController.create({
    component: DetalheModal,
  });
  modal.present();
};

defineProps({
  name: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.card {
  width: 100%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  border: 1px solid #ac6200;
  height: 52px;
  padding-left: 16px;
}

.card:hover {
  background-color: #ac6200;
  cursor: pointer;
}

.card:hover .titulo-container {
  color: white;
}
.card:hover .icon {
  color: white;
}

.card:hover .titulo-card {
  color: white;
}

.titulo-container {
  color: black;
  font-size: 12px;
  font-weight: 600;
}

.titulo-card {
  color: black;
  font-size: 12px;
  font-weight: 500;
}
.icon {
  display: flex;
  align-items: end;
  color: #000000;
  font-size: 20px;
}

.container-icon {
  display: flex;
  justify-content: end;
  padding-right: 16px;
}
</style>
