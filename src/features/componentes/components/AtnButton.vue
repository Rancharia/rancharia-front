<template>
  <button  v-muda-background :class="['default', expand]">
    <IonIcon class="icon" :icon="icon" />
    <slot></slot>
   
  </button>
</template>

<script setup>
import * as icons from "ionicons/icons";
import { IonIcon } from "@ionic/vue";
import { onMounted } from "vue";
import { ref } from "vue";
const props = defineProps({
  expand: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  icone: {
    type: String,
    default: "",
  },

});
const icon = ref(icons[props.icone])

onMounted(() => {
  console.log("valor:" + props.backgroundColor);
});

const vMudaBackground = {
  mounted: (el) => {
    el.style.backgroundColor = props.backgroundColor;
  },
};


</script>

<style scoped>
.default {
  gap:6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  background: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.default::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: rgb(40, 19, 144);
}

.default:hover::before {
  filter: contrast(0.75);
}

.block {
  width: 100%;
}
.icon{
  width: 20px;
}

</style>
