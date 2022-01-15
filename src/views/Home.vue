<template>
  <div class="intro">
    <aside class="wellcome">
      <h1 class="title"><span>Olá!</span>Visitante</h1>
      <h2 class="subtitle">Seja bem vindo</h2>
      <p>
        Faça o <b>login</b> para acessar o sistema ou selecione a aba
        <b>cadrastre-se</b>, <br> para criar uma nova conta.
      </p>
    </aside>

    <section class="main-form">
      <nav>
        <ul class="navigation">
          <li>
            <router-link :to="{ name: 'login' }">Login</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'cadastro' }">Cadastre-se</router-link>
          </li>
        </ul>
      </nav>
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-bottom: 3rem;

  a {
    font-weight: bold;
    color: var(--primary);
    text-decoration: none;
    padding-bottom: .25rem;

    &.router-link-exact-active {
      color: var(--secondary);
      border-bottom: 1px solid var(--secondary);
    }

    &:focus {
      outline: none;
      border-bottom: 1px solid var(--secondary);
    }
  }
}

.intro {
  display: grid;
  grid-template-columns: 30% 1fr;
  min-height: 740px;
}

.title {
  display: grid;
  margin-bottom: 0.25rem;
  font-size: clamp(2rem, 5vw, 2.5rem);

  span {
    font-size: clamp(1.4rem, 5vw, 2rem);
  }
}

.subtitle {
  font-size: clamp(1rem, 5vw, 1.5rem);
  margin-bottom: 1rem;
  color: white;
}

.wellcome {
  display: grid;
  place-content: center;
  background-color: var(--gray);
  padding: 2rem;
  text-align: right;
  background-color: var(--primary);
  color: white;

  p {
    font-weight: 400;
  }
}

.main-form {
  padding: 2rem;
}

@media (max-width: 992px) {
  .intro {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .wellcome {
    text-align: left;
    place-content: start;

    p {
      display: none;
    }
  }

  .navigation {
    margin-bottom: 1rem;
  }

  .title {
    justify-content: start;
    align-items: center;
    grid-auto-flow: column;
    gap: .5rem;
  }

  .subtitle {
    margin-bottom: 0;
  }
}

@media (max-width: 768px) {
  .wellcome {
    padding: 1rem 1.5rem;
     
    .title {
      margin-bottom: 0;
    }

    .subtitle {
      margin-bottom: 0;
    }
  }

  .main-form {
    padding: 1.5rem;
  }
}
</style>
