<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div class="header-image">
    <h1 class="main-heading">I'M LISA.</h1>
    <div class="divider"></div>
    <div class="main-subtitle">
      <p>Lighting Designer turned Software Engineer.</p>
      <button>
        <router-link to="/past-lives" style="text-decoration: none"
          >the deets...</router-link
        >
      </button>
    </div>
  </div>

  <recent-projects></recent-projects>
</template>

<script>
//@ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// };
import RecentProjects from "@/components/RecentProjects.vue";

export default {
  name: "HomeView",
  components: {
    RecentProjects,
  },
};
</script>

<style>
.header-image {
  padding: 80px 0px 80px;
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 0%, 0.5),
      hsla(0, 0%, 90%, 0.5)
    ),
    url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  background-position: 0px 0px, 50% 40%;
  background-size: auto, cover;
  color: #fff;
  text-align: center;
}

.main-heading {
  font-family: "Inconsolata";
}

.main-subtitle {
  font-style: bold;
}

button {
  display: inline-block;
  padding: 12px 26px;
  border-style: solid;
  border-width: 1px 1px 2px;
  border-color: #47474f;
  border-radius: 15px;
  background-color: #fff;
  -webkit-transition: margin-bottom 300ms ease;
  transition: margin-bottom 300ms ease;
  font-family: "Inconsolata", monospace;
  color: #47474f;
  font-size: 14px;
  text-align: center;
}
</style>
