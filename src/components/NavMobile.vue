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
  position: fixed;
  background-color: #fff;
  height: 100%;
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    list-style-type: none;

    .list-item {
      margin-bottom: 16px;
      padding: 10px;
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
      color: #000000;
      text-decoration: none;

      .nav-link:hover {
        border-bottom-color: #7cdae2;
      }
    }
  }
}
</style>
