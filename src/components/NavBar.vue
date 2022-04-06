<template>
  <nav class="navbar">
    <ul class="nav-list" id="navi-list">
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
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  -webkit-text-fill-color: inherit;
  justify-content: right;
  position: absolute;
  top: 15px;
  right: 15px;
}

.nav-list {
  list-style-type: none;
}

.nav-list .list-item {
  display: inline-block;
  padding-inline: 10px;
}

.nav-link {
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

.nav-link:hover {
  border-bottom-color: #7cdae2;
}
</style>
