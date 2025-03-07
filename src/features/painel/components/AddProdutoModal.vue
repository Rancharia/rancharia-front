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
          <InputsProduto InputWidth="202px" LabelProps="nome:" />
          <InputsProduto InputWidth="188px" LabelProps="categoria:" />
          <InputsProduto InputWidth="141px" LabelProps="código:" />
        </div>
        <div class="inputs-segunda-linha">
          <InputsProduto InputWidth="168px" LabelProps="Preço de custo:" />
          <InputsProduto InputWidth="161px" LabelProps="Preço de venda:" />
          <div class="inputs-radio">
            <InputsMedida v-model="medidaSelecionada" MedidaProps="UN" TituloProps="Medida:" />
            <InputsMedida v-model="medidaSelecionada" MedidaProps="KG" />
            <InputsMedida v-model="medidaSelecionada" MedidaProps="L" />
          </div>
        </div>
        <div class="ativo">
          <InputsMedida v-model="medidaSelecionada" MedidaProps="Sim" TituloProps="Ativo:" />
          <InputsMedida v-model="medidaSelecionada" MedidaProps="Não" />
        </div>
      </div>
      <div class="container-border">
        <div class="container-abas">
          <div
            @click="selecianaAba('detalhes')"
            :class="['aba', { selecionada: abaSelecionada === 'detalhes' }]"
          >
            <h2>Mais detalhes</h2>
          </div>
          <div
            @click="selecianaAba('estoque')"
            :class="['aba', { selecionada: abaSelecionada === 'estoque' }]"
          >
            <h2>Estoque</h2>
          </div>
        </div>
        <div class="mais-detalhes">
          <div v-if="abaSelecionada === 'detalhes'"><MaisDetalhes /></div>
          <div v-if="abaSelecionada === 'estoque'"><Estoque /></div>
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
import Estoque from "./Estoque.vue";
import MaisDetalhes from "../components/MaisDetalhes.vue";
import InputsProduto from "../components/InputsProduto.vue";
import { IonContent, IonHeader, modalController } from "@ionic/vue";
import { IonIcon } from "@ionic/vue";
import { arrowBack, closeCircle, save } from "ionicons/icons";
import InputsMedida from "../components/InputsMedida.vue";
import { ref } from "vue";

defineProps({
  numeroMesa: {
    type: Number,
    required: true,
  },
});

const cancel = () => modalController.dismiss(null, "cancel");
const selecianaAba = (aba: string) => {
  abaSelecionada.value = aba;
};

const medidaSelecionada = ref('')
const abaSelecionada = ref("detalhes");
</script>

<style scoped>
.conteudo-modal {
  padding: 27px 19px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
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
  gap: 12px;
  flex-direction: column;
  padding-bottom: 14px;
  border-bottom: 1px solid #ac6200;
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
.inputs-radio {
  display: flex;
}
.ativo {
  display: flex;
}
.mais-detalhes {
  gap: 82px;
  width: 762px;
  height: 265px;
  display: flex;
  font-family: Poppins;
  padding: 15px 20px 10px;
  border: 1px solid #ac6200;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.container-imagem {
  gap: 5px;
  display: flex;
  flex-direction: column;
}
.container-imagem h2 {
  margin: 0;
  color: #6e6e6c;
  font-size: 11px;
  font-weight: 600;
}
.imagem {
  background-color: #f3f3f3;
  width: 150px;
  height: 150px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.camera-icon {
  color: #6e6e6c;
  width: 65px;
  height: 49px;
}
.container-abas {
  display: flex;
}
.aba {
  cursor: pointer;
  margin-top: 17px;
  background-color: #6e6e6c;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  width: 165px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.aba h2 {
  font-size: 11px;
  color: white;
  font-weight: 600;
}

.aba.selecionada {
  background-color: #ac6200;
}
</style>
