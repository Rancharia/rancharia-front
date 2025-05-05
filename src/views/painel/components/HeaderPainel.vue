<template>
  <header class="header-rancharia">
    <img
      class="logo-header"
      src="@/assets/logo/RanchariaLogoPetro.png"
      alt=""
    />
    <div class="icones-direita">
      <ion-icon
        @click="fetchLogout"
        :icon="arrowBack"
        class="icon sino"
      ></ion-icon>
      <ion-icon :icon="notifications" class="icon sino"></ion-icon>
      <ion-icon :icon="person" class="icon person"></ion-icon>
    </div>
  </header>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import { person, notifications, arrowBack } from "ionicons/icons";
import { useLogoutStore } from "@/store/logoutStore";

import { useRouter } from "vue-router";
const router = useRouter();

const fetchLogout = async () => {
  try {
    await useLogoutStore().userLogout();
    router.push({ name: "login" });
  } catch (error) {
    console.log("Falha no logout:", error);
  }
};

</script>
<style scoped>
.header-rancharia {
  position: absolute;
  width: 100%;
  padding: 0px 40px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: #f3f3f3;
  height: 57px;
}

.logo-header {
  width: 170px;
  height: 36px;
}

.icon {
  cursor: pointer;
  color: var(--primary);
}
.person {
  width: 30px;
  height: 32px;
}
.sino {
  width: 30px;
  height: 26px;
}
.menu {
  width: 29px;
  height: 18px;
}
.icones-direita {
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
}
</style>
