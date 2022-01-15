<template>
  <main class="content">
    <router-view />
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Nunito+Sans:wght@700;900&family=Nunito:wght@700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-wrap: break-word;
}

ul[class] {
  list-style: none;
}

input,
button,
textarea,
select {
  font: inherit;
  padding: 0.5rem;
}
:root {
  // Colors
  --primary: hsl(196, 64%, 37%);
  --secondary: hsl(174, 79%, 43%);
  --danger: hsl(17, 100%, 70%);
  --light-gray: hsl(0deg 0% 95%);
  --dark-gray: hsl(0deg 0% 50%);
  --gray: hsl(0deg 0% 80%);

  // Fonts
  --base-font: "Montserrat", sans-serif;
  --secondary-font: "Nunito Sans", sans-serif;

  // Shadows
  --base-shadow: 0deg 0% 0% / 0.050;
  --shadow-1: 1px 2px 3px hsl(0deg 0% 0% / 0.070);
  --shadow-2: 1px 2px 2px hsl(var(--base-shadow)),
    2px 4px 4px hsl(var(--base-shadow)), 3px 6px 6px hsl(var(--base-shadow));
  --shadow-3: 0 1px 1px hsl(var(--base-shadow)),
    0 2px 2px hsl(var(--base-shadow)), 0 4px 4px hsl(var(--base-shadow)),
    0 8px 8px hsl(var(--base-shadow)), 0 16px 16px hsl(var(--base-shadow));
  --btn-shadow: 1px 1px 1px hsl(206, 90%, 75%), 2px 2px 4px hsl(206, 90%, 75%);
}

body {
  background-color: var(--light-gray);
  height: 100vh;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--base-font);
  line-height: 1.5;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    align-items: stretch;
    height: auto;
  }
}

.content {
  flex: 1;
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--shadow-3);
  margin: 4rem;
  max-width: 1440px;
  overflow: hidden;

  @media (max-width: 992px) {
    border-radius: 0px;
    min-height: auto;
    margin: 0rem;
    overflow: inherit;
  }
}

input {
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid var(--gray);
  outline: none;
  box-shadow: var(--shadow-1);

  &:focus {
    border-color: var(--secondary);
  }
}

label {
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
  color: var(--dark-gray);
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.title {
  font-family: var(--secondary-font);
  font-weight: 900;
  line-height: 1;
}

.subtitle {
  font-family: var(--secondary-font);
  font-weight: 700;
}

ul {
  color: var(--dark-gray);
}

b {
  font-weight: 900;
}

button {
  font-family: var(--secondary-font);
  border: none;
  background-color: hsl(174, 79%, 43%);
  color: white;
  font-size: 1.15rem;
  padding: .75rem 1rem;
  border-radius: 60px;
  min-width: 200px;
  box-shadow: var(--shadow-2);

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px white, 0 0 0 4px var(--primary);
  }
}

.btn-remover-usuario {
  background-color: var(--danger);
  color: white;
}

figure {
  display: grid;
  place-content: center;

  .icon {
    width: 22px;
    height: 22px;
    stroke: var(--secondary);
  }
}
</style>
