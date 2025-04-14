<template>
  <div class="container-principal">
    <h1>Produtos</h1>
    <div class="itens-produto">
      <div class="input-produto">
        <AtnInput icon="search" placeholder="Buscar produto" expand="block" />
      </div>
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
import { IonIcon } from "@ionic/vue";
import { AtnInput } from "atena-core";
import AddProdutoModal from "./components/AddProdutoModal.vue";
import { add, pencil, albums } from "ionicons/icons";
import { onMounted, computed } from "vue";
import { useProdutoStore } from "@/store/produtoStore";

const produtoStore = useProdutoStore();
const produtos = computed(() => produtoStore.produtos);

onMounted(() => {
  getProdutos();
});

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
