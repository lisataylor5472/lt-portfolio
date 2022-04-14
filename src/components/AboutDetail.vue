<template>
  <div class="about">
    <div class="about-img">
      <img src="../assets/baby-lisa.jpg" class="baby-lisa" />
      <p>Fig. A</p>
    </div>
    <div class="about-text">
      <div class="subtitle">A 'Little' Intro...</div>
      <!-- <div class="divider grey"></div> -->
      <p class="bio">
        As a kid I wanted to be an architect. I gave it a try, but found I
        didn't love how subjective it could be. After navigating the world of
        design and construction for a number of years (trying to find more
        objective niches) - I decided to pivot to the world of computers and
        software engineering. It is a much better fit.
        <br />
        <br />
        I've always been a bit of a 'taskmaster' (see Fig. A). I like to get
        things done, but have fun along the way. I love to laugh and enjoy the
        simple things in life. In my freetime I like to play video games, do
        puzzles, organize things, learn something new - really any sort of
        activity that is 'goal' oriented. I'm uncomfortable at parties, but
        conveniently become very charismatic when I'm nervous.
        <br />
        <br />
        Below is a little summary of my journey and interests!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.baby-lisa {
  width: 20vw;
  height: 20vw;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgb(49, 49, 49);
  filter: drop-shadow(5px 5px 4px #9d9d9d);
}

.about {
  color: #333;
  margin: 10px 10% 40px;
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
</style>
