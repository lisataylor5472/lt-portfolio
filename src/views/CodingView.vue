<template>
  <div class="header-image">
    <div class="quote">
      <blockquote>
        “You know the greatest danger facing us is ourselves, an irrational fear
        of the unknown. But there’s no such thing as the unknown — only things
        temporarily hidden, temporarily not understood.”
      </blockquote>
      <p>- Captain James T Kirk.</p>
    </div>
  </div>
  <div class="white-section">
    <div class="interest">
      <h2 id="video-games-link">BUILDING SKILLS IN</h2>
      <div class="divider grey"></div>
      <div class="tri-column">
        <h3 class="int">Languages</h3>
        <p>Ruby</p>
        <p>HTML / CSS / JS</p>
        <p>Python</p>
        <p>SQL</p>
      </div>
      <div class="tri-column">
        <h3 class="int">Frameworks</h3>
        <p>Rails</p>
        <p>Vue.js</p>
      </div>
      <div class="tri-column">
        <h3 class="int">Hosting</h3>
        <p>Netlify</p>
        <p>Heroku</p>
        <p>AWS</p>
      </div>
      <div class="tri-column">
        <h3 class="int">Tools</h3>
        <p>GitHub / Git</p>
        <p>Postico</p>
        <p>Postman</p>
      </div>
      <div class="tri-column">
        <h3 class="int">Concepts</h3>
        <p>Test Driven Design</p>
        <p>CRUD</p>
        <p>Model-View-Controller</p>
        <p>Object Oriented Programming</p>
      </div>
      <div class="tri-column">
        <h3 class="int">Databases</h3>
        <p>Relational</p>
        <p>One-to-Many</p>
        <p>Many-to-Many</p>
      </div>
    </div>
  </div>
  <recent-projects></recent-projects>
</template>

<script>
import RecentProjects from "@/components/RecentProjects.vue";

export default {
  name: "HomeView",
  components: {
    RecentProjects,
  },
};
</script>
