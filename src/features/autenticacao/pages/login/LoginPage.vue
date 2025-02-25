<template>
    <InputsLogin class="campo-cadastro" NomePlaceholder="CPF ou e-mail" NomeLabel="Prestador de serviço" />
    <InputsLogin class="campo-senha" NomePlaceholder="Insira sua senha" NomeLabel="Senha"/>
    <AvisoLogin class="aviso" descricaoAviso="Login ou senha inválidos"/>
    <ButtonLogin @click="toInicio" class="botao-acesso" NomeBotao="Acessar"/>
</template>

<script setup>
import AvisoLogin from '../../components/AvisoLogin.vue';
import ButtonLogin from '../../components/ButtonLogin.vue';
import InputsLogin from '../../components/InputsLogin.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const toInicio = () => {
    router.push("/painel/inicio")
}

</script>

<style src="/src/features/autenticacao/pages/login/login.css"></style>
