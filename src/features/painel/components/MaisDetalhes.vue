<template>
  <div class="componente-detalhes">
    <div class="area-de-descricao">
      <label for="descricao">Descrição:</label>
      <textarea
        class="text-area-descricao"
        name="descricao"
        id="descricao"
      ></textarea>
    </div>
    <div class="container-imagem">
      <h2>Imagem</h2>
      <div class="imagem">
        <ion-icon class="camera-icon" :icon="camera" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { camera } from "ionicons/icons";
</script>

<style>
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
.text-area-descricao {
  resize: none;
  background-color: #f3f3f3;
  width: 459px;
  height: 68px;
  border-radius: 15px;
  border: none;
  outline: none;
  font-size: 11px;
  padding: 10px;
}
.area-de-descricao {
  gap: 5px;
  display: flex;
  flex-direction: column;
}
.area-de-descricao label {
  color: #6e6e6c;
  font-size: 11px;
  font-weight: 600;
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
  background-color: #ac6200;
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

.estoque {
  background-color: #6e6e6c;
}
.componente-detalhes{
  display: flex;
  gap: 82px;
}</style>