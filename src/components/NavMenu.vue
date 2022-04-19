<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding"><div class="logo">[LISA TAYLOR]</div></div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'about' }">About</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'portfolio' }"
            >Portfolio</router-link
          >
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thelisataylor/" target="_blank">
            <img
              alt="LinkedIn"
              src="https://img.icons8.com/ios-glyphs/60/000000/linkedin.png"
              class="social-icon"
              target="_blank"
          /></a>
        </li>
        <li>
          <a href="https://github.com/lisataylor5472" target="_blank">
            <img
              alt="GitHub"
              src="https://img.icons8.com/ios-glyphs/60/000000/github.png"
              class="social-icon"
          /></a>
        </li>
      </ul>
      <div class="icon">
        <img
          src="../assets/icons8-menu-32.png"
          @click="toggleMobileView"
          v-show="mobile"
          class="far fa-bars"
          :class="{ 'icon-active': mobileNav }"
        />
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link
              @click="toggleMobileView"
              class="link"
              :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileView"
              class="link"
              :to="{ name: 'about' }"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileView"
              class="link"
              :to="{ name: 'portfolio' }"
              >Portfolio</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileView"
              class="link"
              :to="{ name: 'connect' }"
              >Connect</router-link
            >
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thelisataylor/"
              @click="toggleMobileView"
              target="_blank"
            >
              <img
                alt="LinkedIn"
                src="https://img.icons8.com/ios-glyphs/60/000000/linkedin.png"
                class="social-icon"
            /></a>
          </li>
          <li>
            <a
              href="https://github.com/lisataylor5472"
              @click="toggleMobileView"
              target="_blank"
            >
              <img
                alt="GitHub"
                src="https://img.icons8.com/ios-glyphs/60/000000/github.png"
                class="social-icon"
            /></a>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileView() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-color: rgb(255, 255, 255);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: rgb(33, 33, 33);

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    height: 60px;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 0.9em;
      font-family: "Montserrat", sans-serif;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        // color: rgb(255, 255, 255);
        font-size: 1em;
        border-color: rgb(217, 50, 145);
        border-width: 2px;
      }
    }

    .branding {
      display: flex;
      align-items: center;
      font-size: 1.2em;
      font-weight: 700;

      logo {
        width: 50px;
        transition: 0.5s ease all;
      }
    }
    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: right;
    }

    .social-icon {
      width: 40px;
    }
    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }
    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      height: 100%;
      max-width: 250px;
      background-color: rgb(255, 255, 255);
      top: 0;
      left: 0;
      margin-top: 0;
      box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3);

      li {
        margin-left: 0px;
        text-align: left;
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-300px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}
.scrolled-nav {
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3);

  nav {
    padding: 4px 0;
  }
}
</style>
