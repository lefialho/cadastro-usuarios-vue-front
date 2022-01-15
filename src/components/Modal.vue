<template>
  <dialog class="modal">
    <div class="modal-container">
      <slot name="btn-close"></slot>
      <h1 class="title">Alerta!</h1>
      <p>Tem certeza que deseja remover esse usuário?</p>
      <slot name="btn-remove"></slot>
    </div>
  </dialog>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style scoped lang="scss">
.modal {
  background: transparent;
  border: 0;
  display: grid;
  place-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 40px;
  
  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &-container {
    display: grid;
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    z-index: 1;
    max-width: 70ch;
    position: relative;
    animation: slide 0.3s ease-out forwards;
  }

  .title {
    margin-bottom: 1rem;
    color: var(--primary);
  }

  p {
    margin-bottom: 2rem;
  }
}

@keyframes slide {
  from {
    transform: translate3d(0, -30px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>