<template>

    
    <body class="light-theme">


        <main>






            <div id="all" class="main">

                <div class="containerr">

                    <!--
        - BLOG SECTION
      -->

                    <div class="blog">

                        <div v-if="blogPostss.length ==0" id="cenerr">
                             
                            <h1>No Blogs have been posted yet</h1>
                        </div>
                        <h2 v-if="blogPostss.length !=0" class="h2">Latest Blog Post</h2>

                        <div v-if="blogPostss.length !=0" class="blog-card-group">

                            <!-- there were 10 cards initially -->




                            <div v-for="card in blogPostss" :key="card.id">

                                <blog-card :banner-img="card.image" :vis=true
                                    :title="card.title" :content="card.summary" 
                                    :id="card.id"
                                    :date="card.date" :duration="card.duration" :link="card.link"></blog-card>
                            </div>


                        </div>

                        <!-- <button v-if="loadbtnvis" @click="loadMoreCards()" class="btn load-more">Load More</button> -->

                    </div>





                    <!--
        - ASIDE
      -->

                    <!-- <div class="aside">

                        <div id="contatoptag">

                            <div class="topics">

                                <h2 class="h2">Topics</h2>

                                <a @click="handleTopicPress('Workshops')" class="topic-btn">
                                    <div class="icon-box">
                                        <ion-icon name="accessibility-outline"></ion-icon>
                                    </div>

                                    <p>Workshops</p>
                                </a>

                                <a  @click="handleTopicPress('Tech Talks')" class="topic-btn">
                                    <div class="icon-box">
                                        <ion-icon name="accessibility-outline"></ion-icon>
                                    </div>

                                    <p>Tech Talks</p>
                                </a>

                                <a @click="handleTopicPress('Events')" class="topic-btn">
                                    <div class="icon-box">
                                        <ion-icon name="rocket-outline"></ion-icon>
                                    </div>

                                    <p>Events</p>
                                </a>

                            </div>

                            <div class="tags">

                                <h2 class="h2">Tags</h2>

                                <div class="wrapper">

                                    <a class="hashtag" v-for="button in buttons" :key="button"
                                        @click="handleButtonClick(button)">{{ button }}</a>

                                </div>

                            </div>

                        </div>

                    </div> -->

                </div>

            </div>

        </main>



    </body>
</template>

<script>
import BlogCard from './BlogCard.vue';
//import axios from 'axios';

