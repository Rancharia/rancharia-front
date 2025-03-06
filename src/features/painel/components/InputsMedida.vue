<template>
  <div class="input-medida">
    <h1 class="titulo-medida">{{ TituloProps }}</h1>
    <div class="radio-componente">
      <div class="radio">
        <input 
        class="medida-radio" 
        id="medida"
         type="radio"
          name="grupo-medidas"
           />
        <label class="label-unidade-medida" for="medida">{{ MedidaProps }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  TituloProps: {
    type: String,
    required: false,
  },
  MedidaProps: {
    type: String,
    required: true,
  },
})

</script>

<style scoped>
.input-medida {
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.radio-componente {
  display: flex;
  gap: 18px;
}
.titulo-medida {
  margin: 0;
  color: #6e6e6c;
  font-size: 11px;
  font-weight: 600;
}
.radio {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.label-unidade-medida {
  font-weight: 300;
  font-family: Poppins;
  font-size: 11px;
  color: #6e6e6c;
}

.medida-radio {
  appearance: none;
  width: 12px;
  height: 12px;
  border: 1px solid #6e6e6c;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  line-height: 0; 
}

.medida-radio:checked {
  border-color: #ac6200;
  background-color: transparent;
}

.medida-radio:checked::before {
  content: "";
  width: 6px;
  height: 6px;
  background-color: #ac6200;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
}
</style>
