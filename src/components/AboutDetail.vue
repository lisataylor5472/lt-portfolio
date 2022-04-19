<template>
  <div class="about">
    <div class="about-img">
      <img src="../assets/baby-lisa.jpg" class="baby-lisa" />
      <p>Fig. A</p>
    </div>
    <div class="about-text">
      <h2>A Little Intro...</h2>
      <!-- <div class="divider grey"></div> -->
      <p class="bio">
        I've always been a bit of a 'taskmaster' (see Fig. A). I like to get
        things done, but have fun along the way. I love to laugh and enjoy the
        simple things in life. In my freetime I like to play video games, do
        puzzles, organize things, learn something new - really any sort of
        activity that is 'goal' oriented. I'm uncomfortable at parties, but
        conveniently become very charismatic when I'm nervous.
        <br />
        <br />
        Below is a little summary of my journey and interests. Don't hesitate to
        reach out via LinkedIn if you'd like to know more!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.baby-lisa {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgb(49, 49, 49);
  filter: drop-shadow(5px 5px 4px #9d9d9d);
}

.about {
  color: #333;
  margin: 100px 10% 40px;
  padding: 20px 20px 20px 20px;
  margin-bottom: 40px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px;
  border-color: #47474f;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
  display: flex;
}

.about-text {
  text-align: center;
  margin-left: 5vw;
}

@media screen and (max-width: 690px) {
  .about {
    flex-direction: column;
    width: 90vw;
    margin: auto;
    margin-top: 100px;
  }

  .about-text {
    margin: 0;
  }
}
</style>