export default {
    components: { BlogCard },
    name: 'BlogPage',
    data() {
        return {
            blogPostss: [],
            buttons: [],
            im: 0,
            loadbtnvis: true,
            deletebtn: false,
            isloaded: false,
            cardamount: 0,
            tempCards: [],
            blogCards: [],
            // blogCards: [
            //     // Existing blog card objects...
            //     {
            //         id: 4,
            //         bannerImg: 'logo.png',
            //         topic: 'Database',
            //         title: 'Building microservices with Dropwizard, MongoDB & Docker',
            //         content: 'This NoSQL database oriented to documents (like JSON) combines some of the features from relational databases bskjfbj hsdvh hi khavdugv dknvauvd jbajvutcd khagdyc bjdfayc bkhgays jGUY DXAVYUHbhbidbc kjagsiydv nkag8sdvh vihg dgrdgtdfdetszdestdgtdsz dgfdxcvgsfgddsx dfdxgv hyvchxvsihva higydvishzb vdhiksvd aszvdhvi',
            //         authorImg: 'author.png',
            //         author: 'Julia Walker',
            //         tag: '#ethical_hacking',
            //         topper: 'sac',
            //         authorLink: '#',
            //         date: 'Jan 17, 2022',
            //         duration: '3',
            //     },
            //     {
            //         id: 5,
            //         bannerImg: this.getim,
            //         topic: 'Web Performance',
            //         title: 'Fast web page loading on a $20 feature phone',
            //         content: 'Feature phones are affordable (under $20-25), low-end devices enabling 100s of millions of users in developing countries...',
            //         authorImg: 'author.png',
            //         author: 'Julia Walker',
            //         tag: '#ethical_hacking',
            //         topper: 'sc',
            //         authorLink: '#',
            //         date: 'Dec 10, 2021',
            //         duration: '2',
            //     },
            //     {
            //         id: 6,
            //         bannerImg: 'blog-3.png',
            //         topic: 'Accessibility',
            //         title: 'Accessibility Tips for Web Developers',
            //         content: "It's awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability we can optimize for...",
            //         authorImg: 'author.png',
            //         author: 'Julia Walker',
            //         topper: 'Workshops',
            //         tag: '#ai/ml',
            //         authorLink: '#',
            //         date: 'Nov 28, 2021',
            //         duration: '4',
            //     },
            //     {
            //         id: 7,
            //         bannerImg: 'blog-4.png',
            //         topic: 'Database',
            //         title: 'Dynamically Securing Databases using Hashicorp Vault',
            //         content: "Nowadays, it's hard to profoundly talk about security in the IT industry, since it has to be considered on so many different levels...",
            //         authorImg: 'author.png',
            //         author: 'Julia Walker',
            //         authorLink: '#',
            //         topper: 'Workshops',
            //         tag: '',
            //         date: 'Nov 20, 2021',
            //         duration: '4',
            //     },
            //     {
            //         id: 8,
            //         bannerImg: 'blog-5.png',
            //         topic: 'Web Performance',
            //         title: 'Adaptive Loading - Improving Web Performance on low-end devices',
            //         content: 'Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware...',
            //         authorImg: 'author.png',
            //         author: 'Julia Walker',
            //         topper: 'Workshops',
            //         tag: '#data_science',
            //         authorLink: '#',
            //         date: 'Nov 10, 2021',
            //         duration: '3',
            //     },
            //     {
            //         id: 9,
            //         bannerImg: 'blog-6.png',
            //         topic: 'Accessibility',
            //         title: "Don't Develop Just for Yourself - A Developer's Checklist to Accessibility",
            //         content: "We, as developers, tend to develop sites unconsciously for people like ourselves. If we don't actively pay attention...",
            //         authorImg: 'author.png',
            //         author: 'Julia Walker',
            //         topper: 'Workshops',
            //         authorLink: '#',
            //         tag: '#web_dev',
            //         date: 'Oct 25, 2021',
            //         duration: '7',
            //     },
            //     {
            //         id: 10,
            //         bannerImg: 'blog-7.png',
            //         topic: 'Database',
            //         title: 'Building a Restful CRUD API with Node JS, Express, and MongoDB',
            //         content: 'Application Programming Interface is the abbreviation for API. An API is a software interface that enables two apps to communicate with one another...',
            //         authorImg: 'author.png',
            //         author: 'Julia Walker',
            //         authorLink: '#',
            //         topper: 'Workshops',
            //         tag: '#data_science',
            //         date: 'Oct 15, 2021',
            //         duration: '5',
            //     },
            //     {
            //         id: 1,
            //         bannerImg: 'blog-8.png',
            //         topic: 'Web Performance',
            //         title: 'Monitoring Performance with the PageSpeed Insights API',
            //         content: 'The PageSpeed Insights API provides free access to performance monitoring for web pages and returns data with suggestions for how to improve...',
            //         authorImg: 'author.png',
            //         author: 'Julia Walker',
            //         tag: '#web_dev',
            //         authorLink: '#',
            //         topper: 'Tech Talks',
            //         date: 'Oct 3, 2021',
            //         duration: '5',
            //     },
            //     {
            //         id: 2,
            //         bannerImg: 'blog-9.png',
            //         topic: 'Accessibility',
            //         title: 'The best web accessibility tools for developers in 2021',
            //         content: 'The quality of the tools you use defines the speed with which you can diagnose and resolve problems...',
            //         authorImg: 'author.png',
            //         author: 'Julia Walker',
            //         authorLink: '#',
            //         tag: '#web_dev',
            //         topper: 'Tech Talks',
            //         date: 'Sep 13, 2021',
            //         duration: this.getTimeAgo(new Date("2023-07-17T14:20:28")),
            //     },
            //     {
            //         id: 3,
            //         bannerImg: 'blog-10.png',
            //         topic: 'Database',
            //         title: 'How to connect a React frontend with a NodeJS/Express backend',
            //         content: 'The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications...',
            //         authorImg: 'author.png',
            //         author: 'Julia Walker',
            //         topper: 'Workshops',
            //         tag: '#data_science',
            //         authorLink: '#',
            //         date: 'Sep 21, 2021',
            //         duration: this.getTimeAgo(new Date("2023-07-13T17:27:00")),
            //     },
            // ],
            topic: '',
            tag: '',
        };
    },

    computed: {
    visibleBlogCards() {
      const currentHash = window.location.hash;

      // If the hash is empty, show all blog cards
      if (!currentHash) {
        return this.blogPostss;
      }

      // If the hash is not empty, filter blog cards based on the hash
      return this.blogPostss.filter((card) => this.isCardVisible(card.tag, card.topic));
    },
  },


    methods: {
        // navToggleFunc() {
        //     const nav = document.querySelector('.mobile-nav');
        //     nav.classList.toggle('active');
        // },
        stripHtml(htmlString) {
    return htmlString.replace(/<[^>]*>?/gm, '');},

        handleButtonClick(buttonText) {
            // Perform your desired action with the buttonText
            console.log("Button clicked:", buttonText);
            this.tag = buttonText;
            window.location.hash = buttonText;
            this.topic = '';
            this.reloadDeck();
            // this.isvis();
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            const options = { month: 'short', day: 'numeric', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            return formattedDate;
        },
        getAuthorImg(str) {
            // return "Mahdiyyah.jpg";
            if (str == "Mahdiyyah Jhetam") {
                return "Mahdiyyah.jpg";
            }
            else if (str == "Nyeleti Kanyana") {
                return "Nyelz.png";
            }
            else if (str == "Patience Mbanga") {
                return "pati.jpg";
            }
            else {
                return "author.png"
            }
        },

        getAuthorLink(str) {
            if (str == "Mahdiyyah Jhetam") {
                return "http://www.linkedin.com/in/mahdiyyah-jhetam";
            }
            else if (str == "Patience Mbanga") {
                return "https://za.linkedin.com/in/patience-mbanga-a67332269";
            }
            else if (str == "Nyeleti Kanyana") {
                return "https://www.linkedin.com/in/ntsakisi-nyeleti-kanyana-463664205";
            } else {
                return "#"
            }
        },
        isCardVisible(tag, topic) {
      const currentHash = window.location.hash;

      // Implement your own logic to determine if the card should be visible based on the hash
      // For example, you could check if the tag or topic matches the hash
      return currentHash == '#all' || currentHash === `${tag}` || currentHash === `#${topic}`;
    },
        getData() {

            // axios.get('/api/v1/auth').then(response =>{console.log(response.data)})
                // .then(response => {
                //     // Handle the response data
                //     // console.log(response.data.status);

                //     var restt = response.data.status;
                //     console.log(restt);
                //     this.im = restt.length;
                //     const mySet = new Set();
                //     mySet.add("#all");

                //     for (let index = 0; index < this.im; index++) {
                //         const res = restt[index];
                //         mySet.add(res.tag);
                //         this.tempCards.push({
                //             id: res._id,
                //             bannerImg: res.imgg,
                //             topic: res.topic,
                //             title: res.post,
                //             content: res.desc,
                //             authorImg: this.getAuthorImg(res.author),
                //             author: res.author,
                //             tag: res.tag,
                //             authorLink: this.getAuthorLink(res.author),
                //             date: this.formatDate(res.date),
                //             duration: this.getTimeAgo(new Date(res.date)),
                //         },)

                //     }

                //     this.buttons = Array.from(mySet);

                    

                //     this.tempCards.reverse();
                //     // this.im = res.imgg;

                //     // console.log(this.im)

                //     if (this.im >= 10) {
                //         this.cardamount = 10;
                //     } else {
                //         this.cardamount = this.im;
                //         this.loadbtnvis = false;
                //     }


                //     for (let j = 0; j < this.cardamount; j++) {
                //         this.blogCards.push(this.tempCards[j]);
                //     }

                //     setTimeout(() => {

                //         if (window.location.hash.slice(1) == "Workshops") {
                //             this.handleTopicPress("Workshops");
                //         }
                //         else if (window.location.hash.slice(1) == "Events") {
                //             this.handleTopicPress("Events");
                //         }
                //         else if (window.location.hash.slice(1) == "Tech%20Talks") {
                //             this.handleTopicPress("Tech Talks");
                //         }
                //         else if (window.location.hash.slice(1) == "huziibee_delete_access_code:43") {
                //             this.deletebtn = true;
                //         } else
                //             for (let index = 0; index < this.buttons.length; index++) {
                //                 if (window.location.hash == this.buttons[index]) {
                //                     this.handleButtonClick(this.buttons[index]);
                //                 }

                //             }
                //     }, 50);


                // })
                // .catch(error => {
                //     // Handle any errors
                //     console.error(error);
                // });


        },
        arrivedd(){
            this.getData();
            return true;
        },
        reloadDeck() {
            this.blogCards = [];
            for (let j = 0; j < this.cardamount; j++) {
                this.blogCards.push(this.tempCards[j]);
            }
        },
        handleTopicPress(texttt) {
            this.topic = texttt;
            window.location.hash = texttt;
            console.log("jhvfb")
            this.tag = '';
            this.reloadDeck();
        },
        // getAuthour
        isvis(tagg, topicc) {
            if (this.tag === '' && this.topic === '') {
                console.log(tagg + '  1 ' + topicc);
                return true;
            }
            if (tagg === this.tag || topicc === this.topic) {
                console.log(tagg + '  2 ' + topicc);
                return true;
            }

            if (this.tag == "#all") {
                // console.log(tagg + '  2 ' + topicc);
                return true;
            }
            // console.log(tagg + '  3 ' + topicc);
            return false;
        },
        loadMoreCards() {
            if (this.blogCards.length == this.im) {
                this.loadbtnvis = false;
                alert("All blogs have been loaded")
            } else if (this.blogCards.length + 10 <= this.im) {
                for (let index = this.blogCards.length; index < this.blogCards.length + 10; index++) {
                    this.blogCards.push(this.tempCards[index])
                }
            } else if (this.blogCards.length <= this.im) {
                for (let index = this.blogCards.length; index < this.im; index++) {
                    this.blogCards.push(this.tempCards[index])
                    this.loadbtnvis = false;
                }
            }

        },
        getTimeAgo(date) {
            //   const now = new Date();
            const diffInSeconds = Math.floor((new Date() - date) / 1000);

            if (diffInSeconds < 60) {
                return diffInSeconds + " secs ago";
            } else if (diffInSeconds < 3600) {
                const diffInMinutes = Math.floor(diffInSeconds / 60);
                return diffInMinutes + " minutes ago";
            } else if (diffInSeconds < 86400) {
                const diffInHours = Math.floor(diffInSeconds / 3600);
                return diffInHours + " hours ago";
            } else if (diffInSeconds < 2592000) {
                const diffInDays = Math.floor(diffInSeconds / 86400);
                return diffInDays + " days ago";
            } else if (diffInSeconds < 31536000) {
                const diffInMonths = Math.floor(diffInSeconds / 2592000);
                return diffInMonths + " months ago";
            } else {
                const diffInYears = Math.floor(diffInSeconds / 31536000);
                return diffInYears + " years ago";
            }
        },
    },
    beforeRouteEnter(to, from, next) {
    // This code will be executed before entering a new route
    // Use next to pass a callback that sets isloaded to true
    console.log("moo5kp")
    document.body.style.overflow = 'hidden';
    next(vm => {
    //   const currentHash = window.location.hash;

// If the hash is empty, append "#home" to it
if (vm.arrivedd()){
    vm.isloaded =true;
    document.body.style.overflow = 'auto';
}


    });
  },
  mounted() {
  const RSS_URL = 'https://medium.com/feed/@nathanrosidi'; // Replace with the actual RSS feed URL
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;
  

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
    //     const limitedItems = data.items.slice(0, 10);
    // const blogPosts = limitedItems.map((item, index) => {
        console.log(data);
        this.blogPostss = data.items.map((item, index) => {
        const imageMatch = item.description.match(/<img.*?src=['"](.*?)['"]/);
        const imageUrl = imageMatch ? imageMatch[1] : ''; 
        console.log(item);
        return {
          id: index + 1,
          title: item.title,
          summary: this.stripHtml(item.description),
          link: item.link,
          image: imageUrl,
        };
      });
    })
    
    .catch(error => console.error('There was an error loading the blog pages', error));
    this.blogPostss.forEach(post => {
  console.log(`ID: ${post.id}`);
  console.log(`Title: ${post.title}`);
  console.log(`Summary: ${post.summary}`);
  console.log(`Link: ${post.link}`);
  console.log(`Image URL: ${post.image}`);
  console.log('-----------------------------------'); // Separator for readability
});
},
};
</script>

<style scoped>
/*-----------------------------------*\ 
  #style.css
\*-----------------------------------*/

/**
 * copyright 2022 @codewithsadee 
 */



/*-----------------------------------*\ 
  #HEADER
\*-----------------------------------*/

header {
    background: #171729;
}



header .flex-wrapper {
    display: none;
}

#cenerr{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
}

