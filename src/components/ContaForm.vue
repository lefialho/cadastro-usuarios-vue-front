<template>
  <form class="cadastro-form">
    <div class="cadastro-form-content mb-3">
      <div class="column" v-if="mostrarDadosLogin">
        <label for="nome">Nome</label>
        <input id="nome" name="nome" type="text" v-model="nome" required />

        <label for="email">Email</label>
        <input id="email" name="email" type="email" v-model="email" required />

        <label for="senha">Senha</label>
        <input
          id="senha"
          name="senha"
          type="password"
          v-model="senha"
          required
        />

        <label for="cpf">CPF</label>
        <input
          id="cpf"
          name="cpf"
          type="text"
          v-model="cpf"
          required
          v-mask="'###.###.###-##'"
          pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
        />

        <label for="pis">PIS</label>
        <input
          id="pis"
          name="pis"
          type="text"
          v-model="pis"
          required
          v-mask="'###.#####.##-#'"
          pattern="\d{3}\.?\d{5}\.?\d{2}-?\d{1}"
        />

        <label for="cep">Cep</label>
        <input
          id="cep"
          name="cep"
          type="text"
          v-model="cep"
          @keyup="preencherCep"
          required
          v-mask="'#####-###'"
        />
      </div>
      <div class="column">
        <label for="pais">País</label>
        <input id="pais" name="pais" type="text" v-model="pais" />

        <label for="estado">Estado</label>
        <input id="estado" name="estado" type="text" v-model="estado" />

        <label for="municipio">Município</label>
        <input
          id="municipio"
          name="municipio"
          type="text"
          v-model="municipio"
        />

        <label for="rua">Rua</label>
        <input id="rua" name="rua" type="text" v-model="rua" />

        <label for="numero">Numero</label>
        <input id="numero" name="numero" type="number" v-model="numero" />

        <label for="complemento">Complemento</label>
        <input
          id="complemento"
          name="complemento"
          type="text"
          v-model="complemento"
        />
      </div>
    </div>

    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { getCep } from "@/services.js";

export default {
  name: "ContaForm",
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "cpf",
        "pis",
        "pais",
        "estado",
        "municipio",
        "cep",
        "rua",
        "numero",
        "complemento",
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO",
    }),
    mostrarDadosLogin() {
      return !this.$store.state.login || this.$route.name === "usuario-editar";
    },
  },
  methods: {
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");

      if (cep.length === 8) {
        getCep(cep)
          .then((response) => {
            console.log(response);
            this.rua = response.data.logradouro;
            this.bairro = response.data.bairro;
            this.estado = response.data.uf;
            this.municipio = response.data.localidade;
            this.complemento = response.data.complemento;
          })
          .catch((erro) => {
            this.cep = response.data.erro;
            console.log(Error(erro));
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cadastro-form {
  display: grid;

  &-content {
    display: flex;
    gap: 2rem;

    * {
      flex: 1;
    }

    @media (max-width: 992px) {
      display: grid;
      gap: 0;
      margin-bottom: 1rem;
    }
  }
}

.button {
  justify-self: start;
  min-width: 200px;
}
</style>
