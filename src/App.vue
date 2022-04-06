<template>
  <div id="app">
    <div class="top-bar">
      <router-link to="/" class="nav-link"
        ><h1 class="title">[ lisa taylor ]</h1></router-link
      >
      <div class="nav-mobile" :class="{ open: showNav }">
        <NavMobile />
      </div>
      <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
        <img src="./assets/icons8-menu-32.png" />
      </div>
      <NavBar v-if="!mobileView" />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import NavMobile from "@/components/NavMobile.vue";

export default {
  data: () => {
    return {
      mobileView: false,
      showNav: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 768;
    },
  },
  components: {
    NavBar,
    NavMobile,
  },
  created() {
    this.handleView();
  },
};
</script>

<style>
a,
a:visited {
  color: inherit;
}

#app {
  font-family: "Inconsolata", monospace;
  font-size: 0.9em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navigation-icon {
  /* display: inline-block; */
  justify-content: right;
  position: absolute;
  top: 15px;
  right: 15px;
}

.top-bar {
  padding: 0px;
  height: 75px;
}

.title {
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  width: 200px;
  justify-content: left;
  position: absolute;
  top: 10px;
  left: 15px;
}

.nav-mobile {
  display: none;
}

.open {
  display: block;
}

h2 {
  margin: 0px 0px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  line-height: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #2c3e50;
}

h3 {
  margin: 0px 0px 10px;
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
  background-color: rgb(211, 211, 211);
  padding: 40px;
  margin-bottom: 20px;
}

.white-section {
  background-color: rgb(255, 255, 255);
  padding: 40px;
  margin-bottom: 20px;
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
