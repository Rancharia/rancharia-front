<template>
    <footer class="footer-rancharia">
        <div class="dados-descricao">
            <h1 class="nome">Christian Gabriel Melo da Silva</h1>
            <div class="line"></div>
            <h1><span class="funcao">Função:</span> Caixa </h1>
        </div>
      <p>@Rancharia</p>
    </footer>
  </template>
  
  <style scoped>
  .footer-rancharia {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Poppins, Arial;
    position: fixed;  
    bottom: 0;        
    left: 0;          
    width: 100%;      
    height: 52px;
    padding: 0 42px 0 42px;
    background-color: var(--primary);
  }
  
  p {
    font-size: 10px;
    color: white;
    font-family: Poppins, Arial;
    margin: 0;
    padding: 27px 0;
  }

.dados-descricao{
    color: white;
    gap: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dados-descricao h1{
    font-size: 14px;
    margin: 0;
}
.nome, .funcao {
    font-weight: 600;
}

.line {
    width: 1px;
    height: 20px; 
    background-color: white;
    margin: 5px 0; 
}
  </style>
  