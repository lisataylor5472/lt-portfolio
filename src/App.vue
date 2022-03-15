<template>
  <h1 class="title">[ lisa taylor ]</h1>
  <nav>
    <ul>
      <li><router-link to="/social">[connect]</router-link></li>
      <li><router-link to="/interests">[interests]</router-link></li>
      <li><router-link to="/coding">[coding]</router-link></li>
      <li><router-link to="/past-lives">[past lives]</router-link></li>
      <li><router-link to="/">[home]</router-link></li>
    </ul>
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
  margin-left: 15px;
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 700;
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
  font-size: 24px;
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

h3.int {
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
  padding: 10px;
  margin-bottom: 30px;
  height: 2vh;
}

nav a {
  font-weight: normal;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ff1c99;
}

.divider {
  display: block;
  width: 80px;
  height: 2px;
  margin: 28px auto;
  background-color: #fff;
}

.divider.grey {
  margin-bottom: 25px;
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
  background-color: rgb(166, 204, 206);
  padding: 40px;
  margin-bottom: 20px;
}

.white-section {
  background-color: rgb(255, 255, 255);
  padding: 40px;
  margin-bottom: 20px;
}

.social {
  display: inline-block;
  width: 300px;
  color: #333;
  padding: 20px 40px 20px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px 1px 2px;
  border-color: #47474f;
  border-radius: 30px 10px;
}

.wrapper {
  position: relative;
  bottom: 0px;
  display: block;
  -webkit-transition: bottom 300ms ease;
  transition: bottom 300ms ease;
  color: #333;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px 1px 2px;
  border-color: #47474f;
  border-radius: 15px;
}

.wrapper:hover {
  bottom: 8px;
}

.button-1 {
  width: 150px;
  display: inline-block;
}

.w-row {
  margin-bottom: 20px;
}

img.interest-image {
  border-radius: 50%;
  width: 225px;
  height: 225px;
  object-fit: cover;
}

.interest {
  position: relative;
  bottom: 0px;
  display: block;
  color: #333;
  margin: 10px 10% 40px;
  padding-top: 20px;
  padding-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px 1px 2px;
  border-color: #47474f;
  border-radius: 30px 10px;
}

.quote {
  position: relative;
  bottom: 0px;
  display: block;
  color: #333;
  padding: 15px 40px 20px;
  margin: 30px 250px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px 1px 2px;
  border-color: #47474f;
  border-radius: 15px;
}

@media screen and (max-width: 767px) {
  .tri-column {
    width: 80%;
    left: auto;
    right: auto;
    margin-bottom: 20px;
  }
  .button-1 {
    width: 60%;
  }
}
@media screen and (max-width: 479px) {
  .tri-column {
    width: 100%;
    left: auto;
    right: auto;
    margin-bottom: 20px;
  }
}
</style>
