<template>
    <ion-header>
      <div class="mesas-comandas">
        <h1>Novo Produto</h1>
        <ion-icon @click="cancel" class="close-icon" :icon="closeCircle" />
      </div>
    </ion-header>
    <ion-content>
      <div class="conteudo-modal">
        <div class="inputs-adicionar-item">
          <div class="inputs-primeira-linha">
            <InputsProduto LabelProps="nome:" />
            <InputsProduto LabelProps="categoria:" />
            <InputsProduto LabelProps="código:" />
          </div>
          <div class="inputs-segunda-linha">
            <InputsProduto LabelProps="Preço de custo:" />
            <InputsProduto LabelProps="código:" />
          </div>
        </div>
      </div>
      <footer>
        <div @click="cancel">
          <ion-icon class="icon-voltar" :icon="arrowBack" /><span>Voltar</span>
        </div>
        <div>
          <ion-icon class="icon-voltar" :icon="save" /><span>Salvar</span>
        </div>
      </footer>
    </ion-content>
</template>

<script lang="ts" setup>
import InputsProduto from "../components/InputsProduto.vue";
import { IonContent, IonHeader, modalController } from "@ionic/vue";
import { IonIcon } from "@ionic/vue";
import { arrowBack, closeCircle, save } from "ionicons/icons";

defineProps({
  numeroMesa: {
    type: Number,
    required: true,
  },
});

const cancel = () => modalController.dismiss(null, "cancel");
</script>

<style scoped>
.mesas-comandas {
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  display: flex;
  padding: 7px 14px;
}
.mesas-comandas h1 {
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
.inputs-adicionar-item {
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 22px 19px;
}
.inputs-primeira-linha,
.inputs-segunda-linha {
  display: flex;
  gap: 35px;
}
footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: white;
  padding: 12px 25px;
  display: flex;
  gap: 31px;
  justify-content: end;
}
.icon-voltar {
  color: #ac6200;
  width: 20px;
  height: 20px;
}
footer span {
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

</style>
