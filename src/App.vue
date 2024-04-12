<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <BlogPage></BlogPage> -->

  <section id="navmen" v-if="navvis">
    <div id="nmback">
      <div id="nmcanc">
        <i v-on:click="revealnav" class="fa-solid fa-xmark"></i>
      </div>
      <div id="cent">
        <h2>Navigation Menu</h2>

        <div id="horizs">
          <div class="blogopts">
            <router-link class="navtit" :to="{ name: 'Home' }" >
              <h3>Home</h3>
            </router-link>
            <hr>
            <!-- <router-link :to="{ name: 'Home' }" v-on:click="revealnav(); sethome();">
              <h4 class="topboth4">Activities</h4>
            </router-link>
            <router-link :to="{ name: 'Home' }" v-on:click="revealnav(); sethome();">
              <h4 class="topboth4">Workshops</h4>
            </router-link> -->

            <router-link :to="{ name: 'about-us' }" >
              <h4 class="topboth4">About Us</h4>
            </router-link>

            <router-link :to="{ name: 'faqs' }" >
              <h4 class="topboth4">FAQs</h4>
            </router-link>
            <hr />
            <!-- <p style="margin: 1.5rem 0;">blog page coming soon!</p> -->
          </div>

          <!-- <div class="blogopts">
            <router-link :to="{ name: 'blogs' }" v-on:click="
    revealnav();
  setaway();
  " class="navtit">
              <h3>Blog</h3>
            </router-link>
            <hr>
            <router-link v-on:click="revealnav(); setaway();" :to="{ name: 'blogs' }">
              <h4 class="topboth4">Events</h4>
            </router-link>
            <router-link v-on:click="revealnav(); setaway();" :to="{ name: 'blogs' }">
              <h4 class="topboth4">Workshops</h4>
            </router-link>
            <router-link v-on:click="revealnav(); setaway();" :to="{ name: 'blogs' }">
              <h4 class="topboth4">Tech Talks</h4>
            </router-link>
            <hr />
          </div> -->
        </div>
        <p >blog page coming soon :)</p>
        <!-- <hr /> -->
      </div>
    </div>
  </section>

  <header id="navicon">
    <a v-on:click="revealnav"> <ion-icon name="menu-outline"></ion-icon></a>
  </header>

  <router-view></router-view>

  <div id="bllack">
    <section id="footer" class="sectionnn">
      <div class="footcont">
        <div class="he">
          <h1>Connect with us!</h1>
        </div>

        <div id="subhe">
          <h4>
            Drop by any of our social media outlets to learn more about us, keep
            up-to-date with our upcoming events, or to chat with our members!
          </h4>
        </div>

        <div class="social">
          <a class="socials" href="https://www.facebook.com/witsdevsoc/"><img src="./assets/facebook.png" alt="" /></a>
          <a class="socials" href="https://www.instagram.com/witsdevsoc/?utm_medium=copy_link"><img
              src="./assets/instagram.png" alt="" /></a>
          <a class="socials" href="https://www.linkedin.com/company/wits-developer-society"><img
              src="./assets/linkedin.png" alt="" /></a>
          <a class="socials" href="https://discord.gg/QjphB5N6NC">
            <!-- <div>
                    <div><img src="./assets/discord.png" alt=""></div>
                  </div> -->
            <img src="./assets/meep.png" alt="" />
          </a>
        </div>

        <div class="he">
          <h1>Join our society</h1>
        </div>

        <div id="subheaa">
          <h5>
            Get involved in upcoming events and show us what you are made of!
          </h5>
        </div>

        <a id="reg" href="https://forms.gle/s8GqEzWKSHmucDZw6">
          <h5 id="regh4">Register Now!</h5>
        </a>
      </div>
    </section>

    <section :style="{ background: finalhome }" id="final">
      <div>
        <h4 id="fin1">Have questions? Email us at <a id="emaill"
            :href="'mailto:witsdevsoc@gmail.com?cc=' + encodeURIComponent('mhbangie@gmail.com') + '&subject=' + encodeURIComponent('Enquiry') + '&body=' + encodeURIComponent('Hi there,')">witsdevsoc@gmail.com</a>
        </h4>
      </div>
      <a id="backtatop" v-on:click="goToTopOfPage()">
        <i class="fa fa-arrow-up" aria-hidden="true"></i></a>
    </section>
  </div>

  <!-- <BlogPost></BlogPost> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BlogPage from './components/BlogPage.vue';
// import BlogPost from './components/BlogPost.vue';
// import aboutus from './components/aboutus.vue';

