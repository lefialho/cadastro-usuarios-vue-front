<template>
  <div>
    <ContaForm>
      <button class="btn-atualiza-usuario" @click.prevent="atualizarUsuario">
        Atualizar Usuário
      </button>
    </ContaForm>
  </div>
</template>

<script>
import ContaForm from "@/components/ContaForm";
import { api } from "@/services.js";

export default {
  name: 'UsuarioEditar',
  components: {
    ContaForm,
  },
  methods: {
    atualizarUsuario() {
      api
        .put(`/usuario/${this.$store.state.usuario.id}`,
          this.$store.state.usuario
        )
        .then(() => {
          this.$router.push("/usuario");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.btn-atualiza-usuario {
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 0rem;
  }
}
</style>