#cenerr h1{
    text-align: center;
    color: #f6f7fb;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
}

#loading {
  z-index: 10;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #171729;
  position: fixed;
}

.loading-spinner {
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #5CAFF9;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: white;
  margin-top: 20px;
  opacity: 0;
  animation: fade-in-out 2s ease infinite;
}

@keyframes fade-in-out {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.logo-light,
.logo-dark {
    display: none;
}

.light-theme .logo-light,
.dark-theme .logo-dark {
    display: block;
}

header .btn-group {
    display: flex;
    align-items: center;
    gap: 15px;
}

.theme-btn-mobile,
.nav-menu-btn,
.nav-close-btn {
    background: #f6f7fb00;
    color: #f6f7fb;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 25px;
}

.theme-btn-mobile:hover,
.nav-menu-btn:hover,
.nav-close-btn:hover {

    transform: scale(1.2);
}

.theme-btn-mobile ion-icon {
    display: none;
}

.theme-btn-mobile.light .sun,
.theme-btn-mobile.dark .moon {
    display: block;
}

.mobile-nav {
    position: fixed;
    inset: 0;
    background: var(--background-primary);
    padding: 70px 20px;
    overflow: auto;
    overscroll-behavior: contain;
    transform: translateX(100%);
    visibility: hidden;
    transition: 0.5s cubic-bezier(1, 0, 0.30, 0.70);
    z-index: 10;
}

.mobile-nav.active {
    transform: translateX(0);
    visibility: visible;
}

.nav-close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
}

