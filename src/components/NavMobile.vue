<template>
  <div class="navigation">
    <ul>
      <li class="list-item">
        <router-link to="/" class="nav-link">[home]</router-link>
      </li>
      <li class="list-item">
        <router-link to="/past-lives" class="nav-link">[about me]</router-link>
      </li>
      <li class="list-item">
        <router-link to="/coding" class="nav-link">[portfolio]</router-link>
      </li>
      <li class="list-item">
        <router-link to="/social" class="nav-link">[connect]</router-link>
      </li>
    </ul>
  </div>
  <div class="social-media">
    <i class="fab fa-twitter"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-pinterest"></i>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  width: 100vw;
  min-height: 100vh;
  padding: 16px;
  text-align: right;

  ul {
    list-style: none;

    li {
      margin-bottom: 16px;
      text-transform: uppercase;
      border-bottom: 2px solid transparent;
      -webkit-transition: border-color 300ms ease;
      transition: border-color 300ms ease;
      font-family: Montserrat, sans-serif;
      color: #404040;
      font-size: 12px;
      font-weight: 400;
      text-transform: uppercase;
      text-decoration: none;
    }

    a {
      color: #fefefe;
      text-decoration: none;

      &:hover,
      &.router-link-exact-active {
        text-decoration: underline;
      }
    }
  }
}
</style>
