<template>
  <div class="pedidos">
    <div class="pesquisa">
      <h1>Pedidos</h1>
      <div class="pesquisar-pedidos">
        <AtnInput
          icon="search"
          placeholder="Buscar número ou nome"
          expand="block"
        />
        <ion-input class="input-pedidos"></ion-input>
      </div>
    </div>
    <div class="pedidos-em-andamento">
      <div>
        <h1>Pedidos em andamento</h1>
      </div>
      <div class="pedidos-em-andamento-grid">
        <PedidosAndamento
          v-for="(mesa, index) in mesas"
          :key="index"
          @click="openModal(mesa)"
          :numeroDoPedido="mesa"
        />
      </div>
    </div>
    <div class="mesas-livres">
      <div>
        <h1>Mesas/ Comandas livres</h1>
      </div>
      <div class="mesas-livres-grid">
        <MesasLivres
          v-for="(mesaLivres, index) in mesasLivres"
          :key="index"
          :numerodaMesa="mesaLivres"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { AtnInput } from "atena-core";
import MesasLivres from "./components/MesasLivres.vue";
import PedidosAndamento from "./components/PedidosAndamento.vue";
import { modalController } from "@ionic/vue";
import PedidosModal from "./components/PedidosModal.vue";
import { ref } from "vue";

const mesas = ref([1, 2, 3, 4, 5, 6, 7]);
const mesasLivres = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const openModal = async (numeroMesa) => {
  const modal = await modalController.create({
    component: PedidosModal,
    cssClass: 'modal-pedidos',
    componentProps: {
      numeroMesa,
    },
  });
  modal.present();
};
</script>

<style src="./pedidos.css"></style>