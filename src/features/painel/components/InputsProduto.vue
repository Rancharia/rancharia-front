<template>
  <div><label>{{ LabelProps }}</label> <input type="text" /></div>
</template>

<script setup>
defineProps({
    LabelProps: {
        type: String,
        required: true
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
}
div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    font-weight: 600;
    font-family: Poppins;
}
</style>
