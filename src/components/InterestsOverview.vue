<template>
  <div class="interests">
    <h2>INTERESTS</h2>
    <div class="divider grey"></div>
    <div class="int-row">
      <div class="int-block">
        <img src="../assets/videogames.jpg" alt="Video Games" class="int-img" />
      </div>
      <div class="int-block">
        <div class="int-text">
          <div class="int-title"><h2>VIDEO GAMES</h2></div>
          <div class="int-deets">
            <h4>[SOME FAVORITES]</h4>
            <ul>
              <li>Zelda: Breath of the Wild</li>
              <li>Elden Ring</li>
              <li>Minecraft</li>
              <li>Assassin's Creed: Odyssey</li>
              <li>Sea of Thieves</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="int-row">
      <div class="int-block">
        <img src="../assets/movies.jpg" alt="Movies" class="int-img" />
      </div>
      <div class="int-block">
        <div class="int-text">
          <div class="int-title"><h2>MOVIES</h2></div>
          <div class="int-deets">
            <h4>[SOME FAVORITE MOVIES]</h4>
            <ul>
              <li>Good Will Hunting</li>
              <li>Dune</li>
              <li>The Lobster</li>
              <li>The Man Who Killed Don Quixote</li>
              <li>Death to Smoochy</li>
              <li>Harold and Maude</li>
              <li>Alien</li>
              <li>Willow</li>
              <li>Crouching Tiger Hidden Dragon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="int-row">
      <div class="int-block">
        <img src="../assets/history.jpg" alt="History" class="int-img" />
      </div>
      <div class="int-block">
        <div class="int-text">
          <div class="int-title"><h2>HISTORY</h2></div>
          <div class="int-deets">
            <h4>[CURRENT OBSESSIONS]</h4>
            <ul>
              <li>Ancient Egypt</li>
              <li>The Victorian Era</li>
              <li>Castle Design / Building</li>
              <li>Historic Sewing / Cooking</li>
              <li>Ghost Towns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="int-row">
      <div class="int-block">
        <img src="../assets/learning.jpg" alt="Learning" class="int-img" />
      </div>
      <div class="int-block">
        <div class="int-text">
          <div class="int-title"><h2>LEARNING</h2></div>
          <div class="int-deets">
            <h4>[RECENT ENDEAVORS]</h4>
            <ul>
              <li>Software Engineering</li>
              <li>How to play Elden Ring</li>
              <li>How to care for rescue cats</li>
              <li>Minecraft village mechanics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="int-row">
      <div class="int-block">
        <img src="../assets/funrun.jpg" alt="Running Shoes" class="int-img" />
      </div>
      <div class="int-block">
        <div class="int-text">
          <div class="int-title"><h2>BEING ACTIVE</h2></div>
          <div class="int-deets">
            <h4>[RECENT PURSUITS]</h4>
            <ul>
              <li>Daily Walks</li>
              <li>Donut Dash 5K</li>
              <li>Yin Yoga</li>
              <li>Hiking!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.interests {
  background-color: rgb(255, 255, 255);
  color: black;
  justify-content: center;
  padding: 5vh 0;
  border: 1px solid black;
}
.int-row {
  display: flex;
  justify-content: left;
  align-items: flex-start;
  border: 1px solid black;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  margin: 0 15vw 3vw;
  align-items: center;
}
.int-img {
  width: 20vw;
  height: 20vw;
  object-fit: cover;
  margin: 0;
}

.int-block {
  line-height: 0;
}

.int-text {
  text-align: left;
  display: flex;
  align-items: center;
}

.int-deets {
  border-left: 1px solid grey;
  width: 25vw;
  padding-left: 10px;
  line-height: 1.1;
}

.int-title {
  width: 20vw;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .interests {
    border: none;
  }
  .int-row {
    flex-direction: column;
    width: 80vw;
    margin: 20px auto;
    border-color: rgb(224, 224, 224);
  }

  .int-text {
    flex-direction: column;
  }

  .int-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin: 10px;
  }

  .int-title {
    width: 100%;
    text-align: center;
  }

  .int-deets {
    border: none;
    text-overflow: wrap;
    width: 300px;
    margin-bottom: 20px;
  }
}
</style>