.mobile-nav .wrapper {
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--action-primary);
}

.mobile-nav .nav-title {
    margin-bottom: 1rem;
}

.mobile-nav .nav-item {
    margin-bottom: 0.5rem;
}

.mobile-nav .nav-link {
    font-size: var(--fs-3);
    color: var(--foreground-secondary);
}

.mobile-nav .nav-link:hover {
    color: var(--accent);
}



/*-----------------------------------*\ 
  #CUSTOM PROPERTY
\*-----------------------------------*/

.light-theme {

    /**
 * light theme colors 
 */

    --background-primary: #172D4E;
    --background-secondary: #171729;

    --action-primary: #5CAFF9;
    --action-secondary: #5CAFF9;

    --foreground-primary: hsl(210, 38%, 95%);
    --foreground-secondary: #f6f7fb;
    --foreground-tertiary: hsl(214, 20%, 69%);

    --accent: #f6f7fb;

}


:root {

    /**
 * color
 */

    --white: hsl(0, 0%, 100%);

    /**
 * typography 
 */

    --fs-base: 0.85rem;
    --fs-1: 1.875rem;
    --fs-2: 1.5rem;
    --fs-3: 1.25rem;
    --fs-4: 0.875rem;
    --fs-5: 0.75rem;

    /**
 * spacing 
 */

    --py: 5rem;

}





