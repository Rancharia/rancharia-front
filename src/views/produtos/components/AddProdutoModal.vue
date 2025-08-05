<template>
  <ion-header>
    <div class="mesas-comandas">
      <h1>Novo Produto</h1>
      <ion-icon @click="cancel" class="close-icon" :icon="closeCircle" />
    </div>
  </ion-header>
  <ion-content>
    <form @submit.prevent="addProduto" class="conteudo-modal">
      <div class="inputs-adicionar-item">
        <div class="inputs-primeira-linha">
          <ion-item lines="none" id="input-contaner-novo-produto">
            <ion-input required label="nome:" id="input-novo-produto" v-model="produtoData.name"></ion-input></ion-item>
          <ion-list>
            <ion-item lines="none">
              <ion-select id="select-categoria" interface="popover" placeholder="Categoria:"
                v-model="produtoData.category_id">
                <ion-select-option value="1">Típicas</ion-select-option>
                <ion-select-option value="2">categoria 2</ion-select-option>
                <ion-select-option value="3">categoria 3</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>
          <ion-item lines="none" id="input-contaner-novo-produto">
            <ion-input id="input-novo-produto" label="código:" v-model="produtoData.code"></ion-input></ion-item>
        </div>

        <div class="inputs-segunda-linha">
          <ion-item lines="none" id="input-contaner-novo-produto">
            <ion-input id="input-novo-produto" label="preço de custo:" type="number"
              v-model="produtoData.price_cost"></ion-input></ion-item>
          <ion-item lines="none" id="input-contaner-novo-produto">
            <ion-input id="input-novo-produto" label="preço de venda:" type="number"
              v-model="produtoData.price_sale"></ion-input></ion-item>
          <ion-radio-group v-model="medidaSelecionada" class="grupo-medidas">
            <div class="row">
              <ion-label id="medidas-label">Medidas:</ion-label>
              <ion-item lines="none">
                <ion-radio label-placement="start" id="medida-un" value="UN">UN</ion-radio>
              </ion-item>
              <ion-item lines="none">
                <ion-radio label-placement="start" id="medida-kg" value="KG">KG</ion-radio>
              </ion-item>
              <ion-item lines="none">
                <ion-radio label-placement="start" id="medida-lg" value="LG">LG</ion-radio>
              </ion-item>
            </div>
          </ion-radio-group>
        </div>
        <ion-radio-group v-model="ativo">
          <div class="row">
            <ion-label id="ativo-label">Ativo:</ion-label>
            <ion-item lines="none">
              <ion-radio label-placement="start" value="sim">Sim</ion-radio></ion-item>
            <ion-item lines="none">
              <ion-radio label-placement="start" value="nao">Não</ion-radio></ion-item>
          </div>
        </ion-radio-group>
      </div>
      <div class="container-border">
        <div class="container-abas">
          <div @click="selecionaAba('detalhes')" :class="['aba', { selecionada: abaSelecionada === 'detalhes' }]">
            <h2>Mais detalhes</h2>
          </div>
          <div @click="selecionaAba('estoque')" :class="['aba', { selecionada: abaSelecionada === 'estoque' }]">
            <h2>Estoque</h2>
          </div>
        </div>
        <div class="mais-detalhes">
          <div v-if="abaSelecionada === 'detalhes'">
            <MaisDetalhes v-model="produtoData.description" />
          </div>
          <div v-if="abaSelecionada === 'estoque'">
            <EstoqueProdutos />
          </div>
        </div>
      </div>
    </form>
    <footer>
      <div @click="cancel">
        <ion-icon class="icon-voltar" :icon="arrowBack" /><span>Voltar</span>
      </div>
      <div @click="addProduto">
        <ion-icon class="icon-save" :icon="save" /><span>Salvar</span>
      </div>
    </footer>
  </ion-content>
</template>

<script setup>
import EstoqueProdutos from "./EstoqueProdutos.vue";
import MaisDetalhes from "./MaisDetalhes.vue";
import {
  IonContent,
  IonHeader,
  modalController,
  IonIcon,
  IonInput,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { arrowBack, closeCircle, save } from "ionicons/icons";
import { ref, watch } from "vue";
import { useProductStore } from "@/store/productsStore";

const medidaSelecionada = ref("");
const ativo = ref("");
const abaSelecionada = ref("detalhes");

const produtoData = ref({
  name: "",
  category_id: "",
  code: "",
  price_cost: "",
  price_sale: "",
  measure: "",
  stock: 0,
  description: null,
  image: "",
});

const addProduto = async () => {
  try {
    await useProductStore().createProduct(produtoData.value);
    produtoData.value = {
      name: "",
      category_id: "",
      code: "",
      price_cost: "",
      price_sale: "",
      measure: "",
      stock: 0,
      description: "",
      image: "",
    };
    medidaSelecionada.value = "";
    ativo.value = "";
  } catch (error) {
    throw error
  }
};

const selecionaAba = (aba) => {
  abaSelecionada.value = aba;
};

const cancel = () => modalController.dismiss(null, "cancel");

watch(medidaSelecionada, (novaMedida) => {
  produtoData.value.measure = novaMedida;
});

defineProps({
  numeroMesa: {
    type: Number,
  },
});
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
  width: 800px;
  padding: 0 20px 10px;
}

.inputs-primeira-linha,
.inputs-segunda-linha {
  display: flex;
  gap: 35px;
  align-items: center;
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

.icon-voltar,
.icon-save {
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

#input-contaner-novo-produto {
  --border-radius: 16px;
  --min-height: 27px;
}

#input-novo-produto {
  --placeholder-font-weight: 300;
  --placeholder-color: #6e6e6c;
  min-height: 27px;
  width: 230px;
}

::v-deep(#input-novo-produto) input {
  font-weight: 300;
  background-color: #f3f3f3;
  border-radius: 16px;
  padding-left: 16px;
}

::v-deep(#input-novo-produto) label,
#medidas-label,
#ativo-label {
  font-weight: 600;
  font-size: 11px;
  color: #6e6e6c;
}

#ativo-label,
#medidas-label {
  margin-right: 10px;
}

ion-radio {
  --size: 12px;
  --color: #ecebeb;
  font-size: 10px;
}


.row {
  display: flex;
  align-items: center;
}

#select-categoria {
  font-weight: 600;
  font-size: 11px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 16px;
  height: 27px;
}
</style>
