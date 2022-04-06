<template>
  <div class="content">
    <div class="background-image">
      <div class="interest">
        <h2>01. ABOUT ME</h2>
        <div class="divider grey"></div>
        <div>
          <p class="bio">
            I started my professional life in the realm of
            architecture/design/construction. It turns out I'm not as much of an
            artist as I once thought, and that I actually find tedious analysis
            and problem solving to be very fulfilling. This led me on a quest to
            pursue software development and engineering.
          </p>
          <p class="bio">
            In the past decade I've been a student of architecture, an interior
            designer, a lighting designer, an outside sales rep, and a project
            manager. My education has given me a solid foundation in the
            design/programming process within the built environment. But my time
            on the sales/project management helped me hone practical skills in
            time management, prioritization and working effectively with
            customers and a team. I'm finding that these skills are very
            pertinent to computer programming.
          </p>
          <p class="bio">
            As a software developer, I am able to use my strengths in critical
            thinking, logic, creative problem solving, as well as design, on a
            daily basis. I enjoy the process of test driven development and the
            continued learning that is required in this industry. My personal
            interests include gaming (video and tabletop), waking up early,
            history, running (poorly), sci-fi movies and literature, dark
            British comedy, learning new things, buttered sourdough toast and
            YouTube videos of apartments and houses in other countries.
          </p>
        </div>
      </div>
      <div class="interest">
        <h2>02. EDUCATION</h2>
        <div class="divider grey"></div>
        <div class="tri-column">
          <h3>BS in Interior Design</h3>
          <p>Colorado State University</p>
          <p>Ft Collins, CO</p>
        </div>
        <div class="tri-column">
          <h3>COLLEGE</h3>
          <p>CU Boulder - Environmental Design</p>
          <p>CSU Ft. Collins - BS Interior Design</p>
        </div>
        <div class="tri-column">
          <h3>SOFTWARE ENG.</h3>
          <p>Turing School of Software & Design</p>
          <p>Udemy</p>
          <p>Code Academy</p>
        </div>
      </div>
      <div class="interest">
        <h2>03. EXPERIENCE</h2>
        <div class="divider grey"></div>
        <div class="tri-column">
          <h3>Bouyea & <br />Associates</h3>
          <div class="job-desc">
            <p class="role">[Job Title]</p>
            <p>Junior Lighting Designer</p>
          </div>
          <div class="wrapper button-1">
            <a
              href="https://bouyea.com/"
              style="text-decoration: none"
              target="_blank"
              >take a peek</a
            >
          </div>
        </div>
        <div class="tri-column">
          <h3>Davis Partnership Architects</h3>
          <div class="job-desc">
            <p class="role">[Job Title]</p>
            <p>Junior Lighting Designer</p>
          </div>
          <div class="wrapper button-1">
            <a
              href="https://davispartnership.com/"
              style="text-decoration: none"
              target="_blank"
              >scope it out</a
            >
          </div>
        </div>
        <div class="tri-column">
          <h3>Visual <br />Interest</h3>
          <div class="job-desc">
            <p class="role">[Job Title]</p>
            <p>Outside Sales</p>
            <p>Submittal Admin. Manager</p>
          </div>
          <div class="wrapper button-1">
            <a
              href="https://www.visualinterest.com/"
              style="text-decoration: none"
              target="_blank"
              >see for yourself</a
            >
          </div>
        </div>
        <!-- </div>
    <div class="interest"> -->
        <div class="divider grey"></div>
        <div class="tri-column">
          <h3>Jerry's <br />Artarama</h3>
          <div class="job-desc">
            <p class="role">[Job Title]</p>
            <p>Shift Manager / Art Supply Sage</p>
            <div class="wrapper button-1">
              <a
                href="https://www.jerrysartaramacolorado.com/"
                style="text-decoration: none"
                target="_blank"
                >happy trees</a
              >
            </div>
          </div>
        </div>
        <div class="tri-column">
          <h3>Unicorn Clothing <br />Co.</h3>
          <div class="job-desc">
            <p class="role">[Job Title]</p>
            <p>Renaissance Dress Peddler</p>
            <div class="wrapper button-1">
              <a
                href="https://unicornclothing.com/"
                style="text-decoration: none"
                target="_blank"
                >wtf?</a
              >
            </div>
          </div>
        </div>
        <div class="tri-column">
          <h3>Mugs <br />Coffee</h3>
          <div class="job-desc">
            <p class="role">[Job Title]</p>
            <p>Barista</p>
            <div class="wrapper button-1">
              <a
                href="https://www.mugsfortcollins.com/"
                style="text-decoration: none"
                target="_blank"
                >mmm coffee</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-image {
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

.bio {
  padding: 20px;
}

.role {
  font-weight: 700;
}

.job-desc {
  height: 75px;
}
</style>
