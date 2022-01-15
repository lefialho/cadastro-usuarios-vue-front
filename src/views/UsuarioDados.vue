<template>
  <div>
    <h2 class="subtitle">Dados do Usuário</h2>
    <ul class="user-main">
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/user.svg#user"></use>
          </svg>
        </figure>
        <b>Nome:</b> {{ this.$store.state.usuario.nome }}
      </li>
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/email.svg#email"></use>
          </svg>
        </figure>
        <b>E-mail:</b> {{ this.$store.state.usuario.email }}
      </li>
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/document.svg#document"></use>
          </svg>
        </figure>
        <b>CPF:</b> {{ this.$store.state.usuario.cpf }}
      </li>
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/document.svg#document"></use>
          </svg>
        </figure>
        <b>PIS:</b> {{ this.$store.state.usuario.pis }}
      </li>
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/senha.svg#senha"></use>
          </svg>
        </figure>
        <b>Senha:</b> {{ this.$store.state.usuario.senha }}
      </li>
    </ul>

    <h2 class="subtitle">Endereço do Usuário</h2>
    <ul class="user-adress">
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/country.svg#country"></use>
          </svg>
        </figure>
        <b>País:</b> {{ this.$store.state.usuario.pais }}
      </li>
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/uf.svg#uf"></use>
          </svg>
        </figure>
        <b>Estado:</b> {{ this.$store.state.usuario.estado }}
      </li>
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/home.svg#home"></use>
          </svg>
        </figure>
        <b>Município:</b> {{ this.$store.state.usuario.municipio }}
      </li>
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/cep.svg#cep"></use>
          </svg>
        </figure>
        <b>CEP:</b> {{ this.$store.state.usuario.cep }}
      </li>
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/street.svg#street"></use>
          </svg>
        </figure>
        <b>Rua:</b> {{ this.$store.state.usuario.rua }}
      </li>
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/number.svg#number"></use>
          </svg>
        </figure>
        <b>Número:</b> {{ this.$store.state.usuario.numero }}
      </li>
      <li>
        <figure>
          <svg class="icon">
            <use xlink:href="../assets/img/complemento.svg#complemento"></use>
          </svg>
        </figure>
        <b>Complemento:</b> {{ this.$store.state.usuario.complemento }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UsuarioDados",
};
</script>

<style scoped lang="scss">
.subtitle {
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.user-main {
  margin-bottom: 2rem;
}

li {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--light-gray);
  }
}
</style>
