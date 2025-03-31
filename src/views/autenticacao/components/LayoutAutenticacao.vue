<template>
  <ion-page>
    <ion-content>
      <div class="pagina-conteudo">
        <div class="div-imagem-login"></div>
        <div class="conteudo-centralizado">
          <img
            class="logo-restaurante"
            src="@/assets/logo/RanchariaLogoPetro.png"
            alt="logo do restaurante"
          />
          <div class="container-branco">
            <router-view></router-view>
          </div>
          <p class="rodape-autenticacao">Versão 0.0.1 - Atena agência</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
</script>

<style scoped>
.logo-restaurante {
  margin-bottom: 68px;
  width: 360px;
  height: 85px;
}
.pagina-conteudo {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #F5F5F5;
  align-items: center;
}

.container-branco {
  background-color: rgb(255, 255, 255);
  width: 433px;
  border-radius: 32px;
  padding: 41px 28px;
}
.rodape-autenticacao {
  font-family: Poppins, Arial;
  font-weight: 300;
  color: var(--secondary);
  position: fixed;
  bottom: 0;
  padding-bottom: 67px;
  font-size: 12px;
}

.conteudo-centralizado {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.div-imagem-login{
  width: 50%;
  height: 100vh;
  background-image: url("@/assets/ImgLogin/RanchariaLogin.png");
  background-size: cover;
}
</style>
