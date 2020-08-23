<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link
              class="nav__link"
              active-class="nav__link--active"
              exact-active-class="nav__link--exact-active"
              to="/">Level 1
          </router-link>
        </li>
        <li class="nav__item">
          <router-link
              class="nav__link"
              active-class="nav__link--active"
              exact-active-class="nav__link--exact-active"
              to="/Level-2">Level 2
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "styles/variables";
@import "styles/helpers";
body {
  font-family: "Trebuchet MS", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  color: $black;
}

.nav {
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba($white, 0.5);
  width: 100%;
}

.nav__list {
  list-style: none;
  padding: 20px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav__link {
  padding: 10px;
  color: $dark-gray;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    color: $blue;
  }

  &--exact-active {
    color: $blue;
  }
}
</style>
