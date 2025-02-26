<template>
  <div class="pedidos">
    <div class="pesquisa">
      <h1>Pedidos</h1>
      <div class="pesquisar-pedidos">
        <ion-icon class="icon-pesquisa" :icon="search"></ion-icon>
        <input placeholder="Buscar número ou nome" type="text" />
      </div>
    </div>
    <div class="pedidos-em-andamento">
      <div>
        <h1>Pedidos em andamento</h1>
      </div>
      <div class="pedidos-em-andamento-grid">
        <PedidosAndamento  v-for="(mesa, index) in mesas" :key="index" @click="openModal" :numeroDoPedido="mesa" />
      </div>
    </div>
    <div class="mesas-livres">
      <div>
        <h1>Mesas/ Comandas livres</h1>
      </div>
      <div class="mesas-livres-grid">
        <MesasLivres v-for="(mesasLivres, index) in mesasLivres" :key="index" :numerodaMesa="mesasLivres" />
      </div>
      <div class="botoes">
      </div>
    </div>
  </div>
</template>

<script setup>
import MesasLivres from "../../components/MesasLivres.vue";
import PedidosAndamento from "../../components/PedidosAndamento.vue";
import { IonIcon } from "@ionic/vue";
import { search } from "ionicons/icons";
import { modalController  } from "@ionic/vue";
import PedidosModal from "../../components/PedidosModal.vue";
import { ref } from "vue";

const mesas = ref([1,2,3,4,5,6,7])
const mesasLivres = ref([1,2,3,4,5,6,7,8,9,10])

const openModal = async () => {
  const modal = await modalController.create({
    component: PedidosModal,
  });
  modal.present();
};
</script>

<style src="./pedidos.css"></style>
