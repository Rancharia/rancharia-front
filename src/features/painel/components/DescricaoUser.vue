<template>
  <div class="descricao-user">
    <div class="opcoes-redirecionamento">
      <OpcoesRedirecionamento
        @click="redirecionar('inicio')"
        nomeDaRota="Início"
        :IconProps="home"
      />
      <OpcoesRedirecionamento
        @click="redirecionar('pedidos')"
        nomeDaRota="Pedidos"
        :IconProps="create"
      />
      <OpcoesRedirecionamento
        @click="redirecionar('produtos')"
        nomeDaRota="Produtos"
        :IconProps="fastFood"
      />
      <OpcoesRedirecionamento nomeDaRota="Clientes" :IconProps="person" />
      <OpcoesRedirecionamento nomeDaRota="Estoque" :IconProps="grid" />
    </div>
  </div>
</template>

<script setup>
import OpcoesRedirecionamento from "./OpcoesRedirecionamento.vue";
import { home, create, fastFood, person, grid } from "ionicons/icons";
import { useRouter } from "vue-router";

const router = useRouter();
const redirecionar = (nomeRota) => {
  router.push({ name: nomeRota });
};
</script>
<style scoped>
.descricao-user {
  position: absolute;
  width: 100%;
  margin-top: 57px;
  background-color: #ffefda;
  font-family: Poppins, Arial;
  color: black;
  width: 100%;
  height: 40px;
  display: flex;
  align-self: center;
  justify-content: start;
}

.opcoes-redirecionamento {
  padding-left: 35px;
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
