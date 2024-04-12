<template>
    <body>
        <section id="home">
      <div class="maxsize">

        <!-- <header id="navicon"><a v-on:click="revealnav"> <ion-icon name="menu-outline"></ion-icon></a></header> -->

        <div id="title">
          <img id="logo" src="../assets/logo.png" alt="">

          <h1 id="titletext">Witwatersrand Developer Society</h1>
          <img id="kudu" src="../assets/Clipped_image_20230708_161252.png" alt="">
        </div>
        <!-- <img id="kudu" src="../assets/Screenshot_20230704_190121_Canva.png" alt=""> -->




      </div>

    </section>
      

        <section id="meet-team">
            <div class="comitee-heading sectionnn">
                <h2 class="head1">Meet The Comittee</h2>
                <div style="margin-top: 2rem" class="horio">
                    <!-- <h6 @click="year='2024'">2024</h6> -->
                    <h6 @click="populateprofiles('2024')">2024</h6>
                    <h6 @click="populateprofiles('2023')">2023</h6>
                    <h6 @click="populateprofiles('2022')">2022</h6>

                </div>
            </div>

            <div class="main sectionnn">
                <div v-for="profile in profiles" :key="profile.id" class="acont ">
                    <div class="profile-card" @mouseenter="apears = true" @mouseleave="apears = false">
                        <div class="img ">
                            <img class="innerimg" :src="profile.image">
                        </div>
                        <div v-if="apears" class="apears">
                            <h6 id="namey">{{ profile.name }}</h6>
                            <p id="teamy">{{ profile.team }}</p>
                            <a :href="profile.linkedin" id="linky"
                                style="height: 0.85rem; width: 0.85rem; margin-top: 0.5rem;">
                                <img style="height: 0.85rem; width: 0.85rem;" src="../assets/members/linkedin.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div v-for="Partners in partners" :key="Partners.id" class="partcontainer sectionnn">
                <img :src="Partners.image" alt="">
                <a class="models" :href="Partners.link">
                    <h1>{{ Partners.name }}</h1>
                    <div class="spa">
                        <div class="viewsite">
                            <h4>View site</h4>
                            <div>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </div>
                </a>
            </div>    






          </section>

        <div>
           <!-- <partnersSection /> -->
        </div>



        <!-- <div class="swiper mySwiper" id="swip">
    <div class="swiper-wrapper sectionnn"> -->
      <!-- Your swiper slides here -->
    <!-- </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div> -->



    </body>
</template>

<style scoped>

#titletext {
  color: #FFF;
  text-align: center;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

#title {
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  flex-shrink: 0;
}
#swip{
    /* height: 13rem; */
    padding-top: 2rem;
    padding-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

#kudu {
  width: 37rem;
  height: 13rem;
  margin-bottom: 12rem;
  flex-shrink: 0;
}

#logo {
  width: 8.27778rem;
  height: 7.77778rem;
  margin-top: 4.6rem;
  margin-bottom: 5.72rem;
}


.maxsize {
  background-image: url(../assets/Adobe_Express_20230707_2130320_1.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}#home {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

}
.caption {
    display: none;
    justify-content: center;
    align-items: center;
}

.horio {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    width: 100%;
}

.horio h6:hover {
    cursor: pointer;
    text-decoration: underline;
}

.apears {
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    align-items: center;
    height: 100%;
    position: absolute;
    z-index: 5;
    text-align: center;
    font-size: 0.6rem;
}


.acont {
    height: 15rem;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

#linky:hover {
    transform: translateY(-0.1rem);
}

* {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #252542;
}

.heading {
    padding-top: 8rem;
    color: #5CAFF9;
}

.heading h1,
.heading p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
}

.heading h1 {
    /* margin-top: 0.5rem; */
    color: #5CAFF9;
}

.paragraphs {
    display: flexbox;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-left: 6rem;
    padding-right: 6rem;
    padding-bottom: 2rem;
    text-align: center;
}

.paragraphs p {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
}

h6 {
    color: white;
}

#meet-team {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #252542;
    margin-top: 3rem;
    padding-top: 3.56rem;
  height: fit-content;
  flex-shrink: 0;
  border-top-left-radius: 3.33333rem;
  border-top-right-radius: 3.33333rem;
}

@media (max-width: 1215px) {
    #kudu {
    width: 30rem;
    height: 10rem;
  }
}

@media (max-width: 788px) {
    #kudu {
    width: 23rem;
    height: 7rem;
  }

}
/* #parthead {
  display: flex;
  width: 100%;
  height: 4.66667rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  
} */

