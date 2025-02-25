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
        <PedidosAndamento numeroDoPedido="01" />
        <PedidosAndamento numeroDoPedido="02" />
        <PedidosAndamento numeroDoPedido="03" />
        <PedidosAndamento numeroDoPedido="04" />
        <PedidosAndamento numeroDoPedido="05" />
        <PedidosAndamento numeroDoPedido="06" />
        <PedidosAndamento numeroDoPedido="07" />
        <PedidosAndamento numeroDoPedido="08" />
        <PedidosAndamento numeroDoPedido="09" />
        <PedidosAndamento numeroDoPedido="10" />
        <PedidosAndamento numeroDoPedido="11" />
        <PedidosAndamento numeroDoPedido="12" />
      </div>
    </div>
    <div class="mesas-livres">
      <div>
        <h1>Mesas/ Comandas livres</h1>
      </div>
      <div class="mesas-livres-grid">
        <MesasLivres numerodaMesa="01" />
        <MesasLivres numerodaMesa="02" />
        <MesasLivres numerodaMesa="03" />
        <MesasLivres numerodaMesa="04" />
      </div>
      <div class="botoes">
        <button @click="openModal">Abrir modal</button>
        <button @click="openLista">Exibir lista</button>
        <button @click="contatos">Contatos</button>
        {{ mensagemDoModal }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MesasLivres from "../../components/MesasLivres.vue";
import PedidosAndamento from "../../components/PedidosAndamento.vue";
import { IonIcon } from "@ionic/vue";
import { search } from "ionicons/icons";
import { modalController, actionSheetController } from "@ionic/vue";
import PedidosModal from "../../components/PedidosModal.vue";
import ListaDeTeste from "../../components/ListaDeTeste.vue";
import ContatosTeste from "../../components/ContatosTeste.vue";

const mensagemDoModal = ref("aqui vai a mensagem do modal");

const contatos = async () => {
  console.log("teste");
  const modal = await modalController.create({
    component: ContatosTeste,
  });

  modal.present();
};

const openLista = async () => {
  const modal = await modalController.create({
    component: ListaDeTeste,
  });

  modal.present();
};

const openModal = async () => {
  const modal = await modalController.create({
    component: PedidosModal,
  });
  modal.present();

  const { data, role } = await modal.onDidDismiss();
  if (role === "confirm") {
    console.log(data);
    mensagemDoModal.value = `${data.name} - ${data.email}`;
  } else {
    const actionSheet = await actionSheetController.create({
      header: "Are you sure?",
      buttons: [
        {
          text: "Yes",
          role: "confirm",
        },
        {
          text: "No",
          role: "cancel",
        },
      ],
    });
    await actionSheet.present();
    const { role } = await actionSheet.onDidDismiss();
    if (role === "confirm") {
      console.log("Voce confirmou");
    } else {
      const newModal = await modalController.create({
        component: PedidosModal,
      });
      newModal.present();
    }
  }
};
</script>

<style src="./pedidos.css"></style>
