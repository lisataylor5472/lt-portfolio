<template>
  <div class="white-section">
    <h2>INTERESTS</h2>
    <p>More info // operable links coming soon!</p>
    <div class="divider grey"></div>
    <div class="w-row">
      <div class="tri-column">
        <img
          src="../assets/videogames.jpg"
          alt="Video Games"
          class="interest-image"
        />
        <router-link
          to="/interests"
          hash="#video-games-link"
          style="text-decoration: none"
        >
          <div class="wrapper button-1">Gaming</div>
        </router-link>
      </div>
      <div class="tri-column">
        <img src="../assets/history.jpg" alt="History" class="interest-image" />
        <router-link
          to="/interests/#history-link"
          style="text-decoration: none"
        >
          <div class="wrapper button-1">History</div>
        </router-link>
      </div>
      <div class="tri-column">
        <img src="../assets/movies.jpg" alt="Movies" class="interest-image" />
        <router-link to="/interests/#movies-link" style="text-decoration: none">
          <div class="wrapper button-1">Movies / TV</div>
        </router-link>
      </div>
    </div>
    <div class="w-row">
      <div class="tri-column">
        <img
          src="../assets/learning.jpg"
          alt="Learning"
          class="interest-image"
        />
        <div class="wrapper button-1">Learning</div>
      </div>
      <div class="tri-column">
        <img
          src="../assets/funrun.jpg"
          alt="Running Shoe"
          class="interest-image"
        />
        <div class="wrapper button-1">Fun Runs</div>
      </div>
      <!-- <div class="tri-column">
        <img
          src="../assets/tablegames.jpg"
          alt="Table Games - Misc"
          class="interest-image"
        />
        <div class="wrapper button-1">Table Games :: Misc</div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>
