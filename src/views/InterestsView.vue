<template>
  <div class="background-image">
    <interests-overview></interests-overview>
    <div class="interest">
      <div class="tri-column">
        <h2 id="video-games-link">Gaming</h2>
        <h3 class="int">PLAYING LATELY >></h3>
      </div>
      <div class="tri-column">
        <h3 class="int">[ Video Games ]</h3>
        <p>Minecraft</p>
        <p>Zelda: Breath of the Wild</p>
        <p>Elden Ring</p>
        <p>Assassin's Creed Odyssey</p>
        <p>Witcher 3</p>
      </div>
      <div class="tri-column">
        <h3 class="int">[ Tabletop ]</h3>
        <p>Magic: The Gathering</p>
        <p>King's Dilemma</p>
        <p>Settler's of Catan</p>
        <p>Dune Imperium</p>
      </div>
    </div>
    <div class="interest" id="movies">
      <div class="tri-column">
        <h2 id="movies-link">Movies / TV</h2>
        <h3 class="int">Some Favorites >></h3>
      </div>
      <div class="tri-column">
        <h3 class="int">[ Movies ]</h3>
        <p>Good Will Hunting</p>
        <p>Dune: Part 1</p>
        <p>Dune (1984)</p>
        <p>Good Will Hunting</p>
        <p>The Man Who Killed Don Quixote</p>
        <p>Eternal Sunshine of the Spotless Mind</p>
        <p>Death to Smoochie</p>
        <p>The Great Gatsby</p>
        <p>Willow</p>
        <p>Alien</p>
        <p>Brazil</p>
      </div>
      <div class="tri-column">
        <h3 class="int">[ TV ]</h3>
        <p>Star Trek (the og)</p>
        <p>The Witcher</p>
        <p>The Great</p>
        <p>Metalocalypse</p>
        <p>Mad Men</p>
        <p></p>
      </div>
    </div>
    <div class="interest">
      <div class="tri-column">
        <h2 id="history-link">History</h2>
        <h3 class="int">RECENT RABBIT HOLES >></h3>
      </div>
      <div class="tri-column">
        <p>Historic Sewing/Cooking</p>
        <p>Ancient Egypt</p>
      </div>
      <div class="tri-column">
        <p>Castles. Always Castles.</p>
        <p>Victorian Housekeeping</p>
      </div>
    </div>
    <div class="interest">
      <div class="tri-column">
        <h2 id="history-link">Learning</h2>
        <h3 class="int">Currently Dabbling >></h3>
      </div>
      <div class="tri-column">
        <p>How the f' to play Elden Ring</p>
        <p>Pre-history</p>
      </div>
      <div class="tri-column">
        <p>Vue.js and FE design</p>
        <p>Minecraft Village Mechanics</p>
      </div>
    </div>
    <div class="interest">
      <div class="tri-column">
        <h2>Fun Runs</h2>
        <h3 class="int">Character Building >></h3>
      </div>
      <div class="tri-column">
        <h3 class="int">[ PREVIOUS ]</h3>
        <p>Colfax Marathon Relay</p>
        <p>Donut Dash</p>
      </div>
      <div class="tri-column">
        <h3 class="int">[ Next Event ]</h3>
        <p>The DONUT DASH 5K</p>
      </div>
    </div>
  </div>
</template>

<script>
import InterestsOverview from "@/components/InterestsOverview.vue";

export default {
  name: "InterestsView",
  components: {
    InterestsOverview,
  },
};
</script>
