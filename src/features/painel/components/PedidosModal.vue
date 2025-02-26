<template>
  <ion-header>
    <div class="mesas-comandas">
      <h1>Mesa/ Comandas</h1>
      <ion-icon @click="cancel" class="close-icon" :icon="closeCircle" />
    </div>
    <div class="descricao-pedido-modal">
      <div class="left-pedidos">
        <div><h1 class="numero-mesa">01</h1></div>
        <div class="registro-pedido">
          <p>pedido n <span class="numero-pedido">0001</span></p>
          <p>iniciado em 25/02/2025</p>
        </div>
      </div>
      <div class="right-pedidos">
        <div class="input-buscar-pedido">
          <ion-icon :icon="search" /><input
            type="text"
            placeholder="Buscar número ou nome"
          />
        </div>
        <div class="produtos-icon">
          <ion-icon class="icon-fast-food" :icon="fastFood" />
          <span>Produtos</span>
        </div>
      </div>
    </div>
  </ion-header>
  <ion-content>
    <div class="conteudo-modal">
      <div class="left-conteudo"></div>
      <div class="right-conteudo">
        <div class="nenhum-item">
          <ion-icon class="icon-i" :icon="informationCircle" />
          <P>Nenhum item lançado</P>
        </div>
      </div>
    </div>
      <footer>
        <div @click="cancel">
          <ion-icon class="icon-voltar" :icon="arrowBack" /><span>Voltar</span>
        </div>
      </footer>
  </ion-content>
</template>

<script lang="ts" setup>
import { IonContent, IonHeader, modalController } from "@ionic/vue";
import { IonIcon } from "@ionic/vue";
import { fastFood, search, arrowBack, informationCircle, closeCircle } from "ionicons/icons";

const cancel = () => modalController.dismiss(null, "cancel");
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
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 10px;
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
.input-buscar-pedido {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f3f3f3;
  border-radius: 15px;
  padding-left: 15px;
}
.left-pedidos {
  display: flex;
  align-items: center;
  gap: 13px;
}
.right-pedidos {
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
}
.icon-voltar {
  color: #ac6200;
  width: 20px;
  height: 20px;
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
  background-color: #E4E4E4;
}
.right-conteudo {
  height: 100%;
  width: calc(100% - 197px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.conteudo-modal {
  font-family: Poppins;
  display: flex;
  height: 100%;
}
.nenhum-item{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.nenhum-item p{
  color: #6e6e6c;
  margin: 0;
  font-weight: 600;
}
.icon-i{
  color: #ac6200;
  width: 30px;
  height: 30px;
}
.close-icon{
  color: #6E6E6C;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
