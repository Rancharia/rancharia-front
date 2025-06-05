<template>
  <div class="container-principal">
    <h1>Produtos</h1>
    <div class="itens-produto">
      <ion-item lines="none" id="input-container-produtos">
          <IonIcon :icon="search" />
        <ion-input
          id="ion-input-produtos"
          placeholder="Buscar produto"
        ></ion-input>
      </ion-item>
      <div class="opcoes-geral-produto">
        <div class="opcao-produto">
          <IonIcon class="icon-produtos" :icon="albums" />
          <h2>Estoque</h2>
        </div>
        <div class="opcao-produto">
          <IonIcon class="icon-produtos" :icon="pencil" />
          <h2>Editar</h2>
        </div>
        <div @click="addItemModal" class="opcao-produto">
          <IonIcon class="icon-produtos" :icon="add" />
          <h2>Novo</h2>
        </div>
      </div>
    </div>
    <div class="container-produto">
      <CardProduto
        @click="productDetails(produto.id)"
        :name="produto.name"
        :codigo="produto.code"
        :categoria="produto.category"
        :preco="produto.price_cost"
        v-for="(produto, index) in produtos"
        :key="index"
      ></CardProduto>
    </div>
  </div>
</template>

<script setup>
import CardProduto from "./components/CardProduto.vue";
import { modalController } from "@ionic/vue";
import { IonIcon, IonInput, IonItem } from "@ionic/vue";
import AddProdutoModal from "./components/AddProdutoModal.vue";
import { add, pencil, albums, search } from "ionicons/icons";
import { onMounted, computed } from "vue";
import { useProdutoStore } from "@/store/produtoStore";
import { useShowProductStore } from "@/store/showProduct";
import DetalheModal from "./components/DetalheModal.vue";
import { useEditProductStore } from "@/store/editProduct";

const editProducsStore = useEditProductStore();
const showProductStore = useShowProductStore();
const produtoStore = useProdutoStore();
const produtos = computed(() => produtoStore.produtos);

onMounted(() => {
  getProdutos();
});

const productDetails = async (id) => {
  try {
    const response = await showProductStore.useShowProduct(id);

    const modal = await modalController.create({
      component: DetalheModal,
      componentProps: {
        produto: response,
      },
    });

    modal.onDidDismiss().then(async ({ data, role }) => {
      if (role === "save" && data) {
        await editProducsStore.editarProdutos(data, id);
        await getProdutos();
      }
    });

    modal.present();
  } catch (error) {
    console.error("Error", error);
  }
};

const getProdutos = async () => {
  try {
    await produtoStore.getProdutos();
  } catch (error) {
    console.log("Erro ao buscar produtos:", error);
  }
};

const addItemModal = async () => {
  const modal = await modalController.create({
    component: AddProdutoModal,
    cssClass: "modal-produtos",
  });
  modal.present();
};
</script>
<style src="./produtos.css"></style>
