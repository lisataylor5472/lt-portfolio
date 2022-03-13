<template>
  <nav>
    <h1 class="title">[ lisa taylor ]</h1>
    <div class="nav-links">
      <ul>
        <li><router-link to="/social">[social]</router-link></li>
        <li><router-link to="/interests">[interests]</router-link></li>
        <li><router-link to="/coding">[coding]</router-link></li>
        <li><router-link to="/past-lives">[past lives]</router-link></li>
        <li><router-link to="/">[home]</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Courier, Helvetica, Arial, sans-serif;
  font-size: 0.9em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  float: left;
  font-family: Oswald, sans-serif;
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
}

h1 {
  font-family: Tahoma, serif;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 38px;
  font-weight: 700;
}

h3 {
  margin: 0px 0px 20px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-transform: uppercase;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: right;
}

li a {
  display: block;
  padding: 12px;
}

nav {
  padding: 20px;
  margin-bottom: 40px;
}

nav a {
  font-weight: normal;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ff1c99;
}

.nav-links {
  float: right;
}

.divider {
  display: block;
  width: 80px;
  height: 2px;
  margin: 28px auto;
  background-color: #fff;
}

.divider.grey {
  margin-bottom: 43px;
  background-color: rgba(0, 0, 0, 0.09);
}

.tri-column {
  position: relative;
  display: inline-block;
  padding-left: 3%;
  padding-right: 3%;
  width: 26%;
  vertical-align: text-top;
}
</style>
