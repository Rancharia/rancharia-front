<template>
    <button :class="['block-button', buttonClass]">
      <slot></slot> Botao
    </button>
  </template>
  
  <script>
  export default {
    name: "BlockButton",
    props: {
      buttonClass: {
        type: String,
        default: "",
      },
    }
  };
  </script>
  
  <style scoped>
  .block-button {
    display: block; 
    width: 100%;
    padding: 10px 20px; 
    font-size: 16px;
    text-align: center;
    background-color: #007bff; 
    color: #fff; 
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
  }
  
  .block-button:hover {
    background-color: #0056b3; 
  }
  
  </style>
  