<template>
  <div class="header-image">
    <h1 class="main-heading">I'M LISA.</h1>
    <div class="divider"></div>
    <div class="main-subtitle">
      <h4>lighting designer turned software engineer.</h4>
    </div>
  </div>
  <AboutMe />
  <RecentProjects />
  <InterestsOverview />
</template>

<script>
import RecentProjects from "@/components/RecentProjects.vue";
import InterestsOverview from "@/components/InterestsOverview.vue";
import AboutMe from "@/components/AboutOverview.vue";

export default {
  name: "HomeView",
  components: {
    RecentProjects,
    InterestsOverview,
    AboutMe,
  },
};
</script>

<style>
.header-image {
  padding: 150px 0px 100px;
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 0%, 0.5),
      hsla(0, 0%, 90%, 0.5)
    ),
    url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  /* background-position: 0px 0px, 50% 40%; */
  background-size: auto, cover;
  text-align: center;
  background-attachment: fixed;
}

.main-heading {
  font-family: "Inconsolata";
  color: #fff;
}

.main-subtitle {
  color: rgb(41, 41, 41);
  margin: 30px 30% 40px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: #47474f;
  filter: drop-shadow(10px 10px 4px #3b3b3b);
}
</style>