export default {
  name: "App",
  data() {
    return {
      navvis: false,
      finalhome: "#252542",
    };
  },
  mounted() {
    // });

    const sections = document.querySelectorAll(".sectionnn");
    const animateSections = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          section.classList.add("animate");
        } else {
          section.classList.remove("animate");
        }
      });
    };

    // Initial check for visible sections on page load
    animateSections();

    // Throttle the scroll event to improve performance
    let isScrolling = false;
    window.addEventListener("scroll", () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          animateSections();
          isScrolling = false;
        });
        isScrolling = true;
      }
    });
  },
  methods: {
    sethome() {
      this.finalhome = "#252542";
    },
    setaway() {
      this.finalhome = "#171729";
    },
    goToTopOfPage() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Use "auto" for instant scroll, "smooth" for smooth scroll
      });
    },
    revealnav() {
      this.navvis = !this.navvis;

      // if (this.navvis){

      // }
      // alert("done")

      if (!this.navvis) {
        document.body.style.overflow = "auto";
        this.$nextTick(() => {
          if (window.location.hash) {
            setTimeout(() => {
              const element = document.getElementById(
                window.location.hash.slice(1)
              );
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 10); // Delay of 1000 milliseconds (1 second)
          } else {
            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        });
      } else {
        document.body.style.overflow = "hidden";
      }
    },
  },
  // components: {
  //   // HelloWorld,
  //   // BlogPage,
  //   // BlogPost

  // }
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif, Avenir, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#backtatop:hover {
  cursor: pointer;
  transform: translateY(-0.1rem);
}

.sectionnn {
  opacity: 0;
  transform: translateY(5rem);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

#bllack {
  background: #171729;
}

.sectionnn.animate {
  opacity: 1;
  transform: translateY(0);
}

#nmcanc i {
  transform: scale(1.4);
  color: white;
  cursor: pointer;
}

#nmcanc i:hover {
  transform: scale(1.7);
}

.navtit h3 {
  color: #5caff9;
}

.topboth4 {
  font-size: 1.4rem;
}

.blogopts {
  width: 100%;
  padding: 2rem;
  margin-top: 2.5rem;
  height: fit-content;
  background: #252542;
  border-radius: 2rem;
}

#horizs {
  width: 100%;
  height: 100%;
  padding: 0rem 3rem;
}

#cent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
  text-decoration: none;
  text-align: center;
}

#cent a {
  color: #fff;
}

#navmen {
  z-index: 10;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: rgba(23, 23, 41, 0.5);
  backdrop-filter: blur(0.2rem);
  -webkit-backdrop-filter: blur(0.2rem);
  position: fixed;
  animation: blurAnimation 1.4s forwards;
}

@keyframes blurAnimation {
  from {
    backdrop-filter: blur(0);
    -webkit-backdrop-filter: blur(0);
  }

  to {
    backdrop-filter: blur(0.2rem);
    -webkit-backdrop-filter: blur(0.2rem);
  }
}

#nmback {
  height: 100%;
  display: flex;
  overflow: auto;
  justify-content: start;
  flex-direction: column;
  align-items: end;
  width: 35rem;
  transform: translateX(0rem);
  padding-bottom: 1rem;
  border-radius: 1.66667rem;
  background: #171729;
  animation: translateinfromright 0.4s linear;
}

@keyframes translateinfromright {
  from {
    transform: translateX(35rem);
  }

  to {
    transform: translateX(0rem);
  }
}

#nmcanc {
  display: flex;
  padding-right: 3rem;
  padding-top: 2.3rem;
  padding-bottom: 1rem;
  justify-content: end;
}

#navicon {
  width: 100%;
  padding-right: 3rem;
  padding-top: 3rem;
  position: absolute;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: start;
}

#navicon a {
  height: 2.2rem;
  width: 2.2rem;
}

#navicon a ion-icon {
  width: 100%;
  color: #fff;
  height: 100%;
}

#navicon a ion-icon:hover {
  color: #5caff9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  display: none;
}

html {
  scroll-behavior: smooth;
}

#footer {
  width: 100%;
  height: fit-content;
  /* padding-right: 18.33rem; */
  background: #171729;
  display: flex;
  justify-content: center;
  padding: 4rem 0rem;
  align-items: center;
}

.footcont {
  width: 50%;
  height: fit-content;
  margin-right: 27.44rem;
  margin-left: 18.33rem;
  /* background-color: #5CAFF9; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.he {
  display: flex;
  width: 20.16667rem;
  height: 2.88889rem;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1.33rem;
  justify-content: start;
  flex-shrink: 0;
}

.he h1 {
  color: #5caff9;
  font-size: 2rem;
  font-weight: 700;
}

#subhe {
  display: flex;
  width: 99%;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: 2.11rem;
  font-size: 1.11111rem;
  font-style: normal;
  font-weight: 700;
  text-align: start;
}

#subhe h4 {
  font-weight: 600;
  color: #fff;
}

.social {
  display: flex;
  flex-direction: row;
  margin-bottom: 2.11rem;
}

.socials div {
  width: 2.66667rem;
  height: 2.66667rem;
  border-radius: 0.27778rem;
  background: #fff;
}

.socials div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.socials div div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.socials div div img {
  width: 1.5rem;
  margin-top: 0rem;
  height: 1.5rem;
}

.socials div div {
  width: 2.22222rem;
  height: 2.22222rem;
  background: #172d4e;
  border-radius: 0.27778rem;
}

#subheaa {
  display: flex;
  width: 99%;
  /* background: red; */
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.3rem;
  flex-shrink: 0;
}

