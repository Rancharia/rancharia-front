<template>
  <ion-header>
    <div class="mesas-comandas">
      <h1>Mesa/ Comandas</h1>
      <ion-icon @click="cancel" class="close-icon" :icon="closeCircle" />
    </div>
    <div class="descricao-pedido-modal">
      <div class="left-pedidos">
        <div>
          <h1 class="numero-mesa">0{{ numeroMesa }}</h1>
        </div>
        <div class="registro-pedido">
          <p>pedido n <span class="numero-pedido">0001</span></p>
          <p>iniciado em 25/02/2025</p>
        </div>
      </div>
      <div class="right-pedidos">
        <ion-item lines="none">
          <ion-input
            class="ion-input-pedidos-modal"
            placeholder="Buscar número ou nome"
          ></ion-input>
        </ion-item>
        <div @click="openModalProdutos" class="produtos-icon">
          <ion-icon class="icon-fast-food" :icon="fastFood" />
          <span class="produtos-modal">Produtos</span>
        </div>
      </div>
    </div>
  </ion-header>
  <ion-content>
    <div class="conteudo-modal">
      <div class="left-conteudo">
        <div class="left-container">
          <div class="left-opcoes">
            <ion-icon class="person-icon-modal" :icon="person" />
            <p>Vincular cliente</p>
          </div>
          <div class="left-opcoes">
            <ion-icon class="menu-icon-modal" :icon="menu" />
            <p>Mais opções</p>
          </div>
        </div>
      </div>
      <div class="right-conteudo">
        <div v-if="contemPedidos" class="pedidos-em-andamento">
          <ExibicaoPedidos />
        </div>
        <div class="nenhum-item" v-if="!contemPedidos">
          <ion-icon class="icon-i" :icon="informationCircle" />
          <p>Nenhum item lançado</p>
        </div>
      </div>
    </div>
    <footer>
      <div @click="cancel">
        <ion-icon class="icon-voltar" :icon="arrowBack" /><span>Voltar</span>
      </div>
      <div class="container-botoes">
        <div class="imprimir">
          <ion-button class="button-imprimir">
            <ion-icon
              class="icon-imprimir"
              :icon="cashOutline"
            />Imprimir</ion-button
          >
        </div>
        <div class="pagamento">
          <ion-button class="button-pagamento">
            <ion-icon
              class="icon-pagamento"
              :icon="cashOutline"
            />Pagamento</ion-button
          >
        </div>
      </div>
    </footer>
  </ion-content>
</template>

<script lang="ts" setup>
import ExibicaoPedidos from "./ExibicaoPedidos.vue";
import { IonContent, IonHeader, modalController } from "@ionic/vue";
import { IonIcon } from "@ionic/vue";
import ProdutosModal from "./ProdutosModal.vue";
import { ref } from "vue";
import {
  fastFood,
  arrowBack,
  informationCircle,
  closeCircle,
  person,
  menu,
  cashOutline,
} from "ionicons/icons";

defineProps({
  numeroMesa: {
    type: Number,
    required: true,
  },
});

const openModalProdutos = async () => {
  const modal = await modalController.create({
    component: ProdutosModal,
  });
  modal.present();
};

const cancel = () => modalController.dismiss(null, "cancel");
const contemPedidos = ref(true);
</script>

<style scoped>
.mesas-comandas {
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  display: flex;
  padding: 7px 14px 6px 14px;
}
.mesas-comandas h1 {
  margin: 0;
  font-weight: 600;
  font-size: 12px;
}
.descricao-pedido-modal {
  height: 51px;
  padding: 0px 14px 0px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
}

.descricao-pedido-modal input {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  padding-right: 20px;
}
.numero-mesa {
  color: #ac6200;
  font-size: 25px;
  font-weight: 600;
  margin: 0;
}
.registro-pedido {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.registro-pedido p {
  margin: 0;
  font-size: 10px;
}
.numero-pedido {
  font-weight: 600;
}
.produtos-icon {
  height: 100%;
  padding: 0px 2px;
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 10px;
  cursor: pointer;
}

.produtos-icon:hover .produtos-modal {
  color: #ac6200;
}

.produtos-icon span {
  color: #6e6e6c;
  font-weight: 600;
}
.icon-fast-food {
  color: #ac6200;
  width: 20px;
  height: 19px;
}

.left-pedidos {
  display: flex;
  align-items: center;
  gap: 13px;
}
.right-pedidos {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 26px;
}

footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #f3f3f3;
  height: 63px;
  padding-left: 23px;
  display: flex;
  justify-content: space-between;
}

.icon-voltar {
  color: #ac6200;
  width: 20px;
  height: 20px;
}
.icon-pagamento, .icon-imprimir {
  color: #ffffff;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

footer span {
  font-family: Poppins;
  color: #6e6e6c;
  font-weight: 600;
  font-size: 12px;
}
footer div {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}
.left-conteudo {
  height: 100%;
  width: 197px;
  background-color: #e4e4e4;
}
.right-conteudo {
  height: 100%;
  width: calc(100% - 197px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.conteudo-modal {
  font-family: Poppins;
  display: flex;
  height: 100%;
}
.nenhum-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.nenhum-item p {
  color: #6e6e6c;
  margin: 0;
  font-weight: 600;
}
.icon-i {
  color: #ac6200;
  width: 30px;
  height: 30px;
}
.close-icon {
  color: #6e6e6c;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.left-opcoes {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 0px 0px 23px;
}
.left-opcoes p {
  margin: 0;
  font-weight: 600;
  color: #6e6e6c;
  font-size: 12px;
}
.person-icon-modal {
  color: #ac6200;
  width: 20px;
  height: 20px;
}
.menu-icon-modal {
  color: #ac6200;
  width: 20px;
  height: 20px;
}
.left-container {
  gap: 20px;
  flex-direction: column;
  display: flex;
  position: absolute;
  bottom: 83px;
}
.container-botoes {
  font-family: Poppins;
  display: flex;
  cursor: default;
  gap: 72px;
  margin-right: 15px;
}

.imprimir,
.pagamento {
  width: 150px;
  border-radius: 20px;
}

.pagamento p {
  font-size: 10px;
}

.pedidos-em-andamento {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.icon-print {
  width: 20px;
  height: 20px;
}
.icon-pagamento {
  width: 20px;
  height: 20px;
  color: #ffffff;
}
.close-icon:hover {
  color: #e02727;
}

.button-pagamento,
.button-imprimir {
  --border-radius: 20px;
  --background: transparent;
  --background: #ac6200;
  width: 100%;
}

.ion-input-pedidos-modal {
  --background: #ecebeb;
  --border-radius: 16px;
  --placeholder-font-weight: 300;
  --padding-start: 16px;
}
</style>
