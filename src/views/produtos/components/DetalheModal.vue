<template>
  <ion-header>
    <div class="header-detalhe">
      <h1>Detalhes do Produto</h1>
      <ion-icon @click="cancel" class="close-icon" :icon="closeCircle" />
    </div>
  </ion-header>
  <ion-content>
    <div class="detalhes-produto">
        <div class="card-detalhe"> <h1 class="titulo-produto">Nome: <span class="valor-produto">Pirão</span></h1></div>
  
    </div>
  </ion-content>
</template>

<script setup>
import { IonContent, IonHeader } from "@ionic/vue";
import { IonIcon } from "@ionic/vue";
import { closeCircle } from "ionicons/icons";
import { modalController } from "@ionic/vue";

const cancel = () => modalController.dismiss(null, "cancel");


</script>

<style scoped>

.header-detalhe {
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  display: flex;
  padding: 7px 14px;
}

.header-detalhe h1 {
  margin: 0;
  font-weight: 600;
  font-size: 12px;
}

.close-icon {
  color: #6e6e6c;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.close-icon:hover {
  color: #e02727;
}
.titulo-produto{
    font-size: 16px;
    margin: 0;
    padding: 10px 0;
    font-weight: 600;
}

.detalhes-produto{
    gap: 16px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.card-detalhe{
    padding-left: 12px;
    display: flex;
    align-items: center;;
    border: 1px solid #ac6200;
    border-radius: 10px;
}

.valor-produto {
    font-size: 16px;
    margin: 0;
    padding: 10px 0;
    font-weight: 600;
    color: #ac6200;
}
</style>