/*-----------------------------------*\ 
#RESET
\*-----------------------------------*/

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

img,
button {
    display: block;
}

a,
span {
    display: inline-block;
}

button {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
}

html {
    /* font-family: "Inter", sans-serif; */
    font-size: var(--fs-base);
    /* base font-size (0.85rem = 13.6px) */
    line-height: 1.8;
}

:focus {
    outline-offset: 4px;
}





/*-----------------------------------*\ 
#BASE STYLE
\*-----------------------------------*/

.h1,
.h2,
.h3,
.h4 {
    display: block;
    color: var(--foreground-primary);
}


.h2 {
    font-size: var(--fs-2);
    font-weight: 700;
}

.h3 {
    font-size: var(--fs-3);
    font-weight: 700;
}

.h4 {
    font-size: var(--fs-4);
    font-weight: 700;
}

.text-sm {
    font-size: var(--fs-4);
}

.text-tiny {
    font-size: var(--fs-5);
}





/*-----------------------------------*\ 
#REUSED STYLE
\*-----------------------------------*/

.containerr {
    /* margin-inline: auto;
    margin: auto; */
    width: 100%;

    /* fallback for margin-inline */
    padding: 0 60px;
}

.btn {
    min-width: 10rem;
    border-radius: 100px;
}






/*-----------------------------------*\ 
#HEADER
\*-----------------------------------*/