#subheaa h5 {
  color: #fff;
  font-size: 1.11111rem;
  font-weight: 600;
  text-align: start;
}

.socials {
  width: 4.77778rem;
  height: 4.77778rem;
  background-color: #172d4e;
  border-radius: 1.11rem;
  display: flex;
  margin-right: 1.36rem;
  justify-content: center;
  align-items: center;
}

.socials img {
  width: 2.66667rem;
  height: 2.66667rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

#reg:hover {
  transform: scale(1.02);
  cursor: pointer;
}

#fin1 {
  /* letter-spacing: 0.124rem; */
  font-size: 1.2rem;
  font-weight: 600;
}

#fin2 {
  /* letter-spacing: 0.124rem; */
  font-weight: 600;
}

#fin2:hover {
  text-decoration: underline;
  cursor: pointer;
  text-underline-offset: 0.125rem;
}

#backtatop i {
  color: #fff;
}

#final {
  height: 5.78rem;
  display: flex;
  color: #fff;
  padding: 0rem 2.89rem;
  flex-direction: row;
  justify-content: end;
  align-items: center;
}

#final div {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}

#reg {
  display: flex;
  width: 14.83333rem;
  height: 3.72222rem;
  border-radius: 1.11111rem;
  text-decoration: none;
  color: #fff;
  background: #5caff9;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

#regh4 {
  margin-top: 0.5rem;
}

.custom-hr {
  border: none;
  margin-bottom: 2rem;
  height: 5px;
  background-color: white;
}

.socials:hover {
  transform: translateY(-0.2rem);
  cursor: pointer;
}

@media (min-width: 1600px) {
  #subhe {
    width: 80%;
  }
}

@media (max-width: 1215px) {
  #subhe h4 {
    font-size: 1.02rem;
  }

  #fin1,
  #fin2 {
    font-size: 0.9rem;
  }

  #subheaa h5 {
    font-size: 0.9rem;
  }
}

@media (max-width: 788px) {
  .footcont {
    width: 90%;
    margin-right: 2rem;
    /* background-color: #5CAFF9; */
    margin-left: 2rem;
  }

  #subheaa h5 {
    font-size: 0.8rem;
    /* width: 100%; */
  }

  .socials div {
    width: 1.7rem;
    height: 1.7rem;
  }

  .socials div div img {
    width: 1.2rem;
    height: 1.2rem;
  }

  .socials div div {
    width: 1.6rem;
    height: 1.6rem;
  }

  .socials {
    width: 3.5rem;
    height: 3.5rem;

    margin-right: 1.36rem;
  }

  .socials img {
    width: 2rem;
    height: 2rem;
    margin-top: 0.15rem;
    flex-shrink: 0;
  }

  #reg {
    width: 13rem;
    height: 3.5rem;
  }

  #fin1,
  #fin2 {
    font-size: 0.8rem;
  }

  #regh4 {
    font-size: 1rem;
  }

  #subhe h4 {
    font-size: 0.8rem;
  }

  .he h1 {
    font-size: 1.7rem;
  }
}

@media (max-width: 520px) {
  #footer {
    padding: 2.5rem 0rem;
    /* margin-top: 6rem; */
  }

  #subheaa h5 {
    font-size: 0.75rem;
  }

  #subhe h4 {
    font-size: 0.75rem;
  }

  #final {
    height: 5rem;
    padding: 0rem 1.5rem;
  }

  .social {
    margin-bottom: 1rem;
  }

  .socials div {
    width: 1.2rem;
    height: 1.2rem;
  }

  .socials div div img {
    width: 0.9rem;
    height: 0.9rem;
  }

  .socials div div {
    width: 0.8rem;
    height: 0.8rem;
  }

  .socials {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.8rem;
    margin-right: 1rem;
  }

  .socials img {
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.05rem;
  }

  #reg {
    width: 10rem;
    height: 3rem;
  }

  #fin1,
  #fin2 {
    font-size: 0.5rem;
  }

  #regh4 {
    font-size: 0.8rem;
  }

  #subhe {
    margin-bottom: 1rem;
  }

  .he {
    margin-bottom: 0rem;
  }

  .he h1 {
    font-size: 1.4rem;
  }
}

@media (max-width: 650px) {
  #navicon {
    width: 100%;
    padding-right: 1.5rem;
    padding-top: 1.5rem;
  }
}

#emaill {
  color: #5caff9;
}
</style>
