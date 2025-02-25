<template>
    <div class="mesa-livre">
        <h1>
            {{ numerodaMesa }}
        </h1>
    </div>
</template>

<script setup>
defineProps({
    numerodaMesa:{
        required: true,
        type: String,
    }
})
</script>

<style scoped>
.mesa-livre{
    background-color: #6E6E6C;
    width: 109px;
    height: 109px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.mesa-livre:hover{
    background-color: #5D5D5C;

}
.mesa-livre h1{
    margin: 0;
    font-weight: 300;
    font-size: 35px;
    color: white;
}

</style>