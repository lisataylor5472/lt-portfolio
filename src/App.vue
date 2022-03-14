<template>
  <nav>
    <h1 class="title">[ lisa taylor ]</h1>
    <div class="nav-links">
      <ul>
        <li><router-link to="/social">[connect]</router-link></li>
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
  font-family: "Inconsolata", monospace;
  font-size: 0.9em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  text-decoration: none;
}

.title {
  float: left;
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
}

h1 {
  font-family: "Montserrat", serif;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 38px;
  font-weight: 700;
}

h2 {
  margin: 0px 0px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-transform: uppercase;
}

h3 {
  margin: 0px 0px 20px;
  font-family: "Montserrat", sans-serif;
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

.grey-section {
  background-color: rgb(236, 236, 236);
  padding: 40px;
  margin-bottom: 20px;
}

.project-wrapper {
  position: relative;
  bottom: 0px;
  display: block;
  -webkit-transition: bottom 300ms ease;
  transition: bottom 300ms ease;
  color: #333;
}

.project-wrapper:hover {
  bottom: 8px;
}

.project-info {
  margin-top: 10px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px 1px 2px;
  border-color: #47474f;
  border-radius: 15px;
}

@media screen and (max-width: 767px) {
  .tri-column {
    width: 100%;
    left: auto;
    right: auto;
  }
}
@media screen and (max-width: 479px) {
  .tri-column {
    width: 100%;
    left: auto;
    right: auto;
  }
}
</style>
