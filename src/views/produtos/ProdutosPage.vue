<template>
  <div class="container-principal">
    <h1>Produtos</h1>
    <div class="itens-tabela">
      <div class="input-produto">
        <AtnInput icon="search" placeholder="Buscar produto" expand='block' />
      </div>
      <div class="opcoes-geral-tabela">
        <div class="opcao-tabela">
          <IonIcon class="icon-produtos" :icon="albums" />
          <h2>Estoque</h2>
        </div>
        <div class="opcao-tabela">
          <IonIcon class="icon-produtos" :icon="pencil" />
          <h2>Editar</h2>
        </div>
        <div @click="addItemModal" class="opcao-tabela">
          <IonIcon class="icon-produtos" :icon="add" />
          <h2>Novo</h2>
        </div>
      </div>
    </div>
    <div class="container-tabela">
      <table class="tabela-produtos">
        <thead class="head-tabela">
          <tr>
            <th>Código</th>
            <th>Categoria</th>
            <th>Nome</th>
            <th>Preço Custo</th>
            <th>Preço venda</th>
            <th>Medida</th>
            <th>Estoque</th>
            <th>Sit.estoque</th>
            <th>Ficha técnica</th>
            <th>Status venda</th>
          </tr>
        </thead>
        <tbody class="corpo-tabela">
          <tr v-for="(produto, index) in produtos" :key="index">
            <th class="celula">ola</th>
            <th class="celula">ola</th>
            <th class="celula">ola</th>
            <th class="celula">ola</th>
            <th class="celula">ola</th>
            <th class="celula">ola</th>
            <th class="celula">ola</th>
            <th class="celula">ola</th>
            <th class="celula">ola</th>
            <th class="celula">ola</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { modalController } from "@ionic/vue";
import { IonIcon } from "@ionic/vue";
import { AtnInput } from "atena-core"
import AddProdutoModal from "./components/AddProdutoModal.vue";
import { add, pencil, albums } from "ionicons/icons";

const produtos = ["produto1","produto2","produto3"]
const addItemModal = async () => {
    const modal = await modalController.create({
        component: AddProdutoModal,
        cssClass: 'modal-produtos',
    })
    modal.present()
}

</script>
<style src="./produtos.css"></style>
