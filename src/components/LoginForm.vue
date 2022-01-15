<template>
  <form class="form" @submit.prevent="logar">
    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      focus
      v-model="login.email"
      required
    />
    <label for="cpf">CPF</label>
    <input
      type="text"
      name="cpf"
      id="cpf"
      v-model="login.cpf"
      required
      v-mask="'###.###.###-##'"
      pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
    />
    <label for="cpf">Senha</label>
    <input
      type="password"
      name="senha"
      id="senha"
      v-model="login.senha"
      required
    />
    <button class="btn-logar">Logar</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      login: {
        email: "",
        cpf: "",
        senha: "",
      },
    };
  },
  methods: {
    logar() {
      this.$store.dispatch("getUsuario", this.login.email);
      this.$router.push("/usuario");
    },
  },
};
</script>

<style scoped lang="scss">
.btn-actions {
  margin-top: 1rem;
}

.btn-logar {
  justify-self: start;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
}
</style>
