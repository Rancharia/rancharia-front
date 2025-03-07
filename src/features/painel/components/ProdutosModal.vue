<template>
  <ion-header>
    <div class="produtos-header">
      <h1>Produtos Cadastrados</h1>
      <ion-icon @click="cancel" class="close-icon" :icon="closeCircle" />
    </div>
    <div class="buscar-produto">
        <div class="input-buscar-pedido">
          <ion-icon :icon="search" /><input
            type="text"
            placeholder="Buscar número ou nome"
          />
        </div>
    </div>
  </ion-header>
  <ion-content>
    <table class="tabela-pedidos">
        <thead><tr class="linha-header">
        <th>Categoria</th>
        <th>Código</th>
        <th>Nome do produto</th>
        <th>Preço de venda</th>
        <th>Adicionar</th>
        <th>Personalizar</th>
      </tr></thead>
        <tbody>
            <tr v-for="(produto, index) in produtos" :key="index" class="linha-produto">
        <th>Marmitas</th>
        <th>139</th>
        <th>Marmita Feijoada</th>
        <th>8,00 - 15,00</th>
        <th><ion-icon @click="addItem" class="icon-add" :icon="addOutline" /></th>
        <th><ion-icon class="icon-list" :icon="listOutline" /></th>
      </tr>
        </tbody>
    </table>
  </ion-content>
</template>

<script lang="ts" setup>
import { IonContent, IonHeader, modalController } from "@ionic/vue";
import { IonIcon } from "@ionic/vue";
import { search, closeCircle, listOutline, addOutline } from "ionicons/icons";

defineProps({
  numeroMesa: {
    type: Number,
    required: true,
  },
});

const cancel = () => modalController.dismiss(null, "cancel");
const addItem = () => modalController.dismiss(null, "cancel");
const produtos = [1, 2, 3, 4, 5];
</script>

<style scoped>
.produtos-header {
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  display: flex;
  padding: 7px 14px 6px 14px;
}
.produtos-header h1 {
  margin: 0;
  font-weight: 600;
  font-size: 12px;
}

.buscar-produto {
  height: 51px;
  padding: 0px 14px 0px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
}

.buscar-produto input {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  padding-right: 20px;
}

.input-buscar-pedido {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f3f3f3;
  border-radius: 15px;
  padding-left: 15px;
}

.close-icon {
  color: #6e6e6c;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.tabela-pedidos {
  font-size: 10px;
  font-family: Poppins;
  width: 100%;
  border-left: 1px solid #c0bbbb;
  border-right: 1px solid #c0bbbb;

}
.linha-produto{
    height: 25px;
    border-bottom: 1px solid #c0bbbb;
}
.linha-header {
  height: 40px;
  background-color: #f3f3f3;
  font-size: 10px;
  font-family: Poppins;
  border-bottom: 1px solid #c0bbbb;
}
.icon-list,
.icon-add {
  cursor: pointer;
  width: 20px;
  height: 12px;
}

.icon-add:hover {
  color: #ac6200;
}

.icon-list:hover {
  color: #ac6200;
}
.close-icon:hover{
  color: #E02727;
}


</style>
