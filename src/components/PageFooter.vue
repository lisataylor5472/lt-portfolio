<template>
  <div class="footer">
    <div class="foot-txt">
      <h3>LET'S CONNECT!</h3>
    </div>
    <div class="footer-links">
      <a
        href="https://www.linkedin.com/in/thelisataylor/"
        @click="toggleMobileView"
      >
        <img
          alt="LinkedIn"
          src="https://img.icons8.com/ios-glyphs/60/000000/linkedin.png"
          class="social-icon"
      /></a>

      <a href="https://github.com/lisataylor5472" @click="toggleMobileView">
        <img
          alt="GitHub"
          src="https://img.icons8.com/ios-glyphs/60/000000/github.png"
          class="social-icon"
      /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  height: 23vh;
  background-color: rgb(213, 213, 213);
  color: rgb(11, 11, 11);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid black;
}

.foot-txt {
  border-right: 1px solid grey;
  margin: 20px;
  padding: 15px;
}
</style>
