<template>
  <div class="xp">
    <div class="xp-container">
      <div class="xp-title">OVERVIEW</div>
      <div class="xp-main-box">
        <div class="xp-card">
          <div class="xp-sub-heading"></div>
          <div class="xp-details">
            Software Engineer with a background in architecture/design, sales
            and project management. Curious and fast learner, looking to further
            hone full stack engineering skills. Excellent at independent work
            and time management, but also enthusiastic about collaborative work.
          </div>
        </div>
      </div>
    </div>
    <div class="xp-container">
      <div class="xp-title">EDUCATION</div>
      <div class="xp-main-box">
        <div class="xp-card">
          <div class="xp-sub-heading">COLORADO STATE UNIVERSITY</div>
          <div class="xp-details">Bachelor of Science in Interior Design</div>
        </div>
        <div class="xp-card">
          <div class="xp-sub-heading">TURING SCHOOL OF SOFTWARE & DESIGN</div>
          <div class="xp-details">Back End Engineering</div>
        </div>
        <div class="xp-card">
          <div class="xp-sub-heading">SELF STUDY - SOFTWARE ENGINEERING</div>
          <div class="xp-details">Udemy - Code Academy - The Odin Project</div>
        </div>
      </div>
    </div>
    <div class="xp-container">
      <div class="xp-title">WORK</div>
      <div class="xp-main-box">
        <div class="xp-card">
          <div class="xp-sub-heading">
            <div class="wrapper button-2">
              <a
                href="https://www.visualinterest.com/"
                style="text-decoration: none"
                target="_blank"
                >VISUAL INTEREST</a
              >
            </div>
          </div>
          <div class="xp-role">[Title]</div>
          <div class="xp-details">Submittal Administration Manager</div>
        </div>
        <div class="xp-card">
          <div class="xp-sub-heading">
            <div class="wrapper button-2">
              <a
                href="https://davispartnership.com/"
                style="text-decoration: none"
                target="_blank"
                >DAVIS PARTNERSHIP ARCHITECTS</a
              >
            </div>
          </div>
          <div class="xp-role">[Title]</div>
          <div class="xp-details">Junior Interior / Lighting Designer</div>
        </div>
        <div class="xp-card">
          <div class="xp-sub-heading">
            <div class="wrapper button-2">
              <a
                href="https://bouyea.com/"
                style="text-decoration: none"
                target="_blank"
                >BOUYEA & ASSOCIATES</a
              >
            </div>
          </div>
          <div class="xp-role">[Title]</div>
          <div class="xp-details">Junior Lighting Designer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.xp {
  /* background-color: rgb(213, 213, 213); */
  color: rgb(46, 46, 46);
  padding: 4vh 10vw;
}
.xp-title {
  padding-right: 5vw;
  text-align: right;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
}

.xp-main-box {
  text-align: left;
  padding-left: 6vw;
  border-left: 1px solid white;
}

.xp-container {
  display: flex;
  margin: 3vw;
  justify-content: right;
}

.xp-card {
  background-color: white;
  width: 45vw;
  margin: 10px 0px;
  padding: 2vw;
  border-style: solid;
  border-width: 1px;
  border-color: #47474f;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
}

.xp-sub-heading {
  margin: 0px 0px 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9em;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
}
.xp-details,
.xp-role {
  text-align: right;
}
.xp-role {
  font-weight: 700;
}

.title-box {
  background-color: white;
  height: 10vh;
  border-style: solid;
  border-width: 1px;
  border-color: #47474f;
  filter: drop-shadow(10px 10px 4px #3b3b3b);
}
</style>
