<template>
  <ion-header>
    <div class="header-detalhe">
      <h1>Editar Produto</h1>
      <ion-icon @click="cancel" class="close-icon" :icon="closeCircle" />
    </div>
  </ion-header>
  <ion-content>
    <div class="detalhes-produto">
      <ion-item lines="none" class="card-detalhe">
        <ion-input
          label="Nome:"
          v-model="produtoEditavel.name"
          id="ion-input-edit-produto"
        ></ion-input>
      </ion-item>
      <ion-item lines="none" class="card-detalhe">
        <ion-input
          label="Código:"
          v-model="produtoEditavel.code"
          id="ion-input-edit-produto"
        ></ion-input>
      </ion-item>
      <ion-item class="card-detalhe">
        <ion-input
          label="Categoria:"
          v-model="produtoEditavel.category"
          id="ion-input-edit-produto"
        ></ion-input>
      </ion-item>
      <ion-item  class="card-detalhe">
        <ion-input
          label="Preço de venda:"
          v-model.number="produtoEditavel.price_cost"
          id="ion-input-edit-produto"
        ></ion-input>
      </ion-item>
      <button class="edit-button" @click="salvarEdicao">Salvar</button>
    </div>
  </ion-content>
</template>

<script setup>
import { ref, watch } from "vue";
import { modalController, IonInput, IonIcon, IonItem, IonContent, IonHeader } from "@ionic/vue";
import { closeCircle } from "ionicons/icons";

const props = defineProps({
  produto: Object,
});

const cancel = () => modalController.dismiss(null, "cancel");

const produtoEditavel = ref({ ...props.produto });

watch(
  () => props.produto,
  (novo) => {
    produtoEditavel.value = { ...novo };
  }
);

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
  display: flex;
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

#ion-input-edit-produto {
  padding-left: 10px;
  margin-left: 20px;
  width: 100%;
}
::v-deep(#ion-input-edit-produto) input {
  font-weight: 300;
}
</style>
