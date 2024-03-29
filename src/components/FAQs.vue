<template>
    <body>
        <section id="faq-Sect">


<div class="wrapper sectionnn">
  <div class="topper">
    <p id="blueuni" class="header">
      Witwatersrand Developer Society
    </p>
    <h1 id="h1headting">
      Frequently Asked Questions
    </h1>
  </div>

  <div class="expand sectionnn">
    <p @click="expandedd" class="expand-all">{{ expand }}</p>
  </div>

  <div class="faq sectionnn">
    <button class="accordian">
      Can I join even if I’m not a WITS computer science student?
      <img src="../assets/down.png" class="down_arrow" alt="">
    </button>
    <div class=" pannel">
      <p>
        Of course! As long as you are a registered student of WITS you can be a member of the WITS Developer
        Society,
        no matter the faculty.
      </p>
    </div>
  </div>

  <div class="faq sectionnn">
    <button class="accordian">
      Are there any membership fees?
      <img src="../assets/down.png" class="down_arrow" alt="">
    </button>
    <div class=" pannel">
      <p>
        Nope! As long as you are a registered WITS student you can join free of charge!
      </p>
    </div>
  </div>

  <div class="faq sectionnn">
    <button class="accordian">
      How do I join your discord?
      <img src="../assets/down.png" class="down_arrow" alt="">
    </button>
    <div class=" pannel">
      <p>
        Once you’ve filled out the membership registration form you will receive a link to join our discord.
      </p>
    </div>
  </div>

  <div class="faq sectionnn">
    <button class="accordian">
      Do I have to participate in events?
      <img src="../assets/down.png" class="down_arrow" alt="">
    </button>
    <div class=" pannel">
      <p>
        Attendance at all WDS events is optional, but we’d really recommend you come along! We really try our best
        to
        make them as fun and interesting as possible.
      </p>
    </div>
  </div>

  <div class="faq sectionnn">
    <button class="accordian">
      Will you be able to find me an internship position?
      <img src="../assets/down.png" class="down_arrow" alt="">
    </button>
    <div class=" pannel">
      <p>
        As much as the WDS encourages and supports student developer internships, we cannot promise to secure
        positions for members. Instead, regular open positions and internship opportunities will be shared in our
        discord server and mailing list.
      </p>
    </div>
  </div>

  <div class="faq sectionnn">
    <button class="accordian">
      I have an article that I’d like to publish on your blog - who do I get in contact with?
      <img src="../assets/down.png" class="down_arrow" alt="">
    </button>
    <div class=" pannel">
      <p>
        Email your pitch to witsdevsoc@gmail.com and someone from our writing team will approve and edit your piece.
      </p>
    </div>
  </div>

  <div class="faq sectionnn" id="faqlast">
    <button class="accordian">
      My organization would like to partner with your society, how do we go about doing it?
      <img src="../assets/down.png" class="down_arrow" alt="">
    </button>
    <div class=" pannel">
      <p>
        Contact us at witsdevsoc@gmail.com and we will be sure to get back to you and the various sponsorship
        opportunities our society has to offer.
      </p>
    </div>
  </div>

</div>



</section>
    </body>

</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* border-radius: 0.32rem; */
  font-family: 'Poppins', sans-serif;
  background-position: fixed;

}

.sectionnn {
  opacity: 0;
  transform: translateY(5rem);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.sectionnn.animate {
  opacity: 1;
  transform: translateY(0);
}


body {
  background-color: #171729;
  padding: 4rem 0rem;
}

.down_arrow{
    height: 1rem;
}

#blueuni{
    color: #5CAFF9;
}

.topper h1 {
  letter-spacing: 0.2rem;
  color: #FFFFFF;
  padding-top: 0.3rem;
  padding-bottom: 1.5rem;
  text-align: center;
}

.wrapper {
  max-width: 75%;
  margin: auto;
  z-index: 5;
}

.wrapper>p,
.wrapper>h1,
.wrapper>header {
  margin: 1.5rem 0;
  text-align: center;
}

.header {
  color: #FFFFFF;
  text-align: center;
  padding-top: 0.1rem;
  margin-bottom: 0.1rem;
  margin-top: 0.2rem;
  border: none;
  font-family: 'Poppins', sans-serif;
}

.accordian {
  background-color: #171729;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.25rem;
  width: 100%;
  padding: 1.2rem 1.7rem;
  border: none;
  outline: none;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s linear, color 0.3s linear, transform 0.15s linear;
  transition: scale 0.15s;
  text-align: start;
}

.accordian i {
  font-size: 1.2rem;
  color: #5CAFF9;
  transition: transform 0.15s linear;
}

.active,
.accordian:hover {
  transition: 0.15s;
  background-color: #172D4E;
}

.accordian:hover {
  transform: scale(1.01);
}

.pannel {
  opacity: 0;
  padding: 2rem 2rem 2rem 2rem;
  background-color: white;
  overflow: hidden;
  background-color: #171729;
  display: none;
  max-height: 0;
  transition: max-height 0.3s linear, opacity 0.3s linear, background-color 0.3s linear;
  text-align: start;
}