header {
    background: var(--background-primary);

    padding: 1rem 5rem;
}

header .flex-wrapper {
    display: none;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
}

.logo-light,
.logo-dark {
    display: none;
}

.light-theme {
    display: block;

}






.mobile-nav .wrapper {
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--action-primary);
}






/*-----------------------------------*\ 
#BLOG SECTION
\*-----------------------------------*/

.main {
    background: var(--background-secondary);
    padding: 6rem 0;
}



.blog .h2 {
    line-height: 1.3;
    margin-bottom: 3rem;
    text-align: center;
}

.blog-card-group {
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
    justify-content: center;
    margin-bottom: 3rem;
}

.blog-card {
    background: var(--background-primary);
    padding: 10px;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 0 10px 10px hsla(0, 0%, 0%, 0.05);
    transition: 0.25s ease;
}

.blog-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 10px hsla(0, 0%, 0%, 0.1);
}

.blog-card-banner {
    display: none;
}

.blog-content-wrapper {
    padding: 10px 5px;
}

.blog-topic {
    background: var(--action-secondary);
    color: var(--foreground-secondary);
    font-weight: 600;
    padding: 0.25rem 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
}

.blog-topic:hover {
    background: var(--foreground-secondary);
    color: var(--action-secondary);
}

.blog-card .h3 {
    line-height: 1.4;
    margin-bottom: 1rem;
}

.blog-card .h3:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
}

.blog-text,
.profile-wrapper {
    display: none;
}

.blog .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.blog .h4 {
    color: var(--foreground-secondary);
}

.blog .h4:hover {
    color: #5CAFF9;
}

.blog .text-sm {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--foreground-tertiary);
}

.blog .separator {
    background: var(--foreground-tertiary);
    margin-inline: 3px;
    margin: 0 3px;
    /* fallback for margin-inline */
    width: 3px;
    height: 3px;
    border-radius: 3px;
}

.blog ion-icon {
    --ionicon-stroke-width: 50px;
}

.load-more {
    margin-inline: auto;
    margin: auto;
    /* fallback for margin-inline */
    background: var(--foreground-secondary);
    color: var(--background-secondary);
    padding: 0.6875rem 1.1875rem;
}

.load-more:hover {
    background: #5CAFF9;
    color: #f6f7fb;
}





/*-----------------------------------*\ 
#ASIDE
\*-----------------------------------*/

.aside {
    display: none;
    width: 25rem;
}




.blog {
        width: 100%;
    }






/**
* responsive for larger than 650px screen
*/

@media (min-width: 1545px) {
    .blog-card-group {
        justify-content: space-evenly;
    }
}

