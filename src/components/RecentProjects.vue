<template>
  <div class="proj-container">
    <h2>RECENT PROJECTS</h2>
    <div class="divider grey"></div>
    <div class="proj-grouping">
      <div class="proj-card">
        <h2>Viewing Party Lite</h2>
        <div class="proj-deets">
          <div class="proj-title">[Tools]</div>
          <p>Ruby | Rails | Heroku* | Postgres | Postman | MoviesDB</p>
          <div class="proj-title">[Concepts]</div>
          <p>OOP | MVC | CRUD | REST API</p>
          <div class="proj-title">[SUMMARY]</div>
          <p>
            Initial functionality of an App that uses a REST API to populate a
            movie database. Once a user is created they can search the movie
            database and select a movie for their viewing party.
          </p>
          <div class="proj-title">[NOTES]</div>
          <p>
            *Please bare with Heroku hosting - it is a free service, so the
            initial loading of the app may take a painful 20-30 seconds
          </p>
        </div>
        <a
          style="text-decoration: none"
          href="https://turing-viewing-party-lite.herokuapp.com/"
          target="-blank"
        >
          <div class="proj-btn">deployed</div>
        </a>
        <a
          style="text-decoration: none"
          href="https://github.com/lisataylor5472/viewing_party_lite"
          target="-blank"
        >
          <div class="proj-btn">code</div>
        </a>
      </div>
      <div class="proj-card">
        <h2>WEB PORTFOLIO</h2>
        <div class="proj-deets">
          <div class="proj-title">[Tools]</div>
          <p>HTML | CSS | JS | Vue.js | Netlify</p>
          <br />
          <div class="proj-title">[Concepts]</div>
          <p>OOP | MVC | Front End Design</p>
          <div class="proj-title">[SUMMARY]</div>
          <p>
            My first stab at front end design and the creation of a Vue.js app.
            This site will be an ongoing project. You are currently viewing the
            deployed application.
          </p>
        </div>
        <a
          style="text-decoration: none"
          href="https://github.com/lisataylor5472/lt-portfolio"
          target="-blank"
        >
          <div class="proj-btn">code</div>
        </a>
      </div>

      <div class="proj-card">
        <h2>Little Online Shop</h2>
        <div class="proj-deets">
          <div class="proj-title">[Tools]</div>
          <p>Ruby | Rails | Heroku* | Postgres</p>
          <br />
          <div class="proj-title">[Concepts]</div>
          <p>OOP | MVC | CRUD</p>
          <div class="proj-title">[SUMMARY]</div>
          <p>
            Group Project that focuses on CRUD and ORM within a Rails framework.
            Main focus of project was on MVC architecture, and less weight on
            visual styling.
          </p>
          <div class="proj-title">[NOTES]</div>
          <p>
            *Please bare with Heroku hosting - it is a free service, so the
            initial loading of the app may take a painful 20-30 seconds
          </p>
        </div>
        <!-- <a
          style="text-decoration: none"
          href="https://glacial-retreat-77890.herokuapp.com/"
          target="-blank"
        >
          <div class="proj-btn">deployed</div>
        </a> -->
        <a
          style="text-decoration: none"
          href="https://github.com/lisataylor5472/little_esty_shop_bulk_discounts"
          target="-blank"
        >
          <div class="proj-btn">code</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentProjects",
};
</script>

<style scoped>
.proj-container {
  background-color: rgb(211, 211, 211);
  padding: 5vw;
}

.proj-grouping {
  display: flex;
  justify-content: center;
}

.proj-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3% 2%;
  width: 26%;
  vertical-align: text-top;
  border: 1px solid black;
  background-color: white;
  margin: 5px;
}

.proj-deets {
  height: 100%;
}

.proj-btn {
  color: #333;
  width: 100px;
  padding: 3px;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px 1px 2px;
  border-color: #47474f;
  border-radius: 15px;
}

.proj-btn:hover {
  border-color: #7cdae2;
}

.proj-title {
  text-align: left;
  margin: 0px 0px 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  line-height: 20px;
  font-weight: 400;
  text-transform: uppercase;
  font-weight: 700;
  padding: 5px;
}

@media screen and (max-width: 999px) {
  .proj-grouping {
    flex-direction: column;
    align-items: center;
  }
  .proj-card {
    width: 80%;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 479px) {
  .proj-card {
    width: 100%;
    left: auto;
    right: auto;
    margin-bottom: 20px;
  }
}
</style>
