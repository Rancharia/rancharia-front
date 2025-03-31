<template>
  <div><label>{{ LabelProps }}</label> <input :style="{ width: InputWidth }" :type="TypeInput" /></div>
</template>

<script setup>
defineProps({
    LabelProps: {
        type: String,
        required: true
    },
    InputWidth:{
        type: String, 
        required: false
    },
    TypeInput:{
        type: String, 
        required: true,
    }
})
</script>
<style scoped>
label{
    color: #6E6E6C;
    font-size: 11px;
}
input{
    background-color: #F3F3F3;
    border-radius: 15px;
    border: none;
    outline: none;
    height: 27px;
    font-size: 9px;
    padding-left: 8px;
    font-weight: normal;
}
div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: 600;
    font-family: Poppins;
}
</style>
