<template>
  <div class="background-image">
    <div class="code-overview">
      <h2 id="video-games-link">BUILDING SKILLS IN</h2>
      <div class="divider grey"></div>
      <div class="tri-column">
        <h3 class="code">Languages</h3>
        <p>Ruby</p>
        <p>HTML / CSS / JS</p>
        <p>Python</p>
        <p>SQL</p>
      </div>
      <div class="tri-column">
        <h3 class="code">Frameworks</h3>
        <p>Rails</p>
        <p>Vue.js</p>
      </div>
      <div class="tri-column">
        <h3 class="code">Hosting</h3>
        <p>Netlify</p>
        <p>Heroku</p>
        <p>AWS</p>
      </div>
      <div class="tri-column">
        <h3 class="code">Tools</h3>
        <p>GitHub / Git</p>
        <p>Postico</p>
        <p>Postman</p>
      </div>
      <div class="tri-column">
        <h3 class="code">Concepts</h3>
        <p>Test Driven Design</p>
        <p>CRUD</p>
        <p>Model-View-Controller</p>
        <p>Object Oriented Programming</p>
      </div>
      <div class="tri-column">
        <h3 class="code">Databases</h3>
        <p>Relational</p>
        <p>One-to-Many</p>
        <p>Many-to-Many</p>
      </div>
    </div>
    <RecentProjects />
  </div>
</template>

<script>
import RecentProjects from "@/components/RecentProjects.vue";

export default {
  name: "CodingView",
  components: {
    RecentProjects,
  },
};
</script>

<style scoped>
h3.code {
  margin: 0px 0px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
}

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
  text-align: center;
  background-attachment: fixed;
}

.code-overview {
  bottom: 0px;
  color: #333;
  margin: 125px 10% 50px;
  padding-top: 20px;
  padding-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px 1px 2px;
  border-color: #47474f;
}

@media screen and (max-width: 767px) {
  .tri-column {
    width: 80%;
    left: auto;
    right: auto;
    margin-bottom: 10px;
  }
  .button-1 {
    width: 60%;
  }
  p {
    margin: 0px;
  }
  h3.code {
    margin: 0px 0px 5px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>