.partcontainer {
  width: 19.11111rem;
  height: 12rem;
  border-radius: 1.11111rem;
  background: white;
  padding: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
}




.models {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #FFF;
  text-decoration: none;
  bottom: -100%;
  display: flex;
  /* visibility: hidden; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.11111rem;
  backdrop-filter: blur(0.2rem);
  -webkit-backdrop-filter: blur(0.2rem);
  background: linear-gradient(180deg, #17172900, #17172952, #5CAFF9);
  transition: bottom 0.4s;
}


.partcontainer img {
  width: 13.66667rem;
  height: 7.05556rem;
  flex-shrink: 0;
  /* mix-blend-mode: color-burn; */
  /* filter: invert(1); */
  object-fit: fill;
  border-radius: 1.11111rem;
  width: 100%;
  height: 100%;
}

/* 
#parthead h1 {
  color: #5CAFF9;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
} */


.partcontainer:hover .models {
  bottom: 0;
}

.partcontainer div span {
  display: flex;
  flex-direction: row;
  /* height: fit-content; */
}



.partcontainer div h4 {
  margin-right: 0.4rem;
  font-weight: 600;
  font-size: 0.8rem;
}

#meet-team .main {
    display: grid;
    grid-template-columns: repeat(5, 9rem);
    grid-gap: 4rem;  padding-top: 3.56rem;
  height: fit-content;
  flex-shrink: 0;
  border-top-left-radius: 3.33333rem;
  border-top-right-radius: 3.33333rem;
    justify-content: center;
    align-items: start;
}

.comitee-heading {
    color: #5CAFF9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main,
.main2,
.main3,
.main4 {
    width: 100%;
    margin-top: 5rem;
    height: fit-content;
    /* margin: 4rem; */
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: #252542;
}

.main4 {
    display: grid;
    grid-template-columns: repeat(3, 9rem);
    grid-gap: 8rem;
    justify-content: center;
}

.profile-card {
    /* position: relative; */
    width: auto;
    height: auto;
    background: #252542;
    padding: 1.87rem;
    border-radius: 50%;
    transition: 0.6s;
    justify-content: center;
    align-items: center;
}

.profile-card:hover {
    border-radius: 0.625rem;
    height: 16.25rem;
    background: #252542;
}

.img .innerimg {
    border-radius: 50%;
    /* position: absolute; */
    justify-content: center;
    align-items: center;
    z-index: 2;
    transition: .6s;
    transform: .6s;
    box-shadow: 0 0 0.2rem rgba(65, 65, 65, 0.113);
    width: 100%;
    border-radius: 50%;
    transition: 0.6s;
}

.img {
    width: 6rem;
    height: 6rem;
}

.profile-card {
    position: relative;
    /* width: 100%; */
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: .6s;
}

.profile-card:hover .innerimg {
    transform: translateY(-3.75rem);
}

.profile-card:hover .apears {
    opacity: 1;
    transform: translateY(2.75rem);
}

.profile-card:hover .innerimg {
    border-radius: 0.625rem;
}

.caption {
    text-align: center;
    color: #5CAFF9;
    font-size: 0.8rem;
}

.caption h3 {
    color: #5CAFF9;
}

.caption p {
    font-weight: bold;
    color: #f6f7fb;
}

.caption .socials a {
    color: black;
    margin-right: 0.5rem;
    font-size: 1.125rem;
    transition: .6s;
    width: 0.2rem;
    height: 0.2rem;
    text-decoration: none;
}

.socials a:hover {
    color: #252542;
}

.socials {
    width: 100%;
    height: fit-content;
}

.caption .socials a {
    color: #FFFFFF;
    height: 100%;
    width: 100%;
}

.linked {
    color: #f6f7fb;
    font-size: x-small;

}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 100%;
    padding: 0.5rem;
    border-radius: 1.11111rem;
    background: #252542;
    box-shadow: 0 0 0.2rem rgba(65, 65, 65, 0.113);
    transition: 0.6s;
}

.linked:hover {
    transform: translateY(-0.1rem);
}



/* .sectionnn {
    opacity: 0;
    transform: translateY(5rem);
    transition: opacity 0.5s ease, transform 0.5s ease;
} */
.head1 {
  color: #5CAFF9;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
/* .sectionnn.animate {
    opacity: 1;
    transform: translateY(0);
} */


#namey,
#linky,
#teamy {
    color: #FFFFFF;
    /* display: block; */
}

#namey {
    font-size: 0.8rem;
}

@media (max-width: 1075px) {



    #meet-team .main {
        /* display: grid; */
        grid-template-columns: repeat(4, 8rem);
    }



}

