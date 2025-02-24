<template>
    <div class="pedidos">
        <div class="pesquisa">
            <h1>Pedidos</h1>
            <div class="pesquisar-pedidos">
                <ion-icon class="icon-pesquisa" :icon="search"></ion-icon>
                <input placeholder="Buscar número ou nome" type="text">
            </div> 
        </div>
        <div class="pedidos-em-andamento">
            <div>
                <h1>Pedidos em andamento</h1>
            </div>
            <div  class="pedidos-em-andamento-grid">
                <PedidosAndamento numeroDoPedido="01" />
                <PedidosAndamento numeroDoPedido="02" />
                <PedidosAndamento numeroDoPedido="03" />
                <PedidosAndamento numeroDoPedido="04" />
                <PedidosAndamento numeroDoPedido="05" />
                <PedidosAndamento numeroDoPedido="06" />
                <PedidosAndamento numeroDoPedido="07" />
                <PedidosAndamento numeroDoPedido="08" />
                <PedidosAndamento numeroDoPedido="09" />
                <PedidosAndamento numeroDoPedido="10" />
                <PedidosAndamento numeroDoPedido="11" />
                <PedidosAndamento numeroDoPedido="12" />
            </div>
        </div>
        <div class="mesas-livres">
            <div>
                <h1>Mesas/ Comandas livres</h1>
            </div>
            <div class="mesas-livres-grid">
                <MesasLivres numerodaMesa="01" />
                <MesasLivres numerodaMesa="02" />
                <MesasLivres numerodaMesa="03"/>
                <MesasLivres numerodaMesa="04" />
            </div>
        </div>
    </div>
</template>

<script setup>
import MesasLivres from '../../components/MesasLivres.vue';
import PedidosAndamento from '../../components/PedidosAndamento.vue';
import { IonIcon } from '@ionic/vue';
import { search } from 'ionicons/icons';
</script>

<style src="/src/features/painel/pages/Pedidos/pedidos.css"></style>