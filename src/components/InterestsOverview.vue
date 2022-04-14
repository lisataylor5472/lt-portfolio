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
          <h2>VIDEO GAMES</h2>
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
          <h2>MOVIES / TV</h2>
          <div class="int-deets">
            <br />
            <p>[FAVORITE MOVIES]</p>
            <br />
            <p>- Good Will Hunting</p>
            <p>- Dune</p>
            <p>- The Lobster</p>
            <br />
            <p>[FAVORITE TV SHOWS]</p>
            <br />
            <p>- Star Trek (the original series)</p>
            <p>- The Witcher</p>
            <p>- Maniac</p>
            <p>- Downton Abbey</p>
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
          <h2>HISTORY</h2>
          <div class="int-deets">
            <br />
            <p>[CURRENT OBSESSIONS]</p>
            <br />
            <p>- Ancient Egypt</p>
            <p>- The Victorian Era</p>
            <p>- Castle Design / Building</p>
            <p>- Historic Sewing / Cooking / Chores</p>
            <p>- Ghost Towns</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="int-block"><div class="int-text-r">LEARNING</div></div>
    <div class="int-block">
      <img src="../assets/learning.jpg" alt="Learning" class="int-img" />
    </div>
    <div class="int-block">
      <img src="../assets/funrun.jpg" alt="Running Shoe" class="int-img" />
    </div>
    <div class="int-block">
      <div class="int-text-l">FUN RUNS / HIKES</div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.interests {
  background-color: rgb(255, 255, 255);
  padding: 60px;
  margin-bottom: 20px;
  color: black;
  justify-content: center;
}
.int-row {
  display: flex;
  justify-content: left;
  align-items: flex-start;
  border: 1px solid black;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  margin: 0 12vw 3vw;
}
.int-img {
  width: 30vw;
  height: 30vw;
  object-fit: cover;
  margin: 0;
}

.int-block {
  line-height: 0;
}

.int-text {
  text-align: left;
  margin-left: 3vw;
  margin-top: 3vw;
}
</style>