@media (max-width: 870px) {
    #meet-team .main {
        /* display: grid; */
        grid-template-columns: repeat(3, 8rem);
    }
}


@media (max-width: 704px) {

    .heading h1, .comitee-heading h2 {
        font-size: 1.8rem;
    }

    .paragraphs {
        font-size: 0.9rem;
        padding-left: 4rem;
        padding-right: 4rem;
    }

    #meet-team .main {
        /* display: grid; */
        grid-template-columns: repeat(2, 8rem);
    }
}


@media (max-width: 580px) {

    .heading h1, .comitee-heading h2 {
        font-size: 1.8rem;
    }

    .paragraphs {
        font-size: 0.7rem;
    }


}

@media (max-width: 350px) {
    #meet-team .main {
        
        grid-template-columns: repeat(1, 0rem);
        grid-gap: 0rem;
    } 
}


</style>


<script>

import Swiper from 'swiper';
// import partnersSection from './partners.vue';
export default {
    name: 'about-us',
    data() {
        return {
            apears: false,

            y2022: [
                {
                    id: 1,
                    name: 'Je-Mé Kruger-Baartjies',
                    team: 'Head of Society',
                    image: require('../assets/members/jeme.jpg'),
                    linkedin: 'http://linkedin.com/in/je-mekruger-baartjes',
                },
                {
                    id: 2,
                    name: 'Ghulame Arbi',
                    team: 'Corporate Partnerships Team',
                    image: require('../assets/members/ghu.jpg'),
                    linkedin: 'http://linkedin.com/in/mujtaba-arbi',
                },
                {
                    id: 3,
                    name: 'Ntokozo Mkhonza',
                    team: 'Social Media Team',
                    image: require('../assets/members/ntoko.png'),
                    linkedin: 'http://linkedin.com/in/ntokozo-mkhonza-a4717018b',
                },
                {
                    id: 4,
                    name: 'Taufeeq Razak',
                    team: 'Developer Team',
                    image: require('../assets/members/tau.jpg'),
                    linkedin: 'http://linkedin.com/in/taufeeq-razak-6202041b3',
                },
                
                {
                    id: 5,
                    name: 'Bhavik Govan',
                    team: 'Corporate Partnerships Team',
                    image: require('../assets/members/bha.jpg'),
                    linkedin: 'https://www.linkedin.com/in/bhavik-govan-321702169',
                },

                {
                    id: 6,
                    name: 'Thapelo Seletisha',
                    team: 'Developer Team',
                    image: require('../assets/members/thap.jpg'),
                    linkedin: 'http://linkedin.com/in/thapelo-seletisha',
                },
                {
                    id: 7,
                    name: 'Kimentha Govender',
                    team: 'Social Media Team',
                    image: require('../assets/members/kim.jpg'),
                    linkedin: 'http://linkedin.com/in/kimentha-govender',
                },
                {
                    id: 8,
                    name: 'Jeremy Crouch',
                    team: 'Writing Team',
                    image: require('../assets/members/jer.jpg'),
                    linkedin: 'http://linkedin.com/in/jeremy-crouch-5571331b5',
                },
                {
                    id: 9,
                    name: 'Nyeleti Kanyana',
                    team: 'Writing Team',
                    image: require('../assets/members/nyel.jpg'),
                    linkedin: 'https://www.linkedin.com/in/ntsakisi-nyeleti-kanyana-463664205',
                },

                {
                    id: 10,
                    name: 'Suraksha Motilal',
                    team: 'Workshop Team',
                    image: require('../assets/members/sura.jpg'),
                    linkedin: 'http://linkedin.com/in/suraksha-motilal-3177a319a',
                },
                {
                    id: 11,
                    name: 'Ziyaad Ballim',
                    team: 'Corporate Partnerships Team',
                    image: require('../assets/members/Ziyaad.png'),
                    linkedin: 'http://linkedin.com/in/ziyaad-ballim-7174481b0',
                },

            ],
            y2023: [
                {
                    id: 1,
                    name: 'Ziyaad Ballim',

                    team: 'Corporate & Event Partnership Team',
                    image: require('../assets/members/Ziyaad.png'),
                    linkedin: 'https://www.linkedin.com/in/ziyaad-ballim-7174481b0/',
                },
                {
                    id: 2,
                    name: 'Thato Senoamadi',

                    team: 'Corporate & Event Partnership Team',
                    image: require('../assets/members/thato.jpg'),
                    linkedin: 'https://www.linkedin.com/in/thato-senoamadi-4422091a6',
                },
                {
                    id: 3,
                    name: 'Kimentha Govender',

                    team: 'Head of Society',
                    image: require('../assets/members/kim.jpg'),
                    linkedin: 'https://www.linkedin.com/in/kimentha-govender',
                },
                {
                    id: 4,
                    name: 'Kudzai Saurombe',

                    team: 'Corporate & Event Partnership Team',
                    image: require('../assets/members/Kudza.png'),
                    linkedin: 'https://www.linkedin.com/in/kudzai-saurombe-2380a3170',
                },
                {
                    id: 5,
                    name: 'Abdel Mfougouon Njupoun',

                    team: 'Corporate & Event Partnership Team',
                    image: require('../assets/members/abdel.jpg'),
                    linkedin: 'https://www.linkedin.com/in/abdel-mfougouon-njupoun',
                },
                {
                    id: 6,
                    name: 'Eram Sarah',

                    team: 'Corporate & Event Partnership Team',
                    image: require('../assets/members/Eram.jpg'),
                    linkedin: 'https://www.linkedin.com/in/eram-sarah',
                },
                {
                    id: 7,
                    name: 'Iviwe Maseti',

                    team: 'Corporate & Event Partnership Team',
                    image: require('../assets/members/Quest.jpg'),
                    linkedin: 'https://www.linkedin.com/in/iviwe-maseti-28b936224',
                },
                {
                    id: 8,
                    name: 'Keren Chetty',

                    team: 'Social Media Team',
                    image: require('../assets/members/Keren.jpeg'),
                    linkedin: 'https://www.linkedin.com/in/keren-chetty-48a14022b',
                },
                {
                    id: 9,
                    name: 'Neo Nkosi',

                    team: 'Photography Team',
                    image: require('../assets/members/Neo.jpg'),
                    linkedin: 'https://www.linkedin.com/in/neo-nkosi-3a570420a',
                },
                {
                    id: 10,
                    name: 'Pretty Mangwadi',

                    team: 'Social Media Team',
                    image: require('../assets/members/Pretty.jpg'),
                    linkedin: 'https://www.linkedin.com/in/pretty-mangwadi-18838522a',
                },
                {
                    id: 11,
                    name: 'Valerie Chinyoka',

                    team: 'Developer Team',
                    image: require('../assets/members/val.jpg'),
                    linkedin: 'https://www.linkedin.com/in/valerie-chinyoka',
                },
                {
                    id: 12,
                    name: 'Zainub Lorgat',

                    team: 'Social Media Team',
                    image: require('../assets/members/zayzay.jpg'),
                    linkedin: 'https://za.linkedin.com/in/zainab-lorgat-861603246',
                },
                {
                    id: 13,
                    name: 'Mahdiyyah Jhetam',

                    team: 'Writing Team',
                    image: require('../assets/members/Mahdiyyah.jpg'),
                    linkedin: 'http://www.linkedin.com/in/mahdiyyah-jhetam',
                },
                {
                    id: 14,
                    name: 'Nyeleti Kanyana',

                    team: 'Writing Team',
                    image: require('../assets/members/Nyelz.png'),
                    linkedin: 'https://www.linkedin.com/in/ntsakisi-nyeleti-kanyana-463664205',
                },
                {
                    id: 15,
                    name: 'Mohammed Huzaifah',

                    team: 'Developer Team',
                    image: require('../assets/members/Mohammed-Huzaifah.jpg'),
                    linkedin: 'https://www.linkedin.com/in/mhbangie',
                },
                {
                    id: 16,
                    name: 'Ntiyiso Mushwana',

                    team: 'Corporate & Event Partnership Team',
                    image: require('../assets/members/Ntiyiso.jpg'),
                    linkedin: 'https://www.linkedin.com/in/ntiyiso-mushwana-623b4b112',
                },
                {
                    id: 17,
                    name: 'Cwenga Gcolotela',

                    team: 'Corporate & Event Partnership Team',
                    image: require('../assets/members/cwe.jpg'),
                    linkedin: 'https://www.linkedin.com/in/cwengazc',
                },
                {
                    id: 18,
                    name: 'Patience Mbanga',

                    team: 'Writing Team',
                    image: require('../assets/members/pati.jpg'),
                    linkedin: 'https://za.linkedin.com/in/patience-mbanga-a67332269',
                },

            ],
            y2024: [
            {
              
              id: 1,
              name: 'Keren Chetty',
              team: 'Head of Society',
              image: require('../assets/members/Keren.jpeg'),
              linkedin: 'https://www.linkedin.com/in/keren-chetty-48a14022b/',
            },
            {
              id: 2,
              name: 'Mohammed Huzaifah',
              team: 'Head of Developers Team',
              image: require('../assets/members/Mohammed-Huzaifah.jpg'),
              linkedin: 'http://www.linkedin.com/in/mhbangie',
            },
            {
              id: 3,
              name: 'Kamogelo Khumalo',
              team: 'Developers Team',
              image: require('../assets/members/Kamo.jpg'),
              linkedin: 'https://www.linkedin.com/in/kamogelokhumalo/',
            },
            {
              id: 4,
              name: 'Tsiri Moloko',
              team: 'Developers Team',
              image: require('../assets/members/Tsiri-Moloko.jpg'),
              linkedin: 'https://www.linkedin.com/in/moloko-tsiri-161881265/',
            },
            
            
            {
              id: 5,
              name: 'Pretty Mangwadi',
              team: 'Social Media Team',
              image: require('../assets/members/Pretty.jpg'),
              linkedin: 'https://www.linkedin.com/in/pretty-mangwadi-18838522a',
            },

            {
              id: 6,
              name: 'Zainub Lorgat',
              team: 'Social Media Team',
              image: require('../assets/members/zayzay.jpg'),
              linkedin: 'https://www.linkedin.com/in/zainablorgat/',
            },
            {
              id: 7,
              name: 'Kayisha Naidoo',
              team: 'Social Media Team',
              image: require('../assets/members/Kayisha Naidoo.jpg'),
              linkedin: 'https://www.linkedin.com/in/kayisha-naidoo-90a821270/',
            },
            {
              id: 8,
              name: 'Lubabalo Dlwathi',
              team: 'Social Media Team',
              image: require('../assets/members/Dlwa_up.png'),
              linkedin: 'https://www.linkedin.com/in/lubabalo-b-dlwathi-336219202/',
            },


            {
              id: 9,
              name: 'Jessica Badiata',
              team: 'Photographer',
              image: require('../assets/members/Jessica_up.png'),
              linkedin: 'http://www.linkedin.com/in/jessica-badiata-165726242',
            },

            {
              id: 10,
              name: 'Ziyaad Ballim',
              team: 'Corporate & Event Partnership Team ',
              image: require('../assets/members/Ziyaad.png'),
              linkedin: 'https://www.linkedin.com/in/ziyaad-ballim-7174481b0',
            },
            {
              id: 11,
              name: 'Kutlwano Ralehlaka',
              team: 'Corporate & Event Partnership Team ',
              image: require('../assets/members/Kutlwano Ralehlaka .jpg'),
              linkedin: 'https://www.linkedin.com/in/kutlwano-ralehlaka',
            },

            {
              id: 12,
              name: 'Ibram Chilufya',
              team: 'Corporate & Event Partnership Team ',
              image: require('../assets/members/Ibram Chilufya.jpg'),
              linkedin: 'https://www.linkedin.com/in/ibramchilufya/',
            },

            {
              id: 13,
              name: 'Mahdiyyah Jhetam',
              team: 'Writing Team',
              image: require('../assets/members/Mahdiyyah.jpg'),
              linkedin: 'http://www.linkedin.com/in/mahdiyyah-jhetam',
            },
           
            {
              id: 14,
              name: 'Emmanuel Azubuike',
              team: 'Writing Team',
              image: require('../assets/members/Emmanuel Azubuike.jpeg'),
              linkedin: 'https://www.linkedin.com/in/emmanuel-obinna-azubuike-b39940274',
            },


            

            
            ],
            profiles: [],
        }
    },


//     components: {
//       partnersSection,
//   },


    methods: {
        getSlidesPerView() {
      if (window.innerWidth <= 788) {
        return 1;
      } else if (window.innerWidth <= 1215) {
        return 2;
      } else {
        return 3;
      }
    },
        populateprofiles(str) {
            if (str == '2023') {
                this.profiles = this.y2023;
            }
            else if (str == '2022') {
                this.profiles = this.y2022;
            }
            else if(str=='2024'){
              this.profiles=this.y2024;
            }
        }
    },
    mounted() {
        this.profiles = this.y2024;


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

        let mySwiper = new Swiper(".mySwiper", {
      slidesPerView: this.getSlidesPerView(),
      // speed: "500",
      loop: !false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      mousewheel: {
        forceToAxis: !true,
      },
      // spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    });

    window.addEventListener('resize', () => {
      mySwiper.destroy();
      mySwiper = new Swiper(".mySwiper", {
        slidesPerView: this.getSlidesPerView(),
        // speed: "500",
        loop: !false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        mousewheel: {
          forceToAxis: !true,
        },
        // spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      });
    });


    },
}



</script>
