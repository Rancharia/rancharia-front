<template>
  <ion-header>
    <div class="header-detalhe">
      <h1>Editar Produto</h1>
      <ion-icon @click="cancel" class="close-icon" :icon="closeCircle" />
    </div>
  </ion-header>
  <ion-content>
    <div class="detalhes-produto">
      <div class="card-detalhe">
        <h1 class="titulo-produto">Nome:</h1>
        <input type="text" v-model="produtoEditavel.name" />
      </div>
      <div class="card-detalhe">
        <h1 class="titulo-produto">Código:</h1>
        <input type="text" v-model="produtoEditavel.code" />
      </div>
      <div class="card-detalhe">
        <h1 class="titulo-produto">Categoria:</h1>
        <input type="text" v-model="produtoEditavel.category" />
      </div>
      <div class="card-detalhe">
        <h1 class="titulo-produto">Preço de venda:</h1>
        <input type="number" v-model.number="produtoEditavel.price_cost" />
      </div>
      <button class="edit-button" @click="salvarEdicao">Salvar</button>
    </div>
  </ion-content>
</template>

<script setup>
import { ref, watch } from "vue";
import { modalController } from "@ionic/vue";
import { closeCircle } from "ionicons/icons";

const props = defineProps({
  produto: Object,
});

const cancel = () => modalController.dismiss(null, "cancel");

const produtoEditavel = ref({ ...props.produto });

watch(() => props.produto, novo => {
  produtoEditavel.value = { ...novo };
});

const salvarEdicao = () => {
  modalController.dismiss(produtoEditavel.value, "save");
};
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
.titulo-produto {
    font-size: 16px;
    margin: 0;
    padding: 10px 0;
    font-weight: 600;
}

.detalhes-produto {
    gap: 16px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.card-detalhe {
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

.edit-button {
    background-color: #ac6200;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}
</style>
