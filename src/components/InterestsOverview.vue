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
            <br />
            <p>[SOME FAVORITES]</p>
            <br />
            <p>- Zelda: Breath of the Wild</p>
            <p>- Elden Ring</p>
            <p>- Minecraft</p>
            <p>- Assassin's Creed: Odyssey</p>
            <p>- Sea of Thieves</p>
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
            <br />
            <p>[SOME FAVORITE MOVIES]</p>
            <br />
            <p>- Good Will Hunting</p>
            <p>- Dune</p>
            <p>- The Lobster</p>
            <p>- The Man Who Killed Don Quixote</p>
            <p>- Death to Smoochy</p>
            <p>- Harold and Maude</p>
            <p>- Alien</p>
            <p>- Willow</p>
            <p>- Crouching Tiger Hidden Dragon</p>
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
            <br />
            <p>[CURRENT OBSESSIONS]</p>
            <br />
            <p>- Ancient Egypt</p>
            <p>- The Victorian Era</p>
            <p>- Castle Design / Building</p>
            <p>- Historic Sewing / Cooking</p>
            <p>- Ghost Towns</p>
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
            <br />
            <p>[RECENT ENDEAVORS]</p>
            <br />
            <p>- Software Engineering</p>
            <p>- How to play Elden Ring</p>
            <p>- How to care for rescue cats</p>
            <p>- Minecraft village mechanics</p>
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
            <br />
            <p>[RECENT PURSUITS]</p>
            <br />
            <p>- Daily Walks</p>
            <p>- Donut Dash 5K</p>
            <p>- Yin Yoga</p>
            <p>- Hiking!</p>
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
  /* margin-left: 3vw;
  margin-top: 1vw; */
  display: flex;
  align-items: center;
}

.int-deets {
  /* margin-left: 3vw; */
  border-left: 1px solid grey;
  width: 25vw;
  padding-left: 10px;
}

.int-title {
  width: 20vw;
  text-align: center;
}
</style>
