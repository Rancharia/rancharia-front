<template>
  <ion-page>
    <ion-content>
      <div class="pagina-conteudo">
        <div class="div-imagem-login">
          <img
            class="imagem-login"
            src="/public/imgLogin.png"
            alt="imagem de login"
          />
        </div>
        <div class="conteudo-centralizado">
          <img
            class="logo-restaurante"
            src="../../../../public/RanchariaLogoPetro.png"
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
  overflow: hidden;
  width: 100%;
  height: 100vh;
  gap: 305px;
  display: flex;
  background-color: #F5F5F5;
  align-items: center;
  justify-content: flex-start;
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
.imagem-login {
  margin-right: auto;
  width: 899px;
  height: 100%;
  object-fit: cover
}
.conteudo-centralizado {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
