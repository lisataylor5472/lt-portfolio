<template>
  <div class="background-image">
    <AboutDetail />
    <PastLives />
    <InterestsOverview />
  </div>
</template>

<script>
import AboutDetail from "@/components/AboutDetail.vue";
import InterestsOverview from "@/components/InterestsOverview.vue";
import PastLives from "@/components/PastLives.vue";

export default {
  name: "HomeView",
  components: {
    AboutDetail,
    InterestsOverview,
    PastLives,
  },
};
</script>

<style scoped>
.background-image {
  padding: 15px 0px 100px;
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
  background-attachment: fixed;
}
</style>
