<template>
  <section>
    <transition mode="out-in">
      <ContaForm @submit.prevent="criarUsuario">
        <button class="btn-criar-usuario">Criar Usuário</button>
      </ContaForm>
    </transition>
  </section>
</template>

<script>
import ContaForm from "@/components/ContaForm.vue";

export default {
  name: "CriarUsuario",
  components: {
    ContaForm,
  },
  data() {
    return {
      criar: false,
    };
  },
  methods: {
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        await this.$store.dispatch("getUsuario", this.$store.state.usuario.id);
        this.$router.push("/usuario");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn-criar-usuario {
  margin-top: 2rem;

  @media (max-width: 992px) {
    margin-top: 0rem;
  }
}
</style>
