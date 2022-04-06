<template>
  <div class="bgd-social">
    <div class="social">
      <h2>Let's connect!</h2>
      <div class="wrapper button-1">
        <a
          href="https://www.linkedin.com/in/thelisataylor/"
          style="text-decoration: none"
          target="_blank"
          >LinkedIn</a
        >
      </div>
      <div class="wrapper button-1">
        <a
          href="https://github.com/lisataylor5472"
          style="text-decoration: none"
          target="_blank"
          >GitHub</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.social {
  display: inline-block;
  width: 300px;
  color: #333;
  padding: 20px 40px 20px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px 1px 2px;
  border-color: #47474f;
  border-radius: 30px 10px;
  margin: 30px;
  margin-top: 75px;
}

.bgd-social {
  padding: 15px 0px 100px;
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 0%, 0.5),
      hsla(0, 0%, 90%, 0.5)
    ),
    url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  background-position: 0px 0px, 50% 40%;
  background-size: auto, cover;
  color: #fff;
  text-align: center;
  background-attachment: fixed;
}
</style>
