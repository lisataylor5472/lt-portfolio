<template>
  <div class="footer">
    <div class="tri-column">
      <div class="box">
        <h4>Thanks for stopping by!</h4>
      </div>
      <div class="divider"></div>
    </div>
    <div class="tri-column">
      <h4>NAVIGATION</h4>
      <div class="footer-btn-wrap button-1">
        <router-link to="/" class="nav-link">home</router-link>
      </div>
      <div class="footer-btn-wrap button-1">
        <router-link to="/past-lives" class="nav-link">about</router-link>
      </div>
      <div class="footer-btn-wrap button-1">
        <router-link to="/coding" class="nav-link">portfolio</router-link>
      </div>
    </div>
    <div class="tri-column">
      <h4>CONNECT</h4>
      <div class="footer-btn-wrap button-1">
        <a
          href="https://www.linkedin.com/in/thelisataylor/"
          style="text-decoration: none"
          target="_blank"
          >LinkedIn</a
        >
      </div>
      <div class="footer-btn-wrap button-1">
        <a
          href="https://github.com/lisataylor5472"
          style="text-decoration: none"
          target="_blank"
          >GitHub</a
        >
      </div>
      <div class="footer-btn-wrap button-1">
        <a
          href="https://replit.com/@LisaTaylor1"
          style="text-decoration: none"
          target="_blank"
          >Replit</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  height: 35vh;
  background-color: rgb(213, 213, 213);
  color: rgb(11, 11, 11);
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 20px;
  border: 1px solid black;
}
.box {
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: #47474f;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
}
.footer-btn-wrap {
  position: relative;
  -webkit-transition: border-color 300ms ease;
  transition: border-color 300ms ease;
  color: #333;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px 1px 2px;
  border-color: #47474f;
  border-radius: 15px;
}

.footer-btn-wrap:hover {
  border-color: #7cdae2;
}

.nav-link {
  text-decoration: none;
}

@media screen and (max-width: 767px) {
  .footer {
    height: 100vh;
    width: 100vw;
    display: inline-block;
  }
}
</style>
