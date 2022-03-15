<template>
  <div class="grey-section">
    <div class="w-container">
      <h2>RECENT PROJECTS</h2>
      <div class="divider grey"></div>
      <div class="w-row">
        <div class="tri-column">
          <a
            style="text-decoration: none"
            href="https://github.com/lisataylor5472/lt-portfolio"
            target="-blank"
          >
            <div class="wrapper">
              <h3>This Web Portfolio</h3>
              <div>Vue.js/HTML/CSS</div>
            </div>
          </a>
        </div>
        <div class="tri-column">
          <a
            style="text-decoration: none"
            href="https://github.com/lisataylor5472/little_esty_shop_bulk_discounts"
            target="-blank"
          >
            <div class="wrapper">
              <h3>little online shop</h3>
              <div>CRUD / MVC</div>
            </div>
          </a>
        </div>
        <div class="tri-column">
          <a
            style="text-decoration: none"
            href="https://github.com/lisataylor5472/relational_rails"
            target="-blank"
          >
            <div class="wrapper">
              <h3>relational rails</h3>
              <div>MVC Practice</div>
            </div>
          </a>
        </div>
      </div>
      <div class="w-row">
        <div class="tri-column">
          <a
            style="text-decoration: none"
            href="https://github.com/lisataylor5472/enigma"
            target="-blank"
          >
            <div class="wrapper">
              <h3>enigma</h3>
              <div>Encrypt/Decrypt</div>
            </div>
          </a>
        </div>
        <div class="tri-column">
          <a
            style="text-decoration: none"
            href="https://github.com/lisataylor5472/battleship"
            target="-blank"
          >
            <div class="wrapper">
              <h3>battleship</h3>
              <div>CLI Game with Ruby</div>
            </div>
          </a>
        </div>
        <div class="tri-column">
          <a
            style="text-decoration: none"
            href="https://gist.github.com/lisataylor5472"
            target="-blank"
          >
            <div class="wrapper">
              <h3>gists</h3>
              <div>GitHub reference notes</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentProjects",
  props: {
    msg: String,
  },
};
</script>
