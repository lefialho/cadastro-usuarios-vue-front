<template>
  <div class="user">
    <header class="user-header">
      <figure>
        <svg class="user-icon">
          <use xlink:href="../assets/img/user.svg#user"></use>
        </svg>
      </figure>
      <div>
        <span class="ola">Olá!</span>
        <h1 class="title">{{ this.$store.state.usuario.nome }}</h1>
      </div>
    </header>

    <div class="user-content">
      <aside class="user-actions">
        <button
          class=""
          @click="this.$router.push({ name: 'usuario-editar' })"
          ref="userEdit"
        >
          Editar Usuário
        </button>
        <button class="" @click="deslogarUsuario">Deslogar</button>
        <button class="btn-remover-usuario" @click="openModal">
          Remover Usuário
        </button>
      </aside>

      <section class="user-data">
        <router-view v-slot="{ Component }">
          <transition mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </section>

      <Modal v-if="modalActive" @click="closeModalClickOutside">
        <template v-slot:btn-close>
          <button class="btn-modal-close" @click="closeModal">X</button>
        </template>
        <template v-slot:btn-remove>
          <button class="btn-remover-usuario" @click="removerUsuario">
            Remover Usuário
          </button>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { api } from "@/services.js";
import Modal from "@/components/Modal";

export default {
  nome: "Usuario",
  components: {
    Modal,
  },
  data() {
    return {
      btnState: false,
      modalActive: false,
    };
  },
  methods: {
    deslogarUsuario() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/");
    },
    removerUsuario() {
      api
        .delete(`/usuario/${this.$store.state.usuario.id}`)
        .then(() => {
          this.deslogarUsuario();
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    openModal() {
      window.scrollTo(0,0);
      this.modalActive = true;
    },
    closeModal() {
      this.modalActive = false;
    },
    closeModalClickOutside({ target, currentTarget }) {
      if (currentTarget === target) this.modalActive = false;
    },
  },
};
</script>

<style style lang="scss" scoped>
.ola {
  font-family: var(--secondary-font);
  font-size: clamp(1.2rem, 2vw, 2rem);
  line-height: 1;
}

.title {
  font-size: clamp(1.6rem, 3vw, 2rem);
}

.user {
  &-content {
    display: grid;
    grid-template-columns: 280px 1fr;
    min-height: 680px;

    @media (max-width: 992px) {
      min-height: auto;
    }
  }

  &-icon {
    width: clamp(2rem, 5vw, 3rem);
    height: clamp(2rem, 5vw, 3rem);
    stroke: white;
  }

  &-header {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 2rem;
    background-color: var(--primary);
    color: white;
  }

  &-actions,
  &-data {
    padding: 2rem;
  }

  &-actions {
    display: grid;
    align-content: start;
    gap: 1rem;
    border-right: 1px solid var(--light-gray);

    @media (max-width: 700px) {
      grid-auto-flow: row !important;
      padding-top: 0;
      padding-bottom: 2rem;
      order: 2;
    }
  }
}

.btn-modal-close {
  display: grid;
  place-content: center;
  justify-self: end;
  border-radius: 50%;
  min-width: initial;
  width: 15px;
  height: 15px;
  padding: 1rem;
}

@media (max-width: 768px) {
  .user {
    &-content {
      grid-template-columns: 1fr;
    }

    &-header {
      padding: 1rem 1.5rem;
    }

    &-actions {
      grid-auto-flow: column;
      padding: 1.5rem;
    }

    &-data {
      padding: 1.5rem;
    }
  }
}
</style>