.active,
.pannel {
  max-height: 32rem;
  color: #FFFFFF;
  opacity: 1;
}

.pannel p {
  color: #FFFFFF;
  font-size: 1rem;
  line-height: 1.4;
  border-radius: 0.3rem;
  transition: color 0.3s linear;
  
}

.active,
.pannel p {
  max-height: 32rem;
  opacity: 1;
}



.faq {
  border: 0.1rem solid #252542;
  margin: 1rem 0;
}

#faqlast{
    margin-bottom: 0rem;
}

.back-arrow {
  position: absolute;
  top: 0.75rem;
  left: 2rem;
  font-size: 1.8rem;
  color: #5CAFF9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.1rem;
}

.arrow {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #171729;
  padding: 0.2rem, 0.2rem, 0.2rem, 0.2rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.back-arrow:hover {
  cursor: pointer;
}

.expand-all {
  color: #5CAFF9;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  text-align: right;
  margin-top: 1rem;
}

.expand-all.active {
  background-color: #171729; /* Remove this line to prevent background color change */
}


.expand-all:hover {
  text-decoration: underline;
  text-underline-offset: 0.125rem;
  text-decoration-color: #5CAFF9;
  cursor: pointer;
}

.back-arrow,
.wrapper {
  padding-top: 2rem;
}

.cont-info {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  color: #FFFFFF;

  letter-spacing: 0.3rem;
  font-weight: bold;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
}

.contact-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  

}

.cont-explain {
  color: #FFFFFF;
}

#footie {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #252542;
  width: 100%;
  height: fit-content;
}

.container {
  width: 55rem;
  height: fit-content;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-top: 6rem;
  margin-bottom: 6rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  flex-direction: column;
  text-align: center;
}

.contact-heading h3 {
  color: #5CAFF9;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: normal;
}

.sub-heading {
  display: flex;
  width: 100%;
  height: 3.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 4rem;
  margin-top: 1.1rem;
}


.sub-heading p {
  color: #FFF;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: normal;
}

.input-cont {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex: 1;
  width: 100%;
}

.hor {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
}

.input-cont input,
.input-cont textarea {
  width: 100%;
  height: 3rem;
  padding: 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.4rem;
  color: #171729;
  background-color: #f6f7fb;
  border: #f6f7fb;
  border-radius: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  resize: none;
}

.input-cont h5 {
  color: #5CAFF9;
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.4rem;

}

#spacing-right {
  padding-right: 2rem;
}

#subject {
  height: 4rem;
}

#msg {
  height: 10rem;

}

.center {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.center button {
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0.9rem;
  background-color: #5CAFF9;
  border: #5CAFF9;
  border-radius: 2rem;
}

.center i {
  color: #FFFFFF;
  margin-right: 0.5rem;
}

.center h5 {
  color: #FFFFFF;
}

input:focus,
textarea:focus {
  outline: 2px solid #5CAFF9;
}

#social-media {
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#social-media div {
  display: flex;
  flex-direction: row;
  width: 20rem;
  justify-content: space-between;
  align-items: center;
}

.social-con {
  height: 4rem;
  width: 4rem;
  background-color: #172D4E;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-con i {
  color: #FFFFFF;
}

#back-to-top {
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  border: #5CAFF9;
  transform: scale(0.7);
  text-decoration: none;
  color: #FFFFFF;
}


@media (max-width: 535px) {
  #h1headting{
    font-size: 1.5rem;
  }
}

</style>

<script>
export default {
  name: 'FAQs',
  mounted() {
    this.initializeDropdowns();

    const sections = document.querySelectorAll('.sectionnn');
    const animateSections = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          section.classList.add('animate');
        } else {
          section.classList.remove('animate');
        }
      });
    };

    // Initial check for visible sections on page load
    animateSections();

    // Throttle the scroll event to improve performance
    let isScrolling = false;
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          animateSections();
          isScrolling = false;
        });
        isScrolling = true;
      }
    });
  },
  data(){
    return{
        expand: 'Expand all',
    }
  },
  methods: {
    expandedd(){
        if( this.expand== 'Expand all'){
            this.expand=  'Collapse all';
        }else{
            this.expand=  'Expand all';
        }
    },
    initializeDropdowns() {
  const acc = document.getElementsByClassName("accordian");
  const expand = document.getElementsByClassName("expand-all")[0];
  const pannels = document.getElementsByClassName("pannel");

  expand.addEventListener("click", function () {
    const shouldExpand = !expand.classList.contains("active");

    for (let i = 0; i < acc.length; i++) {
      acc[i].classList.toggle("active", shouldExpand);
      pannels[i].style.display = shouldExpand ? "block" : "none";
    }

    expand.classList.toggle("active", shouldExpand);
  });

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function dropdown() {
      this.classList.toggle("active");
      this.parentElement.classList.toggle("active");
      const pannel = this.nextElementSibling;

      if (pannel.style.display === "block") {
        pannel.style.display = "none";
      } else {
        pannel.style.display = "block";
      }
    });
  }
},

  },
};
</script>
