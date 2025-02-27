<template>
  <div class="exibicao-pedido">
    <header>
      <h1>Itens do pedido ({{ numeroDePedidos }})</h1>
    </header>
    <div
      v-for="(pedido, index) in pedidos"
      :key="index"
      class="descricao-pedido"
    >
      <div class="pedido-container">
        <div class="numero-pedido">{{ pedido }}</div>
        <span class="nome-pedido">carne de sol com macaxeira</span>
      </div>
      <span class="preco">26,00</span>
      <ion-icon class="elipse-exibicao" :icon="ellipsisVertical" />
    </div>
    <div class="calculo-pedido">
      <h1 class="subtotal"><span>Subtotal:</span> 26,00</h1>
      <h1 class="total"><span>Total:</span> 26,00</h1>
    </div>
  </div>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import { ellipsisVertical } from "ionicons/icons";

const pedidos = [1, 2, 3, 4, 5];
const numeroDePedidos = pedidos.length;
</script>

<style scoped>
.exibicao-pedido {
  padding-top: 6px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 600;
}

.numero-pedido {
  margin-left: 8px;
  background-color: #ac6200;
  color: #f3f3f3;
  margin-right: 4px;
  width: 17px;
  height: 17px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.descricao-pedido {
  margin-bottom: 4px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3px;
  border-bottom: 1px solid #f3f3f3;
}

.nome-pedido {
  font-size: 10px;
}

.preco {
  font-size: 10px;
}

.elipse-exibicao {
  cursor: pointer;
  margin-right: 8px;
  color: #ac6200;
}
header h1 {
  width: 100%;
  margin: 0;
  padding-bottom: 5px;
  margin-bottom: 8px;
  font-size: 10px;
  padding-left: 8px;
  border-bottom: 1px solid #707070;
}
.calculo-pedido {
  padding-top: 4px;
  gap: 7px;
  border-top: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 71px;
}

.subtotal {
  padding-right: 14px;
  font-size: 16px;
  margin: 0;
}
.subtotal span {
  color: #ac6200;
}
.total span {
  color: #ac6200;
}
.total {
  padding-right: 14px;
  margin: 0;
  font-size: 16px;
  margin-bottom: 4px;
}
.pedido-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