@media (min-width: 650px) {

    :root {

        /**
   * typography 
   */

        --fs-1: 2.25rem;

    }




    .aside {
        width: 15rem;
        margin-left: 2rem;
        /* margin-right: 2rem; */
    }

    /**
 * REUSED STYLE 
 */

    .container {
        padding: 0 30px;
    }




    /**
 * BLOG 
 */

    .blog .h2 {
        position: relative;
        text-align: left;
        padding-left: 2rem;
    }

    .blog .h2::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: var(--action-primary);
        width: 5px;
        height: 100%;
        border-radius: 5px;
    }

    .blog .wrapper-flex {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
    }


    .blog .wrapper {
        flex-direction: column;
        align-items: start;
        gap: 0;
    }


}





/**
* responsive for larger than 768px screen
*/

@media (min-width: 770px) {

    /**
 * REUSED STYLE 
 */

    /* .container {
        max-width: 800px;
    } */

    .blog-card-group {
        display: flex;
    }

}





/**
* responsive for larger than 1024px screen
*/

@media (min-width: 1024px) {

    :root {

        /**
   * typography 
   */

        --fs-base: 1rem;
        --fs-1: 3rem;

    }

    /* .blog {
        width: 50rem;
    } */



    /**
 * REUSED STYLE 
 */

    /* .container {
        max-width: 1300px;
    } */



    /**
 * MAIN 
 */




    /**
 * ASIDE 
 */


    .main .container {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
    }


    .aside {
        display: block;
        align-self: stretch;
    }


    .aside .h2 {
        color: var(--foreground-secondary);
        margin-bottom: 3rem;
        text-align: center;
        line-height: 1.3;
    }

    .aside .wrapper {
        background: var(--background-primary);
        border-radius: 10px;
        padding: 40px;
        box-shadow: 0 5px 5px hsla(0, 0%, 0%, 0.05);
    }

    .topics {
        margin-bottom: 3rem;
    }

    .topic-btn {
        display: flex;
        align-items: stretch;
        background: var(--background-primary);
        border-radius: 10px;
        box-shadow: 0 5px 5px hsla(0, 0%, 0%, 0.05);
        overflow: hidden;
    }

    .topic-btn:not(:last-child) {
        margin-bottom: 1rem;
    }

    .topic-btn .icon-box {
        font-size: 22px;
        width: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--action-primary);
        color: var(--foreground-secondary);
    }

    .topic-btn:hover .icon-box {
        background: var(--accent);
        color: var(--white);
    }

    .topic-btn:hover ion-icon {
        color: #5CAFF9;
    }

    .topic-btn:hover {
        transform: scale(1.02);
    }

    .topic-btn ion-icon {
        --ionicon-stroke-width: 40px;
    }

    .topic-btn p {
        padding: 15px;
        color: var(--foreground-secondary);
        font-weight: 700;
    }

    .tags {
        margin-bottom: 3rem;

    }

    #contatoptag {
        position: sticky;
        top: 3rem;
        margin-bottom: 98px;
    }

    .tags .wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 0.2rem;
    }

    .tags .hashtag {
        background: var(--action-primary);
        color: var(--foreground-secondary);
        padding: 5px 10px;
        font-size: var(--fs-5);
        font-weight: 700;
        border-radius: 5px;
    }

    .tags .hashtag:hover {
        background: var(--foreground-secondary);
        color: var(--action-primary);
    }

    .social-link .icon-box {
        width: 45px;
        height: 45px;
        background: var(--action-secondary);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
    }

    .social-link .icon-box:hover {
        background: var(--accent);
        color: var(--white);
    }



    @media (min-width: 1696px) {

        :root {

            /**
* typography 
*/

            --fs-base: 1rem;
            --fs-1: 3rem;

        }

        /* .container {
            max-width: 1600px;
        } */
/* 
        .blog {
            width: 50rem;
        } */

        .aside {
            width: 25rem;
        }



        /**
* REUSED STYLE 
*/

        /* .container {
            max-width: 100%;
        } */
    }




}

#navho {
    font-weight: 2rem;
    display: flex;
    width: 16rem;
    justify-content: space-between;
    align-items: center;
}
</style>


<!-- changedd -->
